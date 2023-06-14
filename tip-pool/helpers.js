
// accepts 'tipAmt', 'billAmt', 'tipPercent' and sums total from allPayments objects
function sumPaymentTotal(type) {
  let total = 0; 

  for (let key in allPayments) {
    let payment = allPayments[key]; 

    total += Number(payment[type]);
  }

  return total;
}

// converts the bill and tip amount into a tip percent
function calculateTipPercent(billAmt, tipAmt) {
  return Math.round(100 / (billAmt / tipAmt));
}

// expects a table row element, appends a newly created td element from the value
function appendTd(tr, value) {
  let newTd = document.createElement('td');
  newTd.innerText = value;

  tr.append(newTd);
}
//these functions are from the solution
//we are appending a delete button that will erase all servers from the allServers object
function appendDeleteBtn(tr,type) {
  //for type we will be inputing 'payment', and 'servers'
  let td = document.createElement('td');
  //we are creating a td for the deleteBtn
  td.innerText = 'X';

  td.addEventListener('click', removeEle);
  tr.append(td);
}

function removeEle(evt) {
  let ele = evt.target.closest('tr');
//whenever the deleteBtn is clicked the tr containing the td will be deleted

  delete allServers[ele.id];
//this deletes the td inside of the deleted tr
  ele.parentNode.removeChild(ele);
  updateServerTable()
}