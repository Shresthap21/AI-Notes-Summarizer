import Groq from "groq-sdk";
import { PDFParse } from "pdf-parse";
import mammoth from "mammoth";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

async function extractText(file) {
  if (!file) return "";

  if (file.mimetype === "text/plain") {
    return file.buffer.toString();
  }

  if (file.mimetype === "application/pdf") {
    const parser = new PDFParse({
      data: file.buffer,
    });

    const data = await parser.getText();

    return data.text;
  }

  if (file.originalname.endsWith(".docx")) {
    const data = await mammoth.extractRawText({
      buffer: file.buffer,
    });

    return data.value;
  }

  return "";
}

export const generateInsights = async (req, res) => {
  try {
    let text = req.body.text || "";

    if (req.file) {
      text = await extractText(req.file);
    }

    if (!text) {
      return res.status(400).json({
        error: "No text found",
      });
    }

    const prompt = `
Return plain text only.

Do NOT use markdown.
Do NOT use ** symbols.

Format:

SUMMARY:
- bullet points

KEYWORDS:
- comma separated

SIMPLE EXPLANATION:
- easy language

TEXT:
${text}
`;

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",

      messages: [
        {
          role: "user",

          content: prompt,
        },
      ],
    });

    res.json({
      result: completion.choices[0].message.content,
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      error: err.message,
    });
  }
};
