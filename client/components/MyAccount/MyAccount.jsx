import React from 'react';
import style from './MyAccount.scss';

class MyAccount extends React.Component {
    constructor(props) {
        super(props); 
    }

    render() {
        return(
            <ul className={style.userMenu}>
                <li className={style.userMenuItem}>
                    <a href="" className={`${style.userMenuItemTitle} ${style.account}`}>
                        <span className={style.userMenuItemTitleLabel}>Sign In</span>
                    </a>
                </li>
                <li className={style.userMenuItem}>
                    <a href="" className={`${style.userMenuItemTitle} ${style.hearts}`}>
                        <span className={style.userMenuItemTitleLabel}>Hearts</span>
                    </a>
                </li>
                <li className={style.userMenuItem}>
                    <a href="" className={`${style.userMenuItemTitle} ${style.bag}`}>
                        <span className={style.userMenuItemTitleLabel}>Bag</span>
                    </a>
                </li>
                <li className={style.userMenuItem}>
                    <a href="" className={`${style.userMenuItemTitle} ${style.customerOffer}`}>
                        <span className={style.offerText}><strong>Limited Time Only</strong></span>
                        <span className={style.subTitle}>$80 off Unlimited</span>
                    </a>
                </li>
            </ul>
        );
    }
}

export default MyAccount;