import { createSlice } from "@reduxjs/toolkit";

const initialList = [
  { id: "1", title: "Shopping", description: "Buying Black Shirt" },
  { id: "2", title: "Study", description: "Teach Redux" },
  { id: "3", title: "Cooking", description: "Chicken" },
  { id: "4", title: "Party", description: "Khoda's wedding " },
];

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    list: initialList,
    editForm: false,
    todoToBeEdited: undefined,
  },
  reducers: {
    addNewtodo(state, action) {
      const newTodo = action.payload;
      state.list.push(newTodo);
    },
    deletetodo(state, action) {
      const id = action.payload;
      state.list = state.list.filter((item) => item.id != id);
    },
    editTodo(state, action) {
      const updatedTodo = action.payload;
      const index = state.list.findIndex(
        (item) => item.id === state.todoToBeEdited.id
      );
      state.list[index] = updatedTodo;
      state.todoToBeEdited = undefined;
      state.editForm = false;
    },
    editFormOpen(state, action) {
      state.editForm = true;
      state.todoToBeEdited = action.payload;
      console.log(state.todoToBeEdited);
    },
    cancelEditForm(state, action) {
      state.editForm = false;
      state.todoToBeEdited = undefined;
    },
  },
});
export default todoSlice;
export const todoActions = todoSlice.actions;
