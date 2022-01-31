import Link from "next/link";
import { useRouter } from "next/router";

function Navbar() {

const router = useRouter();
  const isActive=(route)=>{
    if(route==router.pathname){
      return "active"
    }else{
      return ""
    }

  }
  return <div >
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">LOGO</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/"><a className={'nav-link '+isActive('/')}  aria-current="page" >Home</a></Link>
            </li>
            <li className="nav-item">
              <Link href="/Signup"><a className={'nav-link '+isActive('/Signup')} aria-current="page" >Signup</a></Link>
            </li>
            <li className="nav-item">
              <Link href="/Signin"><a className={'nav-link '+isActive('/Signin')} aria-current="page" >Signin</a></Link>
            </li>
            <li className="nav-item">
              <Link href="/Create"><a className={'nav-link '+isActive('/Create')} aria-current="page" >Create</a></Link>
            </li>


          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  </div>;
}

export default Navbar;
