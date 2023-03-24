import React, { useEffect } from "react";
import styles from "./Details.module.css";
import TypewriterComponent from "typewriter-effect";
import { FaRuler, FaWeightHanging } from "react-icons/fa";
import Stats_bar from "../Stats_bar/Stats_bar";
import * as Popover from "@radix-ui/react-popover";
import { RiSwordFill } from 'react-icons/ri'

const Details = ({ pokemonData, loadingStatus }) => {
  const colours = {
    normal: "#A8A77A",
    fire: "#EE8130",
    water: "#6390F0",
    electric: "#F7D02C",
    grass: "#7AC74C",
    ice: "#96D9D6",
    fighting: "#C22E28",
    poison: "#A33EA1",
    ground: "#E2BF65",
    flying: "#A98FF3",
    psychic: "#F95587",
    bug: "#A6B91A",
    rock: "#B6A136",
    ghost: "#735797",
    dragon: "#6F35FC",
    dark: "#705746",
    steel: "#B7B7CE",
    fairy: "#D685AD",
  };

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
              <li></li>
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
            <div className={styles.types_container}>
              <span>Types</span>
              {pokemonData.types?.map((types, index) => {
                return (
                  <ul key={index}>
                    <Popover.Root>
                      <Popover.Trigger
                        className={styles.type_icon}
                        style={{
                          backgroundColor: colours[`${types.type.name}`],
                        }}
                      ></Popover.Trigger>
                      <Popover.Portal>
                        <Popover.Content className={styles.popover_content}>
                          <span>{types.type.name.toUpperCase()}</span>
                          <Popover.Arrow fill="#ffff" height={8} width={16} />
                        </Popover.Content>
                      </Popover.Portal>
                    </Popover.Root>
                  </ul>
                );
              })}
            </div>
          </div>
          <div className={styles.abilities}>
              <span>Abilities: </span>
              {
                pokemonData.abilities?.map((ability, index) => {
                  return (
                    <ul key={index}>
                      <li><RiSwordFill /> {ability.ability.name}</li>
                    </ul>
                  )
                })
              }
          </div>
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
