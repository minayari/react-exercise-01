import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App";

// function MainCard() {
//   const CRADS_INFO = [
//     {
//       id: 1,
//       rate: 5.0,
//       rateNumber: 6,
//       country: "USA",
//       about: "Life lessons with Katie Zafere",
//       cost: 136,
//       isOnline: true,
//     },
//     {
//       id: 2,
//       rate: 5.0,
//       rateNumber: 30,
//       country: "USA",
//       about: "Learn wedding photography",
//       cost: 125,
//       isOnline: true,
//     },
//     {
//       id: 3,
//       rate: 4.8,
//       rateNumber: 2,
//       country: "USA",
//       about: "Group Mountain Biking",
//       cost: 50,
//       isOnline: false,
//     },
//   ];

//   function numberToWord(num) {
//     const mapping = {
//       0: "zero",
//       1: "one",
//       2: "two",
//       3: "three",
//     };
//     return num
//       .toString()
//       .split("")
//       .map((digit) => mapping[digit])
//       .join("");
//   }

//   const cardsTemplate = CRADS_INFO.map((obj) => (
//     <div className="cardContainer" key={obj.id}>
//       <span
//         style={{ display: obj.isOnline ? "inline-block" : "none" }}
//         className="isOnline"
//       >
//         ONLINE
//       </span>

//       <div className="cardsImg" id={numberToWord(obj.id)}></div>
//       <div className="headSection">
//         <div className="star"></div>
//         <p className="rate">{obj.rate}</p>
//         <p className="rateNumber">({obj.rateNumber})</p>
//         <p className="country">
//           {"\u2022"}
//           {obj.country}
//         </p>
//       </div>
//       <div className="infoSection">
//         <p className="about">{obj.about}</p>
//         <p className="cost">${obj.cost}</p>
//       </div>
//     </div>
//   ));
//   return (
//     <div>
//       <Cards2 template={cardsTemplate} />
//       <Cards2 template={cardsTemplate} />
//     </div>
//   );
// }

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* <MainCard /> */}
  </StrictMode>
);
