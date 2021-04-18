class Mouse extends React.Component {
    handleMouseOver(event) {
        console.log('mouse is over with event')
        window.e = event // 안티패턴
        console.dir(event.target)
        setTimeout(() => {
            console.table(event.target)
            console.table(window.e.target) // 기본적으로 이벤트를 비동기 콜백함수나 전역변수에 담아 사용할 수 없다.
        }, 2345)
    }
    render() {
        return (
            <div>
                <div style={{ border: '1px solid red' }} onMouseOver={this.handleMouseOver.bind(this)}>
                    Open DevTools and move your mouse cursor over here
                </div>
            </div>
        )
    }
}
