import "./Sidebar.scss";
import Links from "./links/Links";
import ToggleButton from "./toggleButton/ToggleButton";
import { useState } from "react";
import { motion } from "framer-motion";
const Sidebar = () => {
  const [open , setOpen] = useState(false)
  const variants ={
    open :{
      clipPath:"circle(1500px at 50px 50px)",
      transition: {
        type:"spring",
        // stiffness:20,
        // damping:40
      }
    },
    closed : {
      clipPath : "circle(30px at 50px 50px)",
      transition : {
        delay : 0.2,
        type: "spring",
        stiffness:200,
        damping : 40
      }
    }
  }
  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
