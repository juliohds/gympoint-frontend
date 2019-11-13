import React from 'react';
import './styles.scss';
import logo from '../../images/gympoint.png'; // Tell Webpack this JS file uses this image

// import { Container } from './styles';

export default function Login(props) {
    return (
        <div className="container">
            <div className="form">
                <div className="logo">
                    <img src={logo} alt="gymlogo" className="image" />
                </div>
                <div className="form-field">
                    <label htmlFor="email" className="label">
                        SEU E-MAIL
                        <input
                            name="email"
                            type="text"
                            placeholder="exemplo@email.com"
                            className="input"
                        />
                    </label>
                </div>
                <div className="form-field">
                    <label htmlFor="password" className="label">
                        SUA SENHA
                        <input
                            name="password"
                            type="text"
                            placeholder="**********"
                            className="input"
                        />
                    </label>
                </div>
                <button
                    className="button"
                    onClick={() => props.history.push('/students')}
                    type="button"
                >
                    Entrar no sistema
                </button>
            </div>
        </div>
    );
}
