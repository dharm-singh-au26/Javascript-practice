


const calculateEmi = () =>{
    let amount = parseInt(document.getElementById("loan_amount").value)
    let rate = parseInt(document.getElementById("interest_rate").value)
    let month = parseInt(document.getElementById("months").value)

    let Emi = (amount*(100+rate)/100)/month

    document.getElementById("emi").value = Emi
}
