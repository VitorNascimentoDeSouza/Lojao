import PropTypes from 'prop-types';
import './style.css';
export default function Item({ item }) {

    return (
        <div className='item' key={item.id}>
            <div className='float-left'>
                <strong>{item.title}</strong><br />
                Qtd: {item.quantity}
            </div>
            <div className='float-right text-right'>
                Valor unitário: R$ {item.price}<br />
                Subtotal: R$ {item.quantity * item.price}
            </div>
            <hr className='clear-both mb-10' />
        </div>
    );
}

Item.propTypes = {
    item: PropTypes.object.isRequired
};