import React from "react";
import "./ExpenseDate.css";

const ExpenseDate = ( props ) =>
{
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString( "sv-SE", { day: "2-digit" } );
    const month = props.date.toLocaleString( "sv-SE", { month: "long" } );

    return (
        <div className="expense-date">
            <div className="expense-date__year">{ year }</div>
            <div className="expense-date__day">{ day }</div>
            <div className="expense-date__month">{ month }</div>
        </div>
    );
};
