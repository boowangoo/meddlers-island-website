import Link from "next/link"

const Navbar =  () => {
  return (
    <nav>
      hello
      <Link href='/menu'>Menu</Link>
      {
        true ? (
          <>
            <Link href='/sign-in'>Sign In</Link>
            <Link href='/sign-up'>Sign Up</Link>
          </>
        ) : (
          <Link href='/sign-out'>Signed Out</Link>
        )
      }
    </nav>
  )
}

export default Navbar