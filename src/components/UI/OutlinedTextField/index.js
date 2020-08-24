
import React, { useState } from 'react';
import clsx from 'clsx';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: theme.spacing(2)
  },
  textField: props => ({
    border: `1px solid ${props.readOnly ? theme.palette.background.default : '#6B76A1'}`,
    borderRadius: theme.spacing(0.5),
    background: 'transparent',
    width: '100%',
    fontSize: 30,
    '& input': {
      height: theme.spacing(34 / 11),
      color: '#6B76A1',
      '-webkit-text-fill-color': props.fontColor ? props.fontColor : '#6B76A1',
      '-webkit-box-shadow': '0 0 0px 1000px transparent inset',
      border: 'none',
      padding: '8px 14px',
      '&:-webkit-autofill': {
        'transition': 'background-color 5000s ease-in-out 0s',
      },
      '&focus': {
        color: theme.palette.text.primary,
        '-webkit-text-fill-color': theme.palette.text.primary,
      },
    },
    '& textarea': {
      color: theme.palette.text.primary,
      '&:focus': {
        color: theme.palette.text.primary,
      },
      '&::placeholder': {
        color: '#6B76A1',
      }
    },
    '& fieldset': {
      border: 'none'
    },
    '&:hover': {
      border: `1px solid ${props.readOnly ? theme.palette.background.default : '#6B76A1'}`
    }
  }),
  error: {
    border: `1px solid ${theme.palette.secondary.main}`,
    '&:hover': {
      border: `1px solid ${theme.palette.secondary.main}`
    }
  },
  textLength: {
    fontSize: 20,
    transform: 'scale(0.8)'
  },
  inputAdornment: {
    position: 'absolute',
    right: theme.spacing(2)
  },
}));

const OutlinedTextField = ({ className, value, placeholder, showLength, limit, type, error, onChange, readOnly, fontColor, ...rest }) => {
  const classes = useStyles({ readOnly, fontColor });
  const [showPassword, setShowPassword] = useState(false);

  const showPasswordHandler = () => {
    setShowPassword(!showPassword);
  };

  const mouseDownPasswordHandler = event => {
    event.preventDefault();
  };
  const onChangeHandler = (event) => {
    if (limit) {
      if (value.length > limit) {
        return
      }
    }
    onChange(event)
  }

  return (
    <div className={classes.wrapper}>
      <Typography variant='h5'> {placeholder} :</Typography>
      <OutlinedInput
        variant='outlined'
        placeholder={placeholder || ''}
        type={showPassword ? 'text' : type}
        value={value}
        disabled={readOnly}
        className={clsx(
          className,
          'form-control form-control-lg',
          classes.textField,
          error && classes.error
        )}
        endAdornment={
          showLength ?
            <InputAdornment position="end" classes={{ root: classes.textLength }}>
              {`${value ? value.length : 0}/${limit}`}
            </InputAdornment> :
            type === 'password' ? (
              <InputAdornment className={classes.inputAdornment} position='end'>
                <IconButton
                  size='small'
                  onClick={showPasswordHandler}
                  onMouseDown={mouseDownPasswordHandler}>
                </IconButton>
              </InputAdornment>
            ) : null
        }
        onChange={onChangeHandler}
        {...rest}
      />
    </div>
  );
}

export default OutlinedTextField;