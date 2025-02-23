import styled from 'styled-components'
import { useForm } from 'react-hook-form'

type Inputs = {
    email: string,
    usuario: string | number,
    password: string
}

const Form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()

    return (
        <section>
            <h1>Minha conta</h1>

            <div>
                <h2>Entrar</h2>
                <form>
                    <label htmlFor="usuario-email">Nome de usuário ou e-mail</label>
                    <input 
                    type="text"
                    id='usuario-email'
                    placeholder='e-mail@email.com'
                    />

                    <label htmlFor="password">Senha</label>
                    <input 
                    type="text" 
                    id="password" 
                    />

                    <label>Manter conectado</label>
                    <input 
                    type="checkbox" 
                    />

                    <a href="#">Recupere a sua senha</a>

                    <button>Entrar</button>
                </form>

                <h2>Cadastrar-se</h2>
                <form>
                    <label htmlFor="usuario-email">Nome de usuário ou e-mail</label>
                    <input type="text"
                    id='usuario-email'
                    placeholder='e-mail@email.com' 
                    />
                    
                    <label htmlFor="password">Senha</label>
                    <input type="text"
                    id='password' 
                    />

                    <p>Seus dados pessoais serão usados para aprimorar sua experiência neste site, para gerenciar o acesso a sua conta e para outros propósitos, como descritos em nossa política de privacidade</p>

                    <button>Cadastrar-se</button>
                </form>
            </div>
        </section>
    )
}

export { Form }