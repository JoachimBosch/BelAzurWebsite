from flask import Flask, request, jsonify
from models import db, User
from flask_cors import CORS
from flask_jwt_extended import JWTManager, create_access_token, unset_jwt_cookies, unset_jwt_cookies, jwt_required, get_jwt_identity, get_jwt, set_access_cookies
from argon2 import PasswordHasher
from config import *
from datetime import datetime, timedelta, timezone

app = Flask(__name__, static_url_path='', static_folder='public')
CORS(app, supports_credentials=True, resources={r"/*": {"origins": "*", "allow_headers": ["Authorization", "Content-Type"]}})
CORS(app, resources={r"/api/*": {"origins": "http://localhost:5173"}})

YOUR_DOMAIN = 'http://localhost:5173'


app.config['SQLALCHEMY_DATABASE_URI'] = f'postgresql://{DB_UserName}:{DB_Password}@belazurcoding-belazurcoding.b.aivencloud.com:15074/defaultdb?sslmode=require'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['JWT_SECRET_KEY'] = JWT_Secret_Key
app.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(hours=1)


db.init_app(app)
ph = PasswordHasher()
jwt = JWTManager(app)

with app.app_context():
    db.create_all()

@app.route("/")
def hello():
    return "<p>Hello World</p>"

# User related

@app.route("/register", methods=['POST'])
def subscribe():
    data = request.get_json()
    user = User.query.filter_by(email=data['email']).first()

    if user:
        return 'Account already exists. Please login instead', 401

    if not data or 'email' not in data or 'password' not in data:
        return 'Bad Request: Email and password are required', 400

    try:
        email = data['email']
        secure_password = ph.hash(data['password'])
        new_user = User()
        new_user.email = email
        new_user.password = secure_password
        db.session.add(new_user)
        db.session.commit()
        return 'Success', 200
    except Exception as e:
        db.session.rollback()
        return f'Internal Server Error: {str(e)}', 500

@app.route("/login", methods=['POST']) 
def login():
    data = request.get_json()
    if not data or 'email' not in data or 'password' not in data:
        return 'Bad Request: Email and password are required', 400

    user = User.query.filter_by(email=data['email']).first()

    if user and ph.verify(user.password, data['password']):
        access_token = create_access_token(identity=user.email)
        return jsonify({"access_token": access_token, "user": user.serialize()}), 200
        
    return jsonify({"message": "Invalid credentials"}), 401

@app.after_request
def refresh_expiring_jwts(response):
    try:
        exp_timestamp = get_jwt()["exp"]
        now = datetime.now(timezone.utc)
        target_timestamp = datetime.timestamp(now + timedelta(minutes=30))
        if target_timestamp > exp_timestamp:
            access_token = create_access_token(identity=get_jwt_identity())
            set_access_cookies(response, access_token)              
        return response
    except (RuntimeError, KeyError):
        return response

@app.route("/logout", methods=['POST'])
def logout():
    response = jsonify({"msg": "logout successful"})
    unset_jwt_cookies(response)
    return response

""" @app.route("/user/<int:user_id>/item_data", methods=['GET'])
def get_user_all_item_data(user_id):
    user = User.query.get(user_id)
    if not user:
        return 'User not found', 404

    item_data_list = ItemData.query.filter_by(user_id=user_id).all()

    if not item_data_list:
        return 'No ItemData found for this user', 404

    items_response = [
        {
            'id': item.id,
            'user_id': item.user_id,
            'type': item.type,
            'date': item.date,
            'exp_date': item.exp_date,
            'description': item.description,
            'status': item.status,
            'price': item.price,
            'file_url': item.file_url
        } for item in item_data_list
    ]
    
    return jsonify(items_response), 200 """

@app.route("/change-password", methods=['POST'])
def change_password():
    try:
        data = request.get_json()

        if not data:
            return 'error: Missing required fields', 400

        user = User.query.filter_by(email=data['email']).first()
        if not user:
            return 'Error: user not found', 404

        if not ph.verify(user.password, data['old_password']):
            return 'Error: passwords do not match', 401
        
        new_password = ph.hash(str(data['new_password']))
        user.password = new_password
        db.session.commit()
        return 'Successfully updated password', 200
    except Exception as e:
        db.session.rollback()
        return f'Internal Server Error: {str(e)}', 500
    
@app.route("/user/<int:user_id>", methods=['GET'])
def get_user(user_id):
    user = User.query.get(user_id)

    if not user:
        return 'User not found', 404

    user_data = user.serialize()
    
    return jsonify(user_data), 200

@app.route("/user/<int:user_id>", methods=['PUT'])
def modify_user(user_id):
    data = request.get_json()
    user = User.query.get(user_id)

    if not user:
        return 'User not found', 404

    try:
        if 'email' in data:
            user.email = data['email']
        if 'first_name' in data:
            user.first_name = data['first_name']
        if 'last_name' in data:
            user.last_name = data['last_name']
        if 'phone' in data:
            user.phone = data['phone']
        if 'company_name' in data:
            user.company_name = data['company_name']
        if 'vat_id' in data:
            user.vat_id = data['vat_id']
        if 'street' in data:
            user.street = data['street']
        if 'street_number' in data:
            user.street_number = data['street_number']
        if 'postal_code' in data:
            user.postal_code = data['postal_code']
        if 'city' in data:
            user.city = data['city']
        if 'country' in data:
            user.country = data['country']

        db.session.commit()
        return 'User updated successfully', 200
    except Exception as e:
        db.session.rollback()
        return f'Internal Server Error: {str(e)}', 500

@app.route("/user/<int:user_id>", methods=["DELETE"])
def delete_user(user_id):
    data = request.get_json()
    user = User.query.get(user_id)

    if not user:
        return 'User not found', 404
    
    if user and ph.verify(user.password, data['password']):
        db.session.delete(user)
        db.session.commit()
        return 'User deleted successfully', 200
    
    return f'Internal Server Error: {str(e)}', 500

""" @app.route("/user/<int:user_id>/item_data", methods=["POST"])
def add_user_item_data(user_id):
    try:
        data = request.get_json()

        if not data:
            return 'Error: Missing required fields', 400
        
        user = User.query.get(user_id)
        if not user:
            return 'Error: User not found', 404

        new_item_data = ItemData(
            user_id = user.id,
            type = data['type'],
            date = data['date'],
            exp_date = data['exp_date'],
            description = data['description'],
            status = data['status'],
            price = data['price'],
            file_url = data['file_url']
        )

        db.session.add(new_item_data)
        db.session.commit()

        return {"message": "ItemData created successfully"}, 201
    except Exception as e:
        db.session.rollback()
        return f"Internal Server Error: {str(e)}", 500 """
    
""" @app.route("/user/<int:user_id>/item_data", methods=["GET"])
def get_user_item_data(user_id):
    try:
        user = User.query.get(user_id)
        if not user:
            return 'User not found', 404

        item_data_list = ItemData.query.filter_by(user_id=user_id).all()

        if not item_data_list:
            return 'No ItemData found for this user', 404

        return {"item_data": [item.serialize() for item in item_data_list]}, 200
    except Exception as e:
        return f"Internal Server Error: {str(e)}", 500 """

""" @app.route("/user/<int:user_id>/item_data/<int:item_id>", methods=['PUT'])
def modify_user_item_data(user_id, item_id):
    data = request.get_json()

    user = User.query.get(user_id)
    item_data = ItemData.query.filter_by(id=item_id, user_id=user_id).first()

    if not user:
        return 'User not found', 404

    if not item_data:
        return 'ItemData not found', 404

    try:
        if 'type' in data:
            item_data.type = data['type']
        if 'date' in data:
            item_data.date = data['date']
        if 'exp_date' in data:
            item_data.exp_date = data['exp_date']
        if 'description' in data:
            item_data.description = data['description']
        if 'status' in data:
            item_data.status = data['status']
        if 'price' in data:
            item_data.price = data['price']
        if 'file_url' in data:
            item_data.file_url = data['file_url']

        db.session.commit()
        return 'ItemData updated successfully', 200
    except Exception as e:
        db.session.rollback()
        return f'Internal Server Error: {str(e)}', 500 """

""" @app.route("/user/<int:user_id>/item_data/<int:item_id>", methods=["DELETE"])
def delete_user_item_data(user_id, item_id):
    try:
        user = User.query.get(user_id)
        if not user:
            return 'Error: User not found', 404

        item_data = ItemData.query.filter_by(id=item_id, user_id=user_id).first()
        if not item_data:
            return 'Error: ItemData not found', 404

        db.session.delete(item_data)
        db.session.commit()

        return {"message": "ItemData deleted successfully"}, 200
    except Exception as e:
        db.session.rollback()
        return f"Internal Server Error: {str(e)}", 500 """

app.run(host='0.0.0.0', port=3000)