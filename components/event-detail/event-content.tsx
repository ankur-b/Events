import classes from './event-content.module.css';
import {ReactNode} from 'react'

function EventContent(props:{children:ReactNode}) {
  return (
    <section className={classes.content}>
      {props.children}
    </section>
  );
}

export default EventContent;
