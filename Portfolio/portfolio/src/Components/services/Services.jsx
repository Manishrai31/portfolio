import React from "react";
import "./Services.scss";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const box = [
  {
    id:1,
    title: "Branding",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum,voluptatibus aperiam quos odit sunt mollitia? A quae ut quis iuresoluta laboriosam vitae, et sit tenetur. Quis voluptates deserunt doloremque!",
    button: "Go",
  },
  {
    id:2,
    title: "Branding",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum,voluptatibus aperiam quos odit sunt mollitia? A quae ut quis iuresoluta laboriosam vitae, et sit tenetur. Quis voluptates deserunt doloremque!",
    button: "Go",
  },
  {
    id:3,
    title: "Branding",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum,voluptatibus aperiam quos odit sunt mollitia? A quae ut quis iuresoluta laboriosam vitae, et sit tenetur. Quis voluptates deserunt doloremque!",
    button: "Go",
  },
  {
    id:4,
    title: "Branding",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum,voluptatibus aperiam quos odit sunt mollitia? A quae ut quis iuresoluta laboriosam vitae, et sit tenetur. Quis voluptates deserunt doloremque!",
    button: "Go",
  },
];

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  const variants = {
    initial: {
      x: -500,
      y: 0,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
    //   whileInView="animate"
    animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}> Unique </motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>For Your </motion.b> Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        {box.map((item) => {
          return (
            <motion.div
              className="box"
              whileHover={{ backgroundColor: " lightgray", color: "black" }}
              key={item.id}
            >
              <h2>{item.title}</h2>
              <p>{item.text}</p>
              <button>{item.button}</button>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Services;
