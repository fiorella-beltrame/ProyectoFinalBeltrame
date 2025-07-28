import React from  'react';

const CartWidget = ({count}) => {
    return(
        <div>
            🛒<span>{count}</span>
        </div>
    );
};

export default CartWidget;