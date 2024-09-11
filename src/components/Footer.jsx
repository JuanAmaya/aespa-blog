import FOOTERLINKS from "../data/FOOTERLINKS.json";
import FooterLink from "./FooterLink";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
      animate={{
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      }}
      viewport={{ once: true }}
      transition={{ delay: 3.4, duration: 1 }}
    >
      <div className="bg-mainBlue p-2 text-center mt-12">
        <span className="text-white text-4xl">✦ 에스파 ✦</span>
      </div>

      <div className="flex justify-center gap-8 m-4 flex-wrap">
        {FOOTERLINKS.map((link, i) => (
          <FooterLink key={i} name={link.name} socialUrl={link.socialLink} />
        ))}
      </div>

      <div className="flex justify-center mb-4">
        <img src="./Footer-Aespa.png" alt="Pink Aespa logo" className="w-96" />
      </div>
    </motion.footer>
  );
}
