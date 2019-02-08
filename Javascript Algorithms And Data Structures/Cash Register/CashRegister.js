function checkCashRegister(price, cash, cid) {
  
  var tillStatus = {status: null, change: []};
  var change = cash - price;
  var tillValue = 0;

  for(let i = 0; i < cid.length; i++) { tillValue += cid[i][1]; };
  tillValue = Math.round(tillValue * 100) / 100

  var cashRegister = cid.reduce(function(acc, curr) {
    acc.total += curr[1];
    acc[curr[0]] = curr[1];
    return acc;
  }, {total: 0});

  if(tillValue === change) {
    tillStatus.status = "CLOSED";
    tillStatus.change = cid;
    return tillStatus;
  }

  if(tillValue < change) {
    tillStatus.status = "INSUFFICIENT_FUNDS";
    return tillStatus;
  }

  var arrayOfChange = cashValues.reduce(function(acc, curr) {
    var runningValue = 0;
    while (cashRegister[curr.name] > 0 && change >= curr.value) {
      change -= curr.value;
      cashRegister[curr.name] -= curr.value;
      runningValue += curr.value;
      change = Math.round(change * 100) / 100;
    }
    if (runningValue > 0) {
      acc.push([curr.name, runningValue]);
    }
    return acc; 
  }, []);

  console.log(arrayOfChange);

  if (arrayOfChange.length < 1 || change > 0) {
    tillStatus.status = 'INSUFFICIENT_FUNDS';
    return tillStatus;
  }

  tillStatus.status = 'OPEN';
  tillStatus.change = arrayOfChange;
  return tillStatus;
}

const cashValues = [
  { name: "ONE HUNDRED", value: 100.00 },
  { name: "TWENTY", value: 20.00 },
  { name: "TEN", value: 10.00 },
  { name: "FIVE", value: 5.00 },
  { name: "ONE", value: 1.00 },
  { name: "QUARTER", value: 0.25 },
  { name: "DIME", value: 0.10 },
  { name: "NICKEL", value: 0.05 },
  { name: "PENNY", value: 0.01 }
]

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));