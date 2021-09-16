import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick=()=>
    {
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted To UpperCase","success")
    }
    const handleLowClick=()=>
    {
        
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted To LowerCase","success")
    }
    const handleClearClick=()=>
    {
        
        let newText=" ";
        setText(newText);
        props.showAlert("Text Cleared","success")
    }
    const handleCopy=()=>
    {
        let newText=document.getElementById("myBox");
        newText.select();
        navigator.clipboard.writeText(newText.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied To Clipboard","success")
    }
    const handleExtraSpaces=()=>
    {
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
       props.showAlert("Removed Extra Spaces","success")
         
    }
    
    const handleOnChange=(event)=>
    {
        setText(event.target.value);
    }
    const [text, setText] = useState('')
    
    return (
        <>
        <div className="container" >
            <h1 className="my-3">{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} style={{ backgroundColor : props.mode==='dark'?'#1E2C2F':'white',color : props.mode==='dark'?'white':'black'}} rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleUpClick}>Covert To UpperCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1"  onClick={handleLowClick}>Covert To LowerCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1"  onClick={handleClearClick}>Clear</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1"  onClick={handleCopy}>Copy</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1"  onClick={handleExtraSpaces}>Remove Extra Spaces</button>



        </div>
        <div className="container my-3">
            <h1>Your text Summary</h1>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} chracters</p>
            <p>{0.008* text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing To Preview!"}</p>
        </div>
        </>
    )
}
