import React from "react";
import styles from "./Stats_bar.module.css";

const Stats_bar = ({ stats, color }) => {
  return (
    <div className={styles.stats_bar_wrapper}>
      <span>{stats.base_stat}</span>
      <ul className={styles.stat_bar}>
        {Array.from({ length: 10 }).map((_, index) => {
          if (10 - (Math.round((stats.base_stat / 2) / 10)) >= index + 1)
            return (
              <li
                key={index}
                style={{ backgroundColor: "var(--grey)" }}
                className={styles.stats_row}
              ></li>
            );
          else {
            return (
              <li
                key={index}
                style={{ backgroundColor: color}}
                className={styles.stats_row}
              ></li>
            );
          }
        })}
      </ul>
      <span>{stats.stat.name}</span>
    </div>
  );
};

export default Stats_bar;
