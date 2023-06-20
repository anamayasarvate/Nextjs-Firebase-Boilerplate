import React from "react";

interface AlertProps {
  fieldName: string;
  isSubmitted: boolean;
}

const Alert: React.FC<AlertProps> = ({ isSubmitted, fieldName }) => {
  return (
    <>
      {isSubmitted && (
        <div className="alert alert-success container ml-auto mr-auto mt-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>You typed: {fieldName}</span>
        </div>
      )}
    </>
  );
};

export default Alert;
