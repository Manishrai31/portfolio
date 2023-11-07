import React from "react";
import "./Portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
const items = [
  {
    id: 1,
    title: "React ECommerce",
    img: "https://images.pexels.com/photos/18972776/pexels-photo-18972776/free-photo-of-a-beach-with-people-walking-on-it-and-people-on-the-sand.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aspernatur pariatur eaque veniam fugiat. Quia sunt, explicabo molestias dignissimos error, quo illo non hic quaerat voluptatum quisquam, magni ad veniam?",
  },
  {
    id: 2,
    title: "Finance",
    img: "https://images.pexels.com/photos/16629834/pexels-photo-16629834/free-photo-of-a-tall-building-with-a-blue-sky-and-clouds.jpeg?auto=compress&cs=tinysrgb&w=800",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aspernatur pariatur eaque veniam fugiat. Quia sunt, explicabo molestias dignissimos error, quo illo non hic quaerat voluptatum quisquam, magni ad veniam?",
  },
  {
    id: 3,
    title: "Blog",
    img: "https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg?auto=compress&cs=tinysrgb&w=800",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aspernatur pariatur eaque veniam fugiat. Quia sunt, explicabo molestias dignissimos error, quo illo non hic quaerat voluptatum quisquam, magni ad veniam?",
  },
  {
    id: 4,
    title: "Music App",
    img: "https://images.pexels.com/photos/1493004/pexels-photo-1493004.jpeg?auto=compress&cs=tinysrgb&w=800",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aspernatur pariatur eaque veniam fugiat. Quia sunt, explicabo molestias dignissimos error, quo illo non hic quaerat voluptatum quisquam, magni ad veniam?",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset:["start start" , "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div ref={ref} className="imageContainer">
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}} >
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


const Portfolio = () => {
  const ref = useRef();
  // const useScroll = useScroll()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  // console.log("running");
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div className="progressBar" style={{ scaleX }}></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
