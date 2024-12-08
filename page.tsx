// app/page.tsx
import Navbar from './components/Navbar';
import Products from './components/Products';
import Cart from './components/Cart';
import Footer from './components/Footer';
export default function Home() {
  return (
    <div>
      <Navbar />
      <Products />
      <Cart />
      <Footer />
    </div>
  );
}
