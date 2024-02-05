import { useState, useEffect, useRef } from "react";
import { SearchBar } from "./SearchBar/SearchBar";
import { ImageGallery } from "./ImageGallery/ImageGallery";

import { ErrorMessage } from "./ErrorMessage/ErrorMessage";
import { LoadMoreBtn } from "./LoadMoreBtn/LoadMoreBtn";
import { Loader } from "./Loader/Loader";
import { Toaster } from "react-hot-toast";
import { fetchArticles } from "../api";

export const App = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const totalPages = useRef(0);

  const searchArticles = async (newQuery) => {
    setQuery(`${Date.now()}/${newQuery}`);
    setPage(1);
    setArticles([]);
    totalPages.current = 1;
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (!query) {
      return;
    }

    async function fetchData() {
      try {
        setError(false);
        setLoading(true);

        const { results: fetchedData, total_pages } = await fetchArticles(
          query.split("/")[1],
          page
        );
        setArticles((prevArticles) => [...prevArticles, ...fetchedData]);

        totalPages.current = total_pages;
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [query, page]);

  return (
    <>
      <SearchBar onSearch={searchArticles} />
      {error && <ErrorMessage />}
      {articles.length > 0 && <ImageGallery items={articles} />}
      {loading && <Loader load={loading} />}
      {articles.length > 0 && !loading && totalPages.current > page && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      <Toaster position="bottom-center" />
    </>
  );
};
