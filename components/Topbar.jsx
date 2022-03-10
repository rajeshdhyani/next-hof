import React from "react";
import styles from "../styles/Home.module.css";
import showIf from "../helpers/showIf";

export default function Topbar() {
  //const [value,setValue]=React.useState(false)
  return (
    <>
      {/* <button name="set buttun name" onClick={()=> setValue(!value)}>sample</button>

{showIf(value)(
    <h1>Hello ShowIf</h1>
)} */}
      <div className={styles.topbar}>
        <div className={styles.logo}>HEXAVIEW</div>
      </div>
    </>
  );
}
