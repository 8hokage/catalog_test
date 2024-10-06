import { useEffect, useState } from "react";
import { MainLayout } from "../../layouts/MainLayout";
import { Card } from "./components/Card";
import styles from "./styles.module.css";
import { CardResponse } from "../../../types/general";
import { Pagination } from "../../common/Pagination";
import { getNews } from "../../../api/getNews";

export const CatalogPage = () => {
  const [cards, setCards] = useState<CardResponse[]>([]);
  const [totalPages, setTotalPages] = useState();
  const [page, setPage] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const changePage = (page: number) => {
    setPage(page);
  };

  useEffect(() => {
    setIsLoaded(false);
    const fetchData = async () => {
      const res = await getNews(page);
      setTotalPages(res.nbPages);
      setCards(res.hits);
      setIsLoaded(true);
    };

    fetchData();
  }, [page]);

  return (
    <MainLayout>
      <div className={styles.catalogWrapper}>
        <div className={styles.catalog}>
          {isLoaded &&
            cards.map((item) => {
              return <Card key={item.title} card={item} />;
            })}
          {isLoaded && cards.length === 0 && <p>There are no data</p>}
          {!isLoaded && (
            <div className={styles.loading}>
              <p>Loading</p>
            </div>
          )}
        </div>
        <div className={styles.paginationContainer}>
          {cards.length > 0 && <Pagination
            page={page}
            onClick={changePage}
            totalPages={totalPages || 1}
          />}
        </div>
      </div>
    </MainLayout>
  );
};
