import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "./slice";

const store = configureStore({
  reducer: { dashboard: dashboardReducer },
});

// persist on every change
store.subscribe(() => {
  const s = store.getState();
  localStorage.setItem("dashboardState", JSON.stringify(s.dashboard));
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
