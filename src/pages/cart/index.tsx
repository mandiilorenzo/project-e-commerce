import { useForm } from "react-hook-form"
import * as S from "./style"
import { useCart } from "../../context/CartContext"

type Inputs = {
    cep: string,
    pais: string
}

const Cart = () => {
    const { register } = useForm<Inputs>()
    const { cart, removeFromCart } = useCart()

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
                                {cart.length === 0 ? <td>O carrinho está vazio.</td> : null}
                                
                                {cart.map((product) => (
                                    <tr key={product.id}>
                                        <S.TdImage><S.ImageProduct src={product.image} alt={product.name} /></S.TdImage>
                                        <S.TdDescribe>{product.name}</S.TdDescribe>
                                        <td>R${product.price}</td>
                                        <td>
                                            <input type="number" value="1" min="1" />
                                        </td>
                                        <td><span>total</span></td>
                                        <td><S.IconeDelet onClick={() => removeFromCart(product.id)} src="icone-deletar.png" alt="ícone de lixeira" /></td>
                                    </tr>
                                ))}
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