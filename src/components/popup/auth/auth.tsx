/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import * as React from 'react';
import {
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Button,
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';

import { IClasses, IAllStringProps } from 'utils/interface';

interface IProps {
  signUp?: (props: IAllStringProps) => void;
}

export const PopupAuth: React.FC<IProps & IClasses> = ({
  classes,
  signUp,
}) => {
  const [state, setState] = React.useState({
    email: '',
    password: '',
    showPassword: false,
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };
  const handleClickShowPassword = () => {
    setState({ ...state, showPassword: !state.showPassword });
  };
  const handleMouseDownPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };
  const handleSignUp = () => {
    signUp({
      email: state.email,
      password: state.password
    });
  }

  return (
    <>
      <h2 className={classes.title}>Вход или Регистрация</h2>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          name="email"
          id="outlined-basic"
          label="Email"
          variant="outlined"
          value={state.email}
          className={classes.input}
          onChange={handleChange}
          size="small"
        />
        <FormControl
          className={classes.textField}
          variant="outlined"
          size="small"
        >
          <InputLabel htmlFor="outlined-adornment-password">Пароль</InputLabel>
          <OutlinedInput
            name="password"
            id="outlined-adornment-password"
            type={state.showPassword ? 'text' : 'password'}
            value={state.password}
            onChange={handleChange}
            labelWidth={70}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {state.showPassword ? (
                    <Visibility fontSize="small" />
                  ) : (
                    <VisibilityOff fontSize="small" />
                  )}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <div className={classes.buttonSet}>
          <Button variant="contained" color="primary" className={classes.button}>
            Войти
          </Button>
          <Button
            variant="outlined"
            color="primary"
            className={classes.button}
            onClick={handleSignUp}
          >
            Регистрация
          </Button>
        </div>
      </form>
    </>
  );
};