// import Caroussel from "./Caroussel"

// export default function MainSection({ handleNavigation }) {
//     const handleNavigationClick = (event, page) => {
//         event.preventDefault();
//         handleNavigation(page);
//     };

//     return (
//         <div className="h-screen w-screen z-10 relative">
//             <section className="bg-[url('https://klimaszereles-budapesten.hu/temp/350/image_hd.jpg')]">
//                 <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
//                     <div className="flex flex-col justify-center p-6 bg-[#ffffffe0] shadow-lg backdrop-blur-sm text-center rounded-2xl lg:max-w-[800px] lg:text-left">
//                         <h1 className="text-5xl font-bold leading-none sm:text-6xl">KLÍMASZERELÉS KARBANTARTÁS TISZTÍTÁS</h1>
//                         <p className="mt-6 mb-8 text-lg sm:mb-12">
//                             <br  className="hidden md:inline lg:hidden" />SZÁMLA, GARANCIA, SZÜKSÉGES DOKUMENTUMOK<br/>
//                             NKVH-nál regisztrált vállalkozás vagyunk, ezért mi minden esetben számlát állítunk ki és garanciát vállalunk az általunk elvégzett munkára. A telepítés mellé Telepítési tanúsítvány és Jótállási jegy is kiállításra kerül.
//                         </p>
//                         <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
//                             <a rel="noopener noreferrer" onClick={(e) => handleNavigationClick(e, "products")} className="px-8 py-3 text-lg font-semibold rounded dark:bg-[#515151c4] dark:text-gray-50 duration-500 hover:scale-110">Kínálat</a>
//                             <a rel="noopener noreferrer" onClick={(e) => handleNavigationClick(e, "contact")}  className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800 duration-500 hover:scale-110">Kapcsolat</a>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             <Caroussel></Caroussel>
//         </div>
//     )
// }


import Caroussel from "./Caroussel";

export default function MainSection({ handleNavigation }) {
    const handleNavigationClick = (event, page) => {
        event.preventDefault();
        handleNavigation(page);
    };

    return (
        <div className="h-screen w-screen z-10 relative">
            <section className="bg-[url('https://klimaszereles-budapesten.hu/temp/350/image_hd.jpg')]">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center p-6 bg-[#ffffffe0] shadow-lg backdrop-blur-sm text-center rounded-2xl lg:max-w-[800px] lg:text-left">
                        <h1 className="text-4xl lg:text-5xl font-bold leading-none sm:text-6xl">
                            KLÍMASZERELÉS KARBANTARTÁS TISZTÍTÁS
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">
                            SZÁMLA, GARANCIA, SZÜKSÉGES DOKUMENTUMOK<br />
                            NKVH-nál regisztrált vállalkozás vagyunk, ezért mi minden esetben számlát állítunk ki és garanciát vállalunk az általunk elvégzett munkára. A telepítés mellé Telepítési tanúsítvány és Jótállási jegy is kiállításra kerül.
                        </p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <a 
                                href="#" 
                                onClick={(e) => handleNavigationClick(e, "products")} 
                                className="px-8 py-3 text-lg font-semibold rounded bg-[#515151c4] text-gray-50 duration-500 hover:scale-110">
                                Kínálat
                            </a>
                            <a 
                                href="#" 
                                onClick={(e) => handleNavigationClick(e, "contact")}  
                                className="px-8 py-3 text-lg font-semibold border rounded border-gray-800 duration-500 hover:scale-110">
                                Kapcsolat
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <Caroussel />
        </div>
    );
}
