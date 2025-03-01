import { Link } from "react-router-dom"
import styled from "styled-components"
import { ButtonHeader } from "../buttons/button-header"


const Header = () => {
    return (
        <GlobalHeader>
            <img src="/logo.png" alt="Logo Dev em Dobro" />

            <Nav>
                <ul>
                    <Link to={"/"}><li><a>Home</a></li></Link>
                    <li><a>Sobre</a></li>
                    <Link to={"/produtos"}><li><a>Produtos</a></li></Link>
                    <li><a>Perguntas frequentes</a></li>
                    <li><a>Fale conosco</a></li>
                </ul>
            </Nav>

            <Div>
                <Link to={"/formulario"}>
                    <ButtonHeader />
                </Link>

                <Link to={"/carrinho-de-compras"}>
                    <img src="/icone-carrinho.png" alt="Ícone do carrinho de compras" />
                </Link>
            </Div>
        </GlobalHeader>
    )
}

const GlobalHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1155px;
    margin: 0 auto;
    height: 15vh;

    img {
    cursor: pointer;
    }
`
const Nav = styled.nav`
    ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 34px;
    padding-right: 20px;
    }

    li a {
    color: var(--white-color);
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    }
`

const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`

export { Header }