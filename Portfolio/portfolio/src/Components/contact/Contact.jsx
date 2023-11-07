import React from "react";
import "./Contact.scss";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const variants = {
  initial: {
    y: 400,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChild: 0.1,
    },
  },
};

const Contact = () => {
  //   const ref = useRef();
  //   const isInView = useInView();
  return (
    <motion.div
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1>Let's Work together</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <span>hello@react.dev</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Address</h2>
          <span>Hno abc PIN 125120</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Phone</h2>
          <span>+91 8222828123</span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        
        <form
          action=""
          initial={{ opacity: 0 }}
          transition={{ delay: 4 }}
          animate={{ opacity: 1 }}
        >
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea name="" rows={8} placeholder="Message" />
          <button>Send Message</button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
