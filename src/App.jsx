import React, { useState } from 'react';
import TaskInputForm from './TaskInputForm';
import TaskList from './TaskList';
import { Container, Typography, Button, Grid } from '@mui/material';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [totalTasks, setTotalTasks] = useState(0);

  // función donde agregamos las tareas
  const addTask = (task) => {
    setTasks([...tasks, task]);
    setTotalTasks(totalTasks + 1);
  };

  // Eliminamos una tarea, cuando le dé click al ícono de la basurita
  const eliminarTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    setTotalTasks(totalTasks - 1);
  };

  // Función para eliminar todas las tareas al presionar "Delete all"
  const eliminarTodasLasTareas = () => {
    setTasks([]);
    setTotalTasks(totalTasks - totalTasks);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h5" align="center" gutterBottom>
        Mini Task Dashboard
      </Typography>
      <TaskInputForm addTask={addTask} />
      <Typography variant="h6" align="center" gutterBottom>
        {totalTasks} Tareas añadidas
      </Typography>
      <TaskList tasks={tasks} eliminarTask={eliminarTask} />
      <Grid container justifyContent="center" style={{ marginTop: '16px' }}>
        <Button
          variant="contained"
          color="secondary"
          onClick={eliminarTodasLasTareas}
        >
          Delete All
        </Button>
      </Grid>
    </Container>
  );
};

export default App;
