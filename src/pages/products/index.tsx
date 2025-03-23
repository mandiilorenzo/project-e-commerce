import { useParams } from 'react-router-dom'
import * as S from './style'
import { ButtonCarrinho } from '../../components/buttons/button-carrinho'
import { products } from '../../utils/products'

const Products = () => {
    const { id } = useParams()

    const filteredProduct = products.filter(product => product.id === Number(id))
    return (
        <S.Section>
            <S.SelectedProduct>
                {
                    filteredProduct.map(product => (
                        <>
                            <img src={product.image} alt={product.name} />
                            <S.InfoProduto>
                                <h1>{product.name}</h1>
                                
                                <S.Style>
                                <strong>Cor:</strong> {product.color} <br />
                                <strong>Tamanho:</strong> {product.size}
                                </S.Style>

                                <span>R$ {product.price}</span>
                                
                                <ButtonCarrinho />

                                <p>
                                    {product.description}
                                </p>

                                <p>
                                obs.1: as cores podem sofrer pequenas alterações de percepção em razão das diferentes resoluções de tela em que são visualizadas.<br/>
                                obs.2: os adornos contidos nas fotos não acompanham o produto.
                                </p>
                            </S.InfoProduto>
                        </>
                    ))
                }
            </S.SelectedProduct>

            <S.Subtitle>Produtos semelhantes</S.Subtitle>

            <S.ImagesList>
                <li>
                    <img src="/produto-1.png" alt="Produto 1" />
                </li>
                <li>
                    <img src="/produto-2.png" alt="Produto 2" />
                </li>
                <li>
                    <img src="/produto-3.png" alt="Produto 3" />
                </li>
            </S.ImagesList>
        </S.Section>
    )
}

export { Products } 