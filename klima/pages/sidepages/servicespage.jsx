// import { prices } from 'app/components/constdata';

// export default function ServicesPage() {
//   const airConditioners = [
//     {
//       name: "KLIMASZERELÉS",
//       descriptions: [
//         "ALAPSZERELÉS",
//         "3 MÉTER CSÖVEZÉSI TÁVOLSÁGIG! MAXIMUM: 5 KW TELJESÍTMÉNYIG!",
//         `${prices[0].basePrice} Ft`,
//       ],
//       features: 
//       ["Összekötő csövezetek, falon kívüli dekor csatornában vezetve. ( 3 MÉTER )",
//          "Csepp víz elvezetés a hűtőköri csövezetek nyomvonal kiépítése mellett a kültéri egység irányába lejtve és kicsöpögtetve.", 
//          "A kültéri egység, munkavédelmi és biztonsági szempontokat figyelembe véve, létráról a homlokzati falra maximum 4 m magasságra szerelve, 1 főfal átfúrással , maximum: 50 mm furatátmérővel ( maximum 50 cm tégla, vagy 35 cm beton falvastagságig!) , (ettől vastagabb falazatok, és esetleges kültéri szerelési magasság, vagy más telepítési pozíciók (pld: tető), vagy csepp víz elvezetés (pld: szivattyú alkalmazása), egyedi árajánlatot igényelnek!)",
//          "A hálózati betáp vezeték kiépítését a készüléktől négy méteres hosszúságig. Az elektromos betáp kialakítása minden esetben dugvillával, konnektorba történik (Ha nincs előre kialakított betáp). Az elektromos betáp kiépítését egyéni igények esetén villanyszerelő szakemberrel kell kiépíttetni!",
//          "A szakszerű beüzemeléshez szükséges szerelési anyagok, például: kültéri egységhez homlokzati fali tartókonzol (maximum: 550mm), vagy földre helyezhető műanyag talpkonzol.",
//          "(Speciális talaj-tetőkonzol nem tartozik az alapszerelési árba!)",
//          "5kW feletti és minden egyéb az alapszerelési telepítéstől eltérő, valamint nem lakossági jellegű kivitelezés, egyedi árajánlatot igényel!",
//          `Panellakások esetében a vasalt betonfal átfúrása miatt ${prices[0].vasaltBeton} Ft pluszköltséget számolunk fel!`,],
    
//     },
//     {
//       name: "KLÍMA KARBANTARTÁS",
//       descriptions: [
//         "Szolgáltatásaink közé tartozik a klímakarbantartás és szervizelés, amelyek nélkülözhetetlenek a klímaberendezések hatékony és megbízható működéséhez. Szakértőink rendszeresen felülvizsgálják klímáit, megtisztítják a szűrőket, eltávolítják a port és más szennyeződéseket, valamint ellenőrzik a rendszer teljesítményét. Ezáltal biztosítjuk, hogy klímái optimális hűtést vagy fűtést nyújtsanak, miközben minimalizáljuk az energiaveszteséget.",
//         "AZ ÁRAT A KLÍMA SZENNYEZETTSÉGÉTŐL FÜGGŐEN HATÁROZZUK MEG, AMIT A MUNKA MEGKEZDÉSE ELŐTT EGYEZTETÜNK",
//         `Teljes körű klímatisztítás csomag - ${prices[1].kulteri} Ft - A kül- és beltéri egységek teljes körű karbantartása mosózsákos vizes tisztítással`,
//         `Alap klíma karbantartás csomag -  ${prices[1].belteri} Ft - A beltéri egység tisztítása habos fertőtlenítése.`,
//         "Amennyiben több klímára vonatkozóan szeretné igénybe venni a fenti szolgáltatások valamelyikét, a végösszegből kedvezményt biztosítunk. Karbantartás díjak alanyi áfamentes kisadózós összegek!",
//       ],
//       features: ["Szakértelem és tapasztalat", "Rugalmasság", "Személyre szabott megoldások", "Megbízhatóság", "Pontosság"],
     
//     },
//   ];

//     return (
//       <div className="h-full w-screen font-normal scroll-smooth text-black bg-[#ffffff] mt-20 flex flex-col justify-between relative duration-300">
//         <main className="flex flex-col items-center mt-10">
//           <section className="container mx-auto p-6 bg-gray-100 rounded-3xl">
//             <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-gray-900 mb-10">SZOLGÁLTATÁSAINK</h2>
//             <div className="grid md:grid-cols-2 gap-8">
//               {airConditioners.map((ac) => (
//                 <div key={ac.name} className="border-2 rounded-lg p-5 bg-white shadow-lg duration-300 hover:border-[#ffe065]">
//                   <div className="flex items-center mb-4">
//                     <h3 className="text-2xl font-bold ml-2">{ac.name}</h3>
//                   </div>
//                   {ac.descriptions.map((desc, index) => (
//                       <p key={index} className="text-lg mb-4">{desc}</p>
//                     ))}
//                   <ul className="list-disc pl-5">
//                     {ac.features.map((feature, index) => (
//                       <li key={index} className="mb-2">{feature}</li>
//                     ))}
//                   </ul>
//                 </div>
//               ))}
//             </div>
//           </section>
//         </main>
//       </div>
//     );
//   }

import { prices } from 'app/components/constdata';

export default function ServicesPage() {
  const airConditioners = [
    {
      name: "KLIMASZERELÉS",
      descriptions: [
        "ALAPSZERELÉS",
        "3 MÉTER CSÖVEZÉSI TÁVOLSÁGIG! MAXIMUM: 3,5 KW TELJESÍTMÉNYIG!",
        `${prices[0].basePrice} Ft`,
      ],
      features: [
        "Összekötő csövezetek, falon kívüli dekor csatornában vezetve. ( 3 MÉTER )",
        "Csepp víz elvezetés a hűtőköri csövezetek nyomvonal kiépítése mellett a kültéri egység irányába lejtve és kicsöpögtetve.",
        "A kültéri egység, munkavédelmi és biztonsági szempontokat figyelembe véve, létráról a homlokzati falra maximum 4 m magasságra szerelve, 1 főfal átfúrással, maximum: 50 mm furatátmérővel ( maximum 50 cm tégla, vagy 35 cm beton falvastagságig!), (ettől vastagabb falazatok, és esetleges kültéri szerelési magasság, vagy más telepítési pozíciók (pld: tető), vagy csepp víz elvezetés (pld: szivattyú alkalmazása), egyedi árajánlatot igényelnek!)",
        "A hálózati betáp vezeték kiépítését a készüléktől négy méteres hosszúságig. Az elektromos betáp kialakítása minden esetben dugvillával, konnektorba történik (Ha nincs előre kialakított betáp). Az elektromos betáp kiépítését egyéni igények esetén villanyszerelő szakemberrel kell kiépíttetni!",
        "A szakszerű beüzemeléshez szükséges szerelési anyagok, például: kültéri egységhez homlokzati fali tartókonzol (maximum: 550mm), vagy földre helyezhető műanyag talpkonzol.",
        "(Speciális talaj-tetőkonzol nem tartozik az alapszerelési árba!)",
        "3,5 KW feletti és minden egyéb az alapszerelési telepítéstől eltérő, valamint nem lakossági jellegű kivitelezés, egyedi árajánlatot igényel!",
        `Panellakások esetében a vasalt betonfal átfúrása miatt ${prices[0].vasaltBeton} Ft pluszköltséget számolunk fel!`,
      ],
    },
    {
      name: "KLÍMA KARBANTARTÁS",
      descriptions: [
        "Szolgáltatásaink közé tartozik a klímakarbantartás és szervizelés, amelyek nélkülözhetetlenek a klímaberendezések hatékony és megbízható működéséhez. Szakértőink rendszeresen felülvizsgálják klímáit, megtisztítják a szűrőket, eltávolítják a port és más szennyeződéseket, valamint ellenőrzik a rendszer teljesítményét. Ezáltal biztosítjuk, hogy klímái optimális hűtést vagy fűtést nyújtsanak, miközben minimalizáljuk az energiaveszteséget.",
        "AZ ÁRAT A KLÍMA SZENNYEZETTSÉGÉTŐL FÜGGŐEN HATÁROZZUK MEG, AMIT A MUNKA MEGKEZDÉSE ELŐTT EGYEZTETÜNK",
        `Teljes körű klímatisztítás csomag - ${prices[1].kulteri} Ft - A kül- és beltéri egységek teljes körű karbantartása mosózsákos vizes tisztítással`,
        `Alap klíma karbantartás csomag -  ${prices[1].belteri} Ft - A beltéri egység tisztítása habos fertőtlenítése.`,
        "Amennyiben több klímára vonatkozóan szeretné igénybe venni a fenti szolgáltatások valamelyikét, a végösszegből kedvezményt biztosítunk. Karbantartás díjak alanyi áfamentes kisadózós összegek!",
      ],
      features: [
        "Szakértelem és tapasztalat",
        "Rugalmasság",
        "Személyre szabott megoldások",
        "Megbízhatóság",
        "Pontosság",
      ],
    },
  ];

  return (
    <div className="min-h-screen w-screen font-normal scroll-smooth text-black bg-[#ffffff] mt-20 flex flex-col justify-between relative duration-300">
      <main className="flex flex-col items-center mt-10">
        <section className="container mx-auto p-6 bg-gray-100 rounded-3xl shadow-lg">
          <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl text-gray-900 mb-10">SZOLGÁLTATÁSAINK</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {airConditioners.map((ac) => (
              <div key={ac.name} className="border-2 rounded-lg p-5 bg-white shadow-lg duration-300 hover:border-[#ffe065]">
                <div className="flex items-center mb-4">
                  <h3 className="text-2xl font-bold ml-2">{ac.name}</h3>
                </div>
                {ac.descriptions.map((desc, index) => (
                  <p key={index} className="text-lg mb-4">{desc}</p>
                ))}
                <ul className="list-disc pl-5">
                  {ac.features.map((feature, index) => (
                    <li key={index} className="mb-2">{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}