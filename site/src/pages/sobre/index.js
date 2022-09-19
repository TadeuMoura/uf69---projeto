import Cabecalho from "../../assets/components/cabecalho";
import Rodape from "../../assets/components/rodape";

import "./index.css";

export default function Sobre () {
    return (
    <div>
    <Cabecalho/>
    <section className="fundo-config">
        <div className="aba-1">
        <h1 className="titulo">Sobre nós</h1>
        <p className="texto-padrão"> &nbsp;&nbsp;&nbsp;&nbsp;A UF-69 Serviços de Apoio e Meditação  nasceu com o intuito de promover
        serviços de escritório e apoio administrativo realizando atividades de intermediação, mediação de negócios ou serviços em
        gerais,promovendo a integração entre profissionais e empresas. Possibilitamos o treinamento e desenvolvimento profissional empresarial,
        levando para o maior número de pessoas as possibilidades de mudanças positivas no âmbito pessoal e profissional. </p>
        </div>

        <div className="aba-1">
        <h1 className="titulo">Mas por que UF-69?</h1>
        <p className="texto-padrão"> &nbsp;&nbsp;&nbsp;&nbsp;Parte do seu nome tem um significado com base na numerologia, onde o número 6 simboliza o equilíbrio, união, 
            amor, gratidão e responsabilidade. E o 9 representa a humildade, propósito, desenvolvimento espiritual, liderança e karma.</p>
        
        <p className="texto-padrão"> &nbsp;&nbsp;&nbsp;&nbsp;Logo com base nestes significados, o número 69 não apenas simboliza o que foi descrito sobre os outros 
            mencionados acima, mas também simboliza a idéia de desenvolvimento futuro, desapegando dos fatos não úteis do passado, dando espaço 
            para novas coisas que estão por vir. Além disso, o 69 na medicina chinesa faz referência ao simbolo de Ying e Yang, que se refere ao
            equilíbrio de todas as coisas.</p> 

        <p className="texto-padrão"> &nbsp;&nbsp;&nbsp;&nbsp;Já o UF faz significado à Uchizono e Fujisaka, sendo estes os sobrenomes dos fundadores
        da empresa. Ambos estão ligados a ancestralidade japonesa, onde os nomes dão referência a antigos guerreiros samurais.
        </p>
        </div>
            
            

    </section>
    
    <Rodape/>
    </div>
    )
}