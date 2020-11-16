/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from "../components/Header";
import '../styles/app.scss';

export default {
    title: 'Challenge/Header',
    component: Header,
    displayName: 'Header'
};
const Template = (args) => <BrowserRouter><Header {...args} /></BrowserRouter>;

export const BaseHeader = Template.bind({});
BaseHeader.args = {
};