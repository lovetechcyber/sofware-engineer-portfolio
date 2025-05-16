{ useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
const location = useLocation();

const links = [
{ name: "Home", path: "/" },
{ name: "About", path: "/about" },
{ name: "Skills", path: "/skills" },
{ name: "Projects", path: "/projects" },
{ name: "Experience", path: "/experience" },
{ name: "Certifications", path: "/certifications" },
{ name: "Contact", path: "/contact" },
];

return (
<header className="sticky top-0 z-50 bg-white shadow-md">
<div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
{/* Logo */}
<Link to="/" className="text-xl font-bold text-blue-600">
Prince Okwubali
</Link>

{/* Desktop nav */}  
    <nav className="hidden md:flex space-x-6">  
      {links.map((link) => (  
        <motion.div  
          key={link.name}  
          initial={{ opacity: 0 }}  
          animate={{ opacity: 1 }}  
          transition={{ duration: 0.3 }}  
        >  
          <Link  
            to={link.path}  
            className={`text-sm font-medium transition duration-200 ${  
              location.pathname === link.path  
                ? "text-blue-600 border-b-2 border-blue-600"  
                : "text-gray-800 hover:text-blue-500"  
            }`}  
          >  
            {link.name}  
          </Link>  
        </motion.div>  
      ))}  
    </nav>  

    {/* Mobile menu toggle */}  
    <div className="md:hidden">  
      <button  
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}  
        className="text-2xl text-gray-800 focus:outline-none"  
      >  
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}  
      </button>  
    </div>  
  </div>  

  {/* Mobile menu */}  
  <AnimatePresence>  
    {isMobileMenuOpen && (  
      <motion.nav  
        className="md:hidden px-6 pb-4 bg-white shadow-inner"  
        initial={{ opacity: 0, y: -20 }}  
        animate={{ opacity: 1, y: 0 }}  
        exit={{ opacity: 0, y: -20 }}  
        transition={{ duration: 0.3 }}  
      >  
        {links.map((link) => (  
          <Link  
            key={link.name}  
            to={link.path}  
            onClick={() => setIsMobileMenuOpen(false)}  
            className={`block py-2 text-sm font-medium ${  
              location.pathname === link.path  
                ? "text-blue-600 font-semibold"  
                : "text-gray-800 hover:text-blue-500"  
            }`}  
          >  
            {link.name}  
          </Link>  
        ))}  
      </motion.nav>  
    )}  
  </AnimatePresence>  
</header>

);
};

export default Navbar;

