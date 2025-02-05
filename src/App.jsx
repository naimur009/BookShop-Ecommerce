
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Pages/Layout';
import Home from './Pages/Home';
import AllBookList from './Pages/AllBookList';
import Cart from './components/Cart/Cart';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Profile from './components/Profile/Profile';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/books",
          element: <AllBookList />
        },
        {
          path: "/cart",
          element: <Cart />
        },
        {
          path: "/signin",
          element: <SignIn />
        },
        {
          path: "/signup",
          element: <SignUp />
        },
        {
          path: "/profile",
          element: <Profile />
        }

      ]
    }

  ])
  return (
    <div className="overflow-x-hidden h-screen overflow-y-scroll no-scrollbar bg-[#EFFAFC]">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
