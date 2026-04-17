import React from 'react'
import styles from './CustomeButton.module.css'
export default function CustomeButton({ btnTxt = "", style = "", handleClick = () => { } }) {
    return (
        <button className={`${styles.button} ${style}`} onClick={handleClick}>{btnTxt || "Button"}</button>
    )
}