import React from "react";
//Components
import ExpenseItem from "./ExpenseItem";
//Styles
import "./Expenses.css";

const ExpensesList = props =>
{
    if ( props.items.length === 0 )
    {
        return <h2 className="expenses-list__fallback">Found No Expenses.</h2>;
    }

    return <ul className="expenses__list">
        {
            props.items.map( ( expense ) => (
                <ExpenseItem
                    key={ expense.id }
                    title={ expense.title }
                    amount={ expense.amount }
                    date={ expense.date }
                />
            ) ) }
    </ul>;
};

export default ExpensesList;