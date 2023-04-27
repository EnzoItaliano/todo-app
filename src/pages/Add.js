import Head from 'next/head'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Container } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2'
import { useState } from 'react'
import { connect } from "react-redux";
import { createTask } from "../actions/tasks";

function AddTask() {
    const [task, setTask] = useState({
        title: "",
        description: ""
    })
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTask({ ...task, [name]: value });
    };

    const saveTask = () => {
        createTask(task.title, task.description)
            .then((data) => {
                setTask({
                    title: data.title,
                    description: data.description,
                });
                setSubmitted(true);
                    console.log(data);
                })
            .catch((e) => {
                console.log(e);
            });
    };

    const newTask = () => {
        setTask({
            title: "",
            description: "",
        });
        setSubmitted(false);
    };

    return (
    <>
      <Head>
        <title>Add Task</title>
        <meta name="description" content="Create a new task" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container sx={{justifyContent:"center", display:"flex"}}>
        {submitted ? (
            <>
            <h4>You submitted successfully!</h4>
            <button onClick={newTask}>
              Add
            </button>
            </>
        ) : (
            <>
            <Grid2 container spacing={2}>
                <Grid2 xs={4}>
                    <TextField
                    required
                    id="outlined-basic"
                    label="Title"
                    variant="outlined"
                    name='title'
                    value={task.title}
                    onChange={handleInputChange}/>
                </Grid2>
                <Grid2 xs={8}>
                    <TextField
                    id="outlined-basic"
                    label="Description"
                    variant="outlined"
                    name='description'
                    value={task.description}
                    onChange={handleInputChange}/>
                </Grid2>
            </Grid2>
            <Button variant="contained" onClick={saveTask}>Submit</Button>
            </>
        )
        }
      </Container>
    </>
  )
}

export default connect(null, { createTask })(AddTask);