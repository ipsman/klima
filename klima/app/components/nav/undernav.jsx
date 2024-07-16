// "use client"

// import { useState, useEffect } from 'react';
// import NavItems from '../navitems';

// export default function UnderNav({ handleNavigation, selectedPage }) {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {  // Adjust the scroll position threshold as needed
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div className={`w-full flex justify-center fixed z-40 transition-opacity duration-500 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}>
//       <div className="bg-[#ffffff] rounded-b-lg w-full text-[22px] py-2 border-2">
//         <NavItems style="items-stretch hidden space-x-3 lg:flex justify-center" handleNavigation={handleNavigation} selectedPage={selectedPage}></NavItems>
//       </div>
//     </div>
//   );
// }

// "use client"

// import { useState, useEffect } from 'react';
// import NavItems from '../navitems';

// export default function UnderNav({ handleNavigation, selectedPage }) {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <div className={`w-full bg-white flex flex-col lg:flex-row justify-center fixed top-0 z-40 transition-opacity duration-500 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}>
//       <div className="text-2xl py-2">
//         <div className="flex justify-between items-center px-4 lg:px-0">
//           <button onClick={toggleMobileMenu} className="lg:hidden focus:outline-none">
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
//             </svg>
//           </button>
//         </div>
//         <div className={`${isMobileMenuOpen ? 'flex' : 'hidden'} flex-col lg:flex lg:flex-row lg:items-center w-full lg:w-auto`}>
//           <NavItems
//             style="items-stretch flex flex-col lg:flex-row space-y-3 lg:space-y-0 space-x-3 justify-center"
//             handleNavigation={handleNavigation}
//             selectedPage={selectedPage}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

import { useState, useEffect } from 'react';
import NavItems from '../navitems';

export default function UnderNav({ handleNavigation, selectedPage }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavItemClick = (page) => {
    handleNavigation(page);
    setIsMobileMenuOpen(false); // Close the mobile menu
  };

  return (
    <div className={`w-full bg-white flex flex-col lg:flex-row justify-center fixed top-0 z-40 transition-opacity duration-500 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}>
      <div className="text-2xl py-2">
        <div className="flex justify-between items-center px-4 lg:px-0">
          <button onClick={toggleMobileMenu} className="lg:hidden focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <div className={`${isMobileMenuOpen ? 'flex' : 'hidden'} flex-col lg:flex lg:flex-row lg:items-center w-full lg:w-auto`}>
          <NavItems
            style="items-stretch flex flex-col lg:flex-row space-y-3 lg:space-y-0 space-x-3 justify-center"
            handleNavigation={handleNavItemClick}  // Use the new handleNavItemClick function
            selectedPage={selectedPage}
          />
        </div>
      </div>
    </div>
  );
}