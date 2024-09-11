import { motion } from "framer-motion";

export default function LoadPageAnimation({ children, styles }) {
  return (
    <motion.div
      className={styles}
      initial={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
      animate={{
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      }}
      viewport={{ once: true }}
      transition={{ duration: 3.5 }}
    >
      {children}
    </motion.div>
  );
}
