function sum() {
  let l1 = document.getElementById("val1").value; // Fixed ID here
  let l2 = document.getElementById("val2").value; // Fixed ID here
  let output = document.getElementById("result");

  output.innerHTML = "The Sum is " + parseInt(l1) + parseInt(l2);
}
