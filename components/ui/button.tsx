import Link from "next/link";
import { ReactNode } from "react";
import classes from './button.module.css'

function Button(props:{link:string,children:ReactNode}){
    return <Link className={classes.btn} href={props.link}>
        {props.children}
    </Link>
}
export default Button