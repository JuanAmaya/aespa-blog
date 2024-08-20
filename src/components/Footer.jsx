import FOOTERLINKS from "../data/FOOTERLINKS.json";
import FooterLink from "./FooterLink";

export default function Footer() {
  return (
    <footer>
      <div className="bg-mainBlue p-2 text-center mt-12">
        <span className="text-white text-4xl">✦ 에스파 ✦</span>
      </div>

      <div className="flex justify-center gap-8 m-4 flex-wrap">
        {FOOTERLINKS.map((link, i) => (
          <FooterLink key={i} name={link.name} socialUrl={link.socialLink} />
        ))}
      </div>

      <div className="flex justify-center mb-4">
        <img src="/Footer-Aespa.png" alt="Pink Aespa logo" className="w-96" />
      </div>
    </footer>
  );
}
