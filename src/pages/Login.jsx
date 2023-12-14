import { useState } from 'react';
import axios from '../axios';

export default function Login() {

    //const [username, setUsername] = useState('hbingley1');
    //const [password, setPassword] = useState('CQutx25i8r');
    const [username, setUsername] = useState('atuny0');
    const [password, setPassword] = useState('9uQFF1Lh');

    async function handleSubmit(e) {
        e.preventDefault();
        const dados = {
            username,
            password
        };
        try {
            const response = await axios.post('/auth/login', dados);
            console.log(response.data);
            localStorage.setItem('usuarioLogado', JSON.stringify(response.data));
            location.assign('/');
        } catch (error) {
            alert('Login inválido!');
        }
    }

    return (
        <main>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Nome de usuário" value={username}
                    onChange={e => setUsername(e.target.value)} required />
                <input type="password" placeholder="Senha" value={password}
                    onChange={e => setPassword(e.target.value)} required />
                <input type="submit" value="Enviar" />
            </form>
        </main>
    );
}
