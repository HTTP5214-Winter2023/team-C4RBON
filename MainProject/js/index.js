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
        var studentData = {
            name: studentName.value,
            number: studentNumber.value,
            email: studentEmail.value
        }

        arrayStudents.push(studentData);
        //console.log(arrayStudents);
        var namesArr = [];
        for(var i=0; i<arrayStudents.length; i++) {
            namesArr.push(arrayStudents[i]["name"]);
        }

        listOfStudents.innerHTML = "List of Students: " + namesArr.join(", ");
        document.getElementById("name").value = "";
        document.getElementById("number").value = "";
        document.getElementById("email").value = "";
    }

    document.getElementById("submitForm").onsubmit = submitForm;
    //var splitSize = document.getElementById("groupSize").value;

    function submitForm() {
        var groupsArr = studentSplitter(arrayStudents, document.getElementById("groupSize").value);
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

        return false;
    }

}