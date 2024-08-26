import { Link, NavLink } from 'react-router-dom';
import userPic from '/images/user.png';
import logo from '/images/logo.png';
import { useEffect, useState } from 'react';
import Container from '../ui/Container';
// import useAuth from '../../hooks/useAuth';

const Header = () => {
  // const { user, logOut } = useAuth();

  const activeColor =
    'font-bold border-b-[#EA3A36] border-2  border-t-0 border-r-0 border-l-0 rounded-none';

  const user = {
    displayName: 'kaka',
    photoURL: 'ggg',
  };
  const logOut = 'kaka';

  const [name, setName] = useState(null);
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    const delay = setTimeout(() => {
      if (user) {
        setName(user.displayName);
        setPhoto(user.photoURL);
      }
    }, 1100);

    return () => clearTimeout(delay);
  }, [user]);

  const handleSignOut = () => {
    setName(null);
    setPhoto(null);

    logOut().then().catch();
  };

  const links = (
    <>
      <li className='text-base font-medium md:pr-12 lg:pr-12 pb-4 md:pb-0 lg:pb-0'>
        <NavLink
          to='/'
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? activeColor : ''
          }
        >
          Home
        </NavLink>
      </li>

      <li className='text-base font-medium md:pr-12 lg:pr-12 pb-4 md:pb-0 lg:pb-0'>
        <NavLink
          to='/donation-requests'
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? activeColor : ''
          }
        >
          Services
        </NavLink>
      </li>

      <li className='text-base font-medium md:pr-12 lg:pr-12 pb-4 md:pb-0 lg:pb-0'>
        <NavLink
          to='/blog'
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? activeColor : ''
          }
        >
          Booking
        </NavLink>
      </li>

      <li className='text-base font-medium md:pr-6 lg:pr-6 pb-8 md:pb-0 lg:pb-0'>
        <NavLink
          to='/register'
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? activeColor : ''
          }
        >
          Dashboard
        </NavLink>
      </li>
    </>
  );

  return (
    <Container>
      <div className='flex flex-row-reverse xl:flex-row px-3 md:px-6 items-center justify-between max-w-screen-2xl mx-auto py-10'>
        <div>
          <Link to=''>
            <div className='flex items-center justify-center'>
              <div className='flex items-center'>
                <img className='max-w-40' src={logo} alt='' />{' '}
              </div>
            </div>
          </Link>
        </div>

        {/* Dropdown Start */}
        <div className='dropdown bg-red-50 outline outline-1 outline-red-600 rounded'>
          <label tabIndex={0} className='btn btn-ghost xl:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              viewBox='0 0 50 50'
              stroke='currentColor'
            >
              <path d='M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z'></path>
            </svg>
          </label>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded w-52 outline outline-1 bg-red-50  outline-red-600 text-[#EA3A36]'
          >
            {links}
            <div className='flex flex-col  items-center justify-center gap-3'>
              <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
                <div className='w-10 rounded-full'>
                  {photo ? <img src={photo} /> : <img src={userPic} />}
                </div>
              </label>
              {name && <p className='text-white'> {name} </p>}

              {user ? (
                <button
                  onClick={handleSignOut}
                  className='btn rounded-none hover:bg-sky-200 text-[#EA3A36] outline-none border-none'
                >
                  Log Out
                </button>
              ) : (
                <Link to='/login'>
                  <button className='btn rounded-none hover:bg-sky-200 text-black outline-none border-none'>
                    Login
                  </button>
                </Link>
              )}
            </div>
          </ul>
        </div>
        {/* Dropdown end */}

        {/* <div className="hidden xl:flex"> */}

        {/* </div> */}
        <div className='hidden xl:flex xl:flex-row items-center justify-center gap-3'>
          <div className='text-center mt-9 md:mt-0 lg:mt-0 '>
            <ul className=' md:flex lg:flex text-lg text-[#EA3A36]'>{links}</ul>
          </div>
          <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
            <div className='w-10 rounded-full'>
              {photo ? <img src={photo} /> : <img src={userPic} />}
            </div>
          </label>
          {name && <p className='text-white'> {name} </p>}

          {/* conditional rendering */}
          {user ? (
            <button
              onClick={handleSignOut}
              className='btn hover:bg-sky-200 text-[#EA3A36] outline-none border-none rounded-none'
            >
              Log Out
            </button>
          ) : (
            <Link to='/login'>
              <button className='btn hover:bg-sky-200 text-black outline-none border-none rounded-none'>
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Header;
