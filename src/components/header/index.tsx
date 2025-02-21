import styled from "styled-components"
import { ButtonHeader } from "../buttons/button-header"


const Header = () => {
    return (
        <GlobalHeader>
            <img src="/images/logo.png" alt="Logo Dev em Dobro" />

            <Nav>
                <ul>
                    <li><a>Home</a></li>
                    <li><a>Sobre</a></li>
                    <li><a>Produtos</a></li>
                    <li><a>Perguntas frequentes</a></li>
                    <li><a>Fale conosco</a></li>
                </ul>
            </Nav>

            <Div>
                <ButtonHeader/>

                <img src="/images/icone-carrinho.png" alt="Ícone do carrinho de compras" />
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
    }
`

const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`

export { Header }