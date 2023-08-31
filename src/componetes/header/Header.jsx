import React, {useState} from "react";
import styles from './Header.module.css'
import Logo from "../../assets/image/logo.png"
import { Link } from "react-router-dom";

export  const Header = () =>{

    const [display, setDisplay] = useState("none")
    const [usuario, setUsuario] = useState("")
    const [senha, setSenha] = useState("")
    const [logado, setLogado] = useState(false)
    const [menu, setMenu] = useState("-200px")

    console.log(usuario)
    console.log(senha)
    
    const confirma_login = () =>{
        
        if(usuario !== "" && senha !== ""){
            event.preventDefault()
            setLogado(true)
            setDisplay("none")
        }
    }

    const hendDisplay = () =>{
        if(logado === false){
            setDisplay(display === "none" ? "flex" : "none")
        }else{
            setMenu(menu === "-200px" ? "0px" : "-200px")
        }
    }


    return (
        <header className={styles.Header}>
            <div className={styles.area_contaier}>
                <h1>
                    <img src={Logo} alt={"play kids"} />
                </h1>
                <nav>
                    <ul>
                        <li onClick={()=> `${setMenu("-200px")}`}>
                            <Link to={'/'} className={styles.linkEstilizado}>
                                Home
                            </Link>
                        </li>
                        <li onClick={()=> hendDisplay()}> 
                            {logado === false ? (
                              "Login"
                            ) : (
                               <div 
                                    className={styles.toogle}
                                    style={{ background:menu === "-200px" ? `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQQHEK8MU0JFvRKyn3I5uFH6NHc46tFOT4aA&usqp=CAU) no-repeat center / cover` : `url(data:image/png;base64,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) no-repeat center / cover`, border: "solid 4px #fff" }}
                                    >

                                </div>
                            )}
                        </li>
                    </ul>
                </nav>
                <div className={styles.modal} style={{display:`${display}`}}>
                        
                        <form action="#">
                            <span onClick={()=> setDisplay(display === "none" ? "flex" : "none")}>
                                X
                            </span>
                            <div>
                                <label htmlFor="">Usuário</label>
                                <input 
                                    type="text" 
                                    placeholder="Digite seu Usuário" 
                                    onChange={(e)=> setUsuario(e.target.value)}
                                    />
                            </div>
                            <div>
                                <label htmlFor="">Senha</label>
                                <input 
                                    type="password" 
                                    placeholder="Digite sua Senha" 
                                    onChange={(e)=> setSenha(e.target.value)}
                                    />
                            </div>
                            <div>
                                <input 
                                    className={styles.submit} 
                                    type="submit"  
                                    value={"Entrar"}
                                    onClick={() => confirma_login()}
                                    />
                            </div>
                        </form>
                </div>
            </div>
            <aside 
                className={styles.menu_lateral} 
                style={{right:`${menu}`}}
                >
                <h3>Olá,<br/> {usuario}</h3>
                <p 
                    onClick={()=> `${setLogado(false)} ${setMenu("-200px")}`}
                    style={{color:"#fff"}}
                    >
                    <Link to={"/"} className={styles.linkEstilizado}>
                        Sair
                    </Link>
                </p>
                <ul>
                    <li onClick={()=> setMenu("-200px")}>
                        <Link 
                            to={"/Novo_desenho"}
                            className={styles.linkEstilizado}
                            >
                                Novo Desenho
                        </Link>
                    </li>
                </ul>
            </aside>
        </header>
    )
}
