// import 'app/globals.css';
// import { manufacturerData } from 'app/components/manufacturersData';

// export default function Manufacturers() {

//       const image = manufacturerData.map(item =>
//         // eslint-disable-next-line @next/next/no-img-element
//         <a href={item.url} key={item.name}>
//           <img className="object-cover object-center h-52 aspect-square duration-500 hover:scale-125" src={item.src} alt={item.name}/>
//         </a>
//       );


//     return (
//            <div className="flex flex-col justify-center mt-28 mx-auto w-full">
//             <h2 className='text-6xl font-bold mx-auto'>GYÁRTÓK</h2>
//             <div className="flex justify-center mt-24 mx-auto w-full">
//                 <div className="grid grid-cols-4 gap-8 duration-500">
//                     {image}
//                 </div>
//             </div>
//            </div>
// )}


import 'app/globals.css';
import { manufacturerData } from 'app/components/manufacturersData';

export default function Manufacturers() {
    const images = manufacturerData.map(item => (
        // eslint-disable-next-line @next/next/no-img-element
        <a href={item.url} key={item.name}>
            <img
                className="object-cover object-center h-52 w-full duration-500 hover:scale-105 transition-transform"
                src={item.src}
                alt={item.name}
            />
        </a>
    ));

    return (
        <div className="flex flex-col justify-center mt-28 mx-auto w-full px-6">
            <h2 className='text-6xl font-bold mx-auto'>GYÁRTÓK</h2>
            <div className="flex justify-center mt-24 mx-auto w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 duration-500">
                    {images}
                </div>
            </div>
        </div>
    );
}