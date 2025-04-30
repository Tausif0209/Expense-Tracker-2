import React from "react";

function ExpenseItem({ expense, onDelete }) {
  return (
    <li style={{
      margin: "0.5rem 0",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>
      ₹{expense.amount} - {expense.desc}
      <button
        onClick={() => onDelete(expense.id)}
        style={{ backgroundColor: "red", color: "white", border: "none", marginLeft: "1rem" }}
      >
        X
      </button>
    </li>
  );
}

export default ExpenseItem;
