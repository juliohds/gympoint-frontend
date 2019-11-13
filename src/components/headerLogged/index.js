import React, { useState, useEffect } from 'react';
import { getMenu } from '../../api/coreService';
import imgLogoHeader from '../../images/gympointHeaderLogged.png';
import './styles.scss';

export default function HeaderLogged() {
    const [menus, setMenus] = useState([]);

    const loadItens = async () => {
        setMenus(await getMenu());
    };

    useEffect(() => {
        loadItens();
    }, []);

    return (
        <div className="headerLoggedForm">
            <div className="headerLogo">
                <img
                    src={imgLogoHeader}
                    className="logoHeaderLogged"
                    alt="logo"
                />
            </div>
            <div className="headerMenu">
                {menus.map(v => {
                    return <h1 className="headerLabel">{v.label}</h1>;
                })}
            </div>
            <div className="menuLogout">
                <h3 className="headerNameUser">Julio Henrique</h3>
                <span className="linkLogout">sair do sistema</span>
            </div>
        </div>
    );
}
