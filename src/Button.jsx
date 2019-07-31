import React from 'react';


class Button extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }


    addCount = () => {
        this.setState({
            counter: this.state.counter + 1
        });
    }

    render() {
        return (


            <button onClick={this.addCount} class={this.props.class}>
                {
                    (this.state.counter % 2 == 0) ? this.props.value + this.state.counter : this.props.value


                }</button>


        )
    }
}

export default Button;