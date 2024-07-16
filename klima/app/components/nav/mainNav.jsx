// import NavItems from "../navitems"

// export default function MainNav({ handleNavigation, selectedPage }) {
//     return (
//         <div className="flex justify-center z-40 bg-[#00000000] absolute w-full top-[84px]">
//             <div className="bg-[#ffffff] rounded-b-lg w-1/2 text-[22px] py-2">
//                 <NavItems style="items-stretch hidden space-x-3 lg:flex justify-center" handleNavigation={handleNavigation} selectedPage={selectedPage}></NavItems>
//             </div>
//         </div>
// )}

// import { useState } from "react";
// import NavItems from "../navitems";

// export default function MainNav({ handleNavigation, selectedPage }) {
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//     const toggleMobileMenu = () => {
//         setIsMobileMenuOpen(!isMobileMenuOpen);
//     };

//     return (
//         <div className="flex flex-col lg:flex-row justify-center items-center z-40 bg-[#00000000] absolute w-full top-[84px]">
//             <div className={`bg-[#ffffff] rounded-b-lg px-4 md:w-full sm:w-full xsm:w-full text-[22px] py-2 flex justify-between lg:justify-center`}>
//                 <div className="lg:hidden">
//                     <button onClick={toggleMobileMenu} className="focus:outline-none px-4 py-2">
//                         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
//                         </svg>
//                     </button>
//                 </div>
//                 <div className={`${isMobileMenuOpen ? 'flex' : 'hidden'} flex-col lg:flex lg:flex-row lg:items-center w-full lg:w-auto`}>
//                     <NavItems
//                         style="items-stretch lg:flex space-x-3 justify-center w-full lg:w-auto"
//                         handleNavigation={handleNavigation}
//                         selectedPage={selectedPage}
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// }


import { useState } from "react";
import NavItems from "../navitems";

export default function MainNav({ handleNavigation, selectedPage }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleNavItemClick = (page) => {
        handleNavigation(page);
        setIsMobileMenuOpen(false); // Close the mobile menu
    };

    return (
        <div className="flex flex-col lg:flex-row justify-center items-center z-40 bg-[#00000000] absolute w-full top-[84px]">
            <div className={`bg-[#ffffff] rounded-b-lg px-4 md:w-full sm:w-full xsm:w-full lg:w-auto text-[22px] py-2 flex justify-between lg:justify-center`}>
                <div className="lg:hidden">
                    <button onClick={toggleMobileMenu} className="focus:outline-none px-4 py-2">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
                <div className={`${isMobileMenuOpen ? 'flex' : 'hidden'} flex-col lg:flex lg:flex-row lg:items-center w-full lg:w-auto`}>
                    <NavItems
                        style="items-stretch lg:flex space-x-3 justify-center w-full lg:w-auto"
                        handleNavigation={handleNavItemClick}
                        selectedPage={selectedPage}
                    />
                </div>
            </div>
        </div>
    );
}