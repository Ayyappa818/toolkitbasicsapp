import { configureStore } from "@reduxjs/toolkit";
import counterReducer from'../features/counter/counterSlice'
import todoReducer from '../features/todolist/todolistSlice'
import countriesReducer from "../features/countries/countriesSlice";
import { countriesApi } from "../services/countriesApi";
import { productsApi } from "../services/ProductsApi";
import { postApi } from "../services/postsAPI";


export const store = configureStore({
    reducer: {
        counterReducer,
        todoReducer,
        countriesReducer,
        [countriesApi.reducerPath]: countriesApi.reducer,
        [productsApi.reducerPath]: productsApi.reducer,
        [postApi.reducerPath]: postApi.reducer,

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(countriesApi.middleware,productsApi.middleware,postApi.middleware),
})