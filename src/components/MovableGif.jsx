import { motion } from "framer-motion";

export default function MovableGif({ gifSrc, gifAlt, styles }) {
  return (
    <motion.img
      src={gifSrc}
      alt={gifAlt}
      className={styles}
      drag
      dragConstraints={{
        top: -50,
        left: -50,
        right: 50,
        bottom: 50,
      }}
      style={{ touchAction: "none" }}
    />
  );
}
