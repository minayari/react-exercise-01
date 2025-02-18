import { useState } from "react";
import "./App.css";
import Header from "./Components/header";
import Slider from "./Components/Slider";
import Info from "./Components/Info";
import Cards from "./Components/Cards";

function App() {
  const CRADS_INFO = [
    {
      id: 1,
      img: "/img/card1.png",
      rate: 5.0,
      rateNumber: 6,
      country: "USA",
      about: "Life lessons with Katie Zafere",
      cost: 136,
      isOnline: false,
    },
    {
      id: 2,
      img: "/img/card2.jfif",
      rate: 5.0,
      rateNumber: 30,
      country: "USA",
      about: "Learn wedding photography",
      cost: 125,
      isOnline: true,
    },
    {
      id: 3,
      img: "/img/card3.jfif",
      rate: 4.8,
      rateNumber: 2,
      country: "USA",
      about: "Group Mountain Biking",
      cost: 50,
      isOnline: false,
    },
  ];

  return (
    <>
      <Header />
      <Slider />
      <Info />
      <div className="cardsSection">
        {CRADS_INFO.map((card) => {
          const { id, img, rate, rateNumber, country, about, cost, isOnline } =
            card;
          return (
            <Cards
              img={img}
              title={about}
              rate={rate}
              rateCount={rateNumber}
              location={country}
              cost={cost}
              isOnline={isOnline}
            />
          );
        })}
      </div>
    </>
  );
}

export { App, Header, Slider, Info };
