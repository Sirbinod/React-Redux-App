import Card from "./Component/Card";
import Home from "./Component/home";
import {Provider} from "react-redux";
import configureStore from "./redux/store/configureStore";
function App() {
  const initialState = {
    categories: [],
    categoriesIsLoading: false,
    products: [],
  };

  const store = configureStore(initialState);

  return (
    <>
      <Provider store={store}>
        <section>
          <Home />

          <div className="">
            <Card />
          </div>
        </section>
      </Provider>
    </>
  );
}

export default App;
