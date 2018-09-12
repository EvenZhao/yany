import { BrowserRouter as Router, Route } from "react-router-dom";

import List from '../components/List';
import Info from '../components/Info';

import '../../node_modules/cube.css/build/cube.css';
import '../assets/public.less';

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="layout-wrap">
                    <div className="layout-child">
                        <Info />
                    </div>

                    <div className="layout-child">
                        <Route 
                            component={ List }
                            exact 
                            path="/"
                            
                        />
                    </div>
                </div>
            </Router>
        )
    }
}
