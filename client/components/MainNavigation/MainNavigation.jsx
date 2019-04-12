import React from 'react';
import Navigation from '../Navigation/Navigation.jsx';
import style from './MainNavigation.scss';
import Logo from '../Logo/Logo.jsx';
import Collapsible from 'react-collapsible';

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
                <div className="skinny-banner-content" className={style.bannerContent}>
                    $80 Off 60-Day Unlimited Trial or 20% Off First Order with code: SOSMART
                    <Collapsible transitionTime={10} trigger="DETAILS" className={style.detailButton}>
                        <div className={style.difficultDiv}>
                            <p className={style.detailsSmall}>Code applies 20% off first RTR Reserve rental and reduces Update to $69 (1st mo. only), OR reduces Unlimited to $119 (1st and 2nd mo.). Valid only for new customers. Cannot be applied to PRO, existing memberships, existing orders, purchases of gift cards, gift credits, bridal packages or services, or other items for sale. Offer subject to end without notice.</p>
                        </div>
                    </Collapsible>
                </div>
            </div>
        );
    }
}

export default MainNavigation;