
const passwordGenerator = () =>{
    let password = Math.random().toString(36).slice(2, 10)
    document.getElementById("generator").value = password

}

