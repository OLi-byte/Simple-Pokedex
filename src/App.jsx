import React, { useState } from "react";
import Details from "./components/Details/Details";
import Search from "./components/Search/Search";
import styles from "./App.module.css";
import { BsMenuButtonWideFill } from "react-icons/bs";
import { MdOutlineClose } from "react-icons/md";
import print_project_card from "./assets/print_project_card.png";
import TypewriterComponent from "typewriter-effect";
import { AiFillFolderOpen } from 'react-icons/ai';

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [loadingStatus, setLoadingStatus] = useState(false);
  const [error, setError] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.menu_icon} onClick={() => setToggleMenu(true)}>
          <BsMenuButtonWideFill
            color="#ffffff"
            size={24}
          />
        </div>
        {toggleMenu && (
          <div className={styles.sidebar_container}>
            <MdOutlineClose
              size={36}
              color="#ffffff"
              onClick={() => setToggleMenu(false)}
            />
            <h1 className={styles.menu_title}>SIMPLE POKEDEX</h1>
            <div className={styles.menu_project_card}>
              <a href="https://oli-byte.github.io/simple-pokedex">
                <img
                  className={styles.print_project_card}
                  src={print_project_card}
                  alt="print_project_card"
                />
                <div className={styles.card_content}>
                  <TypewriterComponent
                    onInit={(typewriter) => {
                      typewriter
                        .changeDelay(10)
                        .typeString("https://oli-byte.github.io/simple-pokedex")
                        .start();
                    }}
                  />
                </div>
              </a>
            </div>
            <div className={styles.owner}>
              <AiFillFolderOpen />
              <p>Repositório de Oli-Byte</p>          
            </div>
            <i></i>
            <div className={styles.menu_content}>
              <TypewriterComponent
                onInit={(typewriter) => {
                  typewriter
                    .changeDelay(10)
                    .typeString(
                      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam sed odio, cupiditate corporis sit laborum ab animi ipsum molestiae amet molestias aut alias atque consequatur! Nam laborum non fugiat error? ;)"
                    )
                    .start();
                }}
              />
            </div>
          </div>
        )}
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
    </>
  );
}

export default App;
