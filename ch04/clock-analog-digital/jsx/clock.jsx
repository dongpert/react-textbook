class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.launchClock()
        this.state = { currentTime: new Date().toString() }
    }
    launchClock() {
        setInterval(() => {
            console.log('Updating time...')
            this.setState({
                currentTime: new Date().toString(),
            })
        }, 1000)
    }
    render() {
        console.log('Rendering')
        return (
            <div>
                <AnalogDisplay time={this.state.currentTime} />
                <DigitalDisplay time={this.state.currentTime} />
            </div>
        )
    }
}
