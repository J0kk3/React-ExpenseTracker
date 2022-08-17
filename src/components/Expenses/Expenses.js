import React, { useState } from "react";
//Components
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
//Styles
import "./Expenses.css";

const Expenses = ( props ) =>
{
    const [ filteredYear, setFilteredYear ] = useState( "2022" );

    const filterChangeHandler = selecedYear =>
    {
        setFilteredYear( selecedYear );
    };

    const filteredExpenses = props.items.filter( expense =>
    {
        return expense.date.getFullYear().toString() === filteredYear;
    } );



    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selected={ filteredYear }
                    onChangeFilter={ filterChangeHandler }
                />
                <ExpensesChart expenses={ filteredExpenses } />
                <ExpensesList items={ filteredExpenses } />
            </Card>
        </div>
    );
};

export default Expenses;