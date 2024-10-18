import React, { useState } from "react";
import Card from "./Card"; 
import { cardsData } from "../components/data.js"; 
import "../styles/TodoApp.css";

function TodoApp({ visibleCards }) {
  const [cards, setCards] = useState(cardsData);

  return (
    <div className="todo-app">
      <div className="cards-container">
        {/* Display only the visible number of cards */}
        {cards.slice(0, visibleCards).map((card) => (
          <Card
            key={card.id}
            name={card.name}
            desc={card.desc}
            src={card.src}
            bg={card.bg}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoApp;
