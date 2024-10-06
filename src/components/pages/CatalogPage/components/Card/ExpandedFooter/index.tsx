import { useState } from "react";
import styles from "./styles.module.css";
import cls from "classnames";
import { Button } from "../../../../../common/Button";

export const ExpandedFooter = () => {
  return (
    <div className={cls(styles.expandable)}>
      <div className={styles.buttonsContainer}>
        <div className={styles.columnButtons}>
          <Button>Button 1</Button>
          <Button>Button 2</Button>
        </div>
        <div className={styles.columnButtons}>
          <Button>Button 3</Button>
          <Button>Button 4</Button>
          <Button>Button 5</Button>
        </div>
        <div className={styles.rightButtons}>
          <Button>Button 5</Button>
        </div>
      </div>
    </div>
  );
};
