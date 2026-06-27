import { useState } from "react";
import axios from "axios";
import "./App.css";

export default function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);

  const generate = async () => {
    const form = new FormData();

    if (file) {
      form.append("file", file);
    }

    form.append("text", text);

    const res = await axios.post("http://localhost:5000/api/process", form);

    setResult(res.data.result);
  };

  return (
    <div className="page">
      <div className="container">
        <h1>🧠 AI Notes Summarizer</h1>

        <p className="subtitle">
          Transform raw notes into summaries, keywords and easy explanations
        </p>

        <div className="card">
          <div className="upload">
            <p className="hint">
              If a file is uploaded, uploaded file content will be analyzed.
            </p>
            <input
              id="fileInput"
              type="file"
              accept=".txt,.pdf,.docx"
              onChange={(e) => setFile(e.target.files[0])}
            />

            <label htmlFor="fileInput" className="uploadBox">
              <div className="icon">📄</div>

              <div className="uploadText">
                <h3>Upload Notes</h3>

                <p>TXT • PDF • DOCX</p>
              </div>
            </label>

            {file && (
              <div className="fileCard">
                <span>{file.name}</span>

                <button onClick={() => setFile(null)}>✕</button>
              </div>
            )}
          </div>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Paste notes, docs, articles..."
          />

          <div className="bottom">
            <span>{text.length} chars</span>

            <button onClick={generate} disabled={loading}>
              {loading ? "Generating..." : "Generate"}
            </button>
          </div>
        </div>

        {result && (
          <div className="output">
            <h2>Generated Insights</h2>

            <div className="formatted">
              {result
                .replaceAll("**", "")
                .split("\n")
                .map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
