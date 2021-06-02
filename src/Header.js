import React from 'react';
import Logo from "./logo/Logo";
import Menu from "./Menu";
import Checkout from "./Checkout/Checkout";

function Header(props) {
    return (
        <div className="header">
            <Logo/>
            <Menu/>
            <Checkout datas={props.datas}
                      setDatas={props.setDatas} />
        </div>
    )
}

export default Header;