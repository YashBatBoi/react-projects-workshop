import React, { useEffect } from "react";

const Alert = ({ message, type, list, removeAlert }) => {
  useEffect(() => {
    const timeOut = setTimeout(() => {
      removeAlert(false, "", "");
      return () => clearTimeout(timeOut);
    }, 1500);
  }, [list]);

  return <p className={`alert alert-${type}`}>{message}</p>;
};

export default Alert;
