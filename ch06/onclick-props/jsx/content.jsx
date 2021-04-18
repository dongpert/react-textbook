class Content extends React.Component {
    constructor(props) {
        super(props)
        // constructor에서 Content 클래스의 인스턴스로 컨텍스트를 연결하여 this.setState()를 쓸 수 있게 한다.
        this.handleClick = this.handleClick.bind(this)
        this.state = { counter: 0 }
    }
    handleClick(event) {
        this.setState({ counter: ++this.state.counter })
    }
    render() {
        return (
            <div>
                <ClickCounterButton counter={this.state.counter} handler={this.handleClick} />
            </div>
        )
    }
}
