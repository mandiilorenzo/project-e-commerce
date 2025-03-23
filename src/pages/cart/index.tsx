import camisetaRoxa from "../../assets/images/camisetaRoxa.png"
import { useForm } from "react-hook-form"
import * as S from "./style"


type Inputs = {
    cep: string,
    pais: string
}

const Cart = () => {
    const { register } = useForm<Inputs>()

    return (
        <S.Main>
            <h1>Carrinho de compras</h1>

            <S.Container>

                <S.Section>
                    <S.Table>
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
                                <S.TdImage><S.ImageProduct src={camisetaRoxa} alt="camiseta dev em dobro roxa com logo pequeno" /></S.TdImage>
                                <S.TdDescribe>Camiseta Dev em Dobro</S.TdDescribe>
                                <td>R$ 89,00</td>
                                <td>
                                    <input type="number" value="1" min="1" />
                                </td>
                                <td><span>R$ 89,00</span></td>
                                <td><S.IconeDelet src="icone-deletar.png" alt="ícone de lixeira" /></td>
                            </tr>
                        </tbody>

                    </S.Table>

                    <h2>Cupom</h2>
                    
                    <S.Cupom>
                        <input
                            type="text"
                            placeholder="Digite o código"
                        />
                        <S.ButtonCupom>Aplicar cupom</S.ButtonCupom>
                    </S.Cupom>

                </S.Section>


                <S.SectionForm>
                <S.Form>
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

                    <S.ButtonEntrega>Atualizar entrega</S.ButtonEntrega>

                    <p>Subtotal dos pedidos: <span>R$ 89,00</span></p>
                    <S.Frete>Frete e manuseio: <span>R$ 10,00</span></S.Frete>
                    <S.Total><strong>Total:</strong> <span>R$ 109,00</span></S.Total>

                </S.Form>

                <S.ButtonFinish>Finalizar compra</S.ButtonFinish>

                </S.SectionForm>
                

            </S.Container>
        </S.Main>
    )
}

export { Cart }