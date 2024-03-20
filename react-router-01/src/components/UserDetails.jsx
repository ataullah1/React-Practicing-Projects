import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {
  const user = useLoaderData();
  return (
    <div>
      <h1>Hello {user.name}</h1>
    </div>
  );
};

export default UserDetails;
