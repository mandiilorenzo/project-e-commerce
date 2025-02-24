import styled from "styled-components"
import { ButtonCarrinho } from "../../components/buttons/button-carrinho"
import camisetaRoxa from "../../assets/images/camisetaRoxa.png"
import camisetaPreta from "../../assets/images/camisetaPreta.png"
import canecaRoxa from "../../assets/images/canecaRoxa.png"
import camisetaPreta2 from "../../assets/images/camisetaPreta2.png"
import canecaPreta from "../../assets/images/canecaPreta.png"
import camisetaRoxa2 from "../../assets/images/camisetaRoxa2.png"

const Home = () => {
    return (
        <>
            <Section>
                <H1>Produtos</H1>

                <ContainerProdutos>
                    <Produto>
                        <ImagemProduto src={camisetaRoxa}
                            alt="camiseta dev em dobro roxa com logo pequeno" />
                        <InfoProduto>
                            <H2>Camiseta Dev em Dobro</H2>
                            <div>
                                <Style>Cor: roxa</Style>
                                <Style>Tamanho: M</Style>
                            </div>
                            <Preco>R$ 89,00</Preco>
                            <ButtonCarrinho/>
                        </InfoProduto>
                    </Produto>


                    <Produto>
                        <ImagemProduto src={camisetaPreta}
                            alt="camiseta dev em dobro preta com logo pequeno" />
                        <InfoProduto>
                            <H2>Camiseta Dev em Dobro</H2>
                            <div>
                                <Style>Cor: preta</Style>
                                <Style>Tamanho: M</Style>
                            </div>
                            <Preco>R$ 89,00</Preco>
                            <ButtonCarrinho/>
                        </InfoProduto>
                    </Produto>


                    <Produto>
                        <ImagemProduto src={canecaRoxa}
                            alt="caneca dev em dobro roxa" />
                        <InfoProduto>
                            <H2>Caneca Dev em Dobro</H2>
                            <div>
                                <Style>Cor: roxa</Style>
                                <Style>Tamanho: único</Style>
                            </div>
                            <Preco>R$ 29,00</Preco>
                            <ButtonCarrinho/>
                        </InfoProduto>
                    </Produto>


                    <Produto>
                        <ImagemProduto src={camisetaPreta2}
                            alt="camiseta dev em dobro preta com logo maior" />
                        <InfoProduto>
                            <H2>Camiseta Dev em Dobro</H2>
                            <div>
                                <Style>Cor: preta</Style>
                                <Style>Tamanho: M</Style>
                            </div>
                            <Preco>R$ 89,00</Preco>
                            <ButtonCarrinho/>
                        </InfoProduto>
                    </Produto>


                    <Produto>
                        <ImagemProduto src={canecaPreta}
                            alt="caneca preta dev em dobro" />
                        <InfoProduto>
                            <H2>Caneca Dev em Dobro</H2>
                            <div>
                                <Style>Cor: preta</Style>
                                <Style>Tamanho: único</Style>
                            </div>
                            <Preco>R$ 29,00</Preco>
                            <ButtonCarrinho/>
                        </InfoProduto>
                    </Produto>

                    <Produto>
                        <ImagemProduto src={camisetaRoxa2}
                            alt="camiseta dev em dobro roxa com logo maior" />
                        <InfoProduto>
                            <H2>Camiseta Dev em Dobro</H2>
                            <div>
                                <Style>Cor: roxa</Style>
                                <Style>Tamanho: M</Style>
                            </div>
                            <Preco>R$ 89,00</Preco>
                            <ButtonCarrinho/>
                        </InfoProduto>
                    </Produto>

                </ContainerProdutos>
            </Section>
        </>
    )
}

const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 40px;
    border-top: 1px solid var(--primary-purple-color);
`

const H1 = styled.h1`
    font-size: 24px;
    font-weight: 500;
    align-self: flex-start;
    padding-left: 95px;
    padding-bottom: 20px;
`

const ContainerProdutos = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding-bottom: 50px;
    gap: 32px;
`

const Produto = styled.div`
    background-color: var(--second-purple-color);
    border-radius: 20px;
    max-width: 100%;
    height: auto;
`

const ImagemProduto = styled.img`
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    height: 334px;
    width: 370px;
`

const InfoProduto = styled.div`
    padding: 40px 20px;
    display: flex;
    flex-direction: column;
    gap: 16px;
`

const H2 = styled.h2`
    font-size: 20px;
    padding-bottom: 18px;
`

const Style = styled.div`
    font-size: 16px;
    font-weight: 400;
    padding-bottom: 3px;
`

const Preco = styled.span`
    color: var(--primary-green-color);
    font-weight: 500;
    text-align: end;
    font-size: 24px;
`

export { Home }