import React from "react";

import styles from "./Btn.module.css"
import { Link} from "react-router-dom";


export const Btn = (props) => {

    const handleCard = () =>{
        localStorage.setItem("setDesenho", JSON.stringify(props.data))
        console.log(props.data)
    }

    return (
        <div className={styles.button} onClick={()=> handleCard()}>
            <Link to={"/VideoPlay"} className={styles.link}  >
                Assistir
            </Link>
        </div>
    )
}