import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from '../axios';

export default function Cadastro() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('male');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault();

        const dados = {
            firstName,
            lastName,
            age,
            gender,
            email,
            phone,
            username,
            password
        };

        try {
            const response = await axios.post('/users/add', dados);
            console.log(response.data);
            //localStorage.setItem('usuarioLogado', JSON.stringify(response.data));
            //location.assign('/');

            toast.success('Cadastro efetuado com sucesso')
            navigate('/login')
            
        } catch (error) {
            toast.error('Error ao cadastrar-se.');
        }
    }

    return (
        <main>
            <h1>cadastrar-se</h1>

            <form onSubmit={handleSubmit}>

                <input type="text" placeholder="Primeiro Nome" value={firstName} onChange={e => setFirstName(e.target.value)} required />

                <input type="text" placeholder="Ultimo Nome" value={lastName} onChange={e => setLastName(e.target.value)} required />

                <input type="number" placeholder="Idade" value={age} min={0} max={150} onChange={e => setAge(e.target.value)} required />

                <select value={gender} onChange={e => setGender(e.target.value)} required>
                    <option value='male'>Homem</option>
                    <option value='female'>Mulher</option>
                    <option value='other'>Outro / Prefiro não informar</option>
                </select>

                <input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />

                <input type="text" placeholder="Telefone" value={phone} onChange={e => setPhone(e.target.value)} required />

                <input type="text" placeholder="Nome do Usuario" value={username} onChange={e => setUsername(e.target.value)} required />

                <input type="text" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} required />

                <input type="submit" value="Enviar" />
            </form>
        </main>
    );
}
