import { Container, Typography, Box } from '@mui/material';
import CreateProject from './components/CreateProject';
import GetProject from './components/GetProject';
import DeleteProject from './components/DeleteProject';

function App() {
  return (
    <Container>
      <Box my={4}>
        <Typography variant="h3" component="h1" gutterBottom>
          Projects Service
        </Typography>
        <CreateProject />
        <GetProject />
        <DeleteProject />
      </Box>
    </Container>
  );
}

export default App;