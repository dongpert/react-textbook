class Content extends React.Component {
    constructor(props) {
        super(props)
    }
    componentWillMount() {
        this.launchClock()
        this.state = {
            counter: 0,
            currentTime: new Date().toString(),
        }
    }
    launchClock() {
        setInterval(() => {
            this.setState({
                counter: ++this.state.counter,
                currentTime: new Date().toString(),
            })
        }, 1000)
    }
    render() {
        if (this.state.counter > 2) return <div />
        return <Logger time={this.state.currentTime}></Logger>
    }
}
