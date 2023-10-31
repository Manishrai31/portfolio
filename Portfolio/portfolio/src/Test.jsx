import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
const Test = () => {
  const [open, setOpen] = useState(false);
  const variants = {
    visible:(i)=> ({
      opacity: 1,
      x: 100,
      transition: { delay : i*0.3 },
    }),
    hidden: { opacity: 0 },
  };
  const items = ["item1", "item2", "item3", "item4"];
  return (
    <div className="course">
      {/* <motion.div
        className="box"
        variants={variants}
        // initial={{ opacity: 0.5, scale: 0.5 }}
        // transition={{ duration: 2 }}
        // whileHover={{opacity:1 , scale:2}}
        // whileInView={{opacity :1,scale:1.2}}
        animate={open ? "visible" : "hidden"}
        drag
      ></motion.div>
    <button onClick={()=>setOpen(prev=> !prev)}>click</button> */}
      <motion.ul initial="hidden" animate="visible" variants={variants}>
        {items.map((item ,i ) => (
          <motion.li key={item} variants={variants} custom={i}>{item}</motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Test;
