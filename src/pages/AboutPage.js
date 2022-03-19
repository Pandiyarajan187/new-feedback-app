import React from "react";
import Card from "../components/shared/Card";
import {Link} from "react-router-dom"

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About this Project</h1>
        <p>Leave a Feedback for a Product or Service</p>
        <p>Version 7.0.0.0</p>
        <p>
        <Link to="/">Back to Home</Link>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;
