import React from 'react';
import SubNavigation from '../SubNavigation.jsx';

class Designer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            image: 'https://s3.amazonaws.com/renttherunwayhrla28/navbar/Designer.jpg',
            sections : [
                {
                    title: 'New Designers',
                    links: ['New to RTR', 'Fresh on the Scene', 'Designer Collective', 'Female Designer Spotlight']
                },
                {
                    title: 'Brands We Love',
                    links: ['Kate Spade', 'Co', 'Colovos', 'Jason Wu', 'Iro', 'Sea New York', 'Universal Standard','View All']
                },
            ]
        }
    }

    render() {
        return(
            <SubNavigation img={this.state.image} sections={this.state.sections} id="Designer"/>
        );
    }
}

export default Designer;