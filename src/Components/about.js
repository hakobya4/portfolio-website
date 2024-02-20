import React, { useState } from "react";

import stars from "./stars";
import { motion } from "framer-motion";
import Star from "../images/star.png";
import { useWindowSize } from "@uidotdev/usehooks";

function About() {
  const size = useWindowSize();
  const [selectedId, setSelectedId] = useState(false);
  const [hoverId, setHoverId] = useState(false);

  function openStar(star) {
    setSelectedId(star.id);
  }
  function closeStar() {
    setSelectedId(null);
  }

  function closeHover(star) {
    setHoverId(star.id);
  }

  return (
    <div
      size={size}
      id="about"
      className="no-select aboutsize"
      style={{ width: "100%" }}
    >
      <div className="titleabout">A B O U T - M E</div>
      <div
        style={{
          height: "58vh",
          display: "flex",
          margin: "none",
        }}
      >
        {stars.map((star, id) => (
          <div
            className="starwidth"
            key={id}
            style={{
              display: "flex",
              marginTop: stars[id].marginT,
              width: size.width >= 650 ? "50%" : "15%",
            }}
          >
            {selectedId === star.id && (
              <motion.div
                key={id}
                className="aboutstar"
                style={{
                  display: "flex",
                  position: "absolute",
                  backgroundColor: "black",
                  padding: "20px",
                  zIndex: 10,
                  color: "white",
                  fontSize: "15px",
                  width: "60%",
                  left: stars[id].left,
                  textAlign: "center",
                  borderRadius: "15px",
                }}
                onHoverEnd={() => closeStar()}
              >
                {stars[id].description}
              </motion.div>
            )}
            <motion.img
              style={{
                width: "70px",
                height: "70px",
                marginLeft: stars[id].position,
              }}
              whileHover={() => openStar(star)}
              onHoverStart={() => closeHover(star)}
              src={Star}
              alt="star"
              className="star"
            ></motion.img>
            {hoverId !== stars[id].id && (
              <motion.div
                className="hoverme"
                style={{ fontSize: "12px", color: "white" }}
              >
                (HOVER ME)
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
