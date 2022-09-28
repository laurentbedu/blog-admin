
function CustomMessageAlert({type, message, show=false}) {
    return ( <div class={`alert alert-${type} fade ${show?"show":""}`} role="alert">
        <strong>{message}</strong>
    </div> );
}

export default CustomMessageAlert;