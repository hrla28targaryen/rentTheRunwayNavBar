import React from 'react';
import SubNavigation from '../SubNavigation.jsx';

class Occasions extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            image: 'https://s3.amazonaws.com/renttherunwayhrla28/navbar/Occassions.jpg',
            sections : [
                {
                    title: 'Wear to Where',
                    links: ['Gala', 'Cocktail Party', 'Night Out', 'Prom', 'Work', 'Weekend', 'View All']
                },
                {
                    title: 'Weddings',
                    links: ['Guest', 'Bride', 'Bridesmaid', 'Mother of the Bride', 'Wedding Concierge', 'View All']
                },
                {
                    title: 'Wedding Dress Codes',
                    links: ['Black Tie', 'Black Tie Optional', 'Cocktail', 'Daytime']
                }
            ]
        }
    }

    render() {
        return(
            <SubNavigation img={this.state.image} sections={this.state.sections} id="Occasions"/>
        );
    }
}

export default Occasions;