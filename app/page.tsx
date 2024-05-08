import Attribution from "@/components/Attribution/Attribution";
import Calculator from "@/components/Calculator";

const Home: React.FC = () => {
  return (
    <main className="app-bg min-h-screen h-[100vwh] flex flex-col align-middle items-center justify-center p-2">
      <Calculator />
      <Attribution />
    </main>
  );
};

export default Home;
