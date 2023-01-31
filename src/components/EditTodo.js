import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch, useSelector } from "react-redux";
import { todoActions } from "../reducer/todo-slice";

export default function EditTodo() {
  const dispatch = useDispatch();
  const formOpen = useSelector((state) => state.todo.editForm);
  const todoToBeEdited = useSelector((state) => state.todo.todoToBeEdited);
  const [newTitle, setNewtitle] = React.useState(todoToBeEdited.title);
  const [newDescription, setNewDescription] = React.useState(
    todoToBeEdited.description
  );
  const updateTodoHandler = () => {
    const updatedTodo = {
      id: todoToBeEdited.id,
      title: newTitle,
      description: newDescription,
    };
    dispatch(todoActions.editTodo(updatedTodo))
  };
  const handleClose = () => {
    dispatch(todoActions.cancelEditForm());
  };

  return (
    <div>
      <Dialog open={formOpen} onClose={handleClose}>
        <DialogTitle>Edit todo</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter Title Or Description You Want To Update
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="New title"
            type="text"
            fullWidth
            variant="standard"
            value={newTitle}
            onChange={(event) => setNewtitle(event.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="New Description"
            type="text"
            fullWidth
            variant="standard"
            value={newDescription}
            onChange={(event) => setNewDescription(event.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={updateTodoHandler}>Update</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
