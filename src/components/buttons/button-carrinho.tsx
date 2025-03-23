import style from "styled-components"
import { products } from "../../utils/products"
import { useCart } from "../../context/CartContext"

const ButtonCarrinho = () => {
    const { addToCart } = useCart()
    
    return (
        <Button onClick={() => products.forEach(product => addToCart(product))}>Adicionar ao carrinho</Button>
    )
}

const Button = style.button`
    background-color: var(--primary-purple-color);
    padding: 16px 32px;
    border-radius: 4px;
    border: none;
    margin-top: 20px;
    color: var(--white-color);
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    cursor: pointer;
    letter-spacing: 1px;
    font-family: 'Roboto', sans-serif;
    border: none;
    width: 329px;
    height: 52px;
`

export { ButtonCarrinho }