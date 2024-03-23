import { useState, useEffect } from 'react';
import axios from '../axios';
import Pedido from '../components/Pedido';
import { toast } from 'react-toastify';

export default function Pedidos() {

    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
    const [pedidos, setPedidos] = useState([]);

    useEffect(() => {
        async function getPedidos() {
            try {
                const response = await axios.get('/carts/user/' + usuarioLogado.id);
                setPedidos(response.data.carts);
            } catch (error) {
                toast('Erro ao tentar recuperar os pedidos');
            }
        }
        getPedidos();
    }, []);

    return (
        <main>
            <h1>Pedidos</h1>
            {pedidos.length > 0 ?
                pedidos.map(pedido => <Pedido pedido={pedido} key={pedido.id} />) :
                <p>Você ainda não efetuou nenhum pedido.</p>}
        </main>
    );
}
