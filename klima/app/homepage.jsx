// import Services from "./Sections/services"
// import MainSection from "./Sections/mainSection"
// import ChooseUs from "./Sections/chooseUs"
// import Contact from "./Sections/contact"

// export default function HomePage({handleNavigation}){
//   return (
//       <div className="flex flex-col gap-32">
//         <MainSection handleNavigation={handleNavigation} ></MainSection>
//         <Services handleNavigation={handleNavigation}></Services>
//         <ChooseUs></ChooseUs>
//         <Contact></Contact>
//       </div>
//   )
// }

import Services from "./Sections/services";
import MainSection from "./Sections/mainSection";
import ChooseUs from "./Sections/chooseUs";
import Contact from "./Sections/contact";

export default function HomePage({ handleNavigation }) {
  return (
    <div className="flex flex-col gap-16 lg:gap-32">
      <MainSection handleNavigation={handleNavigation} />
      <Services handleNavigation={handleNavigation} />
      <ChooseUs />
      <Contact />
    </div>
  );
}