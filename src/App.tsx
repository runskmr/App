import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from 'react-redux'
import Favourites from "./app/favourites/favourites";
import RecentlyAdded from "./app/recently-added/recently-added";
import Layout from "./app/layout/layout";
import store from "./app/redux";
const router = createBrowserRouter([
  {
    path: "/favourites",
    element: <Layout ><RecentlyAdded /></Layout>
  },
  {
    path: "/",
    element: <Layout><RecentlyAdded /></Layout>,
  }
]);


function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;


