import PropTypes from 'prop-types';
import './style.css';

export default function Usuario({ usuario }) {

    return (
        <div className='usuario'>
            <img src={usuario.image} alt=''/>
            <p>
            {usuario.firstName + ' ' + usuario.lastName}
            <button onClick={() => alterarUsuario(usuario)}>Alterar</button>
            <button onClick={() => alterarUsuario(usuario)}>Excluir</button>
            </p>
            </div>
    );
}

Usuario.propTypes = {
    usuario: PropTypes.object.isRequired
};