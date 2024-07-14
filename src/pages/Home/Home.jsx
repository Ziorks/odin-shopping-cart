import FeaturedItems from "../../components/FeaturedItems";
import HomeBanner from "../../components/HomeBanner";

const Home = () => {
  return (
    <>
      <HomeBanner />
      <FeaturedItems itemIds={[5, 8, 14, 18]} />
    </>
  );
};

export default Home;
