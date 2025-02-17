import { useState } from "react";
import "./App.css";

function Header() {
  return (
    <div className="headerContainer">
      <h1 className="headerText">airbnb</h1>
    </div>
  );
}

function HeaderImgs() {
  return (
    <div className="headPicSection">
      <div>
        <div id="headpic1"></div>
      </div>
      <div>
        <div id="headpic2"></div>
        <div id="headpic3"></div>
      </div>
      <div>
        <div id="headpic4"></div>
        <div id="headpic5"></div>
      </div>
      <div>
        <div id="headpic6"></div>
        <div id="headpic7"></div>
      </div>
      <div>
        <div id="headpic8"></div>
        <div id="headpic9"></div>
      </div>
    </div>
  );
}

function Info() {
  return (
    <div className="infoContainer">
      <p className="infoHeader">Online Experiences</p>
      <p className="infoText">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </div>
  );
}

function Cards() {
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

  function numberToWord(num) {
    const mapping = {
      0: "zero",
      1: "one",
      2: "two",
      3: "three",
    };
    return num
      .toString()
      .split("")
      .map((digit) => mapping[digit])
      .join("");
  }

  const cardsTemplate = CRADS_INFO.map((obj) => (
    <div className="cardContainer" key={obj.id}>
      <span
        style={{ display: obj.isOnline ? "inline-block" : "none" }}
        className="isOnline"
      >
        ONLINE
      </span>

      <div className="cardsImg" id={numberToWord(obj.id)}></div>
      <div className="headSection">
        <div className="star"></div>
        <p className="rate">{obj.rate}</p>
        <p className="rateNumber">({obj.rateNumber})</p>
        <p className="country">
          {"\u2022"}
          {obj.country}
        </p>
      </div>
      <div className="infoSection">
        <p className="about">{obj.about}</p>
        <p className="cost">${obj.cost}</p>
      </div>
    </div>
  ));
  return <div className="cardsSection">{cardsTemplate}</div>;
}

function Cards2({ template }) {
  return <div className="cardsSection">{template}</div>;
}

export { Header, HeaderImgs, Info, Cards, Cards2 };
