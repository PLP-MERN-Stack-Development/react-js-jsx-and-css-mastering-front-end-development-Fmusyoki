# 🛠️ Project Setup
Follow these steps to get the development server running on your local machine.

#Prerequisites
Node.js (v18 or higher recommended)

npm (Node Package Manager)

# Installation
Clone the Repository:
Bash
git clone YOUR_REPOSITORY_URL
cd your-project-name
#Install Dependencies: This command installs React, React Router, Tailwind CSS, and other necessary packages.
Bash
# npm install
Start the Development Server: Vite will start the application and provide a local URL (usually http://localhost:5173).
npm run dev
Your application should now be accessible in your web browser.

# 📂 Project Structure
The codebase is organized following standard React conventions for clarity and scalability:

src/
├── components/          # Reusable UI elements (Button, Card, Navbar, Footer)
├── context/             # Global state management (ThemeContext)
├── hooks/               # Custom hooks (useLocalStorage)
├── layouts/             # Page structure wrappers (DefaultLayout)
├── pages/               # Route-level components (TaskManagerPage, APIFetchPage)
├── App.jsx              # Main routing configuration
├── main.jsx             # React DOM and context providers setup
└── index.css            # Tailwind CSS imports
# 💻 Screenshots
<img width="1912" height="818" alt="image" src="https://github.com/user-attachments/assets/ac683cd3-b3eb-4d1a-980e-7e4238a56857" />


🌐 Deployed Application
The application has been successfully deployed and is accessible via the following URL:

Deployed URL: YOUR_VERCEL_OR_NETLIFY_URL_GOES_HERE
