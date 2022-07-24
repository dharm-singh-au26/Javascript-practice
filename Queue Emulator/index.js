arr = []

const add = () => {
    let a = document.getElementById("element").value
    arr.push(a)
    document.getElementById("stored_item").innerHTML = arr
}

const remove = () =>{
    arr.shift()
    document.getElementById("stored_item").innerHTML = arr
}