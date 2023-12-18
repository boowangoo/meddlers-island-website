// import { GetServerSideProps } from 'next';

const Home = () => {
  return (
    <div>
      hello world
    </div>
  )
}

// export const getServerSideProps = (async (context) => {
//   const {loggedIn} = context.query;
//   const isSignedIn = loggedIn === 'true';
//   return {props: {isSignedIn}};
// }) satisfies GetServerSideProps<{
//   isSignedIn: boolean
// }>

export default Home