import Loading from "./components/loading/loading";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const isLoading = useSelector(state => state.loading.isLoading)
  return (
    <>
      <ToastContainer />
      {isLoading ? <Loading /> : null}
      <Outlet />
    </>
  );
}

export default App;
