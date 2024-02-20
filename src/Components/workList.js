import Meet1 from "../images/Meet1.png";
import Meet2 from "../images/Meet2.png";
import Meet3 from "../images/Meet3.png";
import Meet from "../images/Meet.png";
import Fave1 from "../images/Fave1.png";
import Fave2 from "../images/Fave2.png";
import Fave3 from "../images/Fave3.png";
import Fave from "../images/Fave.png";
import MyMove1 from "../images/MyMove1.png";
import MyMove2 from "../images/MyMove2.png";
import MyMove3 from "../images/MyMove3.png";
import MyMove from "../images/MyMove.png";
import Api1 from "../images/Api1.png";
import Api2 from "../images/Api2.png";
import Api3 from "../images/Api3.png";
import Api from "../images/Api.png";
import Poke1 from "../images/Poke1.png";
import Poke2 from "../images/Poke2.png";
import Poke3 from "../images/Poke3.png";
import Poke from "../images/Poke.png";
import Zest1 from "../images/Zest1.jpg";
import Zest2 from "../images/Zest2.png";
import Zest3 from "../images/Zest3.png";
import Zest from "../images/Zest.png";

const workList = [
  {
    id: 1,
    title: "MyMovies",
    descrption:
      "My Movies is a single-page application(SPA) created using React JavaScript, an open-source front-end JavaScript library, allowing users to register, log in, browse movies, add them to their favorites, etc.",
    skills: " React, Bootstrap, Parcel, JavaScript, HTML, CSS",
    images: { thumbnail: MyMove, src1: MyMove1, src2: MyMove2, src3: MyMove3 },
    color: "rgb(0, 102, 106)",
    github: "https://github.com/hakobya4/movie_api_client",
    site: "https://mymovies-narek.netlify.app",
    backgroudCol: "black",
    backgroundSize: "90%",
    text: "white",
  },
  {
    id: 2,
    title: "Movie API",
    descrption:
      "This project is a RESTful API created by Node Js and Express. The API holds information regarding movies (genre/ director /summary) and gives the ability to have users log in, register, add movies to the user's favorites list, log out, and delete users. This is in part due to a MongoDB database.",
    skills: " Node.js, Express.js, MongoDB, Mongoose, Cors",
    images: { thumbnail: Api, src1: Api1, src2: Api2, src3: Api3 },
    color: "blue",
    github: "https://github.com/hakobya4/movie_api",
    site: "https://movie-api-myflix-39dfea723223.herokuapp.com",
    backgroudCol: "black",
    backgroundSize: "70%",
    text: "white",
  },
  {
    id: 3,
    title: "Pokedex",
    descrption:
      "Pokedex is designed with HTML, CSS, and ES6+ JavaScript to display 150 Pokemon retrieved from an external API. This app uses promises, bootstrap modals navbar, and Pokemon API to fetch and display Pokemon information such as name height and picture. It also has a search function.",
    skills: " Bootstrap, HTML, CSS, API",
    images: { thumbnail: Poke, src1: Poke1, src2: Poke2, src3: Poke3 },
    color: "#fdc447",
    github: "https://github.com/hakobya4/prototype",
    site: "https://hakobya4.github.io/prototype/",
    backgroudCol: "white",
    backgroundSize: "90%",
    text: "black",
  },
  {
    id: 4,
    title: "ZestFriends",
    descrption:
      "Zest Friends is an app where users can communicate with each other. Built for mobile devices using React Native. The app provides users with a chat interface and options to share images and their location.",
    skills:
      " React Native, GiftedChat, Firestore Database, Firebase Cloud Storage, AsyncStorage, Expo",
    images: { thumbnail: Zest, src1: Zest1, src2: Zest2, src3: Zest3 },
    color: "rgba(255,165,0)",
    github: "https://github.com/hakobya4/hello-world",
    site: "none",
    backgroudCol: "black",
    backgroundSize: "60%",
    text: "white",
    disabled: "0.5",
    pointer: "none",
  },
  {
    id: 5,
    title: "FAVEFLIX",
    descrption:
      "FaveFlix is an app where users can register and log in, and find a list of movies that they can add to their favorites list. Users can see the summary, director, and genre information of each movie. Users can also change their user information, or delete their user.",
    skills: " Angular, Typescript",
    images: { thumbnail: Fave, src1: Fave1, src2: Fave2, src3: Fave3 },
    color: "rgb(0, 102, 106)",
    github: "https://github.com/hakobya4/myFlix-Angular-client",
    site: "https://hakobya4.github.io/myFlix-Angular-client/welcome",
    backgroudCol: "rgb(189, 189, 252)",
    backgroundSize: "70%",
    text: "black",
  },
  {
    id: 6,
    title: "MEET APP",
    descrption:
      "Serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.",
    skills: " React Testing Library, OAuth2, Jest-Cucumber, Puppeteer",
    images: { thumbnail: Meet, src1: Meet1, src2: Meet2, src3: Meet3 },
    color: "rgb(210, 175, 255)",
    github: "https://github.com/hakobya4/meet",
    site: "https://hakobya4.github.io/meet/",
    backgroudCol: "white",
    backgroundSize: "60%",
    text: "black",
  },
];

export default workList;
