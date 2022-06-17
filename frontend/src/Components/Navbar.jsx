

export const Navbar=()=>{
    return(
        <>
        <div >
        
        <div className="nav" style={{display:"flex"}}>
        <div className='h1c'><p>Covid Tracker App</p></div>
        <div className="navbar">
        <a className='innernav' href="/">
        Home
        </a>
        <a className='innernav' href="/signup">
        SignUp
        </a>
        <a className='innernav' href="/signin">
        LogIn
        </a>
        </div>
        </div>
        </div>
        </>
    )
}