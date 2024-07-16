// export default function ProductCard({ productData, handleNavigation }) {
//     const handleNavigationClick = () => {
//         handleNavigation('product', productData.name);
//     };

//     return (
//         <div className="max-w-xs p-6 rounded-md shadow-md bg-[#cdcdcd69] dark:text-gray-900 duration-500 hover:scale-[1.02]">
//             <img src={productData.images[0].image} alt={productData.name} className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
//             <div className="mt-6 mb-2">
//                 <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">{productData.manufacturer}</span>
//                 <a className="text-xl font-semibold tracking-wide cursor-pointer duration-500 hover:text-indigo-700" onClick={handleNavigationClick}>
//                     {productData.name}
//                 </a>
//             </div>
//             <p className="dark:text-gray-800 uppercase">{productData.shortText}</p>
//             <div className="mt-4">
//                 <p className="font-bold">Alapár: {productData.alapar} Ft</p>
//                 <p className="font-bold">Beszerelve: {productData.beszerelve} Ft</p>
//             </div>
//         </div>
//     );
// }


// export default function ProductCard({ productData, handleNavigation }) {

//     const handleNavigationClick = () => {
//         console.log(productData.name);
//         handleNavigation('productPage', productData);
//     };

//     return (
//         <div className="max-w-xs p-6 rounded-md shadow-md bg-[#cdcdcd69] dark:text-gray-900 duration-500 hover:scale-[1.02]">
//             <img src={productData.images[0].image} alt={productData.name} className="object-cover object-center w-full rounded-md h-72 bg-[#ffffff]"/>
//             <div className="mt-6 mb-2">
//                 <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">{productData.manufacturer}</span>
//                 <a className="text-xl font-semibold tracking-wide cursor-pointer duration-500 hover:text-indigo-700" onClick={handleNavigationClick}>
//                     {productData.name}
//                 </a>
//             </div>
//             <p className="dark:text-gray-800 uppercase">{productData.shortText}</p>
//             <div className="mt-4">
//                 <p className="font-bold">Alapár: {productData.alapar} Ft</p>
//                 <p className="font-bold">Beszerelve: {productData.beszerelve} Ft</p>
//             </div>
//         </div>
//     );
// }


export default function ProductCard({ productData, handleNavigation }) {
    const handleNavigationClick = () => {
        handleNavigation('productPage', productData);
    };

    return (
        <div className="max-w-xs p-6 rounded-md shadow-md bg-[#cdcdcd69] dark:text-gray-900 duration-500 hover:scale-[1.02]">
            <img src={productData.images[0].image} alt={productData.name} className="object-cover object-center w-full rounded-md h-72 bg-[#ffffff]"/>
            <div className="mt-6 mb-2">
                <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">{productData.manufacturer}</span>
                <a className="text-xl font-semibold tracking-wide cursor-pointer duration-500 hover:text-indigo-700" onClick={handleNavigationClick}>
                    {productData.name}
                </a>
            </div>
            <p className="dark:text-gray-800 uppercase">{productData.shortText}</p>
            <div className="mt-4">
                <p className="font-bold">Alapár: {productData.alapar} Ft</p>
                <p className="font-bold">Beszerelve: {productData.beszerelve} Ft</p>
            </div>
        </div>
    );
}