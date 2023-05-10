import Loading from "./components/loading/loading";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const isLoading = useSelector(state => state.loading.isLoading)
  return (
    <>
      {isLoading ? <Loading /> : null}
      <Outlet />
    </>
  );
}

export default App;
