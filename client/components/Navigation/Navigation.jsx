import React from 'react';
import style from './Navigation.scss';
import SearchBar from '../SearchBar/SearchBar.jsx';
import MyAccount from '../MyAccount/MyAccount.jsx';
import Accessories from '../SubNavigation/Accessories/Accessories.jsx';
import Plans from '../SubNavigation/Plans/Plans.jsx';
import NewArrivals from '../SubNavigation/NewArrivals/NewArrivals.jsx';
import Dresses from '../SubNavigation/Dresses/Dresses.jsx';
import Clothing from '../SubNavigation/Clothing/Clothing.jsx';
import Occasions from '../SubNavigation/Occasions/Occasions.jsx';
import Designer from '../SubNavigation/Designer/Designer.jsx';
import Caret from '../SubNavigation/Caret/Caret.jsx';

class Navigation extends React.Component {
    constructor(props) {
        super(props); 

        this.state = {
            onSearch: false
        }
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(){
        this.setState(current => ({
          onSearch: !current.onSearch, // <-- Toggle the state
        }));
      }

    render() {
        return(
            <div className={style.headerLinks}>
                <ul className={style.nav} style={{ 'opacity' : this.state.onSearch ? '0' : '1' }} >
                    <li className={style.navGroup}>
                        <div className={style.navGroupTitle}>
                            <a href="" className={style.navItem}>
                                <span>Plans</span>
                            </a>
                            <div className={style.caret}></div>
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
                            <div className={style.caret}></div>
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
                            <div className={style.caret}></div>
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
                            <div className={style.caret}></div>
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
                            <div className={style.caret}></div>
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
                            <div className={style.caret}></div>
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
                            <div className={style.caret}></div>
                        </div>
                        <div className={style.navMenuWrapper}>
                            <Designer />
                        </div>
                    </li>
                </ul>
                <form className={style.navSearch}>
                    <label for="nav-search-query">Search</label>
                    <input type="text" 
                        placeholder="Search" 
                        className={style.navSearchQuery} 
                        onFocus={this.handleSearch}
                        onBlur={this.handleSearch} />
                    <button className={style.navSearchQueryClear} type="button">×</button>
                    <button>Search</button>
                </form>
                <MyAccount />
            </div>
        );
    }
}

export default Navigation;