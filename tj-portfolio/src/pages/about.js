import React from "react";
import { Container } from "../components/Grid";

function About() {
  return (
    <Container fluid>
      <div id="bio">
        <h2>A brief bio...</h2>
        <div className="flex-parent">
          <p>
            I am an aspiring web developer with a background in event
            production. I have spent the past six years in the events industry
            as an audio visual specialist running video and sound systems for
            conferences. I moved to the Denver area in the summer of 2019 after
            living in Chicago for the previous 10 years. In my free time, I
            enjoy hiking with my wife Melanie and our dog Aubrey, playing and
            recording music in my home studio, and skiing as much as possible.
            If you would like to connect with me on social media, there are some
            links below!
          </p>
        </div>
      </div>
    </Container>
  );
}

export default About;
