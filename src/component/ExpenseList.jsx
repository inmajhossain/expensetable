import React from "react";

export default function ExpenseList({ expenses, onRemove }) {
  if (expenses.length === 0) {
    return (
      <>
        <h3 className="text-primary text-xl">No Data Found</h3>
      </>
    );
  }
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table table-zebra border-sky-500 border-y-2">
          <thead>
            <tr className="text-xl text-primary">
              <th>ID</th>
              <th>Description</th>
              <th>Category</th>
              <th>Cost</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr key={expense.id}>
                <th>{expense.id}</th>
                <td>{expense.description}</td>
                <td>{expense.category}</td>
                <td>{expense.amount}</td>
                <td>
                  <button
                    className="btn bg-slate-600"
                    onClick={() => onRemove(expense.id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
