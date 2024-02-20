import { motion } from "framer-motion";
import { useState, useRef } from "react";
import workList from "./workList";
import Times from "../images/times.png";
import { useWindowSize } from "@uidotdev/usehooks";

function Work(props) {
  const size = useWindowSize();
  const [selectedId, setSelectedId] = useState(null);
  const [canDrag, setCanDrag] = useState(false);
  const containerRefs = useRef([]);

  const handlePanEnd = (e, card) => {
    if (selectedId) {
    } else {
      setCanDrag(true);
      setSelectedId(card);
    }
  };

  function handleClose(e) {
    if (
      (e.target.id === "work" && selectedId) ||
      (e.target.className === "layout-cards" && selectedId) ||
      (e.target.className === "card" && selectedId)
    ) {
      setCanDrag(false);
      setSelectedId(null);
    }
  }
  function handleCloseEsc(e) {
    if (e.key === "Escape") {
      setCanDrag(false);
      setSelectedId(null);
    }
  }

  const backgroundRepeat = "no-repeat";
  const backgroundSize = "95% 70%";
  const backgroundPositionY = "15%";
  const backgroundPositionX = "50%";
  return (
    <div size={size} style={{ paddingTop: size.width <= 725 ? "10%" : "0" }}>
      <div
        tabIndex="0"
        onKeyDown={(e) => handleCloseEsc(e)}
        onClick={(e) => handleClose(e)}
        style={{
          backgroundImage: size.width >= 725 ? `url(${Times})` : "none",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          display: "flex",
        }}
      >
        <div
          id="work"
          style={
            size.width >= 725
              ? {
                  backgroundColor: "black",
                  width: "100px",
                  justifyContent: "left",
                  paddingLeft: "30px",
                  height: "50%",
                  borderRadius: "15px",
                }
              : {
                  backgroundColor: "black",
                  height: "30%",
                  padding: "10px",
                  borderRadius: "15px",
                }
          }
          className="title titlework"
        >
          W O R K
        </div>
        <div className="layout-cards" style={{ height: "100vh" }}>
          {workList.map((card, i) => (
            <motion.div
              className={selectedId === card ? "opened-card" : "card"}
              key={i}
              layout
              drag={selectedId === card ? "x" : false}
              dragConstraints={{
                left: canDrag ? -1600 : 0,
                right: 0,
                top: 0,
                bottom: 0,
              }}
              style={
                selectedId !== card
                  ? {
                      x: card.x,
                      y: card.y,
                      backgroundPosition: "center",
                      backgroundSize: workList[i].backgroundSize,
                      backgroundImage: `url(${workList[i].images.thumbnail}`,
                      backgroundRepeat: "no-repeat",
                      backgroundColor: " transparent",
                    }
                  : {}
              }
              whileHover={
                selectedId !== card
                  ? {
                      x: card.x,
                      y: card.y,
                      scale: 1.2,
                      backgroundColor: "black",
                    }
                  : {}
              }
              dragElastic={0.2}
              onClick={(e) => handlePanEnd(e, card)}
              ref={(el) => (containerRefs.current[card] = el)}
            >
              {selectedId === card && (
                <>
                  <div
                    className="cardiv "
                    style={{
                      color: workList[i].text,
                      backgroundColor: workList[i].backgroudCol,
                      backgroundImage: `url(${workList[i].images.src1})`,
                      backgroundSize: backgroundSize,
                      backgroundRepeat: backgroundRepeat,
                      backgroundPositionX: backgroundPositionX,
                      backgroundPositionY: backgroundPositionY,
                    }}
                  >
                    <p
                      className="workp workpTitle"
                      style={{
                        fontWeight: "bold",
                        fontSize: "50px",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <a
                        className="worklink"
                        href={workList[i].github}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          backgroundColor: workList[i].color,
                          marginBottom: "none",
                        }}
                      >
                        Github Rep
                      </a>
                      {workList[i].title}
                      <a
                        className="worklink"
                        href={workList[i].site}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          backgroundColor: workList[i].color,
                          marginBottom: "none",
                          opacity: workList[i].disabled,
                          pointerEvents: workList[i].pointer,
                        }}
                        disabled
                      >
                        View Site
                      </a>
                    </p>
                  </div>
                  <div
                    className="cardiv"
                    style={{
                      color: workList[i].text,
                      backgroundImage: `url(${workList[i].images.src2})`,
                      backgroundColor: workList[i].backgroudCol,
                      backgroundSize: backgroundSize,
                      backgroundRepeat: backgroundRepeat,
                      backgroundPositionX: backgroundPositionX,
                      backgroundPositionY: backgroundPositionY,
                    }}
                  >
                    <p className="workp">{workList[i].descrption}</p>
                  </div>

                  <div
                    className="cardiv"
                    style={{
                      color: workList[i].text,
                      backgroundImage: `url(${workList[i].images.src3})`,
                      backgroundColor: workList[i].backgroudCol,
                      backgroundSize: backgroundSize,
                      backgroundRepeat: backgroundRepeat,
                      backgroundPositionX: backgroundPositionX,
                      backgroundPositionY: backgroundPositionY,
                    }}
                  >
                    <p className="workp">Skills:{workList[i].skills}</p>
                  </div>
                </>
              )}
            </motion.div>
          ))}
          <motion.div
            className="dim-layer"
            animate={{ opacity: selectedId ? 0.3 : 0 }}
          />
        </div>
      </div>
    </div>
  );
}

export default Work;
