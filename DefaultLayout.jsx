import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'; 

const DefaultLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <Navbar />
      <main className="flex-grow container mx-auto p-4">
        <Outlet /> 
      </main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;