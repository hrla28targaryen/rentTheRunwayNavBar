import React from 'react';
import SubNavigation from '../SubNavigation.jsx';

class Plans extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            image: 'https://s3.amazonaws.com/hrla28renttherunway/navbar/Plans.jpg',
            sections : [
                {
                    title: 'RTR Unlimited',
                    links: ['How Unlimited Works', 'Browse Unlimited Styles', 'Rent for Maternity', 'Sunglasses', 'Bridal', 'All']
                },
                {
                    title: 'RTR Update',
                    links: ['How Update Works', 'Browse Unlimited Styles', 'College Discounts']
                },
            ]
        }
    }

    render() {
        return(
            <SubNavigation img={this.state.image} sections={this.state.sections} id="Plans"/>
        );
    }
}

export default Plans;