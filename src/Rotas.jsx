import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Novo_desenho } from "./pages/novo_desenho/Novo_desenho";
import { VideoPlay } from "./pages/video_play/VideoPlay";
import { Novo_video } from "./pages/novo_video/Novo_video";


export const Rotas = () =>{

    const db_desenhos = JSON.parse(localStorage.getItem('db_desenhos'))
 
    return (
        <>
            <Routes>
                <Route path="/" element={<Home  />} />
                <Route path="/VideoPlay" element={<VideoPlay data={db_desenhos} />} />
                <Route path="/Novo_desenho" element={<Novo_desenho  />} />
                <Route path="/Novo_video/:id" element={<Novo_video  />} />
            </Routes>
        </>
    )
}