import React from 'react'
import ReactDOM from 'react-dom'
import Rose from './img/rose.jpg'
import './index.css'

console.log('webpack live reload is working')

class App extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.onClick = this.onClick.bind(this);
    //     this.state = {
    //         reset: 'yes'
    //     }
    // }
    // onClick () {
    //     this.setState({
    //         reset: this.state.reset === 'yes' ? 'no' : 'yes'
    //     })
    // }
    state = {
        reset: 'yes'
    }
    onClick = () => {
        this.setState({
            reset: this.state.reset === 'yes' ? 'no' : 'yes'
        })
    }
    render () {
        return (
            <div><img src={Rose} alt='玫瑰' className={this.state.reset === 'yes' ? 'flower' : 'flower flower--rotate'} onClick={this.onClick} /></div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
