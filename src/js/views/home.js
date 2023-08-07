import React, { useContext } from "react";
import "../../styles/home.css";
import CardInfo from "../component/CardInfo"; 
import { Context } from "../store/appContext";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      {store.cards.map((card, index) => (
        <CardInfo
        key={card.index} // Usamos el índice único como clave
        name={card.name}
        address={card.address}
        email={card.email}
        phoneNumber={card.phoneNumber}
        url={card.url}
        index={card.index} // Pasamos el índice único a la tarjeta
        />
      ))}
    </div>
	
  );
};

