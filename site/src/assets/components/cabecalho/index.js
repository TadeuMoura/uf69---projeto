import "./index.css"


import Logouf69 from "../../../assets/images/logo-novo.png"
import { Link } from "react-router-dom";

export default function Cabecalho () {
    return(
        <header>
       
        <div className="cabecalho">

            <img src={Logouf69} alt="logo" className="logouf69"/>

            <div className="container-dos-titulos">
                <Link to={"/"} className="links-cabecalho">Início</Link>
                <Link to={"/sobre-nos"} className="links-cabecalho">Sobre nós</Link>
                <Link to={"/evento"} className="links-cabecalho">Nossos Eventos</Link>
            </div>

            <h1 className="titulo-cabeçalho">UF 69</h1>
    
        </div>

    </header>
    )
}