import Banner from '@/components/Banner/Banner';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <div className='overflow-hidden text-3xl text-white'>
      <Helmet>
        <title>Car Wash | Home</title>
      </Helmet>
      <div>
        <Banner></Banner>
      </div>
    </div>
  );
};

export default Home;
