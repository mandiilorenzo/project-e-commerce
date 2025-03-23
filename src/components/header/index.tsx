import { Link } from "react-router-dom"
import * as S from "./style"
import { ButtonHeader } from "../buttons/button-header"


const Header = () => {
    return (
        <S.GlobalHeader>
            <Link to={"/"}><img src="/logo.png" alt="Logo Dev em Dobro" /></Link>

            <S.Nav>
                <ul>
                    <Link to={"/"}><li><a>Home</a></li></Link>
                    <li><a>Sobre</a></li>
                    <li><a>Produtos</a></li>
                    <li><a>Perguntas frequentes</a></li>
                    <li><a>Fale conosco</a></li>
                </ul>
            </S.Nav>

            <S.Div>
                <Link to={"/register"}>
                    <ButtonHeader />
                </Link>

                <Link to={"/carrinho-de-compras"}>
                    <img src="/icone-carrinho.png" alt="Ícone do carrinho de compras" />
                </Link>
            </S.Div>
        </S.GlobalHeader>
    )
}

export { Header }