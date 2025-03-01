import camisetaRoxa from "../../assets/images/camisetaRoxa.png"
import { useForm } from "react-hook-form"
import styled from "styled-components"

type Inputs = {
    cep: string,
    pais: string
}

const Cart = () => {
    const { register } = useForm<Inputs>()

    return (
        <Section>
            <h1>Carrinho de compras</h1>

            <Container>

                <Table>
                    <thead>
                        <tr>
                            <th>Produto</th>
                            <th>Descrição</th>
                            <th>Preço</th>
                            <th>Quantidade</th>
                            <th>Total</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <TdImage><ImageProduct src={camisetaRoxa} alt="camiseta dev em dobro roxa com logo pequeno" /></TdImage>
                            <TdDescribe>Camiseta Dev em Dobro</TdDescribe>
                            <td>R$ 89,00</td>
                            <td>
                                <input type="number" value="1" min="1" />
                            </td>
                            <td><span>R$ 89,00</span></td>
                            <td><IconeDelet src="icone-deletar.png" alt="ícone de lixeira" /></td>
                        </tr>
                    </tbody>

                    <h2>Cupom</h2>
                    <Cupom>
                        <input
                            type="text"
                            placeholder="Digite o código"
                        />
                        <ButtonCupom>Aplicar cupom</ButtonCupom>
                    </Cupom>

                </Table>


                <Form>
                    <h3>Entrega</h3>

                    <label htmlFor="cep">CEP</label>
                    <input
                        type="text"
                        id="cep"
                        placeholder="00000-000"
                        {...register('cep', { required: true })}
                    />

                    <label htmlFor="pais">País</label>
                    <select>
                        <option value="">Brasil</option>
                    </select>

                    <ButtonEntrega>Atualizar entrega</ButtonEntrega>

                    <p>Subtotal dos pedidos: <span>R$ 89,00</span></p>
                    <p>Frete e manuseio: <span>R$ 10,00</span></p>
                    <p><strong>Total:</strong> <span>R$ 109,00</span></p>

                    <ButtonFinish>Finalizar compra</ButtonFinish>
                </Form>

            </Container>
        </Section>
    )
}

const Section = styled.section`
    border-top: 1px solid var(--primary-purple-color);

    h1 {
    font-size: 24px;
    margin-top: 80px;
    margin-bottom: 32px;
    padding-left: 96px;
    }
`

const Container = styled.div`
    display: flex;
    align-items: flex-start;
    max-width: 1169px;
    margin: auto;
    margin-bottom: 80px;
    gap: 10px;
`

const Table = styled.table`
    border-collapse: collapse;

    th {
    background-color: var(--primary-purple-color);
    color: white;
    padding: 10px;
    text-align: center;
    }

    td {
    padding: 5px;
    background-color: var(--second-purple-color);
    text-align: center;

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

const TdImage = styled.td`
    max-width: 146px;
    height: 100px;
`

const TdDescribe = styled.td`
    max-width: 275px;
    height: 100px;
    color: var(--primary-purple-color);
`

const ImageProduct = styled.img`
    max-width: 63.4px;
    height: 74.25px;
    border-radius: 8px;
`

const IconeDelet = styled.img`
    max-width: 24px;
    height: 24px;
`

const Cupom = styled.div`
    display: flex;
    gap: 32px;

    input {
    background-color: var(--second-purple-color);
    border: 1px solid var(--primary-purple-color);
    border-radius: 4px;
    width: 296px;
    padding: 16px 32px 16px 15px;
    color: var(--primary-purple-color);

    &::placeholder {
    color: var(--primary-purple-color); 
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 1px;
    }
    }
`

const Form = styled.form`
    background-color: var(--second-purple-color);
    max-width: 368px;
    height: 498px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2px 15px;

    h3, label, p {
    font-size: 16px;
    font-weight: 400;
    }

    input, select {
    background-color: var(--second-purple-color);
    border: 1px solid var(--primary-purple-color);
    border-radius: 4px;
    width: 346px;
    height: 52px;
    }

    span {
    color: var(--primary-green-color);
    font-size: 16px;
    font-weight: 700;
    }
`

const ButtonEntrega = styled.button`
    padding: 16px;
    max-width: 200px;
    background-color: var(--second-purple-color);
    border: 1px solid var(--primary-purple-color);
    color: var(--white-color);
    font-size: 16px;
    letter-spacing: 1px; 
`

const ButtonCupom = styled.button`
    background-color: var(--second-purple-color);
    border: 1px solid var(--primary-purple-color);
    border-radius: 4px;
    
    &::placeholder {
    color: var(--white-color); 
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 1px;
    }
`

const ButtonFinish = styled.button`
    background-color: var(--primary-purple-color);
    border: none;
    color: var(--white-color);
    font-size: 16px;
    letter-spacing: 1px;
    padding: 16px 32px;
`

export { Cart }