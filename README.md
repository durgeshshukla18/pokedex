# Building Pokedex to learn API Calls
-----------------------------------------

Pokedex App
------------
Live Link: [[Pokedex-durgeshsh18](https://pokedex-iota-ruby-67.vercel.app/)]

A simple single-page application built with React that fetches and displays a list of Pokémon from the PokeAPI. The app features pagination, detailed Pokémon views, and a search component.

🚀 Features
View Pokémon List: Displays a list of Pokémon with their names and images.

Pagination: Navigate through the Pokémon list using "Next" and "Prev" buttons.

Pokémon Details: Click on a Pokémon to see a detailed view, including its name, ID, height, weight, and types.

Search: A search bar component is included for future functionality to search for Pokémon by name.

Routing: Uses react-router-dom to handle navigation between the Pokémon list and detail pages.

🛠️ Technologies Used
React: A JavaScript library for building user interfaces.

React Router DOM: For declarative routing in the application.

Axios: A promise-based HTTP client for making API requests.

PokeAPI: The RESTful API used to get all the Pokémon data.

📦 Installation and Setup
Clone the repository:

git clone https://github.com/durgeshshukla18/pokedex


Navigate to the project directory:

cd pokedex


Install dependencies:

npm install


Run the application:

npm run dev


The application will be available at http://localhost:5173 (or another port specified in your console).

📂 File Structure
The project follows a standard React file structure with components organized for clarity.

/src
├── components/
│   ├── Pokedex/
│   │   ├── Pokedex.css
│   │   └── Pokedex.jsx
│   ├── Pokemon/
│   │   ├── Pokemon.css
│   │   └── Pokemon.jsx
│   ├── PokemonDetails/
│   │   ├── PokemonDetails.css
│   │   └── PokemonDetails.jsx
│   ├── PokemonList/
│   │   ├── PokemonList.css
│   │   └── PokemonList.jsx
│   └── Search/
│       ├── Search.css
│       └── Search.jsx
├── routes/
│   └── CustomRoutes.jsx
├── App.css
├── App.jsx
├── index.css
└── main.jsx

📝 Usage
The main page displays a list of Pokémon.

Use the "Next" and "Prev" buttons to load different sets of Pokémon.

Click on any Pokémon's image or name to view its detailed page.

Use the "Pokedex" heading to return to the main list.