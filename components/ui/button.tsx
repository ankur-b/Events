import Link from "next/link";
import { ReactNode } from "react";
import classes from './button.module.css'

function Button(props: { link?: string, children: ReactNode, onClick?: () => {} }) {
    if (props.link) {
        return <Link className={classes.btn} href={props.link}>
            {props.children}
        </Link>
    }
    return <button className={classes.btn} onClick={props.onClick}>{props.children}</button>
}
export default Button