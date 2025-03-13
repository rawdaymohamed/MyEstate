import MyHome from "./components/Home/Home";
import ResponsiveNav from "./components/Navbar/ResponsiveNav";


export default function Home() {
  return (
    <div className="h-screen flex flex-col pt-[10vh]">
      <ResponsiveNav />
      <MyHome />
    </div>
  );
}
