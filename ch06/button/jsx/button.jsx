class SaveButton extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.handleSave = this.handleSave.bind(this)
    // }
    handleSave(event) {
        console.log(this, event)
    }
    render() {
        return (
            <div>
                <button onClick={this.handleSave.bind(this)}>Save</button>
                {/* <button onClick={this.handleSave}>Save</button> */}
            </div>
        )
    }
}
