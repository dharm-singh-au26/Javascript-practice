let arr = []

const addElement = () => {
    let a = document.getElementById("element").value
   arr.push(a)
   document.getElementById('stored_item').innerHTML = arr

}

const removeElement = () => {
    arr.pop()

   document.getElementById('stored_item').innerHTML = arr
    
}
