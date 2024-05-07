import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  status: null,
};

export const fetchProducts = createAsyncThunk(
  "products/productsFetch",
  async () => {
    const response = await axios.get(
      "https://66349ced9bb0df2359a218d1.mockapi.io/products"
    );
    return response?.data;
  }
);
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
