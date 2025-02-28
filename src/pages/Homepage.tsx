import CategorySection from '../components/category/CategorySection';
import Recommendation from '../components/Recommendation';
import Slider from '../components/ui/Slider';

const Homepage = () => {
  return (
    <div>
      <Slider />
      <CategorySection />
      <Recommendation />
    </div>
  );
};

export default Homepage;
