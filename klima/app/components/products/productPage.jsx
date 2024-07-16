// import React, { useState } from 'react';
// import ImageGallery from './productGalery';

// export default function ProductPage({ productData }) {
//     const [selectedTab, setSelectedTab] = useState('description');


//     if (!productData) {
//         return <div>Termék adatok betöltése...</div>;
//     }

//     return (
//         <section className="flex justify-center">
//             <div className="bg-[#cdcdcd69] rounded-xl shadow-md container flex flex-col justify-center p-6 pt-20 mx-auto mt-24 lg:justify-between">
//                 <div className="flex flex-col lg:flex-row lg:items-start">
//                     <div className="flex items-center justify-center p-6 lg:mr-6 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
//                         <ImageGallery productImages={productData.images} />
//                     </div>
//                     <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:text-left">
//                         <h1 className="text-3xl font-bold">{productData.name}</h1>
//                         <div className="mt-4">
//                             <p className="font-bold text-2xl">Alapár: {productData.alapar} Ft</p>
//                             <p className="font-bold text-2xl">Alapszerelés: {productData.beszerelve} Ft</p>
//                         </div>
//                         <p className="text-xl mt-2">Az alapszerelés tartalmaz 3méteres csőhosszig minden segédanyagot illetve minőségi anyagok felhasználásával történő kivitelezést.</p>
//                     </div>
//                 </div>
//                 <div className="mt-6">
//                     <div className="border-b border-gray-200">
//                         <ul className="flex flex-wrap -mb-px text-sm font-medium text-center">
//                             <li className="mr-2">
//                                 <button
//                                     className={`inline-block p-4 border-b-2 ${selectedTab === 'description' ? 'border-black' : 'border-transparent'}`}
//                                     onClick={() => setSelectedTab('description')}
//                                 >
//                                     Leírás
//                                 </button>
//                             </li>
                        
//                             <li className="mr-2">
//                                 <button
//                                     className={`inline-block p-4 border-b-2 ${selectedTab === 'parameters' ? 'border-black' : 'border-transparent'}`}
//                                     onClick={() => setSelectedTab('parameters')}
//                                 >
//                                     Paraméterek
//                                 </button>
//                             </li>
//                             <li className="mr-2">
//                                 <button
//                                     className={`inline-block p-4 border-b-2 ${selectedTab === 'documents' ? 'border-black' : 'border-transparent'}`}
//                                     onClick={() => setSelectedTab('documents')}
//                                 >
//                                     Csatolt dokumentumok
//                                 </button>
//                             </li>
//                         </ul>
//                     </div>

//                     {selectedTab === 'description' && (
//                         <div className="p-6">
//                             {productData.leiras.map((desc, index) => (
//                                 <div key={index} className="mt-4">
//                                     <h2 className="text-xl font-semibold">{desc.title}</h2>
//                                     <p>{desc.text}</p>
//                                 </div>
//                             ))}
//                         </div>
//                     )}

//                     {selectedTab === 'parameters' && (
//                         <div className="p-6">
//                             <h2 className="text-2xl font-semibold">Termék Paraméterek</h2>
//                             <table className="w-full mt-4 border-collapse border border-gray-300">
//                                 <tbody>
//                                     {productData.parameterek.map((param, index) => (
//                                         <tr key={index} className="border-b border-gray-300">
//                                             <td className="p-2 font-medium border-r border-gray-300">{param.title}</td>
//                                             <td className="p-2">{param.value}</td>
//                                         </tr>
//                                     ))}
//                                 </tbody>
//                             </table>
//                         </div>
//                     )}

//                     {selectedTab === 'documents' && (
//                         <div className="p-6">
//                             <h2 className="text-2xl font-semibold">Csatolt dokumentumok</h2>
//                             <p>Itt találhatók a csatolt dokumentumok.</p>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </section>
//     );
// }


import React, { useState } from 'react';
import ImageGallery from './productGalery';

export default function ProductPage({ productData }) {
    const [selectedTab, setSelectedTab] = useState('description');

    if (!productData) {
        return <div>Termék adatok betöltése...</div>;
    }

    return (
        <section className="flex justify-center">
            <div className="bg-[#cdcdcd69] rounded-xl shadow-md container flex flex-col justify-center p-6 pt-20 mx-auto mt-24 lg:justify-between">
                <div className="flex flex-col lg:flex-row lg:items-start">
                    <div className="flex items-center justify-center p-6 lg:mr-6">
                        <ImageGallery productImages={productData.images} />
                    </div>
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:text-left">
                        <h1 className="text-3xl font-bold">{productData.name}</h1>
                        <div className="mt-4">
                            <p className="font-bold text-2xl">Alapár: {productData.alapar} Ft</p>
                            <p className="font-bold text-2xl">Alapszerelés: {productData.beszerelve} Ft</p>
                        </div>
                        <p className="text-xl mt-2">Az alapszerelés tartalmaz 3méteres csőhosszig minden segédanyagot illetve minőségi anyagok felhasználásával történő kivitelezést.</p>
                    </div>
                </div>
                <div className="mt-6">
                    <div className="border-b border-gray-200">
                        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center">
                            <li className="mr-2">
                                <button
                                    className={`inline-block p-4 border-b-2 ${selectedTab === 'description' ? 'border-black' : 'border-transparent'}`}
                                    onClick={() => setSelectedTab('description')}
                                >
                                    Leírás
                                </button>
                            </li>
                            <li className="mr-2">
                                <button
                                    className={`inline-block p-4 border-b-2 ${selectedTab === 'parameters' ? 'border-black' : 'border-transparent'}`}
                                    onClick={() => setSelectedTab('parameters')}
                                >
                                    Paraméterek
                                </button>
                            </li>
                            <li className="mr-2">
                                <button
                                    className={`inline-block p-4 border-b-2 ${selectedTab === 'documents' ? 'border-black' : 'border-transparent'}`}
                                    onClick={() => setSelectedTab('documents')}
                                >
                                    Csatolt dokumentumok
                                </button>
                            </li>
                        </ul>
                    </div>

                    {selectedTab === 'description' && (
                        <div className="p-6">
                            {productData.leiras.map((desc, index) => (
                                <div key={index} className="mt-4">
                                    <h2 className="text-xl font-semibold">{desc.title}</h2>
                                    <p>{desc.text}</p>
                                </div>
                            ))}
                        </div>
                    )}

                    {selectedTab === 'parameters' && (
                        <div className="p-6">
                            <h2 className="text-2xl font-semibold">Termék Paraméterek</h2>
                            <table className="w-full mt-4 border-collapse border border-gray-300">
                                <tbody>
                                    {productData.parameterek.map((param, index) => (
                                        <tr key={index} className="border-b border-gray-300">
                                            <td className="p-2 font-medium border-r border-gray-300">{param.title}</td>
                                            <td className="p-2">{param.value}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}

                    {selectedTab === 'documents' && (
                        <div className="p-6">
                            <h2 className="text-2xl font-semibold">Csatolt dokumentumok</h2>
                            <p>Itt találhatók a csatolt dokumentumok.</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}