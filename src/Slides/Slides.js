import React from "react";
import "../App.css"
import "./Slides.css"

const Slides = () =>{
    return (
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <img id="slideimg" src="./Img/1.jpg" class="d-block w-100" alt="..."></img>
          </div>
          <div class="carousel-item" data-bs-interval="10000">
            <img id="slideimg" src="./Img/2.jpg" class="d-block w-100" alt="..."></img>
          </div>
          <div class="carousel-item">
            <img id="slideimg" src="./Img/3.png" class="d-block w-100" alt="..."></img>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-target="#carouselExampleInterval" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-target="#carouselExampleInterval" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    
    );
};

export default Slides;