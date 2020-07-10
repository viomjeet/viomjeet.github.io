class Getyear extends React.Component {
    state = { date: new Date() }
    render() {
        const { date } = this.state;
        console.log(date)
        return (
            <em>{date.getFullYear()}</em>
        )
    }
}
ReactDOM.render(<Getyear />, document.getElementById('date'))