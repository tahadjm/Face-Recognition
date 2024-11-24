# Face Recognition Web Application

This is a web application developed for facial recognition using the **Clarifai API**. It allows users to upload images and detect faces automatically, providing a dynamic and interactive user interface.

## Features

- **Facial Recognition:**
  - Users can upload images, and the app will automatically detect faces using the **Clarifai API**.

- **Interactive Design:**
  - A dynamic and visually engaging front-end built with **React.js**.
  - Includes **React Particles** for a responsive and interactive background effect.

- **User Authentication:**
  - A secure login system for user management.

- **Backend:**
  - The application uses **Node.js** and **Express.js** to handle the server-side logic and API requests.
  
- **Frontend:**
  - The user interface is built using **React.js**, providing a smooth and responsive experience.

## Technologies Used

- **Frontend:**
  - **React.js** for dynamic content rendering.
  - **React Particles** for interactive background effects.
  
- **Backend:**
  - **Node.js** and **Express.js** for handling API requests and server-side logic.

- **API:**
  - **Clarifai API** for facial recognition and image processing.

- **Authentication:**
  - User authentication is handled through secure login features.

## How to Run

1. Clone the repository or download the files.
2. Ensure you have **Node.js** installed.
3. Install the required dependencies by running `npm install` in both the **client** and **server** directories.
4. Set up your **Clarifai API key** and other environment variables in the `.env` file.
5. Run the backend server using `npm start` and the frontend using `npm run dev`.
6. Open the app in your browser to start uploading images and detecting faces.

## Project Structure

. ├── client/ # Frontend code with React.js │ ├── src/ # React components and UI logic │ ├── public/ # Static files and index.html │ └── package.json # Dependencies and scripts for the frontend ├── server/ # Backend code with Node.js and Express.js │ ├── routes/ # API routes for facial recognition │ ├── controllers/ # Controllers for handling requests │ ├── models/ # Models for user data and authentication │ └── server.js # Main server file for handling requests ├── .gitignore # Git ignore file └── README.md # This README file

## Future Improvements

- Implement **real-time image processing** with WebSockets.
- Add the ability to **train custom models** using user-uploaded images.
- Enhance the **user interface** with more interactive features like face bounding boxes.

## License

This project is open-source and available under the [MIT License](LICENSE).
