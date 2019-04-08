import React from 'react';
import SubNavigation from '../SubNavigation.jsx';

class Accessories extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            image: 'https://s3.amazonaws.com/hrla28renttherunway/navbar/Accessories.jpg',
            sections : [
                {
                    title: 'Category',
                    links: ['New Arrivals', 'Jewelry', 'Handbags', 'Sunglasses', 'Bridal', 'All']
                },
                {
                    title: 'Brands We Love',
                    links: ['3.1 Phillip Lim', 'Clare V.', 'Loeffler Randall', 'Lele Sadoughi', 'View All']
                },
                {
                    title: 'For Sale',
                    links: ['Fashion Solutions']
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
            <SubNavigation img={this.state.image} sections={this.state.sections} id='Accessories'/>
        );
    }
}

export default Accessories;