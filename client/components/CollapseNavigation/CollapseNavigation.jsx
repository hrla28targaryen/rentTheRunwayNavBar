import React from 'react';
import MyAccount from '../MyAccount/MyAccount.jsx';
import Accessories from '../SubNavigation/Accessories/Accessories.jsx';
import Plans from '../SubNavigation/Plans/Plans.jsx';
import NewArrivals from '../SubNavigation/NewArrivals/NewArrivals.jsx';
import Dresses from '../SubNavigation/Dresses/Dresses.jsx';
import Clothing from '../SubNavigation/Clothing/Clothing.jsx';
import Occasions from '../SubNavigation/Occasions/Occasions.jsx';
import Designer from '../SubNavigation/Designer/Designer.jsx';
import style from './CollapseNavigation.scss';

class CollapseNaviagtion extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
            { this.props.openCollapsed &&
                (<div className={style.collapseNavigationWrapper}>
                    <div className={style.overlay} onClick={this.props.openCollapsedMenu}></div>
                    <ul className={style.collapseNavigation}>
                        <li className={style.navSearchCollapse}>
                            <form className={style.navSearch}>
                                <label for="nav-search-query">Search</label>
                                <input type="text" 
                                    className={style.navSearchQuery} 
                                    onFocus={this.handleSearch}
                                    onBlur={this.handleSearch} />
                                <button>Search</button>
                            </form>
                        </li>
                        <li className={style.navGroup}>
                            <div className={style.navGroupTitle}>
                                <a href="" className={style.navItem}>
                                    <span>Plans</span>
                                </a>
                            </div>
                            <div className={style.navMenuWrapper}>
                                <Plans />
                            </div>
                        </li>
                        <li className={style.navGroup}>
                            <div className={style.navGroupTitle}>
                                <a href="" className={style.navItem}>
                                    <span>What's New</span>
                                </a>
                            </div>
                            <div className={style.navMenuWrapper}>
                                <NewArrivals />
                            </div>
                        </li>
                        <li className={style.navGroup}>
                            <div className={style.navGroupTitle}>
                                <a href="" className={style.navItem}>
                                    <span>Dresses</span>
                                </a>
                            </div>
                            <div className={style.navMenuWrapper}>
                                <Dresses />
                            </div>
                        </li>
                        <li className={style.navGroup}>
                            <div className={style.navGroupTitle}>
                                <a href="" className={style.navItem}>
                                    <span>Clothing</span>
                                </a>
                            </div>
                            <div className={style.navMenuWrapper}>
                                <Clothing />
                            </div>
                        </li>
                        <li className={style.navGroup}>
                            <div className={style.navGroupTitle}>
                                <a href="" className={style.navItem}>
                                    <span>Accessories</span>
                                </a>
                            </div>
                            <div className={style.navMenuWrapper}>
                                <Accessories />
                            </div>
                        </li>
                        <li className={style.navGroup}>
                            <div className={style.navGroupTitle}>
                                <a href="" className={style.navItem}>
                                    <span>Occasions</span>
                                </a>
                            </div>
                            <div className={style.navMenuWrapper}>
                                <Occasions />
                            </div>
                        </li>
                        <li className={style.navGroup}>
                            <div className={style.navGroupTitle}>
                                <a href="" className={style.navItem}>
                                    <span>Designer</span>
                                </a>
                            </div>
                            <div className={style.navMenuWrapper}>
                                <Designer />
                            </div>
                        </li>
                        <li className={style.userMenuWrapper}>
                            <ul className={style.userMenuCollapse}>
                                <li className={style.navGroup}>
                                    <div className={style.navGroupTitle}>
                                        <a href="" className={style.navItem}>
                                            <span>Help</span>
                                        </a>
        
                                    </div>
                                </li>
                                <li className={style.userMenuReferral}>
                                    <span>Get $30</span>
                                </li>
                                <li className={style.userMenuSignIn}>
                                    <span>Sign In</span>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>)
            }
            </div>)
    }
}

export default CollapseNaviagtion;