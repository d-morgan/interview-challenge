import React from 'react';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {breakdown: {}}
    }

    componentDidUpdate(prevProps) {
        if (this.props.selectedItems !== prevProps.selectedItems) {
            let breakdown = {};
            this.props.selectedItems.forEach(element => {
                element.dietaries.forEach(dietry => {
                    breakdown[dietry] = breakdown[dietry] ? breakdown[dietry] + 1 : 1;
                })
            });
            this.setState({breakdown})
        }
    }

    render() {
        return (
            <div className="col-6 menu-summary-right">
                {
                    Object.keys(this.state.breakdown).map(key => (
                        <span key={key}>
                            <span>{this.state.breakdown[key]}</span>
                            <span className="dietary">{key}</span>
                        </span>
                    ))
                }
            </div>
        )
    }

    
}