
import React, { useState, useEffect } from "react"
import styles from "./Home.module.css"
import kids_logo from "../../assets/image/kids.png"
import { Carrossel } from "../../componetes/carrossel/Carrossel"
import { Btn } from "../../componetes/btn/Btn"
import db from "../../../db.json"


export const Home = () => {
    
   
        const dbVideos = JSON.parse(localStorage.getItem("db_videos"));
        const dbDesenhos = JSON.parse(localStorage.getItem("db_desenhos"));

       

        if (!dbVideos ||  dbVideos === "null") {
            console.log("dbDesenhos")
            console.log("dbVideos")
            const totalVideos = db.data[0].videos;
            localStorage.setItem("db_videos", JSON.stringify(totalVideos));
        }

        if (!dbDesenhos  ||  dbDesenhos === "null") {
            const totalDesenhos = db.data[0].desenhos;
            localStorage.setItem("db_desenhos", JSON.stringify(totalDesenhos));
        }

   

    const kids = JSON.parse(localStorage.getItem("db_desenhos"))
    const [randomNumber, setRandomNumber] = useState(0);
     
   

    useEffect(() => {
        const interval = setInterval(() => {
            const numeroAleatorio = Math.floor(Math.random() * kids.length); // Gera um número entre 0 e 10
            setRandomNumber(numeroAleatorio);
            
        }, 5000); // Gera um novo número a cada 1000 milissegundos (1 segundo)

        return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
    }, []); // Dependência vazia para executar apenas uma vez

    const kids_item = [kids[randomNumber]];
    const kids_img = kids_item[0].image;
   
    const categoriasComDesenhos = Array.from(new Set(kids.map(item => item.categoria_id)));

    return (
        <section className={styles.banner_area}>

            <section className={styles.banner} style={{ background: `url('${kids_img}') no-repeat fixed center /100% 100%` }}>
                <div className={styles.container}>
                    {kids_item.map((item) => (
                        <div className={styles.area_descricao} key={item.id}>
                            <h3>{item.nome}</h3>
                            <section>
                                <img src={kids_logo} alt="kids" />
                                <span>8.7</span>
                                <img src={'data:image/png;base64,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'} alt="kids" />
                            </section>
                            <h4>Sinopse</h4>
                            <p>{item.descricao}</p>
                            <Btn data={kids_item} key={item.id} />
                        </div>
                    ))}
                </div>
            </section>
            <section className={styles.area_kids}>

                {categoriasComDesenhos.map((categoria_id, index) => {
                    
                    const desenhosDaCategoria = kids.filter(item => item.categoria_id === categoria_id);

                    return desenhosDaCategoria.length > 0 ? (
                        <div className={styles.area_categoria} key={index}>
                            <div className={styles.area_title}>
                                <h3 className={styles.title_categoria}>
                                    {categoria_id}
                                </h3>
                            </div>

                            <Carrossel db={desenhosDaCategoria} key={index} />
                        
                        </div>
                    ) : null;
                })}

            </section>
        </section>

    )
}