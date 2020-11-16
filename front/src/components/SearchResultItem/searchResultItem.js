import React from 'react';
import { formatPrice } from '../../helpers/format'


export const SearchResultItem = (props) => {
    const { title, picture, price } = props;


    return (
        <div className="row search-item">
            <div className="col">
                <img src={picture} alt={title} />
            </div>
            <div className="col-9">
                <h4 className="price">{formatPrice(price)}</h4>
                <h5 className="title">{title}</h5>
            </div>
        </div>
    )
}