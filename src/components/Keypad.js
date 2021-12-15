// Code Keypad Component Here
function Keypad () {

    function pWord () {
        return console.log('Entering password...')
    }

    return (
        <input type="password" onChange={pWord} />
    )
    
}

export default Keypad;