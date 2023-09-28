import Directory from "../../components/directory/Directory.component";
import "../../css/categories.stylesmin.css";
import { categories } from "../../data/categories";

const Home = () => {
  return <Directory categories={categories} />;
};

export default Home;
