import React from 'react';
import style from './SearchBar.scss';

class SearchBar extends React.Component {
    constructor(props) {
        super(props); 
    }

    render() {
        return(
            <form className={style.navSearch}>
                <label for="nav-search-query">Search</label>
                <input type="text" placeholder="Search" className={style.navSearchQuery}/>
                <button className={style.navSearchQueryClear} type="button">×</button>
                <button>Search</button>
            </form>
        );
    }
}

export default SearchBar;