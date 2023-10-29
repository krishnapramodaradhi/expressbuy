import { FC } from 'hono/jsx'
import { User } from '../config/types'

const HomePage: FC<{ users: User[] }> = ({ users }) => (
  <ul>
    {users.map((user) => (
      <li>
        {user.email} - {user.age}
      </li>
    ))}
  </ul>
)

export default HomePage
