class Button extends React.Component {
    render() {
        return <button className='btn'>{this.props.buttonLabel}</button>
    }
}

Button.defaultProps = { buttonLabel: 'Submit' }

Button.propTypes = {
    title: PropTypes.string
}
