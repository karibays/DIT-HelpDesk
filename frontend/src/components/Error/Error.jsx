import "./Error.css";

const Error = ({ message, subMessage = "" }) => {
  return (
    <div>
      <h2 className="text-muted text-center fw-normal mt-4">{message}</h2>
      <h4 className="text-muted text-center fw-normal mt-3">{subMessage}</h4>
    </div>
  );
};

export default Error;
