import { MdEmail } from "react-icons/md";
import H3 from "../title/H3";
import ContactCard from "../cards/ContactCard";
import { IoLocation } from "react-icons/io5";
import { BsTelephoneFill } from "react-icons/bs";

export default function ContactSection() {
  return (
    <section>
      <H3 className="text-center w-full">Hubungi Kami</H3>
      <p className="text-center text-lg mt-4">
        Punya pertanyaan atau butuh bantuan? Kami siap membantu!
      </p>
      <ul className="flex flex-col lg:flex-row items-center justify-center gap-4 my-10 ">
        <li className="w-full">
          <ContactCard
            icon={
              <MdEmail className="text-custom-olive-green mb-4" size={24} />
            }
            title="Dukungan Email"
            description="Tim kami akan merespons dengan cepat."
            buttontext="pemdeskare@gmail.com"
            onclick={() =>
              (window.location.href = "mailto:pemdeskare@gmail.com")
            }
          />
        </li>
        <li className="w-full">
          <ContactCard
            icon={
              <IoLocation className="text-custom-olive-green mb-4" size={24} />
            }
            title="Kunjungi Langsung"
            description="Datang dan temui kami di lokasi."
            buttontext="Jl. Kandangan No. 10, Kare, Kab. Madiun"
            onclick={() =>
              (window.location.href =
                "https://maps.app.goo.gl/CVprZFof3Vg6P7ph9")
            }
          />
        </li>
        <li className="w-full">
          <ContactCard
            icon={
              <BsTelephoneFill
                className="text-custom-olive-green mb-4"
                size={24}
              />
            }
            title="Telepon Kami"
            description="Kami tersedia selama jam kerja."
            buttontext="(+62) 8123-2501-567"
            onclick={() =>
              (window.location.href = "mailto:pemdeskare@gmail.com")
            }
          />
        </li>
      </ul>
    </section>
  );
}
