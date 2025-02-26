import { useState } from 'react';
import { TextField, Button, Box, Typography, Alert } from '@mui/material';
import axios from 'axios';

const GetProject = () => {
  const [projectId, setProjectId] = useState('');
  const [project, setProject] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const res = await axios.get(`/projects-api/api/project/${projectId}`);
      setProject(res.data);
      setError('');
    } catch (err: any) {
      setError(err.response?.data || 'Project not found');
      setProject(null);
    }
  };

  return (
    <Box my={4}>
      <Typography variant="h5" gutterBottom>
        Get Project by ID
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Project ID"
          value={projectId}
          onChange={(e) => setProjectId(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Get Project
        </Button>
      </form>
      {project && (
        <Box mt={2}>
          <Typography variant="h6">Project Details:</Typography>
          <pre>{JSON.stringify(project, null, 2)}</pre>
        </Box>
      )}
      {error && (
        <Box mt={2}>
          <Alert severity="error">{error}</Alert>
        </Box>
      )}
    </Box>
  );
};

export default GetProject;