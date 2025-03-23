import styled from "styled-components"

export const GlobalHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1155px;
    margin: 0 auto;
    height: 15vh;

    img {
    cursor: pointer;
    }
`
export const Nav = styled.nav`
    ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 34px;
    padding-right: 20px;
    }

    li a {
    color: var(--white-color);
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    }
`

export const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`