import { useEffect, useState, useCallback } from "react";
import { type CreateTransactionData, type TransactionProviderProps, type Transaction, TransactionsContext } from "./TransactionsContext";
import { api } from "../lib/axios";



export function TransactionsProvider({ children }: TransactionProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    
     const fetchTransactions = useCallback(async (query?: string) => {
        
        const response = await api.get<Transaction[]>('transactions', {
            params: {
                _sort: 'createdAt',
                _order: 'desc',
                q: query,
            },
        })
        
        setTransactions(response.data)
    }, [])

    const createTransaction = useCallback(async (data: CreateTransactionData) => {
        const { description, category, price, type } = data
        
        const response = await api.post('transactions', {
            description,
            category,
            price,
            type,
            createdAt: new Date(),
        })

        setTransactions(state => [response.data ,...state]);
    }, [])

    useEffect(() => {
        fetchTransactions()
    }, [fetchTransactions])

    return (
        <TransactionsContext.Provider value={{
            transactions,
            fetchTransactions,
            createTransaction,
        }}>
            {children}
        </TransactionsContext.Provider>
    )
}