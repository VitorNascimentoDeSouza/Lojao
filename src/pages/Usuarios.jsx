import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import axios from '../axios';
import Usuario from '../components/Usuario';

export default function Usuarios() {

    const [usuarios, setUsuarios] = useState([]);
    const [paginas, setPaginas] = useState([])
    const [limite, setLimite] = useState(10)



    useEffect(() => {
        async function getUsuarios(pagina = 1) {
            try {
                const response = await axios.get(`/users?limit=${limite}&skip=${(pagina - 1) * limite}`);
                setUsuarios(response.data.users);

                let p = [];
                for (let i = 1; i <= Math.ceil(response.data.total / response.data.limit); i++) {
                    p.push(i)
                }
                setPaginas(p)
            } catch (error) {
                toast.error('Erro ao tentar recuperar os usuarios');
            }
        }
        useEffect(() => {
            getUsuarios();
        }, [])

    }, []);
    return (
        <main>
            <h1>Usuarios</h1>
            {usuarios.map(usuario => <Usuario key={usuario.id}
                usuario={usuario} />)}

            <div>
                {paginas &&
                    paginas.map((valor, i) => (
                        <>
                            <Link key={i += 1} onClick={() => getUsuarios(valor)} to='#'>{valor}</Link>
                            -
                        </>
                    ))
                }
            </div>
        </main>
    );
}