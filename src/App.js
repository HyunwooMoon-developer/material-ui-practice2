import React from 'react';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';

//https://mui.com/
const App = () => {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        xs={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'orange' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <TextField
          margin="normal"
          label="Email Address"
          name="email"
          fullWidth
          autoFocus
          required
        />
        <br />
        <TextField
          margin="normal"
          label="password"
          type="password"
          name="password"
          fullWidth
          autoFocus
          required
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="remember me"
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>
        <Grid container>
          <Grid item xs>
            <Link>Forgot Password?</Link>
          </Grid>
          <Grid item>
            <Link>SignUp</Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default App;
