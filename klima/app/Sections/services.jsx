// import ServiceItems from "./Items/serviceItems"

// export default function Services({handleNavigation}) {
//     return (
//            <div className="flex justify-center">
//                 <ServiceItems handleNavigation={handleNavigation}></ServiceItems>
//            </div>
// )}


import ServiceItems from "./items/serviceItems";

export default function Services({ handleNavigation }) {
    return (
        <div className="flex justify-center">
            <ServiceItems handleNavigation={handleNavigation} />
        </div>
    );
}