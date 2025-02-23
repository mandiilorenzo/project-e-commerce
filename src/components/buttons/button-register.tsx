import styled from "styled-components"

const ButtonRegister = () => {
    return (
        <Button>Cadastrar</Button>
    )
}

const Button = styled.button`
    border-radius: 5px;
    background-color: var(--primary-purple-color);
    padding: 16px 28px;
    width: 400px;
    cursor: pointer;
    color: var(--white-color);
    font-size: 16px;
    letter-spacing: 1px;
`

export { ButtonRegister}