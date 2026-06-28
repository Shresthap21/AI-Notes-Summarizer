# AI Notes Summarizer

Transform raw notes, documents, and text into structured insights using AI.

This project takes unstructured input and generates:

✅ Bullet-point summaries  
✅ Important keywords  
✅ Simplified explanations  

Built as a GenAI full-stack application using React, Express, and Groq.

---

## Features

- Upload files (.txt, .pdf, .docx)
- Paste notes directly
- AI-generated summaries
- Keyword extraction
- Simple explanations
- Fast response generation
- Clean modern UI

---

## Tech Stack

### Frontend
- React.js
- Vite
- Axios

### Backend
- Node.js
- Express.js
- Multer

### AI
- Groq API
- LLM API Integration

---

## Project Structure

```plaintext
AI-NOTES-SUMMARIZER
│
├── client
│   ├── src
│   ├── public
│   └── package.json
│
├── server
│   ├── controller.js
│   ├── index.js
│   └── package.json
│
└── README.md
```

---

## Installation

Clone repository:

```bash
git clone https://github.com/Shresthap21/AI-Notes-Summarizer.git
```

Move into project:

```bash
cd AI-Notes-Summarizer
```

---

## Run Frontend

```bash
cd client
npm install
npm run dev
```

Frontend runs on:

```plaintext
http://localhost:5173
```

---

## Run Backend

Open another terminal:

```bash
cd server
npm install
node index.js
```

Backend runs on:

```plaintext
http://localhost:5000
```

---

## Environment Variables

Create:

```plaintext
server/.env
```

Add:

```env
GROQ_API_KEY=your_api_key
```

---

## Usage

### Option 1 — Paste Text
Paste notes, articles, or documentation.

### Option 2 — Upload File
Supported formats:

- TXT
- PDF
- DOCX

Click **Generate** to receive:

- Summary
- Keywords
- Simple Explanation

---

## Example

### Input

```text
Artificial Intelligence helps automate repetitive tasks and improve productivity.
```

### Output

```text
SUMMARY:
• AI automates tasks
• Improves productivity

KEYWORDS:
AI, Automation, Productivity

SIMPLE EXPLANATION:
AI helps computers do work faster and reduce manual effort.
```

---

## Learning Outcomes

This project demonstrates:

- LLM API integration
- Prompt engineering
- File processing
- Full-stack application development
- Converting unstructured text into structured insights
