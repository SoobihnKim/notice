import { configureStore } from "@reduxjs/toolkit";
import noticeReducer from "./notice-slice";
import scheduleReducer from "./schedule-slice";

const store = configureStore({
    reducer: {
        notice: noticeReducer,
        schedule: scheduleReducer,
    }
});

export default store;