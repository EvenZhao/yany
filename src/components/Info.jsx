import '../assets/Info.less';

export default class Info extends React.Component {
    constructor(props) {
        super(props);
        this.nav = React.createRef();
    }

    render() {
        return (
            <div>
                <a 
                    id="nav-toggle" 
                    ref={ this.nav }
                    href="javascript:">
                    <span></span>
                </a>
            </div>
        )
    }

    componentDidMount() {
        ReactDOM.findDOMNode(this.nav.current)
        .addEventListener( "click", function() {
            this.classList.toggle( "active" );
        });
    }
}
