
import Cabecalho from "../../assets/components/cabecalho";
import Rodape from "../../assets/components/rodape";
import { Link } from "react-router-dom";
import Yuri1 from "../../assets/images/image-yuri.png";
import Yuri2 from "../../assets/images/yuri-sem-fundo.png"
import "./index.css";

export default function Eventos () {

    return (
    <div>
    <Cabecalho/>

    <section className="faixa-de-evento1">
        
        <img src={Yuri2} alt="imagem2" className="imagem2"/>
            <div>
                <h1 className="fonte-H1">EVENTO COM YURI UTIDA</h1>
                <p className="fonte-H2">Venha conferir as novidades.</p>
            </div>
       
    </section>
        <hr/>
    <section className="faixa-de-evento2">
        <div>
        <h1>SOBRE O PALESTRANTE YURI UTIDA</h1>
        <p className="texto-padrao-evento">&nbsp;&nbsp;&nbsp;&nbsp;Empreendedor, coach, coautor de 2 livros e palestrante, Yuri Utida tem como principal missão ajudar no desenvolvimento de pessoas, utilizando de vídeos e palestras
como ferramenta comunicativa. Deixando de lado sua zona de conforto, Yuri Utida realiza suas palestras tendo como tema principal, as ideologias a respeito de aprendizado,
contribuição e liberdade, mostrando que as "impossibilidades" podem ser alcançadas.</p>
        </div>
        <img src={Yuri1} alt="Yuri1" className="imagem1"/>
    </section>

    <section className="aba-de-evento">
        <h1 className="fonte-H3">EVENTO NO DIA 22/10/2022</h1>
        <Link className="fonte-H4" to={""}><h1>ADQUIRA JÁ SEU INGRESSO</h1></Link>
    </section>
    <Rodape/>
    </div>

    )
}