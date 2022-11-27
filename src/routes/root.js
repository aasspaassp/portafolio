import { Outlet, Link } from "react-router-dom";


export default function Root() {
  return (
    <>
      <div id="sidebar">
        <h1>Andrés G.A.</h1>
        <div>
          
          <form method="post">
            <button><Link to={`/contact/`}>Contact</Link></button>
          </form>
        </div>
        <nav>
          <ul>
            <li>
              <Link to={`/about/`}>About me</Link>
            </li>
            <li>
              <Link to={`/projects/`}>Projects</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
      <Outlet />
   
    
      </div>
      
      
    </>
  );
}