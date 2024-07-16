// export default function ChooseUs() {
//     return (

// <section>
// <div className="container m-10 p-6 py-12 mx-auto space-y-24 lg:px-8 bg-[#cdcdcd69] shadow-lg rounded-3xl">
//     <div>
//         <h2 className="text-3xl font-bold tracking-tight text-left sm:text-5xl dark:text-gray-900">MIÉRT VÁLASSZON MINKET?</h2>
//     </div>
//     <div className="grid grid-flow-col">
//         <div className="grid lg:gap-8 lg:w-[80%] mt-3">
//             <div>
//                 <div className="space-y-12">
//                     <div className="flex">
//                         <div className="ml-4">
//                             <h4 className="text-lg font-medium leading-6 dark:text-gray-900">MEGBÍZHATÓSÁG</h4>
//                             <p className="mt-2 dark:text-gray-600">Tapasztalt csapatunk szakértői a klímaszerelés területén, akik precízen és gondosan végzik munkájukat.</p>
//                         </div>
//                     </div>
//                     <div className="flex">
//                         <div className="ml-4">
//                             <h4 className="text-lg font-medium leading-6 dark:text-gray-900">SZAKTUDÁS ÉS KÉPZETTSÉG</h4>
//                             <p className="mt-2 dark:text-gray-600">Munkatársaink folyamatosan képezik magukat a legújabb klímatechnológiai fejlesztések terén. Ez biztosítja, hogy mindig a leginnovatívabb megoldásokat kínáljuk ügyfeleinknek, amelyek hatékonyak és energiatakarékosak.</p>
//                         </div>
//                     </div>
//                     <div className="flex">
//                         <div className="ml-4">
//                             <h4 className="text-lg font-medium leading-6 dark:text-gray-900">ÜGYFÉLKÖZPONTÚ SZEMLÉLETMÓD</h4>
//                             <p className="mt-2 dark:text-gray-600">Az ügyfeleink elégedettsége a legfőbb prioritás számunkra. Minden projektnél szem előtt tartjuk az Ön igényeit és elvárásait, és azok alapján alakítjuk ki a legjobb megoldást. Rugalmasak vagyunk és mindent megteszünk azért, hogy Ön elégedett legyen a szolgáltatásainkkal.</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <img src="https://www.klimaman.hu/custom/klimaman/image/data/redesign/klima-szereles-szolgaltatas.png.webp?lastmod=1718772939.1665824146" className="h-[512px] rounded-3xl" />
//         </div>
//     </div>
// </section>
//     )
// }


export default function ChooseUs() {
    return (
        <section>
            <div className="container mx-auto px-6 lg:px-8  py-12 bg-[#cdcdcd69] shadow-lg rounded-3xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6">MIÉRT VÁLASSZON MINKET?</h2>
                        <div className="space-y-8">
                            <div className="flex items-start">
                                <div className="ml-4">
                                    <h4 className="text-lg font-medium leading-6 text-gray-900">MEGBÍZHATÓSÁG</h4>
                                    <p className="mt-2 text-gray-700">Tapasztalt csapatunk szakértői a klímaszerelés területén, akik precízen és gondosan végzik munkájukat.</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="ml-4">
                                    <h4 className="text-lg font-medium leading-6 text-gray-900">SZAKTUDÁS ÉS KÉPZETTSÉG</h4>
                                    <p className="mt-2 text-gray-700">Munkatársaink folyamatosan képezik magukat a legújabb klímatechnológiai fejlesztések terén. Ez biztosítja, hogy mindig a leginnovatívabb megoldásokat kínáljuk ügyfeleinknek, amelyek hatékonyak és energiatakarékosak.</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="ml-4">
                                    <h4 className="text-lg font-medium leading-6 text-gray-900">ÜGYFÉLKÖZPONTÚ SZEMLÉLETMÓD</h4>
                                    <p className="mt-2 text-gray-700">Az ügyfeleink elégedettsége a legfőbb prioritás számunkra. Minden projektnél szem előtt tartjuk az Ön igényeit és elvárásait, és azok alapján alakítjuk ki a legjobb megoldást. Rugalmasak vagyunk és mindent megteszünk azért, hogy Ön elégedett legyen a szolgáltatásainkkal.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <img src="https://www.klimaman.hu/custom/klimaman/image/data/redesign/klima-szereles-szolgaltatas.png.webp?lastmod=1718772939.1665824146" alt="Service Image" className="h-auto rounded-lg shadow-lg max-w-full" />
                    </div>
                </div>
            </div>
        </section>
    );
}