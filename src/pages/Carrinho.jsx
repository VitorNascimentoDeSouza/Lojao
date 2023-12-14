import Item from '../components/Item';

export default function Carrinho() {

    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    return (
        <main>
            <h1>Carrinho</h1>
            {carrinho.map(item => <Item item={item} key={item.id} />)}
            {carrinho.length > 0 ?
                <p className='text-center bold'>Total: R$ {carrinho.reduce((acc, item) =>
                    acc += (item.quantity * item.price), 0)}</p> :
                <p>Você ainda não adicionou itens ao seu carrinho.</p>}
        </main>
    );
}