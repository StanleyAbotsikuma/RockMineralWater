

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

// ru();


function quantityLeft() {

}




function quantityReturned(res) {
    try {
        var _quantity_return = 0;
        for (let i in res) {
            _quantity_return = _quantity_return + res[i].quantity_return;
        }
        console.log(_quantity_return);
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
        console.log(_amountSold);
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
        console.log(_quantitySold);
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


const dayDetails =  fetch('http://localhost/final_projects/william/resources/stock.php?r=t', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then( response => {
            if (response.ok) {
              return  response.json();
            }
        })
        .catch(error => {
            console.error(error);
        });


    //   console.log(dayDetails);

