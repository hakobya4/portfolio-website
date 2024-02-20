import React from "react";
import "./App.css";
import { motion } from "framer-motion";
import useMouse from "@react-hook/mouse-position";
import Navigation from "./Components/navigation";
import Home from "./Components/home";
import About from "./Components/about";
import Work from "./Components/work";
import Contact from "./Components/contact";

function App() {
  let mouseXPosition = 0;
  let mouseYPosition = 0;
  const ref = React.useRef(null);
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  });

  if (mouse.x !== null) {
    mouseXPosition = mouse.clientX;
  }

  if (mouse.y !== null) {
    mouseYPosition = mouse.clientY;
  }
  const variants = {
    default: {
      x: mouseXPosition,
      y: mouseYPosition,
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
  };
  const outerVariants = {
    default: {
      x: mouseXPosition,
      y: mouseYPosition,
      transition: {
        type: "spring",
        mass: 1,
      },
    },
  };
  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 28,
  };

  return (
    <div className="App" ref={ref}>
      <Navigation />
      <Home />
      <About />
      <Work />
      <Contact />
      <div className="screen">
        <motion.div
          className="cursor outer-cursor fixed-top"
          variants={outerVariants}
          animate="default"
        />
        <motion.div
          className="cursor inner-cursor fixed-top"
          transition={spring}
          variants={variants}
          animate="default"
        />
      </div>
    </div>
  );
}

export default App;
