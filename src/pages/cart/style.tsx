import styled from "styled-components"

export const Main = styled.section`
    border-top: 1px solid var(--primary-purple-color);

    h1 {
    font-size: 24px;
    margin-top: 80px;
    margin-bottom: 32px;
    padding-left: 118px;
    }
`

export const Container = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    max-width: 1169px;
    margin: auto;
    margin-bottom: 80px;
    gap: 10px;
`

export const Section = styled.div`
    margin-left: 32px;

    h2 {
    font-size: 16px;
    font-weight: 400;
    margin-top: 32px;}
`

export const SectionForm = styled.div`
    
`

export const Table = styled.table`
    border-collapse: collapse;
    width: 100%;
    overflow: hidden;

    th {
    background-color: var(--primary-purple-color);
    color: white;
    padding: 18px;
    text-align: center;
    max-width: 500px;
    }

    td {
    padding: 18px;
    background-color: var(--second-purple-color);
    text-align: center;
    max-width: 500px;

    input {
    max-width: 45px;
    height: 30px;
    padding: 10px 1px 10px 10px;
    color: var(--white-color);
    background-color: var(--second-purple-color);
    border: 1px solid var(--primary-purple-color);
    border-radius: 4px;
    }
    
    }

    h2 {
    font-size: 16px;
    font-weight: 400;
    }

    span {
    color: var(--primary-green-color);
    font-weight: 700;
    font-size: 16px;
    }
}
`

export const TdImage = styled.td`
    max-width: 146px;
    height: 100px;
`

export const TdDescribe = styled.td`
    max-width: 275px;
    height: 100px;
    color: var(--primary-purple-color);
`

export const ImageProduct = styled.img`
    max-width: 63.4px;
    height: 74.25px;
    border-radius: 8px;
`

export const IconeDelet = styled.img`
    max-width: 24px;
    height: 24px;
    cursor: pointer;
`

export const Cupom = styled.div`
    display: flex;
    gap: 32px;
    margin-top: 5px;

    input {
    background-color: var(--second-purple-color);
    border: 1px solid var(--primary-purple-color);
    border-radius: 4px;
    width: 344px;
    padding: 16px 32px 16px 15px;
    color: var(--white-color);

    &::placeholder {
    color: var(--primary-purple-color); 
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 1px;
    }
    }
`

export const Form = styled.form`
    background-color: var(--second-purple-color);
    max-width: 368px;
    height: 498px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 16px 15px;

    h3, label, p {
    font-size: 16px;
    font-weight: 400;
    }

    span {
    color: var(--primary-green-color);
    font-size: 16px;
    font-weight: 700;
    margin-left: 20px;
    }

    input, select {
    background-color: var(--second-purple-color);
    border: 1px solid var(--primary-purple-color);
    border-radius: 4px;
    width: 346px;
    height: 52px;
    color: var(--white-color);
    padding-left: 8px;
    margin-top: -25px;
    
    &::placeholder {
    color: var(--primary-purple-color);
    }
`

export const Frete = styled.p`
    margin-left: 32px;
    margin-top: 12px;
`

export const Total = styled.p`
    margin-left: 98px;
    margin-top: 12px;
    
    span {
    font-size: 24px;
    }
`

export const ButtonEntrega = styled.button`
    padding: 16px;
    max-width: 200px;
    background-color: var(--second-purple-color);
    border: 2px solid var(--primary-purple-color);
    border-radius: 4px;
    color: var(--white-color);
    font-size: 16px;
    letter-spacing: 1px; 
    margin-top: -24px;
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
`

export const ButtonCupom = styled.button`
    background-color: var(--second-purple-color);
    border: 2px solid var(--primary-purple-color);
    border-radius: 4px;
    cursor: pointer;
    color: var(--white-color);
    max-width: 200px;
    height: 52px;
    padding: 16px 30px;
    font-size: 16px;
    letter-spacing: 1px;
    font-family: 'Roboto', sans-serif;
`

export const ButtonFinish = styled.button`
    background-color: var(--primary-purple-color);
    border: none;
    cursor: pointer;
    color: var(--white-color);
    font-size: 16px;
    letter-spacing: 1px;
    padding: 16px 32px;
    margin-top: 32px;
    width: 380px;
    height: 52px;
    font-family: 'Roboto', sans-serif;
`