import "./App.css"
import Body from "./components/Body";
import Head from "./components/Head";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import { Provider } from 'react-redux'
import store from "./utils/store"
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import Demo from "./components/Demo";

const appRouter = createBrowserRouter([{
  path: "/",
  element:<Body/>,
  children:[
    {
      path:"/",
      element:<MainContainer/>
    },
    {
      path:"watch",
      element:<WatchPage/>
    },
    {
      path:"demo",
      element:<Demo/>
    },
  ]
}])

function App() {
  return (
    <Provider store={store}>
    <div >
    <Head/>
    <RouterProvider router ={appRouter}/>
{/*
*
* Head
* Body
*  Sidebar
*     MenuItems
*  MainContainer
*     ButtonList
*     VideoContainer
*         VedioCard
*
*/
}
    </div>
    </Provider>
  );
}

export default App;
