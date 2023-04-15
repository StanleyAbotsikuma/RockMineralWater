const { invoke } = window.__TAURI__.tauri;
window.addEventListener("DOMContentLoaded", () => {
  // window.eval("window.location.replace('index3.html')");
try {
  document.querySelector('#login_form').addEventListener("submit",  (e) => {
  
   
      
    e.preventDefault();
    
    // Get form inputs
    const username = document.getElementById('username_input').value;
    const password = document.getElementById('password_input').value;
    
    // Create object with form data
    const formData = {
      username,
      password,
    
    };
   
    
     fetch('http://localhost/final_projects/william/resources/login.php',  {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(async response => {
      if (response.ok) {
      const res = await response.json()
      try {
          if (res.data.staff_role =="admin")
          {invoke('admin_window');
              window.eval("window.location.replace('admin.html')");
          }  else if (res.data.staff_role =="staff")
          {
            invoke('staff_window');
              window.eval("window.location.replace('staff.html')");
          }
          else
          {
              console.log("worker");
          }
      } catch (error) {
          console.log("Error");
      }
       
      } 
    })
    .catch(error => {
      console.error(error);
    });
    
    
    // Reset form
    form.reset();
    });

 

 
} catch (error) {
  
}
});