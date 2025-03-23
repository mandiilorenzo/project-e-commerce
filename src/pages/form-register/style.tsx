import styled from "styled-components"

export const Section = styled.section`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 40px;
    border-top: 1px solid var(--primary-purple-color);
    margin-bottom: 80px;
`

export const Title = styled.h1`
    font-size: 24px;
`

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 50px;
    height: 70vh;
    gap: 90px;
`

export const Forms = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 400px;
    gap: 8px;

    a {
    color: var(--primary-purple-color);
    font-size: 16px;
    margin-bottom: 8px;
    }

    p {
    font-size: 16px;
    font-weight: 400;
    }
`

export const Subtitle = styled.h2`
    font-size: 24px;
    margin-bottom: 5px;
`

export const Label = styled.label`
    font-size: 16px;
    font-weight: 300;
    margin-bottom: -6px;
`

export const Input = styled.input`
    background-color: var(--second-purple-color);
    border: 1px solid var(--primary-purple-color);
    border-radius: 4px;
    padding: 16px 13px;
    color: var(--white-color);
`

export const InputCheckbox = styled.input`
    align-self: start;
    margin-right: 10px;
`
export const Checkbox = styled.div`
    margin: 5px 0;
`