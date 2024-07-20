// export default function Caroussel() {
//     const images = [
//         { name: "RCOOL", src: "https://bodrogklima.hu/wp-content/uploads/2023/06/brand12-300x285.png"},
//         { name: "KLÍMASZERELÉS", src: "https://bodrogklima.hu/wp-content/uploads/2023/06/brand13-300x300.png"},
//         { name: "KLÍMASZERELÉS", src: "https://bodrogklima.hu/wp-content/uploads/2023/06/brand1.png"},
//         { name: "KLÍMASZERELÉS", src: "https://bodrogklima.hu/wp-content/uploads/2023/06/brand2-300x300.png"},
//         { name: "KLÍMASZERELÉS", src: "https://bodrogklima.hu/wp-content/uploads/2023/06/brand3-300x300.png"},
//         { name: "KLÍMASZERELÉS", src: "https://bodrogklima.hu/wp-content/uploads/2023/06/brand4.png"},
//       ];

//       const image = images.map(item =>
//         // eslint-disable-next-line @next/next/no-img-element
//         <img className="object-cover object-center h-52 aspect-square duration-500 hover:scale-125" src={item.src} alt={item.name} key={item.name} />
//       );

//     return (
//     <section className="bg-[#b6b6b600]">
//         <div className="container p-6 mx-auto space-y-6 lg:p-8 lg:space-y-8">
//             <div className="flex flex-wrap justify-center lg:justify-between">
//                 {image}
//             </div>
//         </div>
//     </section>
// )}

export default function Caroussel() {
    const images = [
        { name: "RCOOL", src: "https://bodrogklima.hu/wp-content/uploads/2023/06/brand12-300x285.png" },
        { name: "KLÍMASZERELÉS", src: "https://bodrogklima.hu/wp-content/uploads/2023/06/brand13-300x300.png" },
        { name: "KLÍMASZERELÉS", src: "https://bodrogklima.hu/wp-content/uploads/2023/06/brand1.png" },
        { name: "KLÍMASZERELÉS", src: "https://bodrogklima.hu/wp-content/uploads/2023/06/brand2-300x300.png" },
        { name: "KLÍMASZERELÉS", src: "https://bodrogklima.hu/wp-content/uploads/2023/06/brand3-300x300.png" },
        { name: "KLÍMASZERELÉS", src: "https://bodrogklima.hu/wp-content/uploads/2023/06/brand4.png" },
    ];

    const image = images.map(item => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
            className="object-cover object-center h-16 w-16 xsm:h-20 xsm:w-20 sm:h-24 sm:w-24 md:h-32 md:w-32 lg:h-40 lg:w-40 xl:h-52 xl:w-52 aspect-square duration-500 hover:scale-125"
            src={item.src}
            alt={item.name}
            key={item.name}
        />
    ));
    
    return (
        <section className="bg-[#b6b6b600]">
            <div className="container p-4 xsm:p-6 mx-auto space-y-4 xsm:space-y-6 lg:p-8 lg:space-y-8">
                <div className="flex flex-wrap justify-center gap-2 xsm:gap-4">
                    {image}
                </div>
            </div>
        </section>
    );
}