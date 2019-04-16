import React from 'react';
import style from './SubNavigation.scss';

class SubNavigation extends React.Component {
    constructor(props) {
        super(props); 
    }

    render() {
        return(
            <div className={style.subNavigation}>
                <ul className={style.subNavigationBlock}>
                    <div className={style.image}>
                        <img src={this.props.img} />
                    </div>
                    {
                        this.props.sections.map( section => {
                            return (
                                <li className={style.subNavigationList}>
                                    <div className={style.navMenuHeaderBlock}>
                                        <span className={style.title}>{section.title}</span>
                                        <ul className={style.sectionList}>
                                            { section.links.map( link => <li><a href="">{ link }</a></li> ) }
                                        </ul>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default SubNavigation;