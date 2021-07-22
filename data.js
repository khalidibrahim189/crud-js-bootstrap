selectedRow = null;

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);

        resetForm();
    }
}


function readFormData() {
    var formData = {};

    formData['fullName'] = document.getElementById('fullName').value;
    formData['email'] = document.getElementById('email').value;

    return formData;
}


function insertNewRecord(data) {
    var table = document.getElementById('employeeList').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.email;
    cell2 = newRow.insertCell(2);
    cell2.innerHTML = `<button class="btn btn-warning" onClick="onEdit(this)">Edit</button>
                     <button class="btn btn-danger" onClick="onDelete(this)">Hapus</button>`;
}


function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("email").value = "";
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("email").value = selectedRow.cells[1].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.email;
}

function onDelete(td) {
    if (confirm('Apakah ingin dihapus?')) {
        row = td.parentElement.parentElement;
        document.getElementById('employeeList').deleteRow(row.rowIndex);
        resetForm();
    }
}

function validate() {
    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        document.getElementById("fullNameValidationError").classList.contains("hide")
        document.getElementById("fullNameValidationError").classList.add("hide")
    }

    return isValid;
}