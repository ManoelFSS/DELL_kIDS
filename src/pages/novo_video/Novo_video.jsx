import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from './Novovideo.module.css'
import { v4 as uuidv4 } from 'uuid';

export const Novo_video = () => {

    const [db_videos, setdb_videos] = useState(()=>{ return JSON.parse(localStorage.getItem("db_videos"))});
    const [db_desenhos, setdb_desenhos] = useState(()=>{ return JSON.parse(localStorage.getItem("db_desenhos"))});
    const [videos, setVideos] = useState([])
    const [salveEdite, setsalveEdite] = useState(true)
    const [editingIndex, setEditingIndex] = useState(-1)
    const [submit, setSubmit] = useState("Adicionar")


    const { id } = useParams();
    const desenhoitem = db_desenhos[id - 1]
    const [nomeVideo, setNomeVideo] = useState(desenhoitem.nome)
    const [title, setTitle] = useState('')
    const [url, setUrl] = useState('')

    const atualiVideos = () =>{
        const videosfiltrados = db_videos.filter((item)=> item.nome === desenhoitem.nome)
        setVideos(videosfiltrados)
    }

    useEffect(()=>{
        atualiVideos() 
    },[db_videos])


    const handleEdit = (item, index) => {
        setNomeVideo(item.nome);
        setTitle(item.title);
        setUrl(item.video);
        setEditingIndex(index); // Defina o índice do item sendo editado
        setsalveEdite(false)
        setSubmit("Editar")
    };
    
    const handleSaveEdit = () => {
        
        if(!salveEdite){
            const editedVideo = {
                id: uuidv4(),
                nome: nomeVideo,
                title: title,
                video: url,
            };
        
            const updatedVideos = [...db_videos];
            updatedVideos[editingIndex] = editedVideo;
        
            setdb_videos(updatedVideos); // Atualize o estado local com os vídeos editados
            localStorage.setItem("db_videos", JSON.stringify(updatedVideos));
        
            // Limpe os campos do formulário e o índice de edição

            setTitle("");
            setUrl("");
            setEditingIndex('');
            setsalveEdite(true)
            atualiVideos() 
            setSubmit("Adicionar")
            event.preventDefault()
        }else{

            handleNovovideo()
            setsalveEdite(true)
        }
       
    };



    const handleDelete = (itemDelete) => {
        const updatedVideos = db_videos.filter((item) => item.id !== itemDelete.id);
        localStorage.setItem("db_videos", JSON.stringify(updatedVideos));
        setdb_videos(updatedVideos)
        atualiVideos()
        setTitle("");
        setUrl("");
    };

    const handleNovovideo = () => {
            event.preventDefault()
            const novoVideo = {
                "id":uuidv4(),
                "nome": nomeVideo,
                "title": title,
                "video": url,
            };
            setdb_videos((prevVideos) => [...prevVideos, novoVideo]);
            localStorage.setItem("db_videos", JSON.stringify([...db_videos, novoVideo]));
            setTitle("");
            setUrl("");
    };

    return (
        <>
            <section className={styles.container}>
                <div className={styles.area_listadevideos}>
                    <section>
                        {videos.length > 0 ? (
                            videos.map((item, index) => (
                                <div key={index}>
                                    <p>{item.title}</p>
                                    <section>
                                        <span>
                                            <img 
                                                src="https://static.thenounproject.com/png/1072351-200.png" 
                                                alt=""
                                                onClick={()=> handleEdit(item, index)}
                                                />
                                        </span>
                                        <span>
                                            <img 
                                                src="https://w7.pngwing.com/pngs/591/7/png-transparent-bin-delete-remove-trash-basic-interface-icon.png" 
                                                alt="" 
                                                onClick={() => handleDelete(item, index)}
                                                />
                                        </span>
                                    </section>
                                </div>
                            ))
                        ) : (
                            <p>Nenhum vídeo</p>
                        )}
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
                            <input 
                                type="text" 
                                value={nomeVideo}
                                placeholder="Digite o nome do desenho" 
                                onChange={(e)=> setNomeVideo(e.target.value)}
                                />
                        </div>
                        <div>
                            <label htmlFor="">Titulo</label>
                            <input 
                                type="text" 
                                value={title}
                                placeholder="Digite Titulo do episodio"
                                onChange={(e)=> setTitle(e.target.value)}
                                 />
                        </div>
                        <div>
                            <label htmlFor="">Video</label>
                            <input 
                                type="text" 
                                value={url}
                                placeholder="Digite a Url do video"
                                onChange={(e)=> setUrl(e.target.value)}
                                 />
                        </div>
                        <div>
                            <input 
                                className={styles.submit} 
                                type="submit"  
                                value={submit}
                                onClick={()=> handleSaveEdit()}
                                />
                                
                        </div>
                    </form>
                </div>
            
            </section>
        </>
    )
}