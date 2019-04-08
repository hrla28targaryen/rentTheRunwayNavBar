import React from 'react';
import SubNavigation from '../SubNavigation.jsx';

class Dresses extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            image: 'https://s3.amazonaws.com/hrla28renttherunway/navbar/Dresses.jpg',
            sections : [
                {
                    title: 'Trending',
                    links: ['New Arrivals', 'Most Popular', 'The Wedding Shop', 'View All']
                },
                {
                    title: 'Dress Code',
                    links: ['Formal', 'Cocktail', 'Party', 'Daytime', 'Work', 'Weekend', 'Maternity', 'Plus', 'View All']
                },
                {
                    title: 'Price Drop',
                    links: ['Under $35', 'Under $55', 'Under $75']
                },
                {
                    title: 'Online Sample Sale',
                    links: ['Up to 75% off']
                }
            ]
        }
    }

    render() {
        return(
            <SubNavigation img={this.state.image} sections={this.state.sections} id="Dresses"/>
        );
    }
}

export default Dresses;