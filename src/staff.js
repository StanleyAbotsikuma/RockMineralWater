// configure the API endpoint URL
const apiUrl = 'http://localhost/rock_mineral_water/staff.php';

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





