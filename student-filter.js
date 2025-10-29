let students = [
  { name: "Anna", grade: 9 },
  { name: "Mārtiņš", grade: 6 },
  { name: "Elīna", grade: 8 }
];

//Write a function getPassingStudents(students) that returns only those with a grade ≥ 7.

function getPassingStudents (students) 
{
    let passingStudents = []
    for (let i = 0; i < students.length; i++) 
        {
            if (students[i].grade >= 7) 
                {
                     passingStudents = passingStudents + "Name: " + students[i].name + ", Grade: " + students[i].grade + "; "
                }
        }

        return passingStudents
};

console.log(getPassingStudents(students));

