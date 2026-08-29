import './navbar.css'

function Navbar(){
    return(
    <>
    <nav>
        <div className='nav-sec-1'>
            <img src="Logo_WHITE.png" alt="" />
            <h2> SALMUN'26</h2>
        </div>
        <div className='nav-sec-2'>
            <a href="">Home</a>
            <a href="">Applications</a>
            <a href="">Our Team</a>
            <a href="">Committees</a>
            <a href="">Conference</a>
            <a href="">Schedule</a>
            <a href="">FAQ</a>
        </div>
    </nav>
    </>
    )
}

export default Navbar