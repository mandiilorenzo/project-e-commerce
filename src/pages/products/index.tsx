import styled from "styled-components"
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
                    <h1>Camiseta Dev em Dobro</h1>

                    <Style>
                        <p><strong>Cor:</strong> Roxo</p>
                        <p><strong>Tamanho</strong>: M</p>
                    </Style>

                    <span>R$ 89,00</span>

                    <p><strong>Tecido:</strong> malha (70% algodão + 30% poliéster).</p>
                    <p>Estampa: marca Dev em Dobro.</p>
                    <p>modelagem: ampla, cava da manga deslocada.</p>
                    <p>Decote: gola redonda, forrada.</p>
                    <p>Acabamentos: gola, punhos e barra duplos.</p>
                    <p>obs.1: as cores podem sofrer pequenas alterações de percepção em razão das diferentes resoluções de tela em que são visualizadas.</p>
                    <p>obs.2: os adornos contidos nas fotos não acompanham o produto.</p>

                    <Button>Adicionar ao carrinho</Button>
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

const Style = styled.div`
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 15px;
    
    p {
    margin: 0;
    }
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

const Button = styled.button`
    background-color: var(--primary-purple-color);
    padding: 16px 32px;
    max-width: 243px;
    border-radius: 4px;
    border: none;
    margin-top: 20px;
    color: var(--white-color);
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    cursor: pointer;
    letter-spacing: 1px;
`


export { Products } 