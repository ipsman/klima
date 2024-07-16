import PhoneIcon from "app/components/icons/Phone"
import MailIcon from "../icons/Mail";
import { TELEFONSZAM, EMAIL } from 'app/components/constdata';

export default function MainNavBar() {
    return (
          //  <nav className="flex justify-between relative z-50 w-[96%] bg-[#ffffff00] backdrop-blur-md border-b-4 border-b-[#00000000] shadow-sm py-6 mx-10 sm:text-lg md:text-xl lg:text-2xl">
          //      <a rel="noopener noreferrer" href="/"><img src="/icon.jfif" alt="Logo" className="h-16 -my-4 duration-500 hover:scale-105"/></a>
          //      <div className="static">
          //           <ul className="content-center justify-self-end items-stretch hidden space-x-3 lg:flex">
          //                <li className="flex">
          //                     <a rel="noopener noreferrer" href={"tel:" + TELEFONSZAM} className="flex items-center px-4 -mb-1 gap-2 duration-500 hover:scale-105"><PhoneIcon></PhoneIcon> {TELEFONSZAM}</a>
          //                </li>
          //                <li className="flex">
          //                     <a rel="noopener noreferrer" href={"mailto:" + EMAIL} className="flex items-center px-4 -mb-1 gap-2 duration-500 hover:scale-105"><MailIcon></MailIcon> {EMAIL}</a>
          //                </li>
          //           </ul>
          //      </div>
          //  </nav>

          <nav className="flex justify-between relative z-50 lg:w-[96%] bg-[#ffffff00] backdrop-blur-md border-b-4 border-b-[#00000000] shadow-sm py-6 mx-10 sm:text-lg md:text-xl lg:text-2xl">
          <a rel="noopener noreferrer" href="/" className="flex items-center gap-2">
              <img src="/icon.jfif" alt="Logo" className="h-16 -my-4 duration-500 hover:scale-105" />
          </a>
          <div className="flex gap-4 lg:hidden items-center align-center"> {/* Mobile navigation icons */}
              <a rel="noopener noreferrer" href={"tel:" + TELEFONSZAM} className="flex items-center px-2 py-1 rounded-lg transition duration-300">
                  <PhoneIcon />
              </a>
              <a rel="noopener noreferrer" href={"mailto:" + EMAIL} className="flex items-center px-2 py-1 rounded-lg transition duration-300 ml-auto">
                  <MailIcon />
                  <span className="hidden lg:inline-block ml-2">{EMAIL}</span> {/* Display email text on desktop */}
              </a>
          </div>
          <div className="static hidden lg:flex"> {/* Desktop navigation items */}
              <ul className="content-center justify-self-end items-stretch hidden space-x-3 lg:flex">
                  <li className="flex">
                      <a rel="noopener noreferrer" href={"tel:" + TELEFONSZAM} className="flex items-center px-4 -mb-1 gap-2 duration-500 hover:scale-105">
                          <PhoneIcon />
                          {TELEFONSZAM}
                      </a>
                  </li>
                  <li className="flex">
                      <a rel="noopener noreferrer" href={"mailto:" + EMAIL} className="flex items-center px-4 -mb-1 gap-2 duration-500 hover:scale-105">
                          <MailIcon />
                          {EMAIL}
                      </a>
                  </li>
              </ul>
          </div>
      </nav>
)}