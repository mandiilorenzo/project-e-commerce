import styled from "styled-components"

const Footer = () => {
    return (
        <>
            <Section>
                <ContainerInfo>
                    <Infos>
                        <H3>Institucional</H3>
                        <List>
                            <li><a href="">Home</a></li>
                            <li><a href="">Sobre</a></li>
                            <li><a href="">Produtos</a></li>
                            <li><a href="">Perguntas frequentes</a></li>
                            <li><a href="">Fale conosco</a></li>
                        </List>
                    </Infos>

                    <Infos>
                        <H3>Ajuda</H3>
                        <List>
                            <li><a href="#">Trocas e devoluções</a></li>
                            <li><a href="">Termos e condições</a></li>
                            <li><a href="">Política de privacidade</a></li>
                            <li><a href="">Padrão de qualidade</a></li>
                        </List>
                    </Infos>

                    <Infos>
                        <H3>Endereço</H3>
                        <p>Rua Vale do Silício, 321</p>
                        <p>São Francisco, Califórnia</p>
                        <p>Estados Unidos da América</p>
                        <p>(34) 1234.5678</p>
                        <p><a href="#">vendas@ecommercedd.com</a></p>
                    </Infos>
                </ContainerInfo>

            </Section>

            <CopyrightText>
                <p>@2024 - Todos os direitos reservados</p>
            </CopyrightText>
        </>
    )
}

const Section = styled.section`
    background-color: var(--second-purple-color);
    padding-block: 30px;
`

const ContainerInfo = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 1155px;
    margin: 0 auto;
`

const Infos = styled.div`
    flex: 1;
    padding-right: 20px;

    p {
    text-align: start;
    font-size: 16px;
    color: var(--primary-purple-color);
    font-weight: 500;
    padding: 10px 0;
    
    }

    a {
    color: var(--primary-purple-color);
    font-size: 16px;
    font-weight: 500;
    }
`

const H3 = styled.h3`
    font-size: 20px;
    font-weight: 700;
`

const List = styled.ul`
    text-align: start;
    padding: 2px 0;

    li {
    padding: 10px 0;
    }
`

const CopyrightText = styled.div`
    background-color: var(--primary-purple-color);
    padding: 10px 375px;

    p {
    font-size: 12px;
    text-align: center;
    font-weight: 300;
    letter-spacing: 1px;
    }
`

export { Footer }