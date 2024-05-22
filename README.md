# Mongoose-Express-Assignment
## Clear instructions on how to run the application locally.
## Prerequisites
-   express, mongoose,  typescript, dotenv, cors, ts-node-dev  installed.
- MongoDB installed and running.
- Set up a MongoDB database using Mongoose for storing product and order data.
- Using zod validation library for data validation schema.

## Installation
 "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.19.2",
    "mongoose": "^8.4.0",
    "zod": "^3.23.8"
  },

  "devDependencies": {
    "@eslint/js": "^9.3.0",
    "@types/cors": "^2.8.17",
    "@types/express": "^4.17.21",
    "@types/mongoose": "^5.11.97",
    "@types/node": "^20.12.12",
    "eslint": "^8.57.0",
    "ts-node-dev": "^2.0.0",
    "typescript": "^5.4.5",
    "typescript-eslint": "^7.10.0"
  }

## Configuration
1. Set up a MongoDB database and update the connection.

## Running the Application
1. Start the server: `npm start`
2. The server will be running at `http://localhost:5000`.

## API Endpoints


- **POST(/api/products** (Create Product Into DB).
- **GET(/api/products** (Get All Product From DB).
- **GET(/api/products/:productId:** (Retrieve a Specific Product by ID).
- **PUT(/api/products/:productId:** (Update Product Information).
- **DELETE(/api/products/:productId:**  (Delete a Product).
- **POST(/api/orders** (Create a New Order)
- **GET(/api/orders** (Retrieve All Orders).
- **GET(/api/orders?email=level2@programming-hero.com** (Retrieve Orders by User Email).


## Sample Product JSON
```json
{
    "name": "iPhone 13",
    "description": "A sleek and powerful smartphone with cutting-edge features.",
    "price": 999,
    "category": "Electronics",
    "tags": ["smartphone", "Apple", "iOS"],
    "variants": [
        {
            "type": "Color",
            "value": "Midnight Blue"
        },
        {
            "type": "Storage Capacity",
            "value": "256GB"
        }
    ],
    "inventory": {
        "quantity": 50,
        "inStock": true
    }
}
