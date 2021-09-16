import React from 'react'


 function Alert(props) {
    const capitalize=(word)=>{
        const lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <div style={{height:'50px'}}>
           { props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible d-flex fade show`} role="alert">
                <b>{capitalize(props.alert.type)}</b>:{props.alert.msg}
            </div> }
        </div>
    )
}
export default Alert