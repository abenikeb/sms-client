import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import customerReducer from "./store/reducer/customerReducer";
import authReducer from "./store/reducer/authReducer";
import categoryReducer from "./store/reducer/categoryReducer";
import orderReducer from "./store/reducer/orderReducer";
import productReducer from "./store/reducer/productReducer";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const reducer = {
  customers: customerReducer,
  auth: authReducer,
  categories: categoryReducer,
  order: orderReducer,
  product: productReducer,
};

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  devTools: process.env.NODE_ENV !== "production",
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </Provider>
);

reportWebVitals();
