function studentSplitter(students, size) {
  const shuffleStudents = students.sort(() => Math.random() - 0.5); // Shuffle the students randomly
  size = parseInt(size);
  const groups = [];
  for(var i=0; i<shuffleStudents.length; i+=size) {
    groups.push(shuffleStudents.slice(i, i + size));
  }
  return groups;
}



