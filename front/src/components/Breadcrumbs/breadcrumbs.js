import React from 'react';
import { Link } from 'react-router-dom'


export const Breadcrumbs = (props) => {
    const { categories } = props;
    return (
        <div className="row breadcrumb">
            <ul>
                {categories.map((category) => {
                    return (
                        <li key={category}><Link to={`/items?search=${category}`}>{category}</Link></li>
                    )
                })}
            </ul>
        </div>
    )
}
