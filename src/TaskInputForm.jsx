import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';

//Funcion para agregar las tareas que se reciben, del cuadro de texto.

//vamos agregar la tarea...
const TaskInputForm = ({ addTask }) => {
  const [task, setTask] = useState('');

  const agregarTask = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask('');
    }
  };

  //devolvemos el cuadro donde ingresara la tarea, junto con el botón de agregarla
  return (
    <form onSubmit={agregarTask}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={9}>
          <TextField
            fullWidth
            label="Enter a Task"
            variant="outlined"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <Button type="submit" variant="contained" color="primary">
            Add Task
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default TaskInputForm;
