import styled from "styled-components"

const ButtonSignUp = () => {
    return (
        <Button>Entrar</Button>
    )
}

const Button = styled.button`
    border-radius: 4px;
    background-color: var(--primary-purple-color);
    padding: 16px 32px;
    width: 400px;
    cursor: pointer;
    color: var(--white-color);
    font-size: 16px;
    letter-spacing: 1px;
    font-family: 'Roboto', sans-serif;
    border: none;
`

export { ButtonSignUp}