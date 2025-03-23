import styled from "styled-components"

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 40px;
    border-top: 1px solid var(--primary-purple-color);
`

export const H1 = styled.h1`
    font-size: 24px;
    font-weight: 500;
    align-self: flex-start;
    padding-left: 95px;
    padding-bottom: 20px;
`

export const ContainerProdutos = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding-bottom: 50px;
    gap: 32px;
`

export const Produto = styled.div`
    background-color: var(--second-purple-color);
    border-radius: 20px;
    max-width: 100%;
    height: auto;
`

export const ImagemProduto = styled.img`
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    height: 334px;
    width: 370px;
`

export const InfoProduto = styled.div`
    padding: 40px 20px;
    display: flex;
    flex-direction: column;
    gap: 16px;
`

export const H2 = styled.h2`
    font-size: 20px;
    padding-bottom: 18px;
`

export const Style = styled.div`
    font-size: 16px;
    font-weight: 400;
    padding-bottom: 3px;
`

export const Preco = styled.span`
    color: var(--primary-green-color);
    font-weight: 500;
    text-align: end;
    font-size: 24px;
`