import React from "react";
const ErrorCard = (isAlive, message) => {
  // unfortunately no time need to submit it now :(

  if (!isAlive) return null;
  return (
    // some cool styling could have been added
    <React.Fragment>
      <h1>Error</h1>
      <p>{message}</p>
    </React.Fragment>
  );
};

export default ErrorCard;
