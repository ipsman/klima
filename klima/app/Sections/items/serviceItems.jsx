// import HouseIcon from "app/components/icons/House";
// import CogIcon from "app/components/icons/Cog";
// import WrenchIcon from "app/components/icons/Wrench";

// export default function ServiceItems({handleNavigation}){
//     const services = [
//         { name: "KLÍMASZERELÉS", text: "Lakossági, komfort magasoldalfali klíma berendezés telepítése és egyéb munkálatok.", icon: <HouseIcon />},
//         { name: "JAVÍTÁS, SZERELÉS", text: "Lakossági, komfort klímaberendezések szervízelése és javítása.", icon: <WrenchIcon />},
//         { name: "KARBANTARTÁS", text: "Lakossági klímaberendezés karbantartása", icon: <CogIcon className="hover:stroke-[#ffe065]" />},
//       ];
  
//       const listItems = services.map(item =>
//         <div key={item.name} className="grid grid-flow-row border-2 rounded-lg p-5 w-[280px] h-[320px] shadow-lg hover:border-[#ffe065] hover:scale-105 duration-500">
//           {item.icon}
//           <h3 className="text-2xl font-semibold">{item.name}</h3>
//           <p className="text-lg">{item.text}</p>
//           <a onClick={(e) => handleNavigationClick(e, "services")} className="underline text-[#434e87]">Tudj meg többet</a>
//         </div>
//       );

//       const handleNavigationClick = (event, page) => {
//         event.preventDefault();
//         handleNavigation(page);
//     };

//     return (
//             <div className="grid grid-flow-col my-12 gap-5">
//                 {listItems}
//             </div>
//     )
//   }


import HouseIcon from "app/components/icons/House";
import CogIcon from "app/components/icons/Cog";
import WrenchIcon from "app/components/icons/Wrench";

export default function ServiceItems({ handleNavigation }) {
    const services = [
        { name: "KLÍMASZERELÉS", text: "Lakossági, komfort magasoldalfali klíma berendezés telepítése és egyéb munkálatok.", icon: <HouseIcon /> },
        { name: "JAVÍTÁS, SZERELÉS", text: "Lakossági, komfort klímaberendezések szervízelése és javítása.", icon: <WrenchIcon /> },
        { name: "KARBANTARTÁS", text: "Lakossági klímaberendezés karbantartása", icon: <CogIcon className="hover:stroke-[#ffe065]" /> },
    ];

    const handleNavigationClick = (event, page) => {
        event.preventDefault();
        handleNavigation(page);
    };

    const listItems = services.map((item, index) => (
        <div key={index} className="max-w-xs mx-auto bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-500 transform hover:scale-105 cursor-pointer">
            <div className="p-4">
                <div className="flex justify-center">
                    {item.icon}
                </div>
                <div className="mt-2 text-center">
                    <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                    <p className="text-base">{item.text}</p>
                    <a href="#" onClick={(e) => handleNavigationClick(e, "services")} className="block mt-4 text-blue-500 hover:underline">Tudj meg többet</a>
                </div>
            </div>
        </div>
    ));

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {listItems}
        </div>
    );
}