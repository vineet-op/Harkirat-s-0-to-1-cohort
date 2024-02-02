import "./App.css";
import RevenueCard from "./components/RevenueCard";

function App() {
  return (
    <>
      <div className="grid grid-cols-4">
        <RevenueCard
          title={"Amount Pending"}
          amount={"92,452.2"}
          ordercount={13}
        />
      </div>
    </>
  );
}

export default App;
