import '../assets/List.less';
export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.wrap = React.createRef();
    }

    render() {
        return (
            <div ref={ this.wrap }>
                {/* <ul>
                    {
                        new Array(10).fill(1).map((item, index) => {
                            return (
                                <li key={ index }>
                                    {index + 1}
                                </li>
                            )
                        })
                    }
                    <li>加载更多</li>
                </ul> */}
            </div>
        )
    }

    componentDidMount() {
        const wrapDOM = ReactDOM.findDOMNode(this.wrap.current.parentNode);
        wrapDOM.addEventListener('scroll', () => {
            const eleHeight = wrapDOM.scrollHeight;
            const screenHeight = window.innerHeight;
            const scrollTop = wrapDOM.scrollTop;
            
            if (eleHeight - screenHeight === scrollTop) {
                console.log('request');
            }
        });
    }
}
