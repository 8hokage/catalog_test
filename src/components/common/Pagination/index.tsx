import { FC } from "react";
import styles from "./styles.module.css";
import cls from "classnames";

export interface PaginationProps {
  page: number;
  totalPages: number;
  onClick: (page: number) => void;
}

export const Pagination: FC<PaginationProps> = ({
  page,
  totalPages,
  onClick,
}) => {
  const handleClick = (page: number) => {
    return () => {
      onClick(page);
    };
  };

  return (
    <div className={styles.pages}>
      {Array.from(Array(totalPages).keys()).map((item) => {
        console.log(page, item)
        return (
          <div
            onClick={handleClick(item)}
            className={cls(styles.page, {
              [styles.active]: page === item,
            })}
          >
            {item + 1}
          </div>
        );
      })}
    </div>
  );
};
