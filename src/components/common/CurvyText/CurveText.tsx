import { FC } from "react";
import { motion, Variants, HTMLMotionProps } from "framer-motion";

interface Props extends HTMLMotionProps<"div"> {
  text: string;
  delay?: number;
  replay: boolean;
  duration?: number;
}

const WavyText: FC<Props> = ({
  text,
  delay = 0,
  duration = 0.05,
  replay,
  ...props
}: Props) => {
  const letters = Array.from(text);
  const isArabic = /^[\u0600-\u06FF]+$/.test(text); // Check if the text is in Arabic

  const container: Variants = {
    hidden: {
      opacity: 0,
      /*************  ✨ Codeium Command ⭐  *************/
      /**
       * The visible state for the container element.
       *
       * It will set the opacity to 1 and apply a transition to the children.
       * The transition will have a stagger effect with the given duration, and
       * a delay that is calculated by multiplying the given delay by the index
       * of the element.
       *
       * @param {number} [i=1] The index of the element.
       * @returns The visible state for the container element.
       */
      /******  1aa54080-1a25-495a-859f-3ffc00e62d0f  *******/
    },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: { staggerChildren: duration, delayChildren: i * delay },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.h1
      style={{
        display: "flex",
        overflow: "hidden",
        textAlign: isArabic ? "right" : "left", // Right alignment for Arabic
        direction: isArabic ? "rtl" : "ltr", // Right-to-left direction for Arabic
      }}
      variants={container}
      initial="hidden"
      animate={replay ? "visible" : "hidden"}
      {...props}
    >
      {letters.map((letter, index) => (
        <motion.span key={index} className="text-primary" variants={child}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default WavyText;
