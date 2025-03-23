import styled from 'styled-components'

export const Section = styled.section`
    background-color: var(--second-purple-color);
    padding-block: 30px;
`

export const ContainerInfo = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 1155px;
    margin: 0 auto;
`

export const Infos = styled.div`
    flex: 1;
    padding-right: 20px;

    p {
    text-align: start;
    font-size: 16px;
    color: var(--primary-purple-color);
    font-weight: 500;
    padding: 10px 0;
    
    }

    a {
    color: var(--primary-purple-color);
    font-size: 16px;
    font-weight: 500;
    }
`

export const H3 = styled.h3`
    font-size: 20px;
    font-weight: 700;
`

export const List = styled.ul`
    text-align: start;
    padding: 2px 0;

    li {
    padding: 10px 0;
    }
`

export const CopyrightText = styled.div`
    background-color: var(--primary-purple-color);
    padding: 10px 375px;

    p {
    font-size: 12px;
    text-align: center;
    font-weight: 300;
    letter-spacing: 1px;
    }
`