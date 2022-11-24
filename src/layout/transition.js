import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

const Transition = ({ children }) => {
  const animateDuration = 1;
  const { pathname } = useLocation();

  const variants = {
    out: {
      opacity: 0,
      y: 50,
      transition: {
        duration: animateDuration,
      },
    },
    in: {
      opacity: 1,
      y: 0,
      transition: {
        duration: animateDuration,
        delay: 0.5,
      },
    },
  };

  return (
    <div className="effect">
      <AnimatePresence initial={false} exitBeforeEnter>
        <motion.div
          key={pathname}
          variants={variants}
          animate="in"
          initial="out"
          exit="out"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Transition;
