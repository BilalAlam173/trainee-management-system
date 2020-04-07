import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { Credential, LoginService } from "./login.service";
import { USER_ROLES } from "../../globals";
import { useHistory } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Pakistan Navy
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export function Login() {
  const classes = useStyles();
  const initState: Credential = {
    username: "",
    password: "",
    role: USER_ROLES.ADMIN,
  };
  const [state, setState] = React.useState(initState);
  const history = useHistory();

  const handleRoleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    setState({ ...state, role: Number(target.value) });
  };
  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    state.username = target.value;
    setState({ ...state, username: target.value });
  };
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    setState({ ...state, password: target.value });
  };

  const submit = () => {
    try {
      console.log(state);
      const token = LoginService.submitLogin(state);
      if (token) {
        localStorage.setItem("token", token);
        localStorage.setItem("username", state.username);
        localStorage.setItem("role", JSON.stringify(state.role));
        history.push("/dashboard");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          PN Trainee Management System
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username OR Pno"
            name="username"
            autoComplete="off"
            onChange={handleUsernameChange}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            onChange={handlePasswordChange}
            id="password"
            autoComplete="current-password"
          />
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="Role"
              name="role"
              value={state.role}
              onChange={handleRoleChange}
              row
            >
              <FormControlLabel
                value={USER_ROLES.ADMIN}
                control={<Radio />}
                label="Admin"
              />
              <FormControlLabel
                value={USER_ROLES.MEDICAL_ADMIN}
                control={<Radio />}
                label="Medical Admin"
              />
              <FormControlLabel
                value={USER_ROLES.APPOINTMENT_HOLDER}
                control={<Radio />}
                label="Appointment Holder"
              />
              <FormControlLabel
                value={USER_ROLES.TRAINEE}
                control={<Radio />}
                label="Trainee"
              />
            </RadioGroup>
          </FormControl>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={submit}
          >
            Sign In
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
