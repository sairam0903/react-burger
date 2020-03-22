import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import Layout from './HOC/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout/Logout';
import {authCheckState} from './store/actions/index';

class App extends React.Component {

    componentDidMount() {
        this.props.onTryAutoSignIn();
    }

    render() {
        let routes = (
            <Switch>
                <Route path="/auth" component={Auth} />
                <Route path="/" exact component={BurgerBuilder} />
                <Redirect to="/" />
            </Switch>
        );

        if (this.props.isAuthenticated) {
            routes = (
                <Switch>
                    <Route path="/orders" component={Orders} />
                    <Route path="/checkout" component={Checkout} />
                    <Route path="/logout" component={Logout} />
                    <Route path="/auth" component={Auth} />
                    <Route path="/" exact component={BurgerBuilder} />
                    <Redirect to="/" />
                </Switch>
            );
        }

        return (
            <div>
                <Layout>{routes}</Layout>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onTryAutoSignIn: () => dispatch(authCheckState())
    }
};

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    }
};

export default connect(mapStateToProps,  mapDispatchToProps)(App);
