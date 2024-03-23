import { useState, useEffect, Fragment } from 'react';
import { toast } from 'react-toastify';
import axios from '../axios';
import Produto from '../components/Produto';

export default function Home() {

    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        async function getProdutos() {
            try {
                const response = await axios.get('/products');
                setProdutos(response.data.products);
            } catch (error) {
                toast.error('Erro ao tentar recuperar os produtos');
            }
        }
        getProdutos();
    }, []);

    let ultimaCategoria = '';

    return (
        <main>
            <h1>Home</h1>
            {produtos.map(produto =>
                <Fragment key={produto.id}>
                    {produto.category != ultimaCategoria ? <h2
                        key={produto.category}>{ultimaCategoria = produto.category}</h2> : null}
                    <Produto produto={produto} />
                </Fragment>
            )}

        </main>
    );
}
