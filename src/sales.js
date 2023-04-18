const API_ENDPOINT = 'http://localhost/final_projects/william/resources/sales.php';

// Insert Endpoint
function insertSale(saleData) {
  const requestOptions = {
    method: 'POST',
    body: JSON.stringify(saleData),
    headers: { 'Content-Type': 'application/json' }
  };

  return fetch(API_ENDPOINT, requestOptions)
    .then(response => response.json())
    .catch(error => console.error('Error:', error));
}

// Update Endpoint
function updateSale(saleData) {
  const requestOptions = {
    method: 'PUT',
    body: JSON.stringify(saleData),
    headers: { 'Content-Type': 'application/json' }
  };

  return fetch(API_ENDPOINT, requestOptions)
    .then(response => response.json())
    .catch(error => console.error('Error:', error));
}

// Delete Endpoint
function deleteSale(saleId) {
  const requestOptions = {
    method: 'DELETE',
    body: JSON.stringify({ id: saleId }),
    headers: { 'Content-Type': 'application/json' }
  };

  return fetch(API_ENDPOINT, requestOptions)
    .then(response => response.json())
    .catch(error => console.error('Error:', error));
}

// Get by ID Endpoint
function getSaleById(saleId) {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  };

  return fetch(`${API_ENDPOINT}?id=${saleId}`, requestOptions)
    .then(response => response.json())
    .catch(error => console.error('Error:', error));
}

// Get all Endpoint
function getAllSales() {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  };

  return fetch(API_ENDPOINT, requestOptions)
    .then(response => response.json())
    .catch(error => console.error('Error:', error));
}





// // Insert a new sale
// const saleData = {
//     id: 1,
//     sales_receipt: '12345',
//     sales_type: 'online',
//     quantity: 10,
//     customer_name: 'John Doe',
//     customer_phone: '555-555-5555',
//     customer_address: '123 Main St.',
//     amount_paid: 100.00,
//     dispatch_id: 123,
//     quantity_return: 0,
//     quantity_replaced: 0,
//     date: '2023-04-08'
//   };
  
//   insertSale(saleData)
//     .then(data => console.log('Inserted sale:', data))
//     .catch(error => console.error('Error inserting sale:', error));
  
//   // Get a sale by ID
//   getSaleById(1)
//     .then(data => console.log('Sale with ID 1:', data))
//     .catch(error => console.error('Error getting sale:', error));
  
  // Get all sales
  // (data => console.log('All sales:', data))
  //   .catch(error => console.error('Error getting all sales:', error));
  
  // // Update a sale
  // const updatedSaleData = {
  //   id: 1,
  //   sales_receipt: '54321',
  //   sales_type: 'in-person',
  //   quantity: 5,
  //   customer_name: 'Jane Doe',
  //   customer_phone: '555-555-5556',
  //   customer_address: '456 Main St.',
  //   amount_paid: 50.00,
  //   dispatch_id: 456,
  //   quantity_return: 1,
  //   quantity_replaced: 2,
  //   date: '2023-04-09'
  // };
  
  // updateSale(updatedSale)
  