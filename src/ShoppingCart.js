import React from 'react';

function ShoppingCart({ cartItems, removigFromCart }) {
    const handleRemoveFromCart = items => {
        removigFromCart(items);
    };

    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.qnty, 0);

    return (

        <div className="cart">
    
            {cartItems.length > 0 ?
                (
                    <>
                        <h2>Cart-{cartItems.length}</h2>
                        {cartItems.map(item => (
                            <div className="cart-item" key={item.id}>
                                <p>{item.name}</p>
                                <p>${item.price}</p>
                                <p>({item.qnty})</p>
                                <button onClick={() => handleRemoveFromCart(item)}>Remove from Cart</button>
                            </div>
                        ))}
                        < div className="total">Total Price: {totalPrice}</div>
                    </>
                )
                :
                <h3>cart is empty</h3>
            }

        </div >
    );
}

export default ShoppingCart;
