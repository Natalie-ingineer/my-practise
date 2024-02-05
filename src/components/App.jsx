// import { useState, useEffect, useRef } from "react";
// import { SearchBar } from "./SearchBar/SearchBar";
// import { ImageGallery } from "./ImageGallery/ImageGallery";

// import { ErrorMessage } from "./ErrorMessage/ErrorMessage";
// import { LoadMoreBtn } from "./LoadMoreBtn/LoadMoreBtn";
// import { Loader } from "./Loader/Loader";
// import { Toaster } from "react-hot-toast";
// import { fetchArticles } from "../api";

// export const App = () => {
//   const [query, setQuery] = useState("");
//   const [page, setPage] = useState(1);
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);

//   const totalPages = useRef(0);

//   const searchArticles = async (newQuery) => {
//     setQuery(`${Date.now()}/${newQuery}`);
//     setPage(1);
//     setArticles([]);
//     totalPages.current = 1;
//   };

//   const handleLoadMore = () => {
//     setPage(page + 1);
//   };

//   useEffect(() => {
//     if (!query) {
//       return;
//     }

//     async function fetchData() {
//       try {
//         setError(false);
//         setLoading(true);

//         const { results: fetchedData, total_pages } = await fetchArticles(
//           query.split("/")[1],
//           page
//         );
//         setArticles((prevArticles) => [...prevArticles, ...fetchedData]);

//         totalPages.current = total_pages;
//       } catch (error) {
//         setError(true);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchData();
//   }, [query, page]);

//   return (
//     <>
//       <SearchBar onSearch={searchArticles} />
//       {error && <ErrorMessage />}
//       {articles.length > 0 && <ImageGallery items={articles} />}
//       {loading && <Loader load={loading} />}
//       {articles.length > 0 && !loading && totalPages.current > page && (
//         <LoadMoreBtn onClick={handleLoadMore} />
//       )}
//       <Toaster position="bottom-center" />
//     </>
//   );
// };

// src/components/App.jsx

import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";
import NotFound from "../pages/NotFound";
import { AppBar } from "./AppBar";
import { Mission } from "./Mission";
import { Team } from "./Team";
import { Reviews } from "./Reviews";
import css from "./App.module.css";

export const App = () => {
  return (
    <div className={css.container}>
      <AppBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
