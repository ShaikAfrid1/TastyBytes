import MainRoutes from "./routes/MainRoutes";
import NavBar from "./components/NavBar";
const App = () => {
  return (
    <div className="w-screen h-screen bg-[#16423C] text-white font-thin py-10 px-[10%]">
      <NavBar />
      <MainRoutes />
    </div>
  );
};

export default App;
