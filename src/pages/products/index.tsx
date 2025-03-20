import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { ButtonCarrinho } from '../../components/buttons/button-carrinho'
import { products } from '../../utils/products'

const Products = () => {
    const { id } = useParams()
    
    const filteredProduct = products.filter(product => product.id === Number(id))
    return (
        <Section>
            <SelectedProduct>
                {
                    filteredProduct.map(product => (
                        <>
                            <img src={product.image} alt={product.name} />
                            <InfoProduto>
                                <h1>{product.name}</h1>
                                <span>R$ {product.price}</span>
                                <p>Cor: {product.color}</p>
                                <p>Tamanho: {product.size}</p>
                                <ButtonCarrinho />
                            </InfoProduto>
                        </>
                    ))
                }
            </SelectedProduct>

            <Subtitle>Produtos semelhantes</Subtitle>

            <ImagesList>
                <li>
                    <img src="/produto-1.png" alt="Produto 1" />
                </li>
                <li>
                    <img src="/produto-2.png" alt="Produto 2" />
                </li>
                <li>
                    <img src="/produto-3.png" alt="Produto 3" />
                </li>
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
    width: 300px;
    height: 280px;
    padding-left: 30px;
    margin-top: -27px;
    }
`


export { Products } 