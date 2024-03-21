import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div>
      <div>
        <h1>Opps, Sorry</h1>
        <Link to={"/"}>Go Home</Link>
      </div>
    </div>
  );
};

export default ErrorPage;
