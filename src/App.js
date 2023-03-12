import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import "./App.css";

function App() {
  return (
    <div className="App bg-white dark:bg-gray-900">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
