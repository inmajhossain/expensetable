import { useState } from "react";
import "./App.css";
import ExpenseList from "./component/ExpenseList";
import ExpenseCategory from "./component/ExpenseCategory";
function App() {
  const categories = ["Home", "Family", "Tour", "Movies", "University"];
  const [expenses, setExpenses] = useState([
    { id: 1, category: "Tour", description: "Bandarban Tour", amount: 6500 },
    { id: 2, category: "Movies", description: "Star Cineplex", amount: 1000 },
    { id: 3, category: "Home", description: "Grocery Purchase", amount: 3500 },
    { id: 4, category: "Tour", description: "Coxesbazar Tour", amount: 10000 },
    { id: 5, category: "Home", description: "House Rent", amount: 18000 },
  ]);
  const [selectedCategory, setSelectedCategory] = useState("");
  //Remove Expense
  const handleRemoveCost = (id) => {
    setExpenses(expenses.filter((item) => item.id != id));
  };
  //Filter expense by category
  const filterExpense = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;
  return (
    <>
      {expenses.length !== 0 && (
        <div className="flex justify-end mb-6">
          <ExpenseCategory
            setSelectedCategory={setSelectedCategory}
            categories={categories}
          />
        </div>
      )}
      <ExpenseList expenses={filterExpense} onRemove={handleRemoveCost} />{" "}
    </>
  );
}

export default App;
