import React, { useEffect, useState } from "react";
import WorkCard from "../WorkCard";
import WorkModal from "../Modal";
import "./style.css";
import Beernuts from "../../assets/images/beernuts.png";
import WeatherApp from "../../assets/images/weather-dashboard-2.png";
import BookFinder from "../../assets/images/book-finder.png";
import FitnessTracker from "../../assets/images/fitness-tracker.png";
import EmployeeDirectory from "../../assets/images/employee-directory.png";

import { Col, Row, Container } from "../Grid";

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
    {
      name: "Fitness Tracker",
      image: FitnessTracker,
      description:
        "This Fitness tracker app allows users to log their workouts and view data in an elegant fashion.",
      github: "https://github.com/telder55/workout-tracker",
      app: "https://frozen-reef-51961.herokuapp.com/",
    },
    {
      name: "Employee Directory",
      image: EmployeeDirectory,
      description:
        "This app allows the user to view a table of employees which includes a photo, first and last name, email and phone number. The table can be sorted by first name and users can search employees by first or last name.",
      github: "https://github.com/telder55/employee-directory",
      app: "https://telder55.github.io/employee-directory/",
    },
    {
      name: "SEO Dashboard",
      image: "",
      description: "This project is currently in the works!",
      github: "",
      app: "",
    },
  ];

  return (
    <div id="work-section">
      <Row>
        <Col size="sm-4">
          <WorkCard className="work-card" details={cardDetails[0]} />
        </Col>
        <Col size="sm-4">
          <WorkCard className="work-card" details={cardDetails[1]} />
        </Col>
        <Col size="sm-4">
          <WorkCard className="work-card" details={cardDetails[2]} />
        </Col>
      </Row>
      <Row>
        <Col size="sm-4">
          <WorkCard className="work-card" details={cardDetails[3]} />
        </Col>
        <Col size="sm-4">
          <WorkCard className="work-card" details={cardDetails[4]} />
        </Col>
        <Col size="sm-4">
          <WorkCard className="work-card" details={cardDetails[5]} />
        </Col>
      </Row>
    </div>
  );
};

export default Work;
