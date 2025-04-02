from flask import Flask, render_template, request, jsonify
import requests

app = Flask(__name__)

PAIRPROAI_API = "https://shubhendu-ghosh-pairproai.hf.space/generate"

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/generate", methods=["POST"])
def generate():
    try:
        data = request.json
        response = requests.post(PAIRPROAI_API, json=data)
        return jsonify(response.json())
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
