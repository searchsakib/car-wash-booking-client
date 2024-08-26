import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div
      className='hero w-full h-[740px] mb-20'
      style={{
        backgroundImage: 'url(/images/car-wash-3.jpg)',
      }}
    >
      <div>
        <div className='hero-content text-center text-neutral-content '>
          <div>
            <h1 className='text-3xl lg:text-8xl font-bold pb-3 font-serif bg-gradient-to-r from-lime-200 to-green-100 bg-clip-text text-transparent'>
              Affordable & Fast Car Wash
            </h1>
            <h2 className='text-xs lg:text-2xl font-semibold font-serif'>
              Best for your pocket and time!
            </h2>
          </div>
        </div>

        <div className='text-center'>
          <Link to='/'>
            <button className='btn rounded-none border-none btn-lg my-10 outline outline-lime-300 hover:outline-lime-500 bg-white hover:bg-lime-100'>
              Book a Wash
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
