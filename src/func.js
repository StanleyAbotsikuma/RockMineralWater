function ru() {

    fetch('http://localhost/final_projects/william/resources/sales.php?r=t', {
        method: 'GET',

        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(async response => {
            if (response.ok) {
                let res = await response.json();
                quantityReplaced(res);
                quantitySold(res);
                quantityReturned(res);
                amountSold(res);
            }
        })
        .catch(error => {
            console.error(error);
        });


}



function quantityLeft() {

}




function quantityReturned(res) {
    try {
        var _quantity_return = 0;
        for (let i in res) {
            _quantity_return = _quantity_return + res[i].quantity_return;
        }

        document.querySelector('#bags_return').innerHTML = _quantity_return;
        // console.log(_quantity_return);
    } catch (error) {
        console.log("Error");
    }
}


function amountSold(res) {
    try {
        var _amountSold = 0;
        for (let i in res) {
            _amountSold = _amountSold + res[i].amount_paid;
        }
        document.querySelector('#amount_sold').innerHTML = "₵ " + _amountSold;
        // console.log(_amountSold);
    } catch (error) {
        console.log("Error");
    }
}

function quantitySold(res) {
    try {
        var _quantitySold = 0;
        for (let i in res) {
            _quantitySold = _quantitySold + res[i].quantity;
        }

        document.querySelector('#bags_sold').innerHTML = _quantitySold;
        // console.log(_quantitySold);
    } catch (error) {
        console.log("Error");
    }
}



function quantityReplaced(res) {
    try {
        var _quantityReplaced = 0;
        for (let i in res) {
            _quantityReplaced = _quantityReplaced + res[i].quantity_replaced;
        }
        console.log(_quantityReplaced);
    } catch (error) {
        console.log("Error");
    }
}


let h = 0;
let g = 0;
const dayDetails = fetch('http://localhost/final_projects/william/resources/stock.php?r=t', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
})
    .then(response => {
        if (response.ok) {
            return response.json();
        }
    })
    .catch(error => {
        console.error(error);
    });


dayDetails.then((stock) => {

    try {
        g = stock[0].stock_current;
    h =  stock[0].stock_produced;
    } catch (error) {
        
    }
    
    document.querySelector('#bags_left').innerHTML = g;
    document.querySelector('#bags_produced').innerHTML = h;
     console.log(stock);
})

    //   console.log(dayDetails);

