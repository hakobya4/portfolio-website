import rocket from "../images/rocket-spaceship.png";
import Ticker from "framer-motion-ticker";
import tickerImages from "./tickerImages";
import Resume from "../files/Resume.pdf";
function Home() {
  return (
    <>
      <h1
        className="title no-select"
        style={{
          backgroundImage: `url(${rocket})`,
          backgroundSize: "45%",
          backgroundPositionY: "75%",
          backgroundPositionX: "50%",
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: "column",
        }}
        id="home"
      >
        Hello, my name is Narek
        <a href={Resume} className="button" download>
          {" "}
          Download my CV{" "}
        </a>
      </h1>
      <div>
        <Ticker duration={20}>
          {tickerImages.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: tickerImages[index].color,
                height: "200px",
                width: "200px",
              }}
            >
              {tickerImages[index].svg}
            </div>
          ))}
        </Ticker>
      </div>
    </>
  );
}

export default Home;
