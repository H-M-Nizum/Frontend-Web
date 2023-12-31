// deposit section

document.getElementById("deposit_id").addEventListener("click", () => {
  // get deposit amount
  const deposit = document.getElementById("deposit_input").value;
  //   convert string to number
  const deposit_amount = parseFloat(deposit);
  //   if user enter invalid amount show a alart else work system
  if (isNaN(deposit_amount) || deposit_amount <= 0) {
    alert("❌❌ Please Enter valid amount of deposit money");
  } else {
    // get deposit total balance
    const deposit_balance =
      document.getElementById("diposit_balance_id").innerText;
    // slice and convert number
    let deposit_money = parseFloat(
      deposit_balance.slice(1, deposit_balance.length)
    );
    // add new deposit amount in deposit money
    deposit_money = deposit_money + deposit_amount;
    //   update total deposit balance section
    document.getElementById(
      "diposit_balance_id"
    ).innerText = `$${deposit_money}`;
    //   get total balance section
    const total_balance = document.getElementById("total_balance_id").innerText;
    // slice and convert to number
    let total_money = parseFloat(total_balance.slice(1, total_balance.length));
    // add deposit amount in total money
    total_money = total_money + deposit_amount;
    // update total balance section
    document.getElementById("total_balance_id").innerText = `$${total_money}`;
  }
  // finaly input field set previous state or empty
  document.getElementById("deposit_input").value = "";
});

// Withdraw section

document.getElementById("withdraw_id").addEventListener("click", () => {
  // get withdraw amount
  const withdraw = document.getElementById("withdraw_input").value;
  //   convert string to number
  const withdraw_amount = parseFloat(withdraw);
  //   get total balance section
  const total_balance = document.getElementById("total_balance_id").innerText;
  // slice and convert to number
  let total_money = parseFloat(total_balance.slice(1, total_balance.length));
  //   if user enter invalid amount show a alart else work system
  if (
    isNaN(withdraw_amount) ||
    withdraw_amount <= 0 ||
    withdraw_amount > total_money
  ) {
    alert("❌❌ Please Enter valid amount of deposit money");
  } else {
    // get withdraw total balance
    const withdraw_balance = document.getElementById(
      "withdraw_balance_id"
    ).innerText;
    // slice and convert number
    let withdraw_money = parseFloat(
      withdraw_balance.slice(1, withdraw_balance.length)
    );
    // add new withdraw amount in withdraw money
    withdraw_money = withdraw_money + withdraw_amount;
    //   update total withdraw balance section
    document.getElementById(
      "withdraw_balance_id"
    ).innerText = `$${withdraw_money}`;

    // add withdraw amount in total money
    total_money = total_money - withdraw_amount;
    // update total balance section
    document.getElementById("total_balance_id").innerText = `$${total_money}`;
  }
  // finaly input field set previous state or empty
  document.getElementById("withdraw_input").value = "";
});
