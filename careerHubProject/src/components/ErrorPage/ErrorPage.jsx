import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center text-center min-h-[300px] w-2/4 p-8 bg-red-400 rounded-2xl">
        <h1 className="text-4xl py-7 font-black">Opppppps !</h1>
        <Link to={'/'} className="btn px-10 bg-green-400">
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
