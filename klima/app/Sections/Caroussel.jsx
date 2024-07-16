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
            className="object-cover object-center h-24 w-24 sm:h-32 sm:w-32 md:h-40 md:w-40 lg:h-52 lg:w-52 aspect-square duration-500 hover:scale-125"
            src={item.src}
            alt={item.name}
            key={item.name}
        />
    ));

    return (
        <section className="bg-[#b6b6b600]">
            <div className="container p-6 mx-auto space-y-6 lg:p-8 lg:space-y-8">
                <div className="flex flex-wrap justify-center gap-4">
                    {image}
                </div>
            </div>
        </section>
    );
}