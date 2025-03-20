import styled from "styled-components"
import { products } from "../../utils/products"
import { ButtonCarrinho } from "../../components/buttons/button-carrinho"
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <>
            <Section>
                <H1>Produtos</H1>

                <ContainerProdutos>
                    {
                        products.map((product) => (
                            <Produto key={product.id}>
                                <ImagemProduto src={product.image} alt={product.name} />
                                <InfoProduto>
                                    <H2>{product.name}</H2>
                                    <div>
                                    <Style>Cor: {product.color}</Style>
                                    <Style>Tamanho: {product.size}</Style>
                                    </div>
                                    <Preco>R$ {product.price}</Preco>
                                    <Link to={`/produto/${product.id}`}>
                                    <ButtonCarrinho />
                                    </Link>
                                </InfoProduto>
                            </Produto>
                        ))
                    }

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