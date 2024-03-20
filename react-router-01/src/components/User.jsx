import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const User = ({ dta }) => {
  const { name, email, id, website } = dta;
  console.log(dta);
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
    </div>
  );
};

User.propTypes = {
  dta: PropTypes.object,
};
export default User;
