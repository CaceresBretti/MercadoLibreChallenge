import React from 'react';
import SearchBar from '../SearchBar';
import logo from '../../assets/logo.png'

export const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="col-1">
                        <img src={logo} alt="Mercado Libre" title="Mercado Libre" />
                    </div>
                    <div className="col-11">
                        <SearchBar />
                    </div>
                </div>
            </div>
        </header>
    )
}