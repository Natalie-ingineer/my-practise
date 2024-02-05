// import axios from "axios";

// const BASE_URL = "https://api.unsplash.com/search/photos";
// const clientID = "eweU7n7QNHGPet9x6rguFqq5agNu-FnnqAkMJV9TwHY";

// export const fetchArticles = async (query, page) => {
//   const response = await axios.get(BASE_URL, {
//     params: { client_id: clientID, query, page, per_page: 10 },
//   });

//   return response.data;
// };

const products = [
  { id: "h-1", name: "Hoodie 1" },
  { id: "h-2", name: "Hoodie 2" },
  { id: "h-3", name: "Hoodie 3" },
  { id: "s-1", name: "Sneakers 1" },
  { id: "s-2", name: "Sneakers 2" },
  { id: "s-3", name: "Sneakers 3" },
  { id: "s-4", name: "Sneakers 4" },
  { id: "p-1", name: "Pants 1" },
  { id: "p-2", name: "Pants 2" },
  { id: "p-3", name: "Pants 3" },
];

export const getProducts = () => {
  return products;
};

export const getProductById = (productId) => {
  return products.find((product) => product.id === productId);
};
