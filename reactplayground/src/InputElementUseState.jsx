import React, {useState} from 'react';

//Input Element using useState

const InputElementUseState = () => {
    const [inputText, setInputText] = useState("");
    const [inputListText, setInputList] = useState([]);
    return (
        <div>
            <input onChange={(e) => {
                setInputText(e.target.value)
                setInputList([...inputListText, e.target.value])
            }}/>
            <p>1.Simple Input Element</p>            
            <p>{inputText}</p>
            <hr /><br />
            <p>2.Input Elements Array</p>            
            <ul>
                {inputListText.map((ele) =>{
                    return <li>{ele}</li>
                })}
            </ul>
            <hr /><br />
            <p>What you learned: useState() allows you to manipulate the state of a react functional component just like</p>
        </div>
    );
};

export default InputElementUseState;