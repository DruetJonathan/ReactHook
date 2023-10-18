import { NavLink, useLoaderData } from "react-router-dom";
import { motion } from "framer-motion";
import { useToggle } from "./useToggle.js";
import { forwardRef } from "react";

export function Blog() {
    const posts = useLoaderData();
    const boxVariants = {
        visible: { x: 0, rotate: 0 },
        hidden: { x: 100, rotate: 45 },

    };
    const wrapperVariants = {
        visible: {opacity: 1 ,transition:{when:'beforeChildren',staggerChildren:.2}},
        hidden: {opacity: 0,transition:{when:'afterChildren',staggerChildren:.2}},
    }
    const [open, toggle] = useToggle(true);

    return (
        <>
            <h1>Mon blog</h1>
            <motion.div animate={open ? 'visible' : 'hidden'}
                variants={wrapperVariants}
            >
                <MotionBox variants={boxVariants}>1</MotionBox>
                <MotionBox variants={boxVariants}>2</MotionBox>
                <MotionBox variants={boxVariants}>3</MotionBox>
            </motion.div>
            <button onClick={toggle}>Changer état</button>
        </>
    );
}

const Box = forwardRef(({ children }, ref) => {
    return <div className="box" ref={ref}>{children}</div>;
});

const MotionBox = motion(Box);
