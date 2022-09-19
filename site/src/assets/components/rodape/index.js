import "./index.css"

//Logotipos
import YoutubeLogo from "../../../assets/images/42-425171_white-youtube-icono-png-white-youtube-logo-transparent.png"
import InstagramLogo from "../../../assets/images/best-solutions-of-instagram-png-transparent-png-images-unique-white-instagram-logo-outline-of-white-instagram-logo-outline-copy.png"
import TelegramLogo from "../../../assets/images/52-520422_join-the-conversation-twitter-logo-black-and-white.png"
import FacebookLogo from "../../../assets/images/facebook-white-circle-1024x1024.png"

export default function Rodape() {

    return (
    <div className="rodape">   
        <footer>
            <a href="https://www.youtube.com/watch?v=kanc58Kxsqg"><img src={YoutubeLogo} alt="logo-youtube" className="logos-rodape"/></a>
            <a href="https://www.youtube.com/watch?v=kanc58Kxsqg"><img src={InstagramLogo} alt="logo-instagram" className="logos-rodape"/></a>
            <a href="https://www.youtube.com/watch?v=kanc58Kxsqg"><img src={TelegramLogo} alt="logo-telegram" className="logos-rodape"/></a>
            <a href="https://www.youtube.com/watch?v=kanc58Kxsqg"><img src={FacebookLogo} alt="logo-facebook" className="logos-rodape"/></a>
        </footer>
        <div className="politica"> Políticas de Uso</div>
    </div>
)
}