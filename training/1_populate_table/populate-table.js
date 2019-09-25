/**
 * populateTable - takes array of objects and builds the table
 * |id|name|age|isWorkExperience|
 * |---|---|---|---|
 * |1|Andrii|21|yes|
 * |2|Anna|20|no|
 * |3|Marta|23|yes|
 * @example
 * const students = [
 * // {
 * //   id: 1,
 * //   name: 'Andrii',
 * //   age: 22,
 * //   isWorkExperience: true
 * // },
 * // {
 * //   id: 2,
 * //   name: 'Anna',
 * //   age: 21,
 * //   isWorkExperience: false
 * // },
 * // {
 * //   id: 3,
 * //   name: 'Marta',
 * //   age: 23,
 * //   isWorkExperience: true
 * // },
 * //];
 * populateTable(students);
 * @param {Array<Object>} students
 * @return {void}
 */
export function populateTable(students) {
  const table = document.createElement('table');
  document.body.appendChild(table);
  const thead = table.insertRow();
  const headers = Object.keys(students[0]);
  for (const header of headers) {
    const td = thead.insertCell();
    td.innerHTML = header;
  }
  for (const student of students) {
    const tr = table.insertRow();
    for (const prop in student) {
      if (student.hasOwnProperty(prop)) {
        const cell = tr.insertCell();
        if (prop === 'isWorkExperience') {
          cell.innerHTML = student[prop] ? 'yes' : 'no';
        } else {
          cell.innerHTML = student[prop];
        }
      }
    }
  }
}
