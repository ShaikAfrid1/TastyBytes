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
//<div className="w-screen h-screen bg-[#16423C] text-white font-thin py-10 px-[10%]">
//   <NavBar />
//   <MainRoutes />
// </div>
