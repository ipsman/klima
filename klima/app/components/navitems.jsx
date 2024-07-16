// 'use client'

// import React from 'react';

// export default function NavItems({ style, selectedPage, handleNavigation }) {
//     const navItems = [
//         { name: "KEZDŐLAP", link: "/", selectedPage: "home" },
//         { name: "SZOLGÁLTATÁSAINK", link: "/sidepages/servicespage", selectedPage: "services" },
//         { name: "KÉSZÜLÉKEK", link: "/sidepages/products", selectedPage: "products" },
//         { name: "GYÁRTÓK", link: "/sidepages/manufacturers", selectedPage: "manufacturers" },
//         { name: "KAPCSOLAT", link: "/sidepages/contactpage", selectedPage: "contact" },
//     ];

//     const handleNavigationClick = (event, page) => {
//         event.preventDefault();
//         handleNavigation(page);
//     };

//     const listItems = navItems.map(item => (
//         <li className="flex" key={item.name}>
//             <a
//                 href={item.link}
//                 className={`flex items-center px-4 -mb-1 cursor-pointer duration-500 hover:scale-105 ${selectedPage === item.selectedPage ? 'border-b-2 border-b-[#0a0a0a]' : ''}`}
//                 onClick={(e) => handleNavigationClick(e, item.selectedPage)}
//             >
//                 {item.name}
//             </a>
//         </li>
//     ));

//     return (
//         <ul className={style}>
//             {listItems}
//         </ul>
//     );
// }


'use client'

import React from 'react';

export default function NavItems({ style, selectedPage, handleNavigation }) {
    const navItems = [
        { name: "KEZDŐLAP", link: "/", selectedPage: "home" },
        { name: "SZOLGÁLTATÁSAINK", link: "/sidepages/servicespage", selectedPage: "services" },
        { name: "KÉSZÜLÉKEK", link: "/sidepages/products", selectedPage: "products" },
        { name: "GYÁRTÓK", link: "/sidepages/manufacturers", selectedPage: "manufacturers" },
        { name: "KAPCSOLAT", link: "/sidepages/contactpage", selectedPage: "contact" },
    ];

    const handleNavigationClick = (event, page) => {
        event.preventDefault();
        handleNavigation(page);
    };

    const listItems = navItems.map(item => (
        <li className="flex" key={item.name}>
            <a
                href={item.link}
                className={`flex items-center px-4 -mb-1 cursor-pointer duration-500 hover:scale-105 ${selectedPage === item.selectedPage ? 'border-b-2 border-b-[#0a0a0a]' : ''}`}
                onClick={(e) => handleNavigationClick(e, item.selectedPage)}
            >
                {item.name}
            </a>
        </li>
    ));

    return (
        <ul className={style}>
            {listItems}
        </ul>
    );
}