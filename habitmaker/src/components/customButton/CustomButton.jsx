import React from 'react'
import styles from './CustomButton.module.css'
export default function CustomButton({btnText="",style="",handler=()=>{}}) {
  return (
     <button className={`${styles.btn} ${style}`} onClick={handler}>{btnText||"Submit"}</button>
  )
}