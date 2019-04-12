import React from 'react';
import style from './MyAccount.scss';
import ModalLike from '../ModalLike/modalLike.jsx';

class MyAccount extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            sign_in: false
        }
    }

    render() {
        let modalClose1 = () => this.setState({ sign_in: false });
        return(
            <ul className={style.userMenu}>
                <li className={style.userMenuItem}>
                    <div className={`${style.userMenuItemTitle} ${style.account}`} onClick={() => this.setState({ sign_in: true})}>
                        <span className={style.userMenuItemTitleLabel}>Sign In</span>
                    </div>
                </li>
                <li className={style.userMenuItem}>
                    <div className={`${style.userMenuItemTitle} ${style.hearts}`} onClick={() => this.setState({ sign_in: true})}>
                        <span className={style.userMenuItemTitleLabel}>Hearts</span>
                    </div>
                    <ModalLike
                    className="modalLike"
                    show={this.state.sign_in}
                    onHide={modalClose1}
                    />
                </li>
                <li className={style.userMenuItem}>
                    <div href="" className={`${style.userMenuItemTitle} ${style.bag}`} onClick={() => this.setState({ sign_in: true})}>
                        <span className={style.userMenuItemTitleLabel}>Bag</span>
                    </div>
                    <ModalLike
                    className="modalLike"
                    show={this.state.sign_in}
                    onHide={modalClose1}
                    />
                </li>
                <li className={style.userMenuItem}>
                    <div href="" className={`${style.userMenuItemTitle} ${style.customerOffer}`}>
                        <span className={style.offerText}><strong>Limited Time Only</strong></span>
                        <span className={style.subTitle}>$80 off Unlimited</span>
                    </div>
                </li>
            </ul>
        );
    }
}

export default MyAccount;