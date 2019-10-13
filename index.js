// import Hello from './Hello'
// import Goodbye from './Goodbye'

class App extends React.Component {
    render() {
        return (<div>
                
                <Hello />
                <Hello />
                <Goodbye />
            </div>)
    }
}

ReactDOM.render(<App />, document.getElementById('root'))


