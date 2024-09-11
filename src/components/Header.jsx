import { motion } from "framer-motion";

const NUM = 3;

export default function Header({ bannerENG, bannerKOR }) {
  return (
    <motion.header
      initial={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
      animate={{
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center">
        <img src="./Landing/logo.gif" alt="Aespa logo" className="w-128" />
        <div className="w-72 md:w-128 overflow-hidden mt-4">
          <div className="w-max flex flex-row flex-nowrap gap-1 text-3xl text-mainBlue font-bold italic">
            {[...Array(NUM)].map((i) => (
              <div className="carousel arialFont" key={i}>
                <span>★ {bannerENG}</span>
                <span>★ {bannerKOR}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.header>
  );
}
