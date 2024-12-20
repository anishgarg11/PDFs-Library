PDF Viewer App
Features
PDF Listing: Displays a list of PDFs with thumbnails, names, authors, and publication dates.
Search Functionality: Allows users to search for PDFs by name.
Reader Mode: Lets users view selected PDFs in an embedded PDF viewer.
Responsive Design: Optimized for both mobile and desktop devices.
Setup Instructions
1. Clone the Repository
bash
Copy code
git clone <repository_url>
cd <project_directory>
2. Install Dependencies
bash
Copy code
npm install
3. Run the Project
bash
Copy code
npm start
The app will be accessible at http://localhost:3000.

Assumptions
If any PDF's author is missing, it will be set to "Anish Garg".
If the publication date is missing, it will default to "2024".
How to Use
Browse PDFs: Upon loading, the app displays a list of available PDFs.
Search PDFs: Use the search bar at the top to filter PDFs by their name.
View PDF: Click on a PDF to open it in reader mode, where you can see the content.
Built With
React for frontend development.
CSS for styling.
React Hooks for state management.
License
This project is licensed under the MIT License.
