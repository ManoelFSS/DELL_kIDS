import React, {useState} from "react";
import styles from "./VideoPlay.module.css"

export const VideoPlay = () =>{
    console.log()
    
    const db_desenho = JSON.parse(localStorage.getItem("setDesenho"))
    const db_videos = JSON.parse(localStorage.getItem("db_videos"))
    const [episodio, setEpisodio] = useState(0)
    const totalEpisodios = db_videos
    const desenhoFiltrado = totalEpisodios.filter((episodios) => episodios.nome === db_desenho[0].nome);
    const videoIndex = [desenhoFiltrado[episodio]]
    console.log(videoIndex[0])

    const hendlEpisodio = (e) =>{
        setEpisodio(e.target.innerHTML - 1)
    }

    return (
        <>
            {  videoIndex[0] !== undefined ? (
                    <div>
                        {videoIndex.map((item)=>(
                            <div className={styles.area_form} key={item.id}>
                                <iframe className={styles.iframe}
                                    width="500" 
                                    height="334" 
                                    src={item.video} 
                                    title={item.title} 
                                    frameBorder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                    allowFullScreen
                                >
                                </iframe>
                            </div>
                        ))}
                   
                        <div className={styles.episodios_conteinner}>
                            {desenhoFiltrado.map((episode, index) => (
                                <div className={styles.indexEpisodio} key={index} onClick={(e)=> hendlEpisodio(e)} >
                                    {index + 1}
                                </div>
                            ))}
                        </div>
                    </div>
                ):(
                     <section className={styles.error}>
                        <div>
                             <h3>Ops</h3>
                             <p>Nenhum Video Encontrado !!</p>
                        </div>
                    </section> 
                )
            }
           
            
        </>
    )
}



{/* <iframe 
width="950" 
height="534" 
src="https://www.youtube.com/embed/KBD6jFO4b-0" 
title="Tom &amp; Jerry em Português | Brasil | Nunca um Dia Entediante | WB Kids" 
frameborder="0" 
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
allowfullscreen></iframe> */}