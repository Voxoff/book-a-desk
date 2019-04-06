import React, { Component } from "react";

const flash = (props) =>  {
    return (
      <div className={`flash ${props.flash ? 'visible' : ''}`} >
        <p>Booked!</p>
      </div>
    );
}

export default flash;
