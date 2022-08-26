// item 3
export type Transaction ={
    value: number,
    date: Date,
    description: string
}

// item 1
export type Account = {
    name: string,
    CPF: string,
    dateOfBirth: Date,
    balance: number
    statement: Array<Transaction>
}