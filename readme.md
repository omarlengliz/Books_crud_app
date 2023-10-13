
# Books CRUD App README

This is a simple Books CRUD (Create, Read, Update, Delete) application using Node.js and MongoDB. The application provides endpoints to manage a collection of books.

## Directory Structure

```
books-crud-app/
│   .env
│   index.js
│   package-lock.json
│   package.json
│
├───config
│       config.js
│
├───controllers
│       BookController.js
│
├───middleware
│       errorMiddleware.js
│       
├───models
│       Book.js
│
└───routes
        BookRoutes.js
```

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/omarlengliz/Books_crud_app
   ```

2. Navigate to the project directory:

   ```bash
   cd books-crud-app
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

4. Configure the MongoDB connection by creating a `.env` file and providing the necessary database connection URI:

   ```dotenv
   MONGO_URI=your_mongodb_uri
   ```

5. Start the application:

   ```bash
   npm start
   ```

The application will run on `http://localhost:3000` by default. You can change the port by modifying the `index.js` file.

## MongoDB Configuration

In the `config` folder, you will find `config.js`, which contains the MongoDB configuration. Make sure to set the `MONGO_URI` environment variable in the `.env` file as mentioned in the installation steps.

## API Routes

The API endpoints for managing books are defined in the `BookRoutes.js` file. Here are the main routes:

- **GET /api/books:** Get a list of all books.
- **GET /api/books/:id:** Get details of a specific book by ID.
- **POST /api/books:** Create a new book.
- **PUT /api/books/:id:** Update an existing book by ID.
- **DELETE /api/books/:id:** Delete a book by ID.

## Controllers

The `controllers` folder contains the `BookController.js` file, which handles the logic for these API routes.

## Middleware

The `middleware` folder contains an `errorMiddleware.js` file, which handles error responses and ensures uniform error handling throughout the application.

## Models

The `models` folder contains the `Book.js` file, which defines the data structure for books and is used to interact with the MongoDB database.

