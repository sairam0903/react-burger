import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'

import Aux from '../../HOC/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../HOC/WithErrorHandler/WithErrorHandler';
import {addIngredient, removeIngredient, initIngredients, purchaseInit, setAuthRedirectPath} from '../../store/actions';

export class BurgerBuilder extends Component {

    state = {
        purchasing: false
    };

    componentDidMount() {
        this.props.onInitIngredients();
    }

    updatePurchaseState(ingredients) {
        return Object.keys(ingredients).some(igKey => ingredients[igKey] > 0);
    }

    purchaseHandler = () => {
        if (this.props.isAuthenticated) {
            this.setState({purchasing: true});
        } else {
            this.props.onSetAuthRedirectPath('/checkout');
            this.props.history.push('/auth');
        }
    };

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    };

    purchaseContinueHandler = () => {
        this.props.onInitPurchase();
        this.props.history.push('/checkout');
    };

    render() {
        const disabledInfo = {
            ...this.props.ingredients
        };
        for (let key in disabledInfo) {
            if (disabledInfo.hasOwnProperty(key)) {
                disabledInfo[key] = disabledInfo[key] <= 0;
            }
        }

        let orderSummary = null;
        let burger = this.props.error ? <p>Ingredients can't be loaded</p> : <Spinner/>;

        if (this.props.ingredients) {
            burger = (
                <Aux>
                    <Burger ingredients={this.props.ingredients}/>
                    <BuildControls ingredientAdded={this.props.onIngredientAdded}
                                   ingredientRemoved={this.props.onIngredientRemoved}
                                   disabled={disabledInfo}
                                   purchasable={this.updatePurchaseState(this.props.ingredients)}
                                   ordered={this.purchaseHandler}
                                   isAuth={this.props.isAuthenticated}
                                   price={this.props.totalPrice}/>
                </Aux>
            );

            orderSummary = <OrderSummary
                ingredients={this.props.ingredients}
                price={this.props.totalPrice}
                purchaseCanceled={this.purchaseCancelHandler}
                purchaseContinued={this.purchaseContinueHandler}/>;

        }

        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.burgerBuilder.ingredients,
        totalPrice: state.burgerBuilder.totalPrice,
        error: state.burgerBuilder.error,
        isAuthenticated: !!state.auth.token
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        onIngredientAdded: addIngredient,
        onIngredientRemoved: removeIngredient,
        onInitIngredients: initIngredients,
        onInitPurchase: purchaseInit,
        onSetAuthRedirectPath: setAuthRedirectPath
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));
