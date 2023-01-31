import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { useDispatch, useSelector } from "react-redux";
import { todoActions } from "../reducer/todo-slice";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function TodoList() {
  const dispatch = useDispatch();
  const todoItems = useSelector((state) => state.todo.list);

  const deleteTodoHandler = (id) => {
    dispatch(todoActions.deletetodo(id));
  };
  const editFormOpenHandler = (editTodo) => {
    dispatch(todoActions.editFormOpen(editTodo));
  }
  return (
    <div>
      {todoItems.map((item) => (
        <Paper
          key={item.id}
          sx={{
            p: 2,
            margin: "auto",
            marginTop: 5,
            maxWidth: 500,
            flexGrow: 1,
            backgroundColor: (theme) =>
              theme.palette.mode === "dark" ? "#1A2027" : "#fff",
          }}
        >
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase sx={{ width: 60, height: 60 }}>
                {/* <Img alt="complex" src="/static/images/grid/complex.jpg" /> */}
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    {item.title}
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    sx={{ cursor: "pointer", color: "blue" }}
                    variant="body2"
                    onClick={() => editFormOpenHandler(item)}
                  >
                    Edit
                  </Typography>
                  <Typography
                    sx={{ cursor: "pointer", color: "red" }}
                    variant="body2"
                    onClick={() => deleteTodoHandler(item.id)}
                  >
                    Delete
                  </Typography>
                </Grid>
              </Grid>
              <Grid item></Grid>
            </Grid>
          </Grid>
        </Paper>
      ))}
    </div>
  );
}
