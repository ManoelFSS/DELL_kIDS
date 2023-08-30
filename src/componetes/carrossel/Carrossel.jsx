import React, { useRef, useState } from "react";
import styles from "./Carrossel.module.css";
import { Card } from "../card/Card";

export const Carrossel = (props) => {

    const scrollRef = useRef(null);
    const scrollStep = 200; // Ajuste o valor conforme necessário

    const [intervalId, setIntervalId] = useState(null);

    const handleScrollLeft = () => {
        if (scrollRef.current) {
            console.log(scrollRef.current.scrollLeft)
            scrollRef.current.scrollLeft -= scrollStep;
        }
    };

    const handleScrollRight = () => {
        if (scrollRef.current) {
            console.log(scrollRef.current.scrollLeft)
            scrollRef.current.scrollLeft += scrollStep;
        }
    };

    const handleMouseDown = (direction) => {
        if (!intervalId) {
            const id = setInterval(() => {
                if (direction === "left") {
                    handleScrollLeft();
                } else if (direction === "right") {
                    handleScrollRight();
                }
            }, 100); // Ajuste o intervalo conforme necessário
            setIntervalId(id);
        }
    };

    const handleMouseUp = () => {
        if (intervalId) {
            clearInterval(intervalId);
            setIntervalId(null);
        }
    };

    return (
        <div className={styles.area_scroll}>
            <span
                onMouseDown={() => handleMouseDown("left")}
                onMouseUp={handleMouseUp}
            ></span>
            <div className={styles.area_cards} ref={scrollRef}>
            
                {props.db.map((item) => (   
                    <Card desenho={item} key={item.id} />
                ))}
            </div>
            <span
                onMouseDown={() => handleMouseDown("right")}
                onMouseUp={handleMouseUp}
            ></span>
            
        </div>
    );
};