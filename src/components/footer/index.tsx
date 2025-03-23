import * as S from "./style"

const Footer = () => {
    return (
        <>
            <S.Section>
                <S.ContainerInfo>
                    <S.Infos>
                        <S.H3>Institucional</S.H3>
                        <S.List>
                            <li><a href="">Home</a></li>
                            <li><a href="">Sobre</a></li>
                            <li><a href="">Produtos</a></li>
                            <li><a href="">Perguntas frequentes</a></li>
                            <li><a href="">Fale conosco</a></li>
                        </S.List>
                    </S.Infos>

                    <S.Infos>
                        <S.H3>Ajuda</S.H3>
                        <S.List>
                            <li><a href="#">Trocas e devoluções</a></li>
                            <li><a href="">Termos e condições</a></li>
                            <li><a href="">Política de privacidade</a></li>
                            <li><a href="">Padrão de qualidade</a></li>
                        </S.List>
                    </S.Infos>

                    <S.Infos>
                        <S.H3>Endereço</S.H3>
                        <p>Rua Vale do Silício, 321</p>
                        <p>São Francisco, Califórnia</p>
                        <p>Estados Unidos da América</p>
                        <p>(34) 1234.5678</p>
                        <p><a href="#">vendas@ecommercedd.com</a></p>
                    </S.Infos>
                </S.ContainerInfo>

            </S.Section>

            <S.CopyrightText>
                <p>@2024 - Todos os direitos reservados</p>
            </S.CopyrightText>
        </>
    )
}

export { Footer }