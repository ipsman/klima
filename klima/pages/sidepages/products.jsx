// import { data } from "app/components/products/productData"
// import ProductCard from "app/components/products/productCard";
// import ProductFilter from "app/components/products/productFilter";

// export default function Products({handleNavigation }) {

//      const listItems = data.map(item => (
//           <ProductCard key={item.name} productData={item} handleNavigation={handleNavigation} />
//       ));
  
//       return (
//           <div className="w-full mt-24 flex flex-col items-center">
//               <h2 className='text-4xl font-bold mb-8'>KÉSZÜLÉKEK</h2>
//                 <ProductFilter></ProductFilter>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                   {listItems}
//               </div>
//           </div>
//       );
// }

// import { useState } from "react";
// import { data } from "app/components/products/productData";
// import ProductCard from "app/components/products/productCard";
// import ProductFilter from "app/components/products/productFilter";

// export default function Products( { handleNavigation } ) {
//     const [selectedManufacturer, setSelectedManufacturer] = useState(null);

//     const setManufacturer = (manufacturer) => {
//         setSelectedManufacturer(manufacturer);
//     };

//     const filteredProducts = selectedManufacturer
//         ? data.filter(item => item.manufacturer === selectedManufacturer)
//         : data;

//     const listItems = filteredProducts.map(item => (
//         <ProductCard key={item.name} productData={item} handleNavigation={handleNavigation}/>
//     ));

//     return (
//         <div className="w-full mt-24 flex flex-col items-center">
//             <h2 className='text-4xl font-bold mb-8'>KÉSZÜLÉKEK</h2>
//             <ProductFilter handleNavigation={setManufacturer} />
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {listItems}
//             </div>
//         </div>
//     );
// }


// import { useState } from "react";
// import { data } from "app/components/products/productData";
// import ProductCard from "app/components/products/productCard";
// import ProductFilter from "app/components/products/productFilter";

// export default function Products({ handleNavigation }) {
//     const [selectedManufacturer, setSelectedManufacturer] = useState(null);

//     const setManufacturer = (manufacturer) => {
//         setSelectedManufacturer(manufacturer);
//     };

//     const filteredProducts = selectedManufacturer
//         ? data.filter(item => item.manufacturer === selectedManufacturer)
//         : data;

//     const listItems = filteredProducts.map(item => (
//         <ProductCard key={item.name} productData={item} handleNavigation={handleNavigation} />
//     ));

//     return (
//         <div className="w-full mt-24 flex flex-col items-center">
//             <h2 className='text-4xl font-bold mb-8'>KÉSZÜLÉKEK</h2>
//             <ProductFilter handleNavigation={setManufacturer} />
//             {filteredProducts.length > 0 ? (
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {listItems}
//                 </div>
//             ) : (
//                 <div className="text-xl mt-8">Jelenleg nincs ilyen termékünk.</div>
//             )}
//         </div>
//     );
// }


import { useState } from "react";
import { data } from "app/components/products/productData";
import ProductCard from "app/components/products/productCard";
import ProductFilter from "app/components/products/productFilter";

export default function Products({ handleNavigation }) {
    const [selectedManufacturer, setSelectedManufacturer] = useState(null);

    const setManufacturer = (manufacturer) => {
        setSelectedManufacturer(manufacturer);
    };

    const filteredProducts = selectedManufacturer
        ? data.filter(item => item.manufacturer === selectedManufacturer)
        : data;

    const listItems = filteredProducts.map(item => (
        <ProductCard key={item.name} productData={item} handleNavigation={handleNavigation} />
    ));

    return (
        <div className="w-full mt-24 flex flex-col items-center">
            <h2 className='text-4xl font-bold mb-8'>KÉSZÜLÉKEK</h2>
            <ProductFilter handleNavigation={setManufacturer} />
            {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {listItems}
                </div>
            ) : (
                <div className="text-xl mt-8">Jelenleg nincs ilyen termékünk.</div>
            )}
        </div>
    );
}