import styled from 'styled-components'
import { ButtonCarrinho } from './../buttons/button-carrinho'

type ProdutoProps = {
    nome: string,
    estilo: string,
    preco: number | string,
    descricao: string
}

const Produto = ({nome, estilo, preco, descricao}: ProdutoProps) => {
    return (
        <>
            <h1>{nome}</h1>

            <Style>
                {estilo}
            </Style>

            <span>{preco}</span>

            <p>{descricao}</p>

            <ButtonCarrinho/>
        </>
    )
}

const Style = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 15px;

    p {
    margin: 0;
    }
`

export { Produto }