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
                <div className={styles.area_listadevideos}>
                    <section>
                        {videos.map((item)=>(
                            <div>
                                <p>{item.title}</p>
                                <section>
                                    <span>1</span>
                                    <span>2</span>
                                    <span>2</span>
                                </section>
                            </div>
                        ))}
                    </section>
                </div>
                <div className={styles.area_desenho_form}>
                    <div className={styles.post_desenho}>
                        <img src={desenhoitem.image} alt={desenhoitem.nome} />
                        <h3>{desenhoitem.nome}</h3>
                        <h5>{videos.length} | Videos </h5>
                    </div>
                    <form action="#">
                      
                        <div>
                            <label htmlFor="">Nome</label>
                            <input type="text" placeholder="Digite o nome do desenho" />
                        </div>
                        <div>
                            <label htmlFor="">titulo</label>
                            <input type="text" placeholder="Digite Titulo do episodio" />
                        </div>
                        <div>
                            <label htmlFor="">video</label>
                            <input type="text" placeholder="Digite a Url do video" />
                        </div>
                        <div>
                            <input className={styles.submit} type="submit"  value={"Adicionsr"}/>
                        </div>
                    </form>
                </div>
            
            </section>
        </>
    )
}