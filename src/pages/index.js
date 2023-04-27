import Head from 'next/head'
import Container from '@mui/material/Container'
import Grid2 from '@mui/material/Unstable_Grid2'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { connect } from "react-redux";
import { retrieveTasks, findTasksByTitle, deleteAllTasks } from "../actions/tasks";
import { useState } from 'react'


function Home({ data }) {
  const [searchTitle, setSearchTitle] = useState("")
  const [ tasks, setTasks ] = useState([])

  const onChangeSearchTitle = (e) => {
    const searchTitle = e.target.value;

    setSearchTitle(searchTitle)
  }

  const removeAllTasks = () => {
    this.props
      .deleteAllTasks()
      .then((response) => {
        console.log(response)
      })
      .catch((e) => {
        console.log(e)
      });
  }

  const findByTitle = () => {
    findTasksByTitle(searchTitle)
  }

  return (
    <>
      <Head>
        <title>ToDo App</title>
        <meta name="description" content="Simple To-Do App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxWidth="sm">
        <Grid2 container>
          <Grid2>
          <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Title
                </Typography>
                <Typography variant="body2">
                  Description
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Delete</Button>
              </CardActions>
            </Card>
          </Grid2>
          <Grid2>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Title
                </Typography>
                <Typography variant="body2">
                  Description
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Delete</Button>
              </CardActions>
            </Card>
          </Grid2>
        </Grid2>
      </Container>
    </>
  )
}

// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await retrieveTasks()
//   const data = await res
//   // Pass data to the page via props
//   return { props: { data } }
// }

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  };
};

export default connect(mapStateToProps, { retrieveTasks, findTasksByTitle, deleteAllTasks })(Home);