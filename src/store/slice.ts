import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import type { IDashboardState } from "../interface/interface";
import initialData from "../assets/data/dashboard.json";

const persisted = localStorage.getItem("dashboardState");
const initialState: IDashboardState = persisted
  ? JSON.parse(persisted)
  : { categories: initialData.categories, searchQuery: "" };

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    addWidget(
      state,
      action: PayloadAction<{ categoryId: string; title: string; text: string }>
    ) {
      const cat = state.categories.find(
        (c) => c.id === action.payload.categoryId
      );
      if (cat) {
        cat.widgets.push({
          id: uuidv4(),
          title: action.payload.title,
          text: action.payload.text,
        });
      }
    },
    removeWidget(
      state,
      action: PayloadAction<{ categoryId: string; widgetId: string }>
    ) {
      const cat = state.categories.find(
        (c) => c.id === action.payload.categoryId
      );
      if (cat)
        cat.widgets = cat.widgets.filter(
          (w) => w.id !== action.payload.widgetId
        );
    },
    toggleCategory(
      state,
      action: PayloadAction<{ categoryId: string; enabled: boolean }>
    ) {
      const cat = state.categories.find(
        (c) => c.id === action.payload.categoryId
      );
      if (cat) cat.enabled = action.payload.enabled;
    },
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
    addCategory(state, action: PayloadAction<{ name: string }>) {
      state.categories.push({
        id: uuidv4(),
        name: action.payload.name,
        enabled: true,
        widgets: [],
      });
    },
    removeCategory(state, action: PayloadAction<string>) {
      state.categories = state.categories.filter(
        (c) => c.id !== action.payload
      );
    },
  },
});

export const {
  addWidget,
  removeWidget,
  toggleCategory,
  setSearchQuery,
  addCategory,
  removeCategory,
} = dashboardSlice.actions;
export default dashboardSlice.reducer;
