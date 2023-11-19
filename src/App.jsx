import Gig from "./components/Gig";
import "./App.css";
import React from "react";


function App() {
  return (
    <>
      <h1>Gigs for you:</h1>
      <Gig
      id="1"
      band_name="The Rockin' Legends"
      image_link="https://images.unsplash.com/photo-1583795310794-4168d4ff1be2?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cm9jayUyMGJhbmR8ZW58MHx8MHx8fDA%3D"
      about_band="A legendary rock band known for their timeless hits."
      time_date="Saturday, October 15, 2023 at 8:00 PM"
      location="Rock Arena, New York City"
      />

      <Gig
      id="2"
      band_name="Jazz Fusion London"
      image_link="https://traverse-site.s3.amazonaws.com/TJB.png?mtime=20230628163103"
      about_band="A three-piece jazz ensemble blending various musical styles."
      time_date="Friday, September 30, 2023 at 7:30 PM"
      location="Jazz Club, San Francisco"
      />

      <Gig
        id="3"
        band_name="Indie Folk Collective"
        image_link="https://www.billboard.com/wp-content/uploads/media/fake-band-practicing-in-a-garage-billboard-650.jpg?w=650"
        about_band="An eclectic group of indie folk musicians with a unique sound."
        time_date="Sunday, November 5, 2023 at 6:00 PM"
        location="Folk Hall, Austin"
      />
      </>
  );
}

export default App;
