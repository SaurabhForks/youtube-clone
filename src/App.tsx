import { Route, Routes } from "react-router";
import "./App.scss";
import { BrowserRouter } from "react-router";
import Home from "./components/home/Home";
import Layout from "./components/layout/Layout";
import { Provider } from "react-redux";
import { appStore } from "./redux/appStore";
import WatchVideo from "./components/watchVideo/watchVideo";
import SearchResult from "./components/searchResult/searchResult";
function App() {
  return (
    <Provider store={appStore}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/watch/:id" element={<WatchVideo />} />
            <Route path="/search/:query" element={<SearchResult />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
