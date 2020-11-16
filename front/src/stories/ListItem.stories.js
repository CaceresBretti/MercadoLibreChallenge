/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Header from "../components/Header";
import SearchResultItem from '../components/SearchResultItem';
import '../styles/app.scss';

export default {
    title: 'Challenge/Listado Item',
    component: Header,
    displayName: 'Listado Item'
};
const Template = (args) => <div className="row card"><SearchResultItem {...args} /></div>;

export const List = Template.bind({});

List.args = {
    picture: 'https://http2.mlstatic.com/D_873208-MLA42615526990_072020-I.jpg',
    title: 'Los Simpson',
    price: {
        currency: 'CLP',
        amount: 10000,
        decimals: 0
    }
};