import DessertItem from "./components/DessertItem";
import dessertData from "../dessertData";
import Cart from "./components/Cart";

function App() {
  const dessertDataElement = dessertData.map((data) => {
    return <DessertItem key={data.name} {...data} />;
  });
  return (
    <>
      <main className="min-w-[svw] min-h-screen bg-custom-rose-50 p-6">
        <h1 className="text-4xl font-bold text-custom-rose-900 mb-6">
          Desserts
        </h1>
        <section className="grid grid-cols-1 gap-8">
          {dessertDataElement}
          <Cart />
        </section>
      </main>
    </>
  );
}

export default App;
