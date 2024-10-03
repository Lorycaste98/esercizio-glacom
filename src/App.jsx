import Blogs from './components/Blogs';
import Cards from './components/Cards';
import Destinations from './components/Destinations';
import Footer from './components/Footer';
import HappyCustomer from './components/HappyCustomer';
import Navbar from './components/Navbar';
import SearchBar from './components/Searchbar';

function App() {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <Cards />
      <Destinations />
      <Blogs />
      <HappyCustomer />
      <Footer />
    </div>
  );
}

export default App;
