var currentBill;
var john = {
    bill:[124,48,268,180,42]
    calcTip: function tipCalculator(currentBill){
    var percentage;
    
    if (bill < 50){
        percentage =.2;
    }
    }else if(bill >= 50 && bill =< 200){
         percentage =.15;
        
    }else if(bill>200){
         percentage =.1;
    }
    return percentage * bill;
    
}
for(var i = 0; i < john.bill.lenght; i++ ){
    console.log(john.calcTip(john.bill(i)))
}