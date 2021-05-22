import React from "react";
import WorkCard from "../WorkCard";
import "./style.css";
import Beernuts from "../../assets/images/beernuts.png";
import WeatherApp from "../../assets/images/weather-dashboard-2.png";
import BookFinder from "../../assets/images/book-finder.png";

const Work = () => {
  const cardDetails = [
    {
      name: "BeerNuts",
      image: Beernuts,
      description:
        "BeerNuts allows users to find information on Colorado breweries. Technologies used include: Node, SQL, Express, Handlebars and was deployed using heroku.",
      github: "https://github.com/wylie-u/BeerNuts",
      app: "https://shrouded-reaches-33204.herokuapp.com/",
    },
    {
      name: "Weather Dashboard",
      image: WeatherApp,
      description:
        "Weather dashboard uses the OpenWeather API to allow the user to get various weather data based on location. Technologies used include, third-party APIs, local storage, html, css & javascript",
      github: "https://github.com/telder55/weather-dashboard",
      app: "https://telder55.github.io/weather-dashboard/",
    },
    {
      name: "Book Finder",
      image: BookFinder,
      description:
        "Book finder uses a combination of Google Book's Api & Ebay's API to retrieve information on books and the ability to view book listings on ebay directly from the page.",
      github: "https://github.com/raseward14/My_Cheap_Book_Finder",
      app: "https://raseward14.github.io/My_Cheap_Book_Finder/",
    },
  ];
  return (
    <div id="work-section">
      <WorkCard className="work-card" details={cardDetails[0]} />
      <WorkCard className="work-card" details={cardDetails[1]} />
      <WorkCard className="work-card" details={cardDetails[2]} />
    </div>
  );
};

export default Work;
