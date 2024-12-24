import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { Outlet, Link } from 'react-router';
import { Nav } from '~/components/ui/Nav';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className='flex flex-col gap-4 items-center'>
      <h1 className='font-bold'>My utilities app</h1>
      <Nav>
        <Link
          to="name-gen"
          className='underline cursor-pointer'
        >
          Name generator
        </Link>
        <Link
          to="whose-next"
          className='underline cursor-pointer'
        >
          Who is next?
        </Link>
        <Link
          to="calc"
          className='underline cursor-pointer'
        >
          Calculator
        </Link>
        <Link
          to="tasks"
          className='underline cursor-pointer'
        >
          Task Mgmt
        </Link>
        <Link
          to="users"
          className='underline cursor-pointer'
        >
          Users
        </Link>
      </Nav>
      <div>
        <Outlet />
      </div>
    </div>
  )
}
