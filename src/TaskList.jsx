import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ListAltIcon from '@mui/icons-material/ListAlt';

//Desplegamos la lista de las tareas y la opcion de eliminarlas, si ya se hicieron
const TaskList = ({ tasks, eliminarTask }) => {
  return (
    //Despliegue de las tareas y conforme vamos agregando se van corriendo, como una lista
    <List>
      {tasks.map((task, index) => (
        <ListItem key={index}>
          <IconButton aria-label="tarea">
            <ListAltIcon />
          </IconButton>
          <ListItemText primary={task} />
          <ListItemSecondaryAction>
            <IconButton
              edge="end"
              aria-label="delete"
              //Al darle click al ícono de la basura, eliminamos la tarea con la funcion que está en App.jsx
              onClick={() => eliminarTask(index)}
            >
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};

export default TaskList;
