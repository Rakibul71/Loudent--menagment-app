import React from "react";
import "../cssComponents/maplocation.css";

const mapLocation =
  "https://www.google.com/maps/embed/v1/place?q=place_id:ChIJYeZuBI9YwokRjMDs_IEyCwo&key=AIzaSyDB_8txX4_IAL6jIjh9GS-uH837xg9Vr6Y";

const mapComp = () => {
  return (
    <div className="lg:flex md:mt-20 lg:justify-center ">
      <iframe
        className="mpStyle"
        width="1000"
        height="450"
        loading="lazy"
        src={mapLocation}
        title="maplocation"
      >
        Hello
      </iframe>
    </div>
  );
};

export default mapComp;
