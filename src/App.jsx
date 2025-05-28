import MainRoutes from "./routes/MainRoutes";
import NavBar from "./components/NavBar";
import AppLayout from "./components/AppLayout";
const App = () => {
  return (
    <AppLayout>
      <NavBar />
      <MainRoutes />
    </AppLayout>
  );
};

export default App;
