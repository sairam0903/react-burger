import React from 'react';

import Layout from './HOC/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'

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
                    {/* this.state.show ? <BurgerBuilder/> : null*/}
                    <BurgerBuilder/>
                </Layout>
            </div>
        )
    }
}

export default App;
