import { GetServerSideProps } from "next";

const Menu = () => {
  return (
    <div>Menu {}</div>
  )
}

export const getServerSideProps = (async (context) => {
  const {loggedIn} = context.query;
  const isSignedIn = loggedIn === 'true';
  return {props: {isSignedIn}};
}) satisfies GetServerSideProps<{
  isSignedIn: boolean
}>

export default Menu
