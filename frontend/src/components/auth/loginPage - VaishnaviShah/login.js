import React, { useReducer, useEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import login from './student-login.png';
import './login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-social/bootstrap-social.css';
import { Button2 } from "./../../util/button/button.js";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      marginBottom: '100px',
      margin: theme.spacing(-1),
      marginLeft: theme.spacing(70),
      width: '500px',
      borderRadius: '50%',
    },
    loginBtn: {
      marginTop: theme.spacing(0),
      flexGrow: 1,
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '100px',
      height: '50px',
    },
    header: {
      textAlign: 'center',
      position: 'relative',

    },
    card: {
      marginTop: theme.spacing(10),
      width: '700px',

    }
  })
);

//state type

type State = {
  username: 'string',
  password: 'string',
  isButtonDisabled: 'boolean',
  helperText: 'string',
  isError: 'boolean'
};

const initialState: State = {
  username: '',
  password: '',
  isButtonDisabled: true,
  helperText: '',
  isError: false
};

type Action = { type: 'setUsername', payload: string }
  | { type: 'setPassword', payload: string }
  | { type: 'setIsButtonDisabled', payload: boolean }
  | { type: 'loginSuccess', payload: string }
  | { type: 'loginFailed', payload: string }
  | { type: 'setIsError', payload: boolean };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'setUsername':
      return {
        ...state,
        username: action.payload
      };
    case 'setPassword':
      return {
        ...state,
        password: action.payload
      };
    case 'setIsButtonDisabled':
      return {
        ...state,
        isButtonDisabled: action.payload
      };
    case 'loginSuccess':
      return {
        ...state,
        helperText: action.payload,
        isError: false
      };
    case 'loginFailed':
      return {
        ...state,
        helperText: action.payload,
        isError: true
      };
    case 'setIsError':
      return {
        ...state,
        isError: action.payload
      };
  }
}

const Login = () => {
  const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (state.username.trim() && state.password.trim()) {
      dispatch({
        type: 'setIsButtonDisabled',
        payload: false
      });
    } else {
      dispatch({
        type: 'setIsButtonDisabled',
        payload: true
      });
    }
  }, [state.username, state.password]);

  const handleLogin = () => {
    if (state.username === 'abc@email.com' && state.password === 'password') {
      dispatch({
        type: 'loginSuccess',
        payload: 'Login Successfully'
      });
    } else {
      dispatch({
        type: 'loginFailed',
        payload: 'Incorrect username or password'
      });
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.keyCode === 13 || event.which === 13) {
      state.isButtonDisabled || handleLogin();
    }
  };

  const handleUsernameChange: React.ChangeEventHandler<HTMLInputElement> =
    (event) => {
      dispatch({
        type: 'setUsername',
        payload: event.target.value
      });
    };

  const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> =
    (event) => {
      dispatch({
        type: 'setPassword',
        payload: event.target.value
      });
    }
  return (
    <div className="section">
      <div className="image">
        <img src={login} alt="login" className="img">
        </img>
      </div>
      <div className={classes.container}>
        <div className="login">
          <h2>Welcome!</h2>
          <form>
            <label>Username</label>
            <div className="inputs">

              <input type="text" >

              </input>
              <i className="fas fa-user"></i>

            </div>
            <label>Password</label>
            <div className="inputs">
              <input type="password" >
              </input>
              <i className="fas fa-eye-slash"></i>
            </div>
            <div style={{ textAlign: "center" }}>
              <Button2 label="Submit" type="submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

