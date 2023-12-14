import PropTypes from 'prop-types';
import './style.css';

export default function Categoria({categoria}) {

 return (
 <div className='categoria'>{categoria}</div>
 );
}

Categoria.propTypes = {
 categoria: PropTypes.string.isRequired
};