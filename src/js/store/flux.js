let cardIndex = 1; // Inicializamos el contador para los índices de las tarjetas

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],

			cards: [
				{
					url: "https://media.istockphoto.com/id/1135031219/vector/man-icon-profile-member-user-perconal-symbol-vector-on-white-isolated-background.jpg?s=170667a&w=0&k=20&c=RKCJekF8WsoqyTiiRe5dHqAzsSXX4daVujgpHrkMDKs=",
					name: "Diana Chacón",
					email: "diianachm1802@gmail.com",
					phoneNumber: "+50685669839",
					address: "Cartago, Pacayas",
					index: 0
				},
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
		
		
			addCard: (card) => {
				const store = getStore();
				const newCard = { ...card, index: cardIndex++ }; // Asignamos el índice único a la tarjeta
				setStore({ cards: [...store.cards, newCard] });
				console.log(store.cards);
			  },

			removeCard: (cardIndex) => {
				const store = getStore();
			  
				// Filtrar las tarjetas y mantener todas las que no tengan el mismo índice
				const updatedCards = store.cards.filter((card) => card.index !== cardIndex);
			  
				setStore({ cards: updatedCards });
			  },
			
			  updateCard: (index, updatedCard) => {
				if (index >= 0) {
				  // Solo actualiza la tarjeta si el índice es mayor o igual a 0 (no es la tarjeta predeterminada)
				  const store = getStore();
				  const updatedCards = store.cards.map((card, i) => (i === index ? updatedCard : card));
				  setStore({ cards: updatedCards });
				}
			  },
			  
			  

			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},


		}
	};
};

export default getState;
