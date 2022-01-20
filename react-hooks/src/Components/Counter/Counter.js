function Counter() {
    let countNumber = 0

    function upCounter() {
        countNumber = countNumber + 1;
        document.getElementById("counter-box").innerHTML = countNumber;
    }

    function downCounter() {
        countNumber = countNumber - 1;
        document.getElementById("counter-box").innerHTML = countNumber;
    }
    return(
        <div>
            <h1 id= "counter-box">{countNumber}</h1>
            <button onClick={upCounter}>Aumentar</button>
            <button onClick={downCounter}>Diminuir</button>
            
        </div>
    )
}

export default Counter;