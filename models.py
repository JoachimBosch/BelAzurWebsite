import json
from flask import Flask
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(255), unique=False, nullable=False)
    first_name = db.Column(db.String(80), unique=False)
    last_name = db.Column(db.String(80), unique=False)
    phone = db.Column(db.String(80), unique=False)
    company_name = db.Column(db.String(100), unique=False)
    vat_id = db.Column(db.String(20), unique=False)
    street = db.Column(db.String(80), unique=False)
    street_number = db.Column(db.String(20), unique=False)
    postal_code = db.Column(db.String(20), unique=False)
    city = db.Column(db.String(80), unique=False)
    country = db.Column(db.String(80), unique=False)

    def __repr__(self):
        return '<User %r>' % self.email

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "phone": self.phone,
            "company_name": self.company_name,
            "vat_id": self.vat_id,
            "street": self.street,
            "street_number": self.street_number,
            "postal_code": self.postal_code,
            "city": self.city,
            "country": self.country
        }

class ItemData(db.model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    type = db.Column(db.String(20), unique=False)
    date = db.Column(db.String(20), unique=False)
    exp_date = db.Column(db.String(20), unique=False)
    description = db.Column(db.String(255), unique=False)
    status = db.Column(db.String(20), unique=False)
    price = db.Column(db.String(20), unique=False)
    file_url = db.Column(db.String(255), unique=False)

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "type": self.type,
            "date": self.date,
            "exp_date": self.exp_date,
            "description": self.description,
            "status": self.status,
            "price": self.price,
            "file_url": self.file_url,
        }

class Vitrine(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    logo_url = db.Column(db.String(255), unique=False)
    title = db.Column(db.String(100), unique=False)
    subtitle = db.Column(db.String(100), unique=False)
    img1_url = db.Column(db.String(255), unique=False)
    img1_text = db.Column(db.String(1000), unique=False)
    contact_email = db.Column(db.String(100), unique=False)
    contact_phone = db.Column(db.String(100), unique=False)
    contact_address = db.Column(db.String(255), unique=False)
    contact_open_hours = db.Column(db.String(1000), unique=False)
    img2_url = db.Column(db.String(255), unique=False)
    map = db.Column(db.Boolean, unique=False)

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "logo_url": self.logo_url,
            "title": self.title,
            "subtitle": self.subtitle,
            "img1_url": self.img1_url,
            "img1_text": self.img1_text,
            "contact_email": self.contact_email,
            "contact_phone": self.contact_phone,
            "contact_address": self.contact_address,
            "contact_open_hours": self.contact_open_hours,
            "img2_url": self.img2_url,
            "map": self.map,
        }

if __name__ == '__main__':
    app.run(debug=True)