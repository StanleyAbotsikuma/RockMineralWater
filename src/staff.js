// configure the API endpoint URL
const apiUrl = 'http://your-api-url.com/staff.php';

// insert staff record function
async function insertStaffRecord(staffData) {
  try {
    const response = await fetch(`${apiUrl}?action=insert`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(staffData)
    });
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// update staff record function
async function updateStaffRecord(id, staffData) {
  try {
    const response = await fetch(`${apiUrl}?action=update`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id,
        ...staffData
      })
    });
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// delete staff record function
async function deleteStaffRecord(id) {
  try {
    const response = await fetch(`${apiUrl}?action=delete`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id })
    });
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// get single staff record function
async function getStaffRecord(id) {
  try {
    const response = await fetch(`${apiUrl}?action=get&id=${id}`);
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// get all staff records function
async function getAllStaffRecords() {
  try {
    const response = await fetch(`${apiUrl}?action=get_all`);
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error(error);
    throw error;
  }
}







// insert a new staff record
const staffData = {
    staff_id: '12345',
    staff_first_name: 'John',
    staff_last_name: 'Doe',
    staff_phone: '555-1234',
    staff_role: 'Manager',
    staff_password: 'password'
  };
  
  insertStaffRecord(staffData)
    .then(response => console.log(response))
    .catch(error => console.error(error));
  
  // update an existing staff record
  const updatedStaffData = {
    staff_id: '12345',
    staff_first_name: 'Jane',
    staff_last_name: 'Doe',
    staff_phone: '555-5678',
    staff_role: 'Supervisor',
    staff_password: 'new_password'
  };
  
  updateStaffRecord(1, updatedStaffData)
    .then(response => console.log(response))
    .catch(error => console.error(error));
  
  // delete a staff record
  deleteStaffRecord(1)
    .then(response => console.log(response))
    .catch(error => console.error(error));
  
  // get a single staff record
  getStaffRecord(1)
    .then(response => console.log(response))
    .catch(error => console.error(error));
  
  // get all staff records
  getAllStaffRecords()
    .then(response => console.log(response))
    .catch(error => console.error(error));
  