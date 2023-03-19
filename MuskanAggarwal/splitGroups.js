function studentSplitter(students, size) {
  const shuffleStudents = students.sort(() => Math.random() - 0.5); // Shuffle the students randomly
  const groups = [];
  let i = 0;
  while (i < shuffleStudents.length) {
    groups.push(shuffleStudents.slice(i, i + size));
    i += size;
  }
  console.log(groups);
  return groups;
}