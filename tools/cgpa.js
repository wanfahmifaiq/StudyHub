// =========================
// StudyHub CGPA Calculator
// Part 3A
// =========================

let semesterCount = 0;

const gradePoints = {
    "A+":4.00,
    "A":4.00,
    "A-":3.67,
    "B+":3.33,
    "B":3.00,
    "B-":2.67,
    "C+":2.33,
    "C":2.00,
    "C-":1.67,
    "D+":1.33,
    "D":1.00,
    "F":0.00
};

// Create first semester automatically
window.onload = function () {
    addSemester();
};

function addSemester(){

    semesterCount++;

    const container =
    document.getElementById("semesterContainer");

    const semester =
    document.createElement("div");

    semester.className = "semester";
    semester.id = "semester" + semesterCount;

    semester.innerHTML = `

<div class="semester-header">

<h2>Semester ${semesterCount}</h2>

<button
class="delete-btn"
onclick="deleteSemester(${semesterCount})">
Delete Semester
</button>

</div>

<table class="subject-table">

<thead>

<tr>

<th>Subject</th>

<th>Grade</th>

<th>Credit</th>

<th></th>

</tr>

</thead>

<tbody id="body${semesterCount}">

</tbody>

</table>

<button
class="add-subject"
onclick="addSubject(${semesterCount})">

+ Add Subject

</button>

<div
class="semester-gpa"
id="gpa${semesterCount}">

Semester GPA : 0.00

</div>

`;

    container.appendChild(semester);

    addSubject(semesterCount);

}

function deleteSemester(id){

    const semester =
    document.getElementById("semester"+id);

    if(semester){

        semester.remove();

    }

}

function addSubject(id){

    const body =
    document.getElementById("body"+id);

    const row =
    document.createElement("tr");

    row.innerHTML = `

<td>

<input
type="text"
placeholder="Subject Name">

</td>

<td>

<select>

<option>A+</option>
<option>A</option>
<option>A-</option>
<option>B+</option>
<option>B</option>
<option>B-</option>
<option>C+</option>
<option>C</option>
<option>C-</option>
<option>D+</option>
<option>D</option>
<option>F</option>

</select>

</td>

<td>

<input
type="number"
min="0"
step="0.5"
placeholder="3">

</td>

<td>

<button
class="delete-btn"
onclick="deleteSubject(this)">

✖

</button>

</td>

`;

    body.appendChild(row);

}

function deleteSubject(button){

    button.parentElement.parentElement.remove();

}

// ----------
// Part 3B (Calculation) will be added next
// ----------


// ===============================
// PART 3B - GPA & CGPA Calculation
// ===============================

function calculateCGPA(){

    let totalGradePoints = 0;
    let totalCredits = 0;

    const semesters =
    document.querySelectorAll(".semester");

    semesters.forEach(function(semester){

        const rows =
        semester.querySelectorAll("tbody tr");

        let semesterPoints = 0;
        let semesterCredits = 0;

        rows.forEach(function(row){

            const grade =
            row.querySelector("select").value;

            const credit =
            parseFloat(
                row.querySelector('input[type="number"]').value
            );

            if(!isNaN(credit) && credit > 0){

                semesterPoints +=
                gradePoints[grade] * credit;

                semesterCredits += credit;

            }

        });

        let semesterGPA = 0;

        if(semesterCredits > 0){

            semesterGPA =
            semesterPoints / semesterCredits;

        }

        semester.querySelector(".semester-gpa").innerHTML =
        "Semester GPA : <strong>" +
        semesterGPA.toFixed(2) +
        "</strong>";

        totalGradePoints += semesterPoints;
        totalCredits += semesterCredits;

    });

    let cgpa = 0;

    if(totalCredits > 0){

        cgpa =
        totalGradePoints / totalCredits;

    }

    document.getElementById("cgpaResult").innerHTML =
    "CGPA : <strong>" +
    cgpa.toFixed(2) +
    "</strong>";

}