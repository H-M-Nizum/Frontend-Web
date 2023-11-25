// deposit section

document.getElementById("deposit_id").addEventListener("click", () => {
  // get deposit amount
  const deposit = document.getElementById("deposit_input").value;
  //   convert string to number
  const deposit_amount = parseFloat(deposit);

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
  document.getElementById("diposit_balance_id").innerText = `$${deposit_money}`;
  //   get total balance section
  const total_balance = document.getElementById("total_balance_id").innerText;
  // slice and convert to number
  let total_money = parseFloat(total_balance.slice(1, total_balance.length));
  // add deposit amount in total money
  total_money = total_money + deposit_amount;
  // update total balance section
  document.getElementById("total_balance_id").innerText = `$${total_money}`;

  console.log(deposit_money);
});
