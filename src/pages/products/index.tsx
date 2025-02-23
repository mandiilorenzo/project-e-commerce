import camisetaRoxa from "../../assets/images/camisetaRoxa.png"
import { ButtonCarrinho } from "../../components/buttons/button-carrinho"

const Products = () => {
    return (
        <section>
            <img src={camisetaRoxa} alt="camiseta dev em dobro roxa com logo pequeno" />

            <div>
                <h1>Camiseta Dev em Dobro</h1>
                <p>Cor: Roxo</p>
                <p>Tamanho: M</p>
                <span>R$ 89,00</span>
                <p>Tecido: (malha 70% algodão + 30% poliéster).
                    Estampa: marca Dev em Dobro.
                    modelagem: ampla, cava da manga deslocada.
                    Decote: gola redonda, forrada.
                    Acabamentos: gola, punhos e barra duplos.
                    obs.1: as cores podem sofrer pequenas alterações de percepção em razão das diferentes resoluções de tela em que são visualizadas.
                    obs.2: os adornos contidos nas fotos não acompanham o produto.</p>

                    <ButtonCarrinho/>
            </div>

            <div>
                <h2>Produtos semelhantes</h2>

                <ul>
                    <li><img src="" alt="" /></li>
                    <li><img src="" alt="" /></li>
                    <li><img src="" alt="" /></li>
                    <li><img src="" alt="" /></li>
                </ul>
            </div>
        </section>
    )
}

export { Products } 