RESTful API with Express.js and MongoDB
This is a simple RESTful API built using Express.js and MongoDB for managing resources (movies and books).

Prerequisites
Before running the project, ensure you have the following installed:

Node.js (v14 or later)

MongoDB (or use MongoDB Atlas for a cloud-based MongoDB instance)

Git (for version control)

Postman (or any API client for testing the API)

Setup Instructions
1. Clone the Repository
Clone the project to your local machine:
git clone https://github.com/kmprasannakumar/RESTful-API-with-Express.js-and-MongoDB.git
cd RESTful-API-with-Express.js-and-MongoDB

2. Install Dependencies
Install the required npm packages:

npm install

3. Set Up MongoDB
You need to connect your app to a MongoDB instance. You can either:

Run MongoDB locally (if MongoDB is installed), or

Use MongoDB Atlas (a cloud-based MongoDB service).

Create a .env file in the root directory of your project with the following content:

MONGO_URI=your_mongo_connection_string
PORT=3000
4. Run the Application
Start the server:

npm start
5. Test API Endpoints
You can now test the API using Postman or any other API client.

GET /movies - Get all movies

POST /movies - Add a movie (send JSON data)

GET /movies/:id - Get a movie by ID

PUT /movies/:id - Update a movie by ID

DELETE /movies/:id - Delete a movie by ID

Similarly, replace /movies with /books for book-related operations.

Example Requests
GET /movies:
GET http://localhost:3000/movies
POST /movies:


POST http://localhost:3000/movies
{
  "title": "Inception",
  "director": "Christopher Nolan",
  "year": 2010
}
