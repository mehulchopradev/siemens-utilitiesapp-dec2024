import type { User } from '~/types/user';
import withUsers from './withUsers'

type UsersListProps = {
  users: User[];
}

function UserList(props: UsersListProps) {
  return (
    <div className='flex flex-col gap-4 items-center'>
      <h2>Users List view</h2>
      <ul>
        {props.users.map((user: User) => (
            <li key={user.id}>
              {user.name} | {user.email} | {user.phone}
            </li>
          ))}
      </ul>
    </div>
  )
}

export default withUsers(UserList);