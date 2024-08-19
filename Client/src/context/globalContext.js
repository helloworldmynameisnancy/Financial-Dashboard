import React, { useContext, useState } from 'react'
import axios from "axios";

const BASE_URL = "http://localhost:5050/api/";

const GlobalContext = React.createContext()

export const GlobalProvider = ({ children }) => {
    const [incomes, setIncomes] = useState([])
    const [expenses, setExpenses] = useState([])
    const [error, setError] = useState(null)
    const addIncome = async (income) => {
        const response = await axios.post(`${BASE_URL}add-income`, income)
            getIncomes()
    }

    const getIncomes = async () => {
        const response = await axios.get(`${BASE_URL}get-income`)
        setIncomes(response.data)
    }

    const deleteIncome = async (id) => {
        const res  = await axios.delete(`${BASE_URL}delete-income/${id}`)
        getIncomes()
    }
    const addExpense = async (expense) => {
        try {
            await axios.post(`${BASE_URL}add-expense`, { ...expense, type: 'expense' });
            getExpenses();
        }
        catch (err) {
            setError(err.response?.data?.message || 'An error occurred while adding expense');
        }
    };

    const getExpenses = async () => {
        const response = await axios.get(`${BASE_URL}get-expenses`)
        setExpenses(response.data)
    }

    const deleteExpense = async (id) => {
        try {
            await axios.delete(`${BASE_URL}delete-expense/${id}`);
            getExpenses();
        } catch (err) {
            setError(err.response?.data?.message || 'An error occurred while deleting expense');
        }
    };

    return (
        <GlobalContext.Provider value={{
            addIncome,
            getIncomes,
            deleteIncome,
            incomes,
            addExpense,
            getExpenses,
            expenses,
            deleteIncome,
            deleteExpense,
            error
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}