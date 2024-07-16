// import { useState } from 'react';

// const ImageGallery = ({ productImages }) => {
//     const [currentImageIndex, setCurrentImageIndex] = useState(0);

//     const handleClickThumbnail = (index) => {
//         setCurrentImageIndex(index);
//     };

//     return (
//         <div className="flex gap-6 items-center">
//             <div className="w-1/4 flex-row">
//                 {productImages.map((image, index) => (
//                     <img
//                         key={index}
//                         src={image.image}
//                         className={`h-24 mb-2 object-contain cursor-pointer aspect-square  ${index === currentImageIndex ? 'border-2 border-gray-900' : ''}`}
//                         onClick={() => handleClickThumbnail(index)}
//                     />
//                 ))}
//             </div>
//             <div className="w-3/4 relative">
//                 <img src={productImages[currentImageIndex].image} alt={productImages.name} className="h-[512px] object-contain aspect-square" />
//             </div>
//         </div>
//     );
// };

// export default ImageGallery;


import { useState } from 'react';

const ImageGallery = ({ productImages }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleClickThumbnail = (index) => {
        setCurrentImageIndex(index);
    };

    return (
        <div className="flex gap-6 items-center">
            <div className="flex flex-col items-center">
                {productImages.map((image, index) => (
                    <img
                        key={index}
                        src={image.image}
                        className={`h-20 w-20 mb-2 object-contain cursor-pointer ${index === currentImageIndex ? 'border-2 border-gray-900' : 'border'}`}
                        onClick={() => handleClickThumbnail(index)}
                    />
                ))}
            </div>
            <div className="relative">
                <img src={productImages[currentImageIndex].image} alt={productImages.name} className="h-96 w-96 object-contain" />
            </div>
        </div>
    );
};

export default ImageGallery;
