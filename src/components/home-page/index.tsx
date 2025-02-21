import styled from "styled-components"

const Home = () => {
    return (
        <>
            <Header>
                <img src="/public/images/logo.png" alt="Logo Dev em Dobro" />

                <Nav>
                    <ul>
                        <li><a>Home</a></li>
                        <li><a>Sobre</a></li>
                        <li><a>Produtos</a></li>
                        <li><a>Perguntas frequentes</a></li>
                        <li><a>Fale conosco</a></li>
                    </ul>
                </Nav>

                <div>
                    <a href="">Entrar ou Cadastrar-se</a>

                    <img src="/public/images/icone-carrinho.png" alt="Ícone do carrinho de compras" />
                </div>

            </Header>
        </>
    )
}

const Header = styled.header`
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
    }
`

export { Home }