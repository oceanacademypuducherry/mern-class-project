import React from "react";

const StudentInfo = ({ label, value }) => {
  return (
    <p className="text-sm">
      <strong>{label}:</strong> {value}
    </p>
  );
};

export default StudentInfo;
