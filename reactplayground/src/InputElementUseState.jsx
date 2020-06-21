import React, { useState } from 'react';

//Input Element using useState

const InputElementUseState = () => {
    const [inputText, setInputText] = useState("");
    const [inputListText, setInputList] = useState([]);
    const [showComponent, onButtonClick] = useState({ inputText: "", inputListText: [] }, false);
    //Clearing state is little tricky for statefull functional components. 
    const clearState = (showComponent) => {
        setInputList([]);
        setInputText("");
        onButtonClick(showComponent)
    };
    let buttonText = showComponent ? "Hide Component" : "Show Component";
    return (
        <div>
            <button type="primary" className="btn btn-primary" style={{ "marginBottom": "10px" }} onClick={() => { clearState(!showComponent) }}>{buttonText}</button>
            {showComponent &&
                <div>
                    <input onChange={(e) => {
                        setInputText(e.target.value)
                        setInputList([...inputListText, e.target.value])
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
            <p>What you learned: useState() allows you to manipulate the state of a react functional component just like setState function</p>
            <hr /><br />
        </div>
    );
};

export default InputElementUseState;