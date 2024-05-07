import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { BrowserRouter } from "react-router-dom";

// import { configureStore } from "@reduxjs/toolkit";
// import { Provider } from "react-redux";

// import productsReducer from "./features/productsSlice.js";

// const store = configureStore({
//   reducer: {
//     products: productsReducer,
//   },
// });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
