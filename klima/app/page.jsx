//  'use client'

// import React, { useState } from 'react';
// import NavBar from './components/nav/navBar';
// import Footer from './Sections/footer';
// import UnderNav from './components/nav/undernav';
// import HomePage from './homepage';
// import ServicesPage from 'pages/sidepages/servicespage';
// import Products from 'pages/sidepages/products';
// import Manufacturers from 'pages/sidepages/manufacturers';
// import ContactPage from 'pages/sidepages/contactpage';
// import MainNav from "app/components/nav/mainNav"
// import ProductPage from './components/products/productPage';

// export default function Home() {

//   const [selectedPage, setSelectedPage] = useState('home');
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   const handleNavigation = (page, product = null) => {
//     setSelectedPage(page);
//     if (product) {
//         setSelectedProduct(product);
//     }
// };

// const renderPage = () => {
//   switch (selectedPage) {
//       case 'home':
//           return <HomePage handleNavigation={handleNavigation} />;
//       case 'services':
//           return <ServicesPage />;
//       case 'products':
//           return <Products handleNavigation={handleNavigation} />;
//       case 'manufacturers':
//           return <Manufacturers />;
//       case 'contact':
//           return <ContactPage />;
//       case 'productPage':
//            return <ProductPage productData={selectedProduct} />;
//       default:
//           return <HomePage handleNavigation={handleNavigation} />;
//   }
// };

//   return (
//       <main className="h-full w-screen font-normal scroll-smooth text-black bg-[#ffffff] flex flex-col justify-between relative duration-300">
//           <NavBar />
//           <MainNav selectedPage={selectedPage} handleNavigation={handleNavigation}></MainNav>
//           <UnderNav selectedPage={selectedPage} handleNavigation={handleNavigation} />
//           {renderPage(selectedPage)}
//           <Footer selectedPage={selectedPage} handleNavigation={handleNavigation} />
//       </main>
//   );
// }
'use client'

import React, { useState } from 'react';
import NavBar from './components/nav/navBar';
import Footer from './Sections/footer';
import UnderNav from './components/nav/undernav';
import HomePage from './homepage';
import ServicesPage from 'pages/sidepages/servicespage';
import Products from 'pages/sidepages/products';
import Manufacturers from 'pages/sidepages/manufacturers';
import ContactPage from 'pages/sidepages/contactpage';
import MainNav from "app/components/nav/mainNav";
import ProductPage from './components/products/productPage';

export default function Home() {
    const [selectedPage, setSelectedPage] = useState('home');
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleNavigation = (page, product = null) => {
        setSelectedPage(page);
        if (product) {
            setSelectedProduct(product);
        }
    };

    const renderPage = () => {
        switch (selectedPage) {
            case 'home':
                return <HomePage handleNavigation={handleNavigation} />;
            case 'services':
                return <ServicesPage />;
            case 'products':
                return <Products handleNavigation={handleNavigation} />;
            case 'manufacturers':
                return <Manufacturers />;
            case 'contact':
                return <ContactPage />;
            case 'productPage':
                return <ProductPage productData={selectedProduct} />;
            default:
                return <HomePage handleNavigation={handleNavigation} />;
        }
    };

    return (
        <main className="h-full w-screen font-normal scroll-smooth text-black bg-[#ffffff] flex flex-col justify-between relative duration-300">
            <NavBar />
            <MainNav selectedPage={selectedPage} handleNavigation={handleNavigation} />
            <UnderNav selectedPage={selectedPage} handleNavigation={handleNavigation} />
            <div className="flex-grow">
                {renderPage(selectedPage)}
            </div>
            <Footer selectedPage={selectedPage} handleNavigation={handleNavigation} />
        </main>
    );
}