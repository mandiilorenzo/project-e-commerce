import styled from "styled-components"

const ButtonHeader = () => {
    return (
        <Button><Span>Entrar ou cadastrar-se</Span></Button>
    )
}

const Button = styled.button`
    border-radius: 5px;
    background-color: var(--primary-purple-color);
    padding: 16px 28px;
    width: 253px;
    cursor: pointer;
`

const Span = styled.span`
    font-size: 16px;
    color: var(--white-color);
    font-variation-settings: "wght" 550;
    letter-spacing: 1px;
`

export { ButtonHeader }