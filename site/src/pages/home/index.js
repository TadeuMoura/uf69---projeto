//Design css
import "./Home.css";

//link
import { Link } from "react-router-dom";

//componentes
import Rodape from "../../assets/components/rodape";
import Cabecalho from "../../assets/components/cabecalho";




//PAGINA PRINCIPAL
export default function Home (){
    return(
<div className="div-mae">
    
    {/* Cabeçalho */}
    <Cabecalho/>


    <section className="aba-de-evento">
        <h1 className="fonteH1">NOVO EVENTO NO DIA 22 DE OUTUBRO</h1>
        <Link className="fonteH2" to={"/evento"}><h1>VENHA CONFERIR</h1></Link>
    </section>
    

    <section>
        <div className="fundo-com-imagem">
            <h1 className="organize">ORGANIZE SEUS EVENTOS CONOSCO</h1>  
        </div>
        <div className="linha-preta">
            <span> 0 </span>
        </div>
        <div className="parte1">
            <div className="faixa-diagonal">
                <h1 className="titulo-nosso-compromisso">NOSSO COMPROMISSO COM VOCÊ</h1>
            </div>
            <div className="divisor-texto-padrao">
                <p className="texto-padrao">&nbsp;&nbsp;&nbsp;Somos os  bastidores para  tornar o seu evento memorável. A UF69 tem como objetivo atender 
                as expectativas de seus clientes através de palestras com temas dinâmicos relacionados ao  mercado de trabalho, 
                vida pessoal, e outros temas afins que buscam em tese o desenvolvimento profissional e pessoal.</p>
            </div>    
        </div>
        <div className="linha-preta2">
            <span> 0 </span>
        </div>
        <div className="fundo-com-imagem2">
        <h1 className="organize">D</h1>
    </div>
</section>
<div className="linha-preta">
            <span> 0 </span>
        </div>
<Rodape/>


</div>
    )
}