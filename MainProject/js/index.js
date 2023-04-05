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

        var table = document.getElementById("table");  // set this to your table


        return false;
    }

}