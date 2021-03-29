class Mouse extends React.Component {
    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'div',
                {
                    style: { boarder: '1px solid red' },
                    onMouseOverCapture: (event => {
                        console.log('mouse over on capture event');
                        console.dir(event, this);
                    }).bind(this),
                    style: { boarder: '1px solid red' },
                    onMouseOver: (event => {
                        console.log('mouse over on bubbling event');
                        console.dir(event, this);
                    }).bind(this) },
                'Open DevTools and move your mouse cursor over here'
            )
        );
    }
}