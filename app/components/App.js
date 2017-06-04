import React from 'react';
import { BrowserRouter as Router,
            Route,
            Switch
        }
        from 'react-router-dom';


import {Popular} from './Popular';
import Home from './Home';
import Battle from './Battle';
import Nav from './Nav';

export class App extends React.Component {
	render() {
		return (
            <Router>
				<div className='container'>
                    <Nav />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/battle' component={Battle} />
    					<Route path='/popular' component={Popular} />
                        <Route render={() => {
                            return <p>Not Found</p>
                        }} />
                    </Switch>
				</div>
            </Router>
		);
	};
}
