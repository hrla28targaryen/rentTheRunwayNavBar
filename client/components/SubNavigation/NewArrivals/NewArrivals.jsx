import React from 'react';
import SubNavigation from '../SubNavigation.jsx';

class NewArrivals extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            image: 'https://s3.amazonaws.com/hrla28renttherunway/navbar/WhatsNew.jpg',
            sections : [
                {
                    title: 'The Weekly Upload',
                    links: ['New Clothing', 'New Dresses', 'New Accessories', 'All New Arrivals']
                },
                {
                    title: 'Discover',
                    links: ['New Unlimited Perks', 'Most Popular', 'Business Formal', 'Cool Coats', 'Must-Have Hoops', 'Signs of Spring', 'College Discount']
                },
            ]
        }
    }

    render() {
        return(
            <SubNavigation img={this.state.image} sections={this.state.sections} id="NewArrivals"/>
        );
    }
}

export default NewArrivals;