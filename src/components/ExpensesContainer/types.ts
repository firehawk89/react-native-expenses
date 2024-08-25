export enum PeriodType {
  WEEK = 'WEEK',
  MONTH = 'MONTH',
  YEAR = 'YEAR',
}

export type Expense = {
  id: string
  title: string
  amount: number
  date: Date
}
