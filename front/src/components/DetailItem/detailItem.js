import React from 'react';
import NumberFormat from 'react-number-format';

export const DetailItem = (props) => {
    const { title, picture, price, condition, sold_quantity, description } = props;

    const formatDecimals = (price) => {
        if (price.includes(',')) {
            return (
                <>{price.substr(0, price.length - 3)}
                    <span>{price.substr(price.length - 2, price.length - 1)}</span></>
            )

        }
        return (
            <>
                {price}
                <span>00</span>
            </>
        )
    }
    return (
        <>
            <div className="row detail-item">
                <div className="col-8">
                    <img src={picture} alt={title} />
                </div>
                <div className="col-4">
                    <span>{condition === 'new' && 'Nuevo - '} {sold_quantity} vendidos</span>
                    <h5 className="title">{title}</h5>

                    {price && price.currency && price.amount && price.decimals
                        &&
                        <NumberFormat
                            prefix={price.currency + ' $'}
                            displayType="text"
                            value={price.amount}
                            thousandSeparator="."
                            decimalSeparator=','
                            renderText={(formattedPrice) =>
                                <h4 className="price">
                                    {formatDecimals(formattedPrice)}
                                </h4>}
                        />}

                    <button className="buy-btn" title="Comprar">Comprar</button>
                </div>
            </div>
            <div className="row detail-item-description">
                <div className="col-8">
                    <h3>Descripción del producto</h3>
                    {description}
                </div>
            </div>
        </>
    );
}
