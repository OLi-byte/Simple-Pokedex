import React, { useState } from "react";
import Details from "./components/Details/Details";
import Search from "./components/Search/Search";
import styles from "./App.module.css";

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [loadingStatus, setLoadingStatus] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className={styles.container}>
      <Search
        setPokemonData={(poke) => setPokemonData(poke)}
        setLoadingStatus={(loading) => setLoadingStatus(loading)}
        setError={(error) => setError(error)}
      />
      <Details
        pokemonData={pokemonData}
        loadingStatus={loadingStatus}
        error={error}
      />
    </div>
  );
}

export default App;
