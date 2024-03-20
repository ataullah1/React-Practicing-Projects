import PropTypes from 'prop-types';
const User = ({ dta }) => {
  console.log(dta);
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

User.propTypes = {
  dta: PropTypes.object,
};
export default User;
