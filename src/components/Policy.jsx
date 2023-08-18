'use client'
import React from "react";
import { motion } from "framer-motion";
import move from "lodash-move";

const CARD_DATA = [
  { color: "#266678", title: "01", description: "Lorem ipsum dolor sit amet." },
  { color: "#cb7c7a", title: "02", description: "Consectetur adipiscing elit." },
  { color: "#36a18b", title: "03", description: "Vivamus lacinia odio vitae vestibulum." },
  { color: "#cda35f", title: "04", description: "Donec in vehicula augue." }
];
const CARD_OFFSET = 15;
const SCALE_FACTOR = 0.06;

export function Policy() {
  const [schoolCards, setSchoolCards] = React.useState(CARD_DATA);
  const [healthCards, setHealthCards] = React.useState(CARD_DATA);

  const moveToEnd = (from, setCards) => {
    setCards(prevCards => move(prevCards, from, prevCards.length - 1));
  };

  return (
    <div id="policy"  className="h-screen flex items-center justify-center relative">
      <div className="flex space-x-4 w-full justify-center items-center">

        {/* School Policy */}
        <div className="flex flex-col items-center w-1/2">
          <div className="text-black text-3xl font-bold text-center py-5 mb-6">
            School Policy
          </div>
          <ul className="relative w-[500px] h-[400px]">
            {schoolCards.map((cardData, index) => {
              return (
                <motion.li
                  key={cardData.color}
                  className={`absolute w-[500px] h-[400px] rounded-md cursor-grab flex flex-col justify-center items-center p-4`}
                  style={{ backgroundColor: cardData.color }}
                  animate={{
                    top: `${index * -CARD_OFFSET}px`,
                    scale: 1 - index * SCALE_FACTOR,
                    zIndex: CARD_DATA.length - index
                  }}
                  drag="y"
                  dragConstraints={{
                    top: 0,
                    bottom: 0
                  }}
                  onDragEnd={() => moveToEnd(index, setSchoolCards)}
                >
                  <h2 className="text-white text-4xl mb-2">{cardData.title}</h2>
                  <p className="text-white text-xl">{cardData.description}</p>
                </motion.li>
              );
            })}
          </ul>
        </div>

        {/* Vertical Divider */}
        <div className="border-l-2 h-[520px]"></div>

        {/* Health Policy */}
        <div className="flex flex-col items-center w-1/2">
          <div className="text-black text-3xl font-bold text-center py-5 mb-6">
            Health Policy
          </div>
          <ul className="relative w-[500px] h-[400px]">
            {healthCards.map((cardData, index) => {
              return (
                <motion.li
                  key={cardData.color}
                  className={`absolute w-[500px] h-[400px] rounded-md cursor-grab flex flex-col justify-center items-center p-4`}
                  style={{ backgroundColor: cardData.color }}
                  animate={{
                    top: `${index * -CARD_OFFSET}px`,
                    scale: 1 - index * SCALE_FACTOR,
                    zIndex: CARD_DATA.length - index
                  }}
                  drag="y"
                  dragConstraints={{
                    top: 0,
                    bottom: 0
                  }}
                  onDragEnd={() => moveToEnd(index, setHealthCards)}
                >
                  <h2 className="text-white text-4xl mb-2">{cardData.title}</h2>
                  <p className="text-white text-xl">{cardData.description}</p>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
