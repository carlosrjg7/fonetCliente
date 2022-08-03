import { Outlet } from "react-router-dom";
import NavbarPublic from "./components/NavbarPublic";

function App() {
  return (
    <>
      <NavbarPublic />
       <main className='container mx-auto mt-5 md:mt-20 p-5 md:flex md:justify-center'>
        <div className='w-full'>
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default App;
