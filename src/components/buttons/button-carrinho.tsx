import style from "styled-components"

const ButtonCarrinho = () => {
    return (
        <Button><span>Adicionar ao carrinho</span></Button>
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
`

export { ButtonCarrinho }