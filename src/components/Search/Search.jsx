import { useEffect, useState } from "react";
import styles from "./Search.module.css";
import { api } from "../../services/api";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import TypewriterComponent from "typewriter-effect";

const Search = () => {
  const [pokemon, setPokemon] = useState("");
  const [pokemonIndex, setPokemonIndex] = useState(1);
  const [loading, setLoading] = useState(false);
  const [inputData, setInputData] = useState("");

  const getPokemons = () => {
    setLoading(true);
    api
      .get(`/${pokemonIndex}`)
      .then((response) => {
        setPokemon(response.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getPokemons();
  }, [pokemonIndex]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setPokemonIndex(inputData.toLocaleLowerCase()), setInputData("");
    }
  };

  return (
    <div className={styles.container}>
      {!loading ? (
        <>
          <div
            className={styles.typewriter}
            style={
              String(pokemon.name).length > 10
                ? { fontSize: 3 + "rem", marginBottom: 2.39 + "rem" }
                : { fontSize: 5 + "rem" }
            }
          >
            <TypewriterComponent
              onInit={(typewriter) => {
                typewriter
                  .typeString(String(pokemon.name).toLocaleUpperCase())
                  .start();
              }}
            />
          </div>
          <img
            className={styles.pokemon_sprite}
            src={
              pokemon.sprites?.other.dream_world.front_default
                ? pokemon.sprites?.other.dream_world.front_default
                : pokemon.sprites?.other.home.front_default
            }
            alt="pokemon-sprite"
          />
        </>
      ) : (
        <>
          <h1 className={styles.loading_title}>LOADING...</h1>
          <div className={styles.loading_icon_wrapper}>
            <h1 className={styles.loading_icon}>?</h1>
          </div>
        </>
      )}
      <div className={styles.search_container}>
        <div className={styles.buttons_wrapper}>
          <button
            className={styles.back_btn}
            onClick={() =>
              pokemon.id > 1 ? setPokemonIndex((pokemon.id -= 1)) : none
            }
          >
            <FiArrowLeft size={32} className={styles.arrowLeft} />
          </button>
          <button
            className={styles.next_btn}
            onClick={() => setPokemonIndex((pokemon.id += 1))}
          >
            <FiArrowRight size={32} className={styles.arrowRight} />
          </button>
        </div>
        <input
          className={styles.search_input}
          placeholder={`Index atual: ${pokemon.id}`}
          onChange={(e) => setInputData(e.target.value)}
          value={inputData}
          onKeyDown={handleKeyDown}
        />
        <button
          className={styles.search_btn}
          onClick={() => {
            setPokemonIndex(inputData.toLowerCase()), setInputData("");
          }}
        >
          Pesquisar
          <FiArrowRight className={styles.search_btn_arrow} />
        </button>
      </div>
    </div>
  );
};

export default Search;
