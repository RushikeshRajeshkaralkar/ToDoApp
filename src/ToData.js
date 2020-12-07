import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

function Todo(props) {
  return (
    <div>
      <List class="listBox">
        <ListItem>
          {props.text ? (
            <ListItemText
              primary={props.text}
              secondary="Rushikesh⭐"
              class="listText"
            />
          ) : null}
        </ListItem>
      </List>
    </div>
  );
}

export default Todo;
