import "./App.css";
import "antd/dist/antd.css";

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routers/routes/Routes";

function App({ store, basename }) {
  return (
    <Provider store={store}>
      <BrowserRouter basename={basename}>
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
