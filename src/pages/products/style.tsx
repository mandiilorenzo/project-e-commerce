import styled from "styled-components"

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 0;
    border-top: 1px solid var(--primary-purple-color);
    margin: auto;
`

export const SelectedProduct = styled.div`
    display: flex;
    align-items: center;
    max-width: 1150px;
    gap: 50px;

    img {
    max-width: 384px;
    min-height: 444px;
    }
`

export const InfoProduto = styled.div`
    display: flex;
    flex-direction: column;
    gap: 22px;

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
    margin-bottom: 2px;
    margin-top: 20px;
    }
`

export const Style = styled.div`
    
`

export const Subtitle = styled.h2`
    font-size: 24px;
    font-weight: 500;
    margin: 32px 0 20px 98px;
    align-self: flex-start;
`

export const ImagesList = styled.ul`
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