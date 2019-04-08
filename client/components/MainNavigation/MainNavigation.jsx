import React from 'react';
import Navigation from '../Navigation/Navigation.jsx';
import style from './MainNavigation.scss';
import Logo from '../Logo/Logo.jsx';

class MainNavigation extends React.Component {
    constructor(props) {
        super(props); 

        this.state = {
            currentScrollHeight: 0
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            this.setState({currentScrollHeight: window.scrollY});
       });
    }

    render() {
        const opacity = Math.min(Math.floor(2 / this.state.currentScrollHeight), 1);
        var visible = !!opacity ? 'translateY(0px)' : 'translateY(-120px)';
        console.log(visible);
        return(
            <div>
            <div className={style.mainHeader} style={{
                transform: `${visible}`,
                transition: 'transform 300ms linear',
              }}>
                <div className={style.mainHeaderWrapper}>
                    <div className={style.navLogo}>
                        <a href="https://www.renttherunway.com/" target="_blank" className={style.icon}>
                            <Logo />
                        </a>
                    </div>
                    <Navigation />
                </div>
            </div>
            <div style={{ height: '1200px', backgroundColor: 'white'}}></div>
            </div>
        );
    }
}

export default MainNavigation;