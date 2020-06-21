import React, { Component } from 'react';


//Input Element using class components

class InputElementClass extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputText: '',
            inputListText: [],
            showComponent: false
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

    onButtonClick() {
        let { showComponent } = this.state;
        this.setState({
            showComponent: !showComponent,
            inputText: "",
            inputListText: []
        });
    }


    render() {
        let { inputText, inputListText, showComponent } = this.state;
        let buttonText = showComponent ? "Hide Component" : "Show Component";
        return (
            <div>
                <button type="button" style={{ "marginBottom": "10px" }} className="btn btn-primary" onClick={(e) => { this.onButtonClick(e.target.value) }}>{buttonText}</button>
                {showComponent &&
                    <div>
                        <input onChange={(e) => {
                            this.setInputText(e.target.value)
                        }} />
                        <div className="row">
                            <div className="col-sm">
                                <p>1.Simple Input Element</p>
                                <p>{inputText}</p>
                            </div>
                            <div className="col-sm">
                                <p>2.Input Elements Array</p>
                                <ul>
                                    {inputListText.map((ele) => {
                                        return <li>{ele}</li>
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                }
                <p>What you learned: class components add more code for the same thing and may complicate the components</p>
                <hr /><br />
            </div>
        );
    }
}

export default InputElementClass;