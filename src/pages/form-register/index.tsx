import styled from 'styled-components'
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
        <Section>
            <Title>Minha conta</Title>

            <Container>

                <Forms>
                    <Subtitle>Entrar</Subtitle>

                    <Label htmlFor="usuario-email">Nome de usuário ou e-mail</Label>
                    <Input
                        type="text"
                        id='usuario-email'
                        placeholder='e-mail@email.com'
                    />

                    <Label htmlFor="password">Senha</Label>
                    <Input
                        type="password"
                        id="password"
                        {...register('password', { required: true })}
                        {...errors.password && <span>Senha incorreta</span>}
                    />

                    <Checkbox>
                        <InputCheckbox
                            type="checkbox"
                            id="checkbox"
                        />
                        <Label htmlFor='checkbox'>Manter conectado</Label>
                    </Checkbox>

                    <a href="#">Recupere a sua senha</a>

                    <ButtonSignUp />
                </Forms>


                <Forms>
                    <Subtitle>Cadastrar-se</Subtitle>

                    <Label htmlFor="usuario-email">Nome de usuário ou e-mail</Label>
                    <Input type="text"
                        id='usuario-email'
                        placeholder='e-mail@email.com'
                    />

                    <Label htmlFor="password">Senha</Label>
                    <Input
                        type="password"
                        id='password'
                        {...register('password', { required: true })}
                        {...errors.password && <span>Senha incorreta</span>}
                    />

                    <p>Seus dados pessoais serão usados para aprimorar sua experiência neste site, para gerenciar o acesso a sua conta e para outros propósitos, como descritos em nossa política de privacidade</p>

                    <ButtonRegister />
                </Forms>
            </Container>
        </Section>
    )
}

const Section = styled.section`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 40px;
    border-top: 1px solid var(--primary-purple-color);
    margin-bottom: 80px;
`

const Title = styled.h1`
    font-size: 24px;
`

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: auto;
    height: 70vh;
    gap: 90px;
`

const Forms = styled.form`
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

const Subtitle = styled.h2`
    font-size: 24px;
    margin-bottom: 5px;
`

const Label = styled.label`
    font-size: 16px;
    font-weight: 300;
    margin-bottom: -6px;
`

const Input = styled.input`
    background-color: var(--second-purple-color);
    border: 1px solid var(--primary-purple-color);
    border-radius: 4px;
    padding: 16px 13px;
`

const InputCheckbox = styled.input`
    align-self: start;
    margin-right: 10px;
`
const Checkbox = styled.div`
    margin: 5px 0;
`

export { Form }