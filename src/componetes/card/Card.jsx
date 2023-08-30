import React from "react";
import styles from "./Card.module.css"
import { Btn } from "../btn/Btn";

export const Card = (props) => {

    return (
       
            <div className={styles.card}  >
                <img src={props.desenho.image} alt="img" />
                <h4>{props.desenho.nome}</h4>
                <Btn data={[props.desenho]} />
            </div>
       
    )
}