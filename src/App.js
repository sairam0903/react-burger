import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Layout from './HOC/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';

class App extends React.Component {
    /** Test your component unmount axios instance in WithErrorHandler */
    
    /*state = {
        show: true
    };
    componentDidMount() {
        setTimeout(() => this.setState({show: false}), 5000)
    }*/
    
    render() {
        return (
            <div>
                <Layout>
                    {/* <Route path='/' component= {this.state.show ? <BurgerBuilder/> : null}/> */}
                    <Switch>
                        <Route path='/checkout' component={Checkout}/>
                        <Route path='/orders' component={Orders}/>
                        <Route path='/' component={BurgerBuilder}/>
                    </Switch>
                </Layout>
            </div>
        )
    }
}

export default App;
