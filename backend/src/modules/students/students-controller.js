const asyncHandler = require("express-async-handler");
const {findAllStudents, addOrUpdateStudent, findStudentDetail, findStudentToSetStatus} = require("./students-repository");

const handleGetAllStudents = asyncHandler(async (req, res) => {
    const { name, className, section, roll } = req.query;
    const students = await findAllStudents({ name, className, section, roll });
    res.json({ students });
});

const handleAddStudent = asyncHandler(async (req, res) => {
    const student = await addOrUpdateStudent(req.params);
    res.json(student);
});

const handleUpdateStudent = asyncHandler(async (req, res) => {
    const student = await addOrUpdateStudent(req.params);
    res.json(student);
});

const handleGetStudentDetail = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const student = await findStudentDetail(id);
    res.json(student);
});

const handleStudentStatus = asyncHandler(async (req, res) => {
    const { userId, reviewerId, status } = req.query;
    const studentStatus = await findStudentToSetStatus({ userId, reviewerId, status });
    res.json(studentStatus);
});

module.exports = {
    handleGetAllStudents,
    handleGetStudentDetail,
    handleAddStudent,
    handleStudentStatus,
    handleUpdateStudent,
};
