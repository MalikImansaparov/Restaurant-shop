import React from 'react';
import cartIcon from './shopping-cart-solid.svg';
import logos from './icon.jpg'
import './app-header.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const AppHeader = ({totalPrice}) => {

    return (
        <header className="header">
                <img className='main__logo' src={logos} alt=''/>
            <nav>
                <Link to ={'/'} className = "header__link">Menu</Link>
                <Link to = "/cart" className = "header__link">
                    <img className="header__cart" src={cartIcon} alt="cart"></img>
                    Total: {totalPrice} $
                </Link>
            </nav>
        </header>
    )
};

const mapStateToProps = ({totalPrice}) => {
    return{
        totalPrice
    }
}

export default connect(mapStateToProps)(AppHeader);