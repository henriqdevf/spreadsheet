import { createContext } from "use-context-selector"


export interface Transaction {
    id: number
    description: string
    type: 'income' | 'outcome'
    category: string
    price: number
    createdAt: string
}

export interface CreateTransactionData {
    description: string
    category: string
    price: number
    type: 'income' | 'outcome'
}

export interface TransactionContextType {
    transactions: Transaction[]
    fetchTransactions: (query?: string) => Promise<void>
    createTransaction: (data: CreateTransactionData) => Promise<void>
}

export interface TransactionProviderProps {
    children: React.ReactNode
}

export const TransactionsContext = createContext({} as TransactionContextType);