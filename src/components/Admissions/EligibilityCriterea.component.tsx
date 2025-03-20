import React from "react";
import styles from "./EligibilityCriterea.component.module.scss";

const EligibilityCritereaComponent: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.mainTitle}>
          Children must be taught how to think, not what to think - Margaret
          Mead
        </h2>
        <h3 className={styles.subTitle}>Eligibility Criterea</h3>
        <p className={styles.description}>
          The following criteria must be met for admission:
        </p>
        <div className={styles.tableBox}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Program</th>
                <th>Age Group</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Parent- Toddler</td>
                <td>12 months +</td>
              </tr>
              <tr>
                <td>Toddler</td>
                <td>18 months +</td>
              </tr>
              <tr>
                <td>Playgroup</td>
                <td>2 - 3 years</td>
              </tr>
              <tr>
                <td>Nursery</td>
                <td>3 - 4 years</td>
              </tr>
              <tr>
                <td>KG 1</td>
                <td>4 - 5 years</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EligibilityCritereaComponent;
