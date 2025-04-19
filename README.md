# PairProAI-Beta 🚀
**Live App:** [PairProAI-Beta on Hugging Face Spaces](https://shubhendu-ghosh-pairproai-beta.hf.space)

**PairProAI-Beta** is a modern, responsive, and user-friendly frontend built with **Flask** that connects seamlessly to the backend API of **[PairProAI](https://shubhendu-ghosh-pairproai.hf.space)** — an AI-powered tool to help developers write, debug, improve, and translate code efficiently using Google’s Gemini model.

This application serves as an interactive frontend interface allowing users to input code, select tasks (like debugging or translation), and receive smart, AI-generated coding solutions and detailed explanations — all in real-time.

---

## 🌟 Features

- 🔁 **Code Translation** – Convert code from one language to another.
- 🧹 **Code Improvements** – Automatically enhance your code’s structure and readability.
- 🧪 **Write Test Cases** – Instantly generate test cases based on your input code.
- 🔧 **Debugging Support** – Paste your error message and get fixed code and reasoning.
- 🚀 **Performance Optimization** – Get suggestions to optimize for efficiency.
- 📉 **Code Simplification** – Transform complex code into simplified versions.
- 🎯 Responsive & intuitive UI using HTML, CSS, and jQuery.
- 📑 Markdown-based formatted explanations using `marked.js`.

---

## 🛠️ Tech Stack

| Layer       | Technology          |
|-------------|---------------------|
| Frontend    | HTML5, CSS3, JavaScript, jQuery |
| Backend     | Flask               |
| API Client  | requests (Python)   |
| Hosting     | Hugging Face Spaces |
| Markdown    | Marked.js CDN       |

---

## 📁 Project Structure

```
PairProAI-Beta/
│
├── app/
│   ├── static/
│   │   ├── css/
│   │   │   └── style.css
│   │   └── js/
│   │       └── script.js
│   └── templates/
│       └── index.html
│
├── requirements.txt
├── Dockerfile
└── main.py
```

---

## 🚀 Getting Started (Local Development)

1. **Clone the Repository**
```bash
git clone https://github.com/your-username/PairProAI-Beta.git
cd PairProAI-Beta
```

2. **Create Virtual Environment (Optional)**
```bash
python -m venv venv
source venv/bin/activate  # On Windows use: venv\Scripts\activate
```

3. **Install Requirements**
```bash
pip install -r requirements.txt
```

4. **Run Locally**
```bash
python main.py
```

The app will be live at: `http://localhost:7860`

---

## 📦 Deployment (Docker)

You can easily containerize this Flask app using Docker:

```bash
docker build -t pairproai-beta .
docker run -p 7860:7860 pairproai-beta
```

---

## 🌐 API Integration

This app connects to the **PairProAI backend API** hosted at:
```
https://shubhendu-ghosh-pairproai.hf.space/generate
```

**Payload Example:**
```json
{
  "code": "print('Hello, World!')",
  "option": "Code Translation",
  "target_language": "Java",
  "error_message": null
}
```

---

## 📸 Screenshots

![UI Screenshot](https://via.placeholder.com/900x500?text=PairProAI+User+Interface) <!-- Optional: You can add real screenshots here -->

---

## 📬 Contact

Built with ❤️ by [Shubhendu Ghosh](https://www.linkedin.com/in/shubhendu-ghosh-ds/)

If you find this useful, feel free to connect or drop a message!

---

## 📄 License

This project is for educational and demo purposes. For commercial use or contributions, please reach out to the author.
