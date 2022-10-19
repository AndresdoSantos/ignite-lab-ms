/* eslint-disable @next/next/no-typos */
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";

export default function App() {
  const { user } = useUser();

  console.log(user);

  return (
    <div>
      <h1>Hello {user?.name}</h1>

      <a href="/api/auth/logout">Logout</a>
    </div>
  );
}

export const geServerSideProps = withPageAuthRequired();
