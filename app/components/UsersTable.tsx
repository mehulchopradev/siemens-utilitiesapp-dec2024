import withUsers from './withUsers';
import type { User } from '~/types/user';

type UsersTableProps = {
  users: User[];
}

function UsersTable(props: UsersTableProps) {
  return (
    <div className='flex flex-col gap-4 items-center'>
      <h2>Users table view</h2>
      <table className="border-collapse border border-gray-400">
        <thead>
          <tr>
            <th className="border border-gray-400 p-4">Name</th>
            <th className="border border-gray-400 p-4">Email</th>
            <th className="border border-gray-400 p-4">Phone</th>
            <th className="border border-gray-400 p-4">Website</th>
          </tr>
        </thead>
        <tbody>
          {props.users.map((user: User) => (
            <tr key={user.id}>
              <td className="border border-gray-400 p-4">{user.name}</td>
              <td className="border border-gray-400 p-4">{user.email}</td>
              <td className="border border-gray-400 p-4">{user.phone}</td>
              <td className="border border-gray-400 p-4">{user.website}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default withUsers(UsersTable);