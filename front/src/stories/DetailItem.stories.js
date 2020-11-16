/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import DetailItem from '../components/DetailItem';

import '../styles/app.scss';

export default {
    title: 'Challenge/Detalle Item',
    component: DetailItem,
    displayName: 'Detalle Item'
};
const Template = (args) => <div className="row card"><DetailItem {...args} /></div>;

export const Detail = Template.bind({});

Detail.args = {
    picture: 'https://http2.mlstatic.com/D_873208-MLA42615526990_072020-I.jpg',
    title: 'Los simpson',
    price: {
        currency: 'CLP',
        amount: 10000,
        decimals: 2
    },
    condition: 'new',
    sold_quantity: 340,
    description: 'Pj masks x 3\nColección completa \n\nGekko\nOwlette \nCatboy\n\nEnvios a todo el pais \nRetiro por local \nCapital federal'
};