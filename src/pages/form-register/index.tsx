import * as S from "./style"
import { useForm } from 'react-hook-form'
import { ButtonSignUp } from '../../components/buttons/button-sign-up'
import { ButtonRegister } from '../../components/buttons/button-register'

type Inputs = {
    email: string,
    usuario: string,
    password: string | number
}

const Form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()

    return (
        <S.Section>
            <S.Title>Minha conta</S.Title>

            <S.Container>

                <S.Forms>
                    <S.Subtitle>Entrar</S.Subtitle>

                    <S.Label htmlFor="usuario-email">Nome de usuário ou e-mail</S.Label>
                    <S.Input
                        type="text"
                        id='usuario-email'
                        placeholder='e-mail@email.com'
                    />

                    <S.Label htmlFor="password">Senha</S.Label>
                    <S.Input
                        type="password"
                        id="password"
                        {...register('password', { required: true })}
                        {...errors.password && <span>Senha incorreta</span>}
                    />

                    <S.Checkbox>
                        <S.InputCheckbox
                            type="checkbox"
                            id="checkbox"
                        />
                        <S.Label htmlFor='checkbox'>Manter conectado</S.Label>
                    </S.Checkbox>

                    <a href="#">Recupere a sua senha</a>

                    <ButtonSignUp />
                </S.Forms>


                <S.Forms>
                    <S.Subtitle>Cadastrar-se</S.Subtitle>

                    <S.Label htmlFor="usuario-email">Nome de usuário ou e-mail</S.Label>
                    <S.Input type="text"
                        id='usuario-email'
                        placeholder='e-mail@email.com'
                    />

                    <S.Label htmlFor="password">Senha</S.Label>
                    <S.Input
                        type="password"
                        id='password'
                        {...register('password', { required: true })}
                        {...errors.password && <span>Senha incorreta</span>}
                    />

                    <p>Seus dados pessoais serão usados para aprimorar sua experiência neste site, para gerenciar o acesso a sua conta e para outros propósitos, como descritos em nossa política de privacidade</p>

                    <ButtonRegister />
                </S.Forms>
            </S.Container>
        </S.Section>
    )
}

export { Form }