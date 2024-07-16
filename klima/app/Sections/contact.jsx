import PhoneIcon from "app/components/icons/Phone"
import MapIcon from "app/components/icons/Map"
import MailIcon from "app/components/icons/Mail"
import { TELEFONSZAM, EMAIL } from 'app/components/constdata';


export default function Contact() {
    return (
        <section>
        <div className="container m-10 p-6 py-12 mx-auto lg:px-8 bg-[#cdcdcd69] shadow-lg rounded-3xl">
            <div>
                <h2 className="text-3xl font-bold tracking-tight text-left sm:text-5xl dark:text-gray-900">KAPCSOLAT</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6 lg:h-80">
                <div>
                    <h3 className="text-2xl font-semibold mb-4">Telephely</h3>
                    <ul className="space-y-4">
                        <li className="flex items-center gap-1 duration-500 hover:scale-105">
                            <MapIcon></MapIcon>
                            <span className="text-lg">
                            1214 Kozmosz sétány 1.
                            </span>
                        </li>
                        <li className="flex items-center gap-1 duration-500 hover:scale-105">
                        <PhoneIcon></PhoneIcon>
                            <a rel="noopener noreferrer" href={"tel:" + TELEFONSZAM} className="text-lg">
                            {TELEFONSZAM}
                            </a>
                        </li>
                        <li className="flex items-center gap-1 duration-500 hover:scale-105">
                        <MailIcon></MailIcon>
                            <a rel="noopener noreferrer" href={"mailto:" + EMAIL} className="text-lg">
                            {EMAIL}
                            </a>
                        </li>
                        <li className="flex items-center gap-1 duration-500 hover:scale-105">
                       
                            <a rel="noopener noreferrer" href={"mailto:" + EMAIL} className="text-lg">
                            A kiszállás Pest vármegyén belül ingyenes.
                            </a>
                        </li>
                    </ul>
                </div>
            <div>
                <iframe
                className="rounded-3xl w-full h-full lg:h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2700.185269911374!2d19.05164249213116!3d47.408327327326376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741e7c5c40055eb%3A0xeda3781b46af43ec!2sBudapest%2C%20Kozmosz%20stny.%201%2C%201214%20Hungary!5e0!3m2!1sen!2sus!4v1721161560462!5m2!1sen!2sus"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            </div>
        </div>
    </section>

       
    )
}
