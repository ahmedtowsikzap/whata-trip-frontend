import { motion } from "framer-motion";
import React from "react";
import imgm from "../../../Assets/images/france.jpg";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from 'react-router-dom';

const Place = ({ service }) => {
  const { name, img, description} = service
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: 0.3 });
  if (view) {
    controls.start("show");
  } else {
    controls.start("hidden");
  }
  const scrollReveal = {
    hidden: { opacity: 0, scale: 1.1, transition: { duration: 0.3 } },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
      },
    },
  };
  return (
    <div>
      <motion.div 
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
      
      className="mt-8">
        <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg" src={service.img} alt="" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
               {service.name}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {service.description}
            </p>
            <Link to={"/spots"}
              className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              More Info
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Place;
