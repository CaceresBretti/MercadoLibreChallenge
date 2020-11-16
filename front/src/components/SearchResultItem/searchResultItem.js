import React from 'react';
import NumberFormat from 'react-number-format';


export const SearchResultItem = (props) => {
    const { title, picture, price, free_shipping } = props;


    return (
        <div className="row search-item">
            <div className="col">
                <img src={picture} alt={title} title={title} />
            </div>
            <div className="col-9">

                <h4 className="price" title="Precio">
                    <NumberFormat prefix={price.currency + ' $'}
                        displayType="text"
                        value={price.amount}
                        thousandSeparator="."
                        decimalSeparator=","
                        decimalScale={price.decimals}
                    />
                    {free_shipping && <span><i title="Envio gratis" className="fa fa-truck"></i></span>}
                </h4>

                <h5 className="title" title={title}>{title}</h5>
            </div>
        </div>
    )
}