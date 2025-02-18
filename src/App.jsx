import { useState } from "react";
import "./App.css";
import Header from "./Components/header";
import Slider from "./Components/Slider";
import Info from "./Components/Info";

function App() {
  const CRADS_INFO = [
    {
      id: 1,
      rate: 5.0,
      rateNumber: 6,
      country: "USA",
      about: "Life lessons with Katie Zafere",
      cost: 136,
      isOnline: false,
    },
    {
      id: 2,
      rate: 5.0,
      rateNumber: 30,
      country: "USA",
      about: "Learn wedding photography",
      cost: 125,
      isOnline: true,
    },
    {
      id: 3,
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
    </>
  );
}

// function Cards2({ template }) {
//   return <div className="cardsSection">{template}</div>;
// }

export { App, Header, Slider, Info };
