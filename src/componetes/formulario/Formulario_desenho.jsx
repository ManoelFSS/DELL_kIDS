import { useState, useEffect } from "react"
import Styles from "./Form.module.css"
import { v4 as uuidv4 } from 'uuid';

export const Formulario_desenho = () => {

    const [data, setdata] = useState( JSON.parse(localStorage.getItem("db_desenhos")) )
    const [dataVideos, setdataVideos] = useState( JSON.parse(localStorage.getItem("db_videos")) )
   
  

    const [image, setImage] = useState('')
    const [nome, setNome] = useState('')
    const [descrição, setDescrição] = useState('')
    const [categoria, setCategoria] = useState('')
    const [editIndex, setEditIndex] = useState(null);


    const Hendl_Desenho = ()=>{

        event.preventDefault()
        const desenho = {
            "id": uuidv4(),
            "image": image,
            "nome": nome,
            "descricao":  descrição,
            "categoria_id": categoria
        }

        data.unshift(desenho)
        setdata([...data])
        
    }

    const hendelLocalStorage = () => {
        localStorage.setItem("db_desenhos", JSON.stringify(data)) ?? []
    }

    useEffect(()=>{
        setImage('')
        setNome('')
        setDescrição('')
        setCategoria('')
        hendelLocalStorage()
    },[data])

    // codigo de ediçao

    const hendelEdite = (index) => {
     
        setEditIndex(index);
        const itemEditado = data[index];
        setImage(itemEditado.image);
        setNome(itemEditado.nome);
        setDescrição(itemEditado.descricao);
        setCategoria(itemEditado.categoria_id);
        
    }


    const hendelEditSubmit = () => {
        if (editIndex !== null) {

            const updatedItem = {
                id: uuidv4(),
                image: image,
                nome: nome,
                descricao: descrição,
                categoria_id: categoria
            };

            const updatedData = [...data];
            updatedData[editIndex] = updatedItem;

            setdata(updatedData);
            localStorage.setItem("db_desenhos", JSON.stringify(data));

            setImage('');
            setNome('');
            setDescrição('');
            setCategoria('');

            setEditIndex(null);
        }else{
            Hendl_Desenho()
        }
    }

    const hendelDelete = (index) => {
        const updatedData = data.filter((item, i) => i !== index);
        setdata(updatedData);
        localStorage.setItem("db_desenhos", JSON.stringify(updatedData));
        
    }

    const calc_videos = (nome) => {
        const videos = dataVideos.filter(video => video.nome === nome);
        return videos.length;
    };

    

    return (
        <section className={Styles.container}>
            <form action="#">
                <h3>Adicione um Novo Desenho</h3>
                <div>
                    <label htmlFor="img">Imagem</label>
                    <input 
                        type="text" 
                        id="img" 
                        placeholder="Digite a Url da imagem"
                        value={image} 
                        onChange={(e)=> setImage(e.target.value)}
                        />
                </div>
                <div>
                    <label htmlFor="nome">Nome</label>
                    <input 
                        type="text" 
                        id="nome"  
                        placeholder="Digite o nome do Desenho"
                        value={nome}
                        onChange={(e)=> setNome(e.target.value)}
                        />
                </div>
                <div>
                    <label htmlFor="descricao">Descrição</label>
                    <textarea 
                        name="descriçao" 
                        id="descricao" 
                        cols="30" 
                        rows="5" 
                        placeholder="Digite a Descrição"
                        value={descrição}
                        onChange={(e)=> setDescrição(e.target.value)}
                        ></textarea>
                </div>
                <div>
                    <label htmlFor="categoria">Categoria</label>
                    <input 
                        type="text" 
                        id="categoria" 
                        placeholder="Digite uma Categoria"
                        value={categoria}
                        onChange={(e)=> setCategoria(e.target.value)}
                        />
                </div>
                <div>
                    <input 
                        type="submit" 
                        value={"Adicionar"} 
                        className={Styles.submit} 
                        onClick={hendelEditSubmit}
                        />
                </div>

            </form>
            <div className={Styles.area_desenhos}>
                <section>
                    {data.map((item, index)=>(
                        <div className={Styles.card} key={item.id}>
                            <img src={item.image} alt={item.name} />
                            <h4>{item.nome}</h4>
                            <p>{calc_videos(item.nome)} | Videos</p><br/> 
                            <p className={Styles.novoVideo}>Adicionar video</p>                           
                            <div className={Styles.area_delit_edit}>
                                <img src="https://static.thenounproject.com/png/1072351-200.png" 
                                     alt=""
                                     onClick={()=> hendelEdite(index)}
                                     />
                                <img 
                                    src="https://w7.pngwing.com/pngs/591/7/png-transparent-bin-delete-remove-trash-basic-interface-icon.png" 
                                    alt="" 
                                    onClick={() => hendelDelete(index)}
                                    />
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        </section>
    )
}