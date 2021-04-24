import Navbar from "./Component/Navbar";
import ProductCart from "./Component/ProductCart";

function App() {
  return (
    <>
      <section>
        <Navbar />
      </section>
      <section className="my-10">
        <ProductCart />
      </section>
    </>
  );
}

export default App;
