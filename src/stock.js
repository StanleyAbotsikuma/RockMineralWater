const BASE_URL = 'http://localhost/final_projects/william/resources/stock.php';

async function insertStockRecord(id, stock_id, stock_current, stock_previous, stock_produced, date) {
  const response = await fetch(`${BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id,
      stock_id,
      stock_current,
      stock_previous,
      stock_produced,
      date,
    }),
  });
  const data = await response.json();
  return data;
}

async function updateStockRecord(id, stock_id, stock_current, stock_previous, stock_produced, date) {
  const response = await fetch(`${BASE_URL}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id,
      stock_id,
      stock_current,
      stock_previous,
      stock_produced,
      date,
    }),
  });
  const data = await response.json();
  return data;
}

async function deleteStockRecord(id) {
  const response = await fetch(`${BASE_URL}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id,
    }),
  });
  const data = await response.json();
  return data;
}

async function getAllStockRecords() {
  const response = await fetch(`${BASE_URL}`);
  const data = await response.json();
  return data;
}

async function getStockRecordById(id) {
  const response = await fetch(`${BASE_URL}?id=${id}`);
  const data = await response.json();
  return data;
}







// Insert a new stock record
insertStockRecord(5, 1001, 10, 5, 5, '2023-04-08')
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Update an existing stock record
updateStockRecord(5, 1001, 15, 5, 10, '2023-04-08')
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Delete a stock record
deleteStockRecord(1)
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Get all stock records
getAllStockRecords()
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Get a stock record by ID
getStockRecordById(1)
  .then(data => console.log(data))
  .catch(error => console.error(error));
