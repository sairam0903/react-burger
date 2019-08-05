import React, {Component} from 'react';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {
    state = {
        ingredients: {
            salad: 1,
            cheese: 1,
            bacon: 2,
            meat: 1
        }
    };
    
    checkoutCanceledHandler = () => {
        this.props.history.goBack();
    };
    
    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    };
    
    render() {
        return (
            <div>
                <CheckoutSummary
                    ingredients={this.state.ingredients}
                    checkoutCanceled={this.checkoutCanceledHandler}
                    checkoutContinued={this.checkoutContinuedHandler}/>
            </div>
        )
    }
}

export default Checkout;