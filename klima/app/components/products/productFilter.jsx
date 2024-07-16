// import { manufacturerData } from "../manufacturersData";

// export default function ProductFilter({ handleNavigation }) {
//     const buttons = manufacturerData.map(item => (
//         <button key={item.name} onClick={() => handleNavigation(item.name)}>
//             <img className="object-cover object-center h-24 aspect-video duration-500 hover:scale-[1.02] border-[1px] border-[#000000] rounded-md shadow-md" src={item.src} alt={item.name} />
//         </button>
//     ));

//     return (
//         <div className="p-6 mb-20">
//             <div className="flex flex-row gap-4">
//                 {buttons}
//             </div>
//         </div>
//     );
// }

// import { useState } from 'react';
// import { manufacturerData } from "../manufacturersData";

// export default function ProductFilter({ handleNavigation }) {
//     const [selectedManufacturer, setSelectedManufacturer] = useState(null);

//     const handleButtonClick = (name) => {
//         setSelectedManufacturer(name);
//         handleNavigation(name);
//     };

//     const buttons = manufacturerData.map(item => (
//         <button
//             key={item.name}
//             onClick={() => handleButtonClick(item.name)}
//             className={` ${selectedManufacturer === item.name ? 'bg-gray-300' : ''}`}
//         >
//             <img src={item.src} alt={item.name} className='object-cover object-center h-24 aspect-video duration-500 hover:scale-[1.02] border-[1px] border-[#000000] rounded-md shadow-md' />
//         </button>
//     ));

//     return (
//         <div className="p-6 mb-20">
//             <div className="flex flex-row gap-4">
//                 {buttons}
//             </div>
//         </div>
//     );
// }


import { useState } from 'react';
import { manufacturerData } from "../manufacturersData";

export default function ProductFilter({ handleNavigation }) {
    const [selectedManufacturer, setSelectedManufacturer] = useState(null);

    const handleButtonClick = (name) => {
        setSelectedManufacturer(name);
        handleNavigation(name);
    };

    const buttons = manufacturerData.map(item => (
        <button
            key={item.name}
            onClick={() => handleButtonClick(item.name)}
            className={`rounded-md ${selectedManufacturer === item.name ? 'bg-gray-300' : ''}`}
        >
            <img 
                src={item.src} 
                alt={item.name} 
                className='object-cover object-center h-24 aspect-video duration-500 hover:scale-[1.02] border-[1px] border-[#000000] rounded-md shadow-md md:w-32 lg:w-40' 
            />
        </button>
    ));

    return (
        <div className="p-6 mb-20">
            <div className="flex flex-wrap gap-4 justify-center">
                {buttons}
            </div>
        </div>
    );
}