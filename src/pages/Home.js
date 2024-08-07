import Hero from "../Components/Hero";
import Special from "../Components/Special";
import brus from "../images/specials/bruschetta.jpg";
import greek from "../images/specials/greekSalad.jpg";
import dessert from "../images/specials/dessert.jpg";
import Testimonials from "../Components/Testimonials";

const data = [
  {
    name: "Veggie Salad",
    price: "$4.99",
    image: greek,
    description: "Lettuce, peppers, onions, cucumbers, and tomatoes with a lemon vinaigrette.",
  },
  {
    name: "Caprese Salad",
    price: "$6.99",
    image: brus,
    description: "Fresh mozzarella, tomatoes, and basil drizzled with balsamic glaze.",
  },
  {
    name: "Little Lemon Special",
    price: "$8.99",
    image: dessert,
    description: "Homemade baklava with a scoop of vanilla ice cream.",
  },
];

const Home = () => {
  return (
    <>
      <Hero />
      <Special data={data} />
      <Testimonials />
    </>
  );
};

export default Home;
