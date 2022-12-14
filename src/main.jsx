import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from '../components/home';
import AddItem from '../components/AddItem';
import UpdateItem from '../components/UpdateItem';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div><Home></Home></div>,
  },
  {
    path:"/addItem",
    element: <div><AddItem></AddItem></div>
  },
  {
    path:"/updateItem/:id",
    element: <div><UpdateItem></UpdateItem></div>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
