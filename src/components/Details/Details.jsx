import React, { useEffect } from "react";
import styles from "./Details.module.css";
import TypewriterComponent from "typewriter-effect";
import { FaRuler, FaWeightHanging } from "react-icons/fa";
import Stats_bar from "../Stats_bar/Stats_bar";

const Details = ({ pokemonData, loadingStatus }) => {
  const renderColums = (index) => {
    return (
      <div className={styles.stats_bar_wrapper} key={index}>
        <span>...</span>
        <ul className={styles.stats_bar}>
          {Array.from({ length: 11 }).map((_, index) => {
            return <li key={index} className={styles.stats_row}></li>;
          })}
        </ul>
        <span>...</span>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      {loadingStatus ? (
        <div className={styles.details_wrapper}>
          <div className={styles.title}>
            <p>...?</p>
            <p>...?</p>
          </div>
          <div className={styles.characteristics_wrapper}>
            <ul className={styles.measurements}>
              <li>
                <FaRuler size={50} /> <span>...?</span>
              </li>
              <li>
                <FaWeightHanging size={40} /> <span>...?</span>
              </li>
            </ul>
            <img src="" alt="pokemon-sprite" height={200} />
            <ul>
              Types:
              <li>
                <div className={styles.type_color}></div>
                <div className={styles.type_color2}></div>
              </li>
            </ul>
          </div>
          <h3>status: </h3>
          <div className={styles.stats_bars_container}>
            {Array.from({ length: 6 }).map((_, index) => renderColums(index))}
          </div>
        </div>
      ) : (
        <div className={styles.details_wrapper}>
          <div className={styles.title}>
            <TypewriterComponent
              onInit={(typewriter) => {
                typewriter
                  .typeString(String(pokemonData.name).toUpperCase())
                  .pauseFor(500)
                  .typeString(` N°0${pokemonData.id}`)
                  .start();
              }}
            />
          </div>
          <div className={styles.characteristics_wrapper}>
            <ul className={styles.measurements}>
              <li>
                <FaRuler size={50} /> <span>{pokemonData.height}</span>
              </li>
              <li>
                <FaWeightHanging size={40} /> <span>{pokemonData.weight}</span>
              </li>
            </ul>
            <img
              src={pokemonData.sprites?.other.dream_world.front_default}
              height={200}
            />
            <ul>
              Types:
              <li>
                <div className={styles.type_color}></div>
                <div className={styles.type_color2}></div>
              </li>
            </ul>
          </div>
          <h3>status: </h3>
          <div className={styles.stats_bars_container}>
            {pokemonData.stats?.map((stats, index) => {
              return <Stats_bar stats={stats} key={index} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
