# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



PDF Library Application

A web application that allows users to browse, search, and view PDF files from a collection. The app fetches PDF data from an external API and provides functionalities like searching PDFs by name and viewing them in a reader mode.

Features
PDF Listing: View a list of PDFs with thumbnails, names, authors, and publication date.
Search Functionality: Search PDFs by name.
Reader Mode: View selected PDFs in an embedded PDF viewer.
Responsive Design: Works well on mobile and desktop devices.
Setup Instructions
Clone the repository:

bash
Copy code
git clone <repository_url>
cd <project_directory>
Install Dependencies:

bash
Copy code
npm install
Run the project:

bash
Copy code
npm start
The app will be accessible at http://localhost:3000.

Assumptions
If any PDF's author is missing, it will be set to "Anish Garg".
If the publication date is missing, it will default to "2024".
How to Use
Browse PDFs: Upon loading, the app displays a list of PDFs.
Search PDFs: Use the search bar at the top to filter PDFs by their name.
View PDF: Click on a PDF to open it in a reader mode, where you can see the content.
Built With
React for frontend development.
CSS for styling.
React Hooks for state management.
License
This project is licensed under the MIT License.