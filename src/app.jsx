import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Play } from './play/play';
import { Scores } from './scores/scores';
import { About } from './about/about';

// RPH Version 1
// export default function App() {
//   return <div className='body bg-dark text-light'>App will display here</div>;
// }


// // RPH
// import Button from 'react-bootstrap/Button';

// export function NavButton({ text, url }) {
//   const navigate = useNavigate();
//   return (
//     <Button variant='primary' onClick={() => navigate({ url })}>
//       {text}
//     </Button>
//   );
// }

// RPH Version 2 Create App component
// export default function App() {
//   return (
//     <div className='body bg-dark text-light'>
//       <header className='container-fluid'>
//         <nav className='navbar fixed-top navbar-dark'>
//           <div className='navbar-brand'>
//             Simon<sup>&reg;</sup>
//           </div>
//           <menu className='navbar-nav'>
//             <li className='nav-item'>
//               <a className='nav-link' href='index.html'>
//                 Home
//               </a>
//             </li>
//             <li className='nav-item'>
//               <a className='nav-link' href='play.html'>
//                 Play
//               </a>
//             </li>
//             <li className='nav-item'>
//               <a className='nav-link' href='scores.html'>
//                 Scores
//               </a>
//             </li>
//             <li className='nav-item'>
//               <a className='nav-link' href='about.html'>
//                 About
//               </a>
//             </li>
//           </menu>
//         </nav>
//       </header>

//       <main>App components go here</main>

//       <footer className='bg-dark text-white-50'>
//         <div className='container-fluid'>
//           <span className='text-reset'>Author Name(s)</span>
//           <a className='text-reset' href='https://github.com/webprogramming260/simon-react'>
//             Source
//           </a>
//         </div>
//       </footer>
//     </div>
//   );
// }

// RPH Version 3 Create the router
export default function App() {
  return (
    <BrowserRouter>
      <div className='body bg-dark text-light'>
        <header className='container-fluid'>
          <nav className='navbar fixed-top navbar-dark'>
            <div className='navbar-brand'>
              Simon<sup>&reg;</sup>
            </div>
            <menu className='navbar-nav'>
              <li className='nav-item'>
                <NavLink className='nav-link' to=''>
                  Login
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='play'>
                  Play
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='scores'>
                  Scores
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='about'>
                  About
                </NavLink>
              </li>
            </menu>
          </nav>
        </header>

        {/* <main>App components go here</main> */}

        <Routes>
          <Route path='/' element={<Login />} exact />
          <Route path='/play' element={<Play />} />
          <Route path='/scores' element={<Scores />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

        <footer className='bg-dark text-white-50'>
          <div className='container-fluid'>
            <span className='text-reset'>Author Name(s)</span>
            <a className='text-reset' href='https://github.com/webprogramming260/simon-react'>
              Source
            </a>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

// the * (default matcher) was added to handle the case where an 
// unknown path is requested
function NotFound() {
  return <main className='container-fluid bg-secondary text-center'>
    404: Return to sender. Address unknown.</main>;
}