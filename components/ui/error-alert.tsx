import classes from './error-alert.module.css';
import { ReactNode } from 'react';
function ErrorAlert(props:{
  children:ReactNode
}) {
  return <div className={classes.alert}>{props.children}</div>;
}

export default ErrorAlert;
