storage = {
  students: {
    1: {
      id: 1,
      name: "phil"
    },
    2: {
      id: 2,
      name: "dave"
    },
    3: {
      id: 3,
      name: "nikki"
    },
    4: {
      id: 4,
      name: "roland"
    },
    5: {
      id: 5,
      name: "jim"
    }
  }
};

function getStudents() {
  return storage.students;
}

function getStudentById(studentId) {
  return storage.students[studentId];
}

function addNewStudent(studentName) {
    const nextStudentID = Object.values(storage.students).length + 1;
    storage.students[nextStudentID] = {
        id: nextStudentID,
        name: studentName
    };
    return getStudentById(nextStudentID);
}

function updateStudent(studentID, object) {
    storage.students[studentID] = object;
    return getStudentById(studentID)
}

function patchStudentInfo(studentID, prop) {
    const newObj = Object.assign({}, storage.students[studentID], prop);
    storage.students[studentID] = newObj;
    return getStudentById(studentID);
}

function deleteStudent(studentID) {
    if (storage.students[studentID]) {
        delete storage.students[studentID];
        return true
    }
    return false
}

module.exports = {
  getStudents,
  getStudentById,
  addNewStudent,
  updateStudent,
  patchStudentInfo,
  deleteStudent
};
