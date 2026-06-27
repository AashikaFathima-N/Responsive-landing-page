let total = 0;
let count = 0;

function addToCart(item, price){

    total += price;
    count++;

    document.getElementById("total").innerText = total;
    document.getElementById("count").innerText = count;

    alert(item + " added to cart!\nItems in Cart: " + count);
}

function submitOrder(event){

    event.preventDefault();

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;

    let methods = document.getElementsByName("pay");
    let payment = "";

    for(let i=0;i<methods.length;i++){
        if(methods[i].checked){
            payment = methods[i].value;
        }
    }

    if(payment==""){
        alert("Please select a payment method");
        return;
    }

    alert(
    "Thank You " + name +
    "\nOrder Placed Successfully!" +
    "\nPhone: " + phone +
    "\nAddress: " + address +
    "\nPayment: " + payment +
    "\nItems: " + count +
    "\nTotal: ₹" + total
);

    total = 0;
    count = 0;

    document.getElementById("total").innerText = total;
    document.getElementById("count").innerText = count;

    document.querySelector("form").reset();
}

const paymentOptions = document.getElementsByName("pay");

for(let option of paymentOptions){

    option.addEventListener("change", function(){

        document.getElementById("upiField").style.display = "none";
        document.getElementById("cardField").style.display = "none";

        if(this.value === "UPI"){
            document.getElementById("upiField").style.display = "block";
        }

        if(this.value === "Card"){
            document.getElementById("cardField").style.display = "block";
        }

    });

}