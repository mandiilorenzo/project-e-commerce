import styled from "styled-components"
import { Produto } from "../../components/product"
import camisetaRoxa from "../../assets/images/camisetaRoxa.png"
import camisetaPreta2 from "../../assets/images/camisetaPreta2.png"
import camisetaPreta from "../../assets/images/camisetaPreta.png"
import camisetaRoxa2 from "../../assets/images/camisetaRoxa2.png"

const Products = () => {
    return (
        <Section>
            <SelectedProduct>
                <img src={camisetaRoxa} alt="camiseta dev em dobro roxa com logo pequeno" />

                <InfoProduto>
                    <Produto nome='Camiseta Dev em Dobro'
                        estilo='Cor: Roxo
                        Tamanho: M'
                        preco='R$ 89,00'
                        descricao='Tecido: malha (70% algodão + 30% poliéster).
                        Estampa: marca Dev em Dobro.
                        modelagem: ampla, cava da manga deslocada.
                        Decote: gola redonda, forrada.
                        Acabamentos: gola, punhos e barra duplos.
                        obs.1: as cores podem sofrer pequenas alterações de percepção em razão das diferentes resoluções de tela em que são visualizadas.
                        obs.2: os adornos contidos nas fotos não acompanham o produto.' />
                </InfoProduto>
            </SelectedProduct>

            <Subtitle>Produtos semelhantes</Subtitle>

            <ImagesList>
                <img src={camisetaPreta2} alt="camiseta dev em dobro preta com logo maior" />
                <img src={camisetaPreta} alt="camiseta dev em dobro preta com logo pequeno" />
                <img src={camisetaRoxa2} alt="camiseta dev em dobro roxa com logo maior" />
                <img src={camisetaRoxa} alt="camiseta dev em dobro roxa com logo pequeno" />
            </ImagesList>
        </Section>
    )
}

const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 0;
    border-top: 1px solid var(--primary-purple-color);
    margin: auto;
`

const SelectedProduct = styled.div`
    display: flex;
    align-items: center;
    width: 1150px;
    gap: 40px;

    img {
    width: 384px;
    height: 444px;
    }
`

const InfoProduto = styled.div`
    h1 {
    font-size: 36px;
    font-weight: 500;
    }

    span {
    color: var(--primary-green-color);
    font-weight: 500;
    font-size: 24px;
    }

    p {
    font-size: 16px;
    font-weight: 300;
    line-height: 1.0;
    margin-bottom: 2px;
    margin-top: 20px;
    }
`

const Subtitle = styled.h2`
    font-size: 24px;
    font-weight: 500;
    margin: 32px 0 20px 98px;
    align-self: flex-start;
`

const ImagesList = styled.ul`
    display: flex;
    align-items: center;
    margin: 40px 0px;

    img {
    width: 280px;
    height: 280px;
    padding-left: 32px;
    margin-top: -27px;
    }
`


export { Products } 