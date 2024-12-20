import UserList from '~/components/UserList';
import UsersTable from '~/components/UsersTable';

export default function Users() {
  return (
    <div>
      <UsersTable />
      <UserList />
    </div>
  );
}