import { BrowserRouter as Router, Route } from "react-router-dom";

import List from '../components/List';
import Info from '../components/Info';

import '../../node_modules/cube.css/build/cube.css';
import '../assets/main.less';

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="layout">
                    <div className="layout-child layout-left">
                        <Info />
                    </div>

                    <div className="layout-child layout-right">
                        <Route 
                            exact 
                            component={ List }
                            path="/"
                            
                        />
                        {/* <Route path="/content" component={Content} /> */}
                        {/* <Route path="about" component={About} /> */}
                    </div>
                </div>
            </Router>
        )
    }
}
