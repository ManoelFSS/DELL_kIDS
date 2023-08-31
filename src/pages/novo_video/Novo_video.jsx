import { useParams } from "react-router-dom";
import { useState } from "react";
import styles from './Novovideo.module.css'

export const Novo_video = () => {

    const [db_videos, setdb_videos] = useState(()=>{ return JSON.parse(localStorage.getItem("db_videos"))});
    const [db_desenhos, setdb_desenhos] = useState(()=>{ return JSON.parse(localStorage.getItem("db_desenhos"))});

    const { id } = useParams();
    const desenhoitem = db_desenhos[id - 1]
   
    const videos = db_videos.filter((item)=> item.nome === desenhoitem.nome)
    // 
    console.log(videos)
    console.log(desenhoitem.nome)
   

    return (
        <>
            <section className={styles.container}>
                <div className={styles.area_desenho}>
                    <div>
                        <img src={desenhoitem.image} alt={desenhoitem.nome} />
                        <h3>{desenhoitem.nome}</h3>
                        <p>{videos.length} | Videos </p>
                    </div>
                   
                        {videos.map((item)=>(
                             <div>
                                <span>{item.title}</span>
                                <span>1</span>
                                <span>2</span>
                                <span>2</span>
                            </div>
                        ))}
                    
                    
                </div>
            
            </section>
        </>
    )
}