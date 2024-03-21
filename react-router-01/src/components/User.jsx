import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
const User = ({ dta }) => {
  const { name, email, id, website } = dta;
  // console.log(dta);
  const naviget = useNavigate();
  const showDetails = () => {
    naviget(`/user/${id}`);
  };
  return (
    <div className="border-2 border-yellow-500 mb-5 rounded-xl p-4 space-y-2">
      <h1 className="text-2xl font-bold">
        {id}- {name}
      </h1>
      <h2 className="text-xl">{email}</h2>
      <h2 className="text-lg pb-6 ">{website}</h2>
      <Link
        to={`/user/${id}`}
        className="py-2 px-8 bg-emerald-300 rounded-md font-bold"
      >
        Show Details
      </Link>
      <button
        className="bg-gray-500 px-5 py-2 rounded-lg font-bold text-white"
        onClick={showDetails}
      >
        {' '}
        Details
      </button>
    </div>
  );
};

User.propTypes = {
  dta: PropTypes.object,
};
export default User;
