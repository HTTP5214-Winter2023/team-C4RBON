window.onload = pageloaded;

function pageloaded() {
    var listOfStudents = document.getElementById("students-list");
    var addStudentBtn = document.getElementById("add-student");
    var arrayStudents = [];

    addStudentBtn.onclick = addStudent;

    function addStudent() {
        var studentName = document.getElementById("name");
        var studentNumber = document.getElementById("number");
        var studentEmail = document.getElementById("email");

        if (studentName.value === '' || studentNumber.value === '' || studentEmail.value === ''){
            alert('Pleasee fill all required field before adding.')
            return false;
        }
        var studentData = {
            name: studentName.value,
            number: studentNumber.value,
            email: studentEmail.value
        }

        arrayStudents.push(studentData);
        //console.log(arrayStudents);
        // var namesArr = [];
        lastStudent = arrayStudents[arrayStudents.length-1]
        displayData(lastStudent["name"], lastStudent["number"], lastStudent["email"])
  

        // listOfStudents.innerHTML = "List of Students: " + namesArr.join(", ");
        // document.getElementById("name").value = "";
        // document.getElementById("number").value = "";
        // document.getElementById("email").value = "";
    }

    document.getElementById("submitForm").onsubmit = submitForm;
    //var splitSize = document.getElementById("groupSize").value;

function displayData (sname, snumber, semail){

    tableBody = document.getElementById("studentData")

    var row = document.createElement("tr")
    var name = document.createElement("td")
    name.textContent = sname
    row.appendChild(name)

    var id = document.createElement("td")
    id.textContent = snumber
    row.append(id)

    var email = document.createElement("td")
    email.textContent = semail
    row.append(email)

    tableBody.appendChild(row)

}

function createTable(arr){
    parentElem = document.getElementById("groupList")
    var heads = ["Name", "Number", "Email"]

    var table = document.createElement("table")
    table.setAttribute("id", "students-list")

    var thead = document.createElement("thead")
    var tbody = document.createElement("tbody")
    tbody.setAttribute("id", "studentData")

    var headers = document.createElement("tr")

    heads.forEach((h) => {
        var th = document.createElement("th")
        th.textContent = h;
        headers.append(th);

    })

    thead.appendChild(headers)
    table.appendChild(thead)

    arr.forEach((i) =>{

        row = document.createElement("tr")
        
        nameCell = document.createElement("td")
        nameCell.textContent = i["name"]
        row.appendChild(nameCell)

        numberCell = document.createElement("td")
        numberCell.textContent = i.number
        row.appendChild(numberCell)

        emailCell = document.createElement("td")
        emailCell.textContent = i.email
        row.appendChild(emailCell)

        tbody.appendChild(row)

    })

    table.appendChild(tbody)
    parentElem.appendChild(table)
}


function submitForm() {
        parentElem = document.getElementById("groupList")
        parentElem.innerHTML = ''
        var groupsArr = studentSplitter(arrayStudents, document.getElementById("groupSize").value);
<<<<<<< HEAD
        //console.log(groupsArr);

        var groupsNamesArr = [];
        for(var i=0; i<groupsArr.length; i++) {
            var namesArr = [];
            for(var j=0; j<groupsArr[i].length; j++) {
                namesArr.push(groupsArr[i][j]["name"]);
            }
            groupsNamesArr.push("( " + namesArr.join(", ") + " )");
        }
        document.getElementById("groupList").innerHTML = "Groups List: " + groupsNamesArr.join(", ");

        //var table = document.getElementById("table");  // set this to your table
         // array containing the data to be displayed in the table
        

  // get a reference to the table body
  var tableBody = document.querySelector("#myTable tbody");

  // loop through the array and generate the HTML code for each row
  for (var i = 0; i < groupsNamesArr.length; i++) {
    var row = document.createElement("tr");

    // loop through the array again and generate the HTML code for each cell
    for (var j = 0; j < groupsNamesArr[i].length; j++) {
      var cell = document.createElement("td");
      var cellText = document.createTextNode(groupsNamesArr[i][j] || ""); // add an empty string for undefined values
      cell.appendChild(cellText);
      row.appendChild(cell);
    }

    tableBody.appendChild(row);
  }
=======
        groupsArr.forEach(element => {
            createTable(element)
        })
>>>>>>> 315b96b7671b03901472cf8c0920ed283bb51fe5

        return false;
    }}