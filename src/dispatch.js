// Set the API endpoint URL
const API_URL = 'https://yourdomain.com/api.php';

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





// Retrieve all dispatch records
getDispatchRecords().then(data => {
    console.log(data);
  });
  
  // Retrieve a specific dispatch record by ID
  getDispatchRecordById(1).then(data => {
    console.log(data);
  });
  
  // Create a new dispatch record
  const record = {
    dispatch_id: 'D1234',
    first_name: 'John',
    last_name: 'Doe',
    phone_number: '123-456-7890',
    bike_number_plate: 'AB-1234',
    riders_license: '1234567',
    date_created: '2023-04-08 12:00:00'
  };
  createDispatchRecord(record).then(data => {
    console.log(data);
  });
  
  // Update an existing dispatch record
  const updatedRecord = {
    dispatch_id: 'D5678',
    first_name: 'Jane',
    last_name: 'Doe',
    phone_number: '555-555-5555',
    bike_number_plate: 'CD-5678',
    riders_license: '7654321',
    date_created: '2023-04-08 13:00:00'
  };
  updateDispatchRecord(1, updatedRecord).then(data => {
    console.log(data);
  });
  
  // Delete an existing dispatch record
  deleteDispatchRecord(1).then(data => {
    console.log(data);
  });
  