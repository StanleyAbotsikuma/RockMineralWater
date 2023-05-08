// Set the API endpoint URL
const API_URL = 'http://localhost/rock_mineral_water/dispatch.php';

// Retrieve all dispatch records
async function getDispatchRecords() {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
}

// Retrieve a specific dispatch record by ID
async function getDispatchRecordById(id) {
  const response = await fetch(`${API_URL}?id=${id}`);
  const data = await response.json();
  return data;
}

// Create a new dispatch record
async function createDispatchRecord(record) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(record)
  });
  const data = await response.json();
  return data;
}

// Update an existing dispatch record
async function updateDispatchRecord(id, record) {
  const response = await fetch(API_URL, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id: id,
      ...record
    })
  });
  const data = await response.json();
  return data;
}

// Delete an existing dispatch record
async function deleteDispatchRecord(id) {
  const response = await fetch(API_URL, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id: id
    })
  });
  const data = await response.json();
  return data;
}



