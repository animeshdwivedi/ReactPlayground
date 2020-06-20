import React, { Component } from 'react';


//Input Element using class components

class InputElementClass extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputText: '',
            inputListText: []
        };
    }

    setInputText(value) {
        let { inputListText } = this.state;
        inputListText.push(value)
        this.setState({
            inputText: value,
            inputListText: inputListText
        });
    }


    render() {
        let { inputText, inputListText } = this.state;
        return (
            <div>
                <input onChange={(e) => {
                    this.setInputText(e.target.value)
                }} />
                <p>1.Simple Input Element</p>
                <p>{inputText}</p>
                <hr /><br />
                <p>2.Input Elements Array</p>
                <ul>
                    {inputListText.map((ele) => {
                        return <li>{ele}</li>
                    })}
                </ul>
                <hr /><br />
                <p>What you learned: class components add more code for the same thing and may complicate the components</p>
            </div>
        );
    }
}

export default InputElementClass;