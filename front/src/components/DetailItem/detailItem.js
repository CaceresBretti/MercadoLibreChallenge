import React from 'react';
import { formatPrice } from '../../helpers/format'

export const DetailItem = (props) => {
    const { title, picture, price, condition, sold_quantity, description } = props;

    const formattedPrice = formatPrice(price);
    return (
        <>
            <div className="row detail-item">
                <div className="col-8">
                    <img src={picture} alt={title} />
                </div>
                <div className="col-4">
                    <span>{condition === 'new' && 'Nuevo - '} {sold_quantity} vendidos</span>
                    <h5 className="title">{title}</h5>
                    <h4 className="price">{formattedPrice.substr(0, formattedPrice.length - 3)} <span>{formattedPrice.substr(formattedPrice.length - 2, formattedPrice.length - 1)}</span></h4>
                    <button className="buy-btn">Comprar</button>
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
