import { useLoaderData } from 'react-router-dom';
import User from './User';

const Users = () => {
  const users = useLoaderData();
  //   console.log(users);
  return (
    <div>
      <h1>User Section</h1>
      <h1>Total Users: {users.length}</h1>
      <div className="grid grid-cols-4 gap-7">
        {users.map((dta, i) => (
          <User key={i} dta={dta} />
        ))}
      </div>
    </div>
  );
};

export default Users;
