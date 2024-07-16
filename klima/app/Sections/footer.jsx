// import PhoneIcon from "app/components/icons/Phone"
// import MapIcon from "app/components/icons/Map"
// import MailIcon from "app/components/icons/Mail"
// import FacebookIcon from "app/components/icons/Facebook";

// import { TELEFONSZAM, EMAIL, FACEBOOK } from 'app/components/constdata';
// import NavItems from "app/components/navitems";

// export default function Footer( { handleNavigation } ) {
//     return (
//         <div className="h-auto w-full z-10 mt-[250px] bg-[#cdcdcd69]">
//             <div className="flex justify-center">
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6 lg:h-80">
//                             <ul className="space-y-4">
//                                 <li className="flex items-center gap-1 duration-500 hover:scale-105">
//                                     <MapIcon></MapIcon>
//                                     <span className="text-lg">
//                                     2030 Érd Bodrog Utca 25.
//                                     </span>
//                                 </li>
//                                 <li className="flex items-center gap-1 duration-500 hover:scale-105">
//                                 <PhoneIcon></PhoneIcon>
//                                     <a rel="noopener noreferrer" href={"tel:" + TELEFONSZAM} className="text-lg">
//                                     {TELEFONSZAM}
//                                     </a>
//                                 </li>
//                                 <li className="flex items-center gap-1 duration-500 hover:scale-105">
//                                 <MailIcon></MailIcon>
//                                     <a rel="noopener noreferrer" href={"mailto:" + EMAIL} className="text-lg">
//                                     {EMAIL}
//                                     </a>
//                                 </li>
//                                 <li className="flex items-center gap-1 duration-500 hover:scale-105">
//                                 <FacebookIcon></FacebookIcon>
//                                     <a rel="noopener noreferrer" href={FACEBOOK.link} className="text-lg">
//                                     {FACEBOOK.name}
//                                     </a>
//                                 </li>
//                             </ul>
//                 </div>
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6 lg:h-80">
//                     <NavItems style="space-y-4" handleNavigation={handleNavigation}></NavItems>
//                 </div>

//             </div>
                
//             <div className="mx-5 grid grid-rows-1 justify-center justify-items-center gap-6 my-4">
//                 <p className="text-xl">Copyright © Fányi Klima 2024 | Made by: MateDevs</p>
//             </div>
//         </div>
//     )
// }


import PhoneIcon from "app/components/icons/Phone";
import MapIcon from "app/components/icons/Map";
import MailIcon from "app/components/icons/Mail";
import FacebookIcon from "app/components/icons/Facebook";

import { TELEFONSZAM, EMAIL, FACEBOOK } from 'app/components/constdata';
import NavItems from "app/components/navitems";

export default function Footer({ handleNavigation }) {
    return (
        <div className="h-auto w-full z-10 mt-20 bg-[#cdcdcd69]">
            <div className="flex flex-col lg:flex-row justify-center p-6 lg:p-12">
                <div className="grid grid-cols-1 gap-8 lg:w-1/2">
                    <ul className="space-y-4">
                        <li className="flex items-center gap-1 duration-500 hover:scale-105">
                            <MapIcon />
                            <span className="text-lg">1214 Kozmosz sétány 1.</span>
                        </li>
                        <li className="flex items-center gap-1 duration-500 hover:scale-105">
                            <PhoneIcon />
                            <a rel="noopener noreferrer" href={"tel:" + TELEFONSZAM} className="text-lg">
                                {TELEFONSZAM}
                            </a>
                        </li>
                        <li className="flex items-center gap-1 duration-500 hover:scale-105">
                            <MailIcon />
                            <a rel="noopener noreferrer" href={"mailto:" + EMAIL} className="text-lg">
                                {EMAIL}
                            </a>
                        </li>
                        <li className="flex items-center gap-1 duration-500 hover:scale-105">
                            <FacebookIcon />
                            <a rel="noopener noreferrer" href={FACEBOOK.link} className="text-lg">
                                {FACEBOOK.name}
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="grid grid-cols-1 gap-8 mt-6 lg:mt-0 lg:w-1/2">
                    <NavItems style="space-y-4" handleNavigation={handleNavigation} />
                </div>
            </div>
            <div className="text-center my-4">
                <p className="lg:text-xl">Copyright © Fányi Klima 2024 | Made by: MateDevs</p>
            </div>
        </div>
    );
}