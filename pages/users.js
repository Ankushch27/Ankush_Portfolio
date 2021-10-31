import axios from 'axios';
import User from '../components/user';

export const getStaticProps = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
  console.log(data);

  return {
    props: {
      users: data,
    },
  };
};
const UserList = ({ users }) => {
  return (
    <>
      <h1>List of users</h1>
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </>
  );
};

export default UserList;
