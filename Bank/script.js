function handelDposit() {
  // select input box , catch value and convert into string to float
  let inputamount = document.getElementById("input_value1").value;
  let deposit = parseFloat(inputamount);

  if (deposit <= 0 || isNaN(deposit)) {
    alert("Enter meaningfull amout!!!");
  } else {
    // select deposit box and set last deposit amount from input box
    document.getElementById("deposit_box").innerText = deposit;
    //   select total amount box and sum (total amount, last deposit)
    let total = document.getElementById("total_value").innerText;
    let float_total = parseFloat(total);
    document.getElementById("total_value").innerText = float_total + deposit;
  }

  //   finaly input box remove deposit value
  document.getElementById("input_value1").value = "";
}

function handelWithdraw() {
  // select input box , catch value and convert into string to float
  let inputvalue = document.getElementById("input_value2").value;
  let withdraw = parseFloat(inputvalue);

  //   select total amount box and sub (total amount, last withdraw)
  let total = document.getElementById("total_value").innerText;
  let float_total = parseFloat(total);
  if (float_total < withdraw) {
    alert("You have less balance in your amout");
  } else if (withdraw <= 0 || isNaN(withdraw)) {
    alert("Enter meaningfull amount");
  } else {
    // select withdraw box and set last wothdraw amount from input box
    document.getElementById("withdraw_box").innerText = withdraw;
    document.getElementById("total_value").innerText = float_total - withdraw;
  }

  //   finaly input box remove withdraw value
  document.getElementById("input_value2").value = "";
}
