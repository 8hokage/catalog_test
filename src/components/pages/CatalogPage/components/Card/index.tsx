import { FC, useRef, useState } from "react";
import styles from "./styles.module.css";
import { ExpandedFooter } from "./ExpandedFooter";
import { CardResponse } from "../../../../../types/general";

export interface CardProps {
  card: CardResponse;
}

export const Card: FC<CardProps> = ({ card: { title, author } }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    if (e.target === e.currentTarget) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div className={styles.card} onClick={handleExpand}>
      <div className={styles.cardInfo}>
        <span className={styles.status}>Status</span>
        <div className={styles.titles}>
          <div className={styles.titleContainer}>
            <h2 className={styles.title}>{title}</h2>
            <span>13:00</span>
          </div>
          <p className={styles.subject}>{author}</p>
        </div>
      </div>
      {isExpanded && (
        <ExpandedFooter />
      )}
    </div>
  );
};
