
// Data Insert and Display part start here
function empForm(event) {
    event.preventDefault();
  
    const id = document.getElementById("id").value;
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const contact = document.getElementById("contact").value;
    const address = document.getElementById("address").value;
  
    const employeeObj = {
      E_Id: id,
      Name: name,
      Email: email,
      Contact: contact,
      Address: address
    }
  
    localStorage.setItem(id, JSON.stringify(employeeObj));
    alert("Record submitted successfully");
  
    document.getElementById("id").value = '';
    document.getElementById("name").value = '';
    document.getElementById("email").value = '';
    document.getElementById("contact").value = '';
    document.getElementById("address").value = '';
  
    displayEmployeeList();
  }
  
  function displayEmployeeList() {
    const employeeTable = document.getElementById('employeeList');
    employeeTable.innerHTML = "";
  
    for (let i = 0; i < localStorage.length; i++) {
      const employeeKey = localStorage.key(i);
      const employeeData = JSON.parse(localStorage.getItem(employeeKey));
  
      const tableData = document.createElement('tr');
      tableData.innerHTML = `
              <td>${employeeData.E_Id}</td>
              <td>${employeeData.Name}</td>
              <td>${employeeData.Email}</td>
              <td>${employeeData.Contact}</td>
              <td>${employeeData.Address}</td>
              <td>
                  <button class="icon-btn edit-btn" onclick = employeeRecordEdit('${employeeData.E_Id}')><i class="fa-regular fa-pen-to-square"></i></button>
                  <button class="icon-btn delete-btn" onclick = deleteEmployeeRecord('${employeeData.E_Id}')><i class="fa-solid fa-trash"></i></button>
              </td>
          `;
          employeeTable.append(tableData);
    }
  }
  
  function pageLoading() {
    displayEmployeeList();
  }
  
  window.onload = pageLoading();
  // Data Insert and Display part end here
  
  // Data Delete part start here
  function deleteEmployeeRecord(employeeId) {
    localStorage.removeItem(employeeId);
    displayEmployeeList();
  }
  // Data Delete part end here
  
  
  // Data edit part start here
  let editEmployeeData = false;
  function employeeRecordEdit(employeeId) {
    const employeeData = JSON.parse(localStorage.getItem(employeeId));
  
    document.getElementById("id").value = employeeData.E_Id;
    document.getElementById("name").value = employeeData.Name;
    document.getElementById("email").value = employeeData.Email;
    document.getElementById("contact").value = employeeData.Contact;
    document.getElementById("address").value = employeeData.Address;
  
    document.getElementById("id").disabled = true;
  
    editEmployeeData = true;
    const editEmployeeId = employeeId;
  }
  // Data edit part end here
  