import { configureStore } from "@reduxjs/toolkit";
import BatchesSlice from "./feature/shared/redux/slices/BatchesSlice";

const store = configureStore({
    reducer: {
        Batches: BatchesSlice
    }
})

export default store