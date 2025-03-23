import * as S from "./style"
import { products } from "../../utils/products"
import { ButtonCarrinho } from "../../components/buttons/button-carrinho"
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <>
            <S.Section>
                <S.H1>Produtos</S.H1>

                <S.ContainerProdutos>
                    {
                        products.map((product) => (
                            <S.Produto key={product.id}>
                                <S.ImagemProduto src={product.image} alt={product.name} />
                                <S.InfoProduto>
                                    <S.H2>{product.name}</S.H2>
                                    <div>
                                    <S.Style>Cor: {product.color}</S.Style>
                                    <S.Style>Tamanho: {product.size}</S.Style>
                                    </div>
                                    <S.Preco>R$ {product.price}</S.Preco>
                                    <Link to={`/produto/${product.id}`}>
                                    <ButtonCarrinho />
                                    </Link>
                                </S.InfoProduto>
                            </S.Produto>
                        ))
                    }

                </S.ContainerProdutos>
            </S.Section>
        </>
    )
}

export { Home }