

function addStudent() {
  let name = document.getElementById("name").value;
  let marks = document.getElementById("marks").value;

  if (name === "" || marks === "") {
    alert("All fields required");
    return;
  }

  let student = {
    name: name,
    marks: marks
  };

  students.push(student);
  displayStudents();
}

function displayStudents() {
  let table = document.getElementById("studentTable");
  table.innerHTML = "";

  for (let i = 0; i < students.length; i++) {
    table.innerHTML +=
      "<tr><td>" + students[i].name + "</td><td>" + students[i].marks + "</td></tr>";
  }
}