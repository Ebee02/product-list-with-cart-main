import DessertItem from "./components/DessertItem";

function App() {
  return (
    <>
      <main className="min-w-[svw] min-h-screen bg-custom-rose-50 p-6">
        <h1 className="text-4xl font-bold text-custom-rose-900 mb-6">
          Desserts
        </h1>
        <DessertItem />
      </main>
    </>
  );
}

export default App;
