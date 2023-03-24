import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todosData: [{ id: 1, text: "Learn Redux" }],
  },
  reducers: {
    addTodo: (state, action) => {
      return {
        ...state,
        todosData: [action.payload, ...state.todosData],
      };
    },
  },
});

export const { addTodo } = todosSlice.actions;

export default todosSlice.reducer;
