class Radio extends React.Component {
    constructor(props) {
        super(props);
        this.handleResize = this.handleResize.bind(this);
        let order = props.order;
        let i = 1;
        // 스타일을 상태에 저장한다.
        this.state = {
            outerStyle: this.getStyle(4, i),
            innerStyle: this.getStyle(1, i),
            selectedStyle: this.getStyle(2, i),
            taggerStyle: { top: order * 20, width: 25, height: 25 }
        };
    }
    // 함수를 사용하여 변경되는 너비와 승수에 따라 여러 가지 스타일을 생성한다.
    getStyle(i, m) {
        let value = i * m;
        return {
            top: value,
            bottom: value,
            left: value,
            right: value
        };
    }
    componentDidMount() {
        // 미지원 window 이벤트 리스너를 등록한다.
        window.addEventListener('resize', this.handleResize);
    }
    componentWillUnmount() {
        // 미지원 window 이벤트 리스너를 제거한다.
        window.removeEventListener('resize', this.handleResize);
    }
    handleResize(event) {
        let w = 1 + Math.round(window.innerWidth / 300);
        this.setState({
            taggerStyle: { top: this.props.order * w * 10, width: w * 10, height: w * 10 },
            textStyle: { left: w * 13, fontSize: 7 * w }
        });
    }
    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'div',
                { className: 'radio-tagger', style: this.state.taggerStyle },
                React.createElement('input', { type: 'radio', name: this.props.name, id: this.props.id }),
                React.createElement(
                    'label',
                    { htmlFor: this.props.id },
                    React.createElement(
                        'div',
                        { className: 'radio-text', style: this.state.textStyle },
                        this.props.label
                    ),
                    React.createElement(
                        'div',
                        { className: 'radio-outer', style: this.state.outerStyle },
                        React.createElement(
                            'div',
                            { className: 'radio-inner', style: this.state.outerStyle },
                            React.createElement('div', { className: 'radio-selected', style: this.state.selectedStyle })
                        )
                    )
                )
            )
        );
    }
}