import { useState, useEffect } from 'react';
import axios from '../axios';
import Categoria from '../components/Categoria';

export default function Categorias() {

    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        async function getCategorias() {
            try {
                const response = await axios.get('/products/categories');
                setCategorias(response.data);
            } catch (error) {
                alert('Erro ao tentar recuperar as categorias');
            }
        }
        getCategorias();
    }, []);
    return (
        <main>
            <h1>Categorias</h1>
            {categorias.map(categoria => <Categoria key={categoria}
                categoria={categoria} />)}

        </main>
    );
}