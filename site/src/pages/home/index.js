//Design css
import "./Home.css";

//link
import { Link } from "react-router-dom";

//Logotipos
import Logouf69 from "../../assets/images/logo-novo.png"
import YoutubeLogo from "../../assets/images/42-425171_white-youtube-icono-png-white-youtube-logo-transparent.png"
import InstagramLogo from "../../assets/images/best-solutions-of-instagram-png-transparent-png-images-unique-white-instagram-logo-outline-of-white-instagram-logo-outline-copy.png"
import TelegramLogo from "../../assets/images/52-520422_join-the-conversation-twitter-logo-black-and-white.png"
import FacebookLogo from "../../assets/images/facebook-white-circle-1024x1024.png"

//PAGINA PRINCIPAL
export default function Home (){
    return(
<div className="div-mae">
    
    {/* Cabeçalho */}
    <header>
        
        <div className="cabecalho">
            
            <img src={Logouf69} alt="logo" className="logouf69"/>

            <div>
                
                <a href="https://www.figma.com/file/LvWB2hsGwlOkfgrShOhbKn/projeto-uf69" className="links-cabecalho">Início</a>
                <a href="https://www.figma.com/file/LvWB2hsGwlOkfgrShOhbKn/projeto-uf69" className="links-cabecalho">Início</a>
                <a href="https://www.figma.com/file/LvWB2hsGwlOkfgrShOhbKn/projeto-uf69" className="links-cabecalho">Início</a>
                <a href="https://www.youtube.com/" className="links-cabecalho">Início</a>
                
            </div>
        
            <h1 className="titulo-cabeçalho">UF 69</h1>
    
        </div>

    </header>
    <section className="aba-de-evento">
        <h1>NOVO EVENTO EM: 10 DIAS</h1>
        <Link to={"/evento"}><h1>VENHA CONFERIR</h1></Link>
    </section>

    <section>
        <div className="fundo-com-imagem">
            <h1 className="organize">ORGANIZE SEUS EVENTOS CONOSCO</h1>
        </div>
        <div className="parte1">
            <div className="faixa-diagonal">
                <h1 className="titulo-nosso-compromisso">NOSSO COMPROMISSO COM VOCÊ</h1>
            </div>
            <div className="divisor-texto-padrao">
        
                <p className="texto-padrão">&nbsp;&nbsp;&nbsp;Somos os  bastidores para  tornar o seu evento memorável. A UF69 tem como objetivo atender 
                as expectativas de seus clientes através de palestras com temas dinâmicos relacionados ao  mercado de trabalho, 
                vida pessoal, e outros temas afins que buscam em tese o desenvolvimento profissional e pessoal.</p>
        
            </div>    
        </div>
        <div className="linha-preta">
            <span> 0 </span>
        </div>
        <div className="fundo-com-imagem2">
        <h1 className="organize">ORGANIZE SEUS EVENTOS CONOSCO</h1>
    </div>
</section>
<footer className="rodape">
    <Link to={'/evento'}><img src={YoutubeLogo} alt="logo-youtube" className="logos-rodape"/></Link>
    <img src={InstagramLogo} alt="logo-instagram" className="logos-rodape"/>
    <img src={TelegramLogo} alt="logo-telegram" className="logos-rodape"/>
    <img src={FacebookLogo} alt="logo-facebook" className="logos-rodape"/>
</footer>

</div>
    )
}