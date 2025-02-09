# Full Stack Node.js & React Application

## Overview
This is a full-stack web application built using Node.js, Express.js, React, and MongoDB. The backend provides a RESTful API, while the frontend is developed with React to create an interactive user experience.

## Features
- **User Authentication**: Secure login and registration with JWT authentication.
- **CRUD Operations**: Fully functional Create, Read, Update, and Delete operations.
- **RESTful API**: Backend services exposed via REST API.
- **Database Integration**: Uses MongoDB with Mongoose.
- **Error Handling**: Proper error handling and validation using middleware.

## Technologies Used
### Frontend:
- React.js (with Hooks & Context API)
- React Router

### Backend:
- Node.js with Express.js
- MongoDB with Mongoose
- JWT Authentication
- bcrypt for password hashing
- dotenv for environment variables

## Installation

### Prerequisites:
- Node.js and npm installed
- MongoDB installed and running

### Steps to Run Locally:
1. **Clone the repository**
   ```sh
   git clone https://github.com/yourusername/your-repo.git
   cd your-repo
   ```
2. **Install backend dependencies**
   ```sh
   cd backend
   npm install
   ```
3. **Set up environment variables**
   Create a `.env` file in the `backend` directory and configure:
   ```env
   PORT=4000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```
4. **Run the backend server**
   ```sh
   npm start
   ```
5. **Install frontend dependencies**
   ```sh
   cd ../frontend
   npm install
   ```
6. **Run the React app**
   ```sh
   npm start
   ```

## Environment Variables
Ensure the following environment variables are configured:
- `PORT`
- `MONGO_URI`
- `JWT_SECRET`

## Contributing
Contributions are welcome! Please fork this repository and submit a pull request.

## License
This project is licensed under the MIT License.

---


