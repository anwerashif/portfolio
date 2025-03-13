import { motion } from "framer-motion";

// variants for the stairs
const stairAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    },
};

// Calculate the reversed index for staggered delay
const reverseIndex = (index) => {
    const totalSteps = 6; // number of steps
    return totalSteps - index - 1;
}

const Stairs = () => {
  return (
    <>
        {/* render 6 motion divs, each representing a step of the stairs.
        Each div will have the same animation defined by the stairAnimation object.
        The delay for each div is calculated dynamically based on it's reversed index.
        Creating a staggered effect with decreasing delay for each subsequent step.
        */}
        {[...Array(6)].map((_, index) => {
            return (
                <motion.div
                    key={index}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={stairAnimation}
                    transition={{
                        duration: 0.4,
                        ease: "easeInOut",
                        delay: 0.1 * reverseIndex(index),
                    }}
                    className="h-full w-full bg-white relative"
                />
            );
        })}
    </>
  );
};

export default Stairs;