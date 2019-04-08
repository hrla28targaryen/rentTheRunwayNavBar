import React from 'react';
import SubNavigation from '../SubNavigation.jsx';

class Clothing extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            image: 'https://s3.amazonaws.com/hrla28renttherunway/navbar/Clothing.jpg',
            sections : [
                {
                    title: 'Dress Codes',
                    links: ['Party', 'Daytime', 'Business Formal', 'Work', 'Weekend', 'Vacation', 'View All']
                },
                {
                    title: 'Category',
                    links: ['New Arrivals', 'Dresses', 'Jumpsuits & Rompers', 'Jackets', 'Pants', 'Skirts',
                    'Tops', 'Maternity', 'College', 'View All']
                },
                {
                    title: 'Brands We Love',
                    links: ['3x1', 'Diane Von Furstenberg', 'Opening Ceremony', 'The Kooples', 'View All']
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
            <SubNavigation img={this.state.image} sections={this.state.sections} id="Clothing"/>
        );
    }
}

export default Clothing;