from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient

# Create Flask app and enable CORS
app = Flask(__name__)
CORS(app)

# MongoDB client setup (named "portfolio")
portfolio = MongoClient(
    'mongodb+srv://fakecatcherai:sX_W9!SUigNS.ww@cluster0.pwyazjb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
)

# Access database and collection
db = portfolio['portfolio']  # Database name: portfolio
contact_collection = db['contact']  # Collection name: contact

# Contact API route
@app.route('/api/contact', methods=['POST'])
def contact():
    data = request.json

    # Simple validation
    if not data.get('name') or not data.get('email') or not data.get('message'):
        return jsonify({"error": "Missing fields"}), 400

    contact_doc = {
        "name": data['name'],
        "email": data['email'],
        "message": data['message'],
    }

    try:
        contact_collection.insert_one(contact_doc)
        return jsonify({"message": "Contact form submitted successfully"}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Run the app
if __name__ == '__main__':
    app.run(debug=True)
