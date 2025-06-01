import React from "react";
import Avatar from "./Avatar";
import StudentInfo from "./StudentInfo";

const StudentCard = ({ student }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-4 w-full max-w-sm">
      <div className="flex flex-col items-center justify-center">
        <Avatar src={student.avatar} alt={student.name} />
        <h2 className="text-lg font-semibold text-blue-400">{student.name}</h2>

        <div>
        </div>
      </div>
      <div className="space-y-1">
        <StudentInfo label="Age" value={student.age} />
        <StudentInfo label="Course" value={student.course} />
        <StudentInfo label="Email" value={student.email} />
      </div>
    </div>
  );
};

export default StudentCard;
