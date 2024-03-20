import PropTypes from 'prop-types';
const User = ({ dta }) => {
  const { name, email, id, website } = dta;
  console.log(dta);
  return (
    <div
      style={{
        border: '2px solid hotpink',
        margin: '0 0 10px 0',
        textAlign: 'center',
      }}
    >
      <h1>
        {id}- {name}
      </h1>
      <h2>{email}</h2>
      <h2>{website}</h2>
    </div>
  );
};

User.propTypes = {
  dta: PropTypes.object,
};
export default User;
