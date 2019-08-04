import React from 'react';
import classes from './Layout.css';

/** You can use Aux instead of fragment which returns just children */
import Aux from '../../hoc/Aux';

/*<React.Fragment>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main>
            {props.children}
        </main>
    </React.Fragment>*/

const layout = (props) => (
    <Aux>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;
