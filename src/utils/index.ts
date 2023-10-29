import { ResultSet, Value } from '@libsql/client'

export function mapResultSet<T>({ rows, columns }: ResultSet): T[] {
  const transformedRows: T[] = []
  for (const row of rows) {
    const transformedRow: { [x: string]: Value } = {}
    for (const key in row) {
      if (columns.includes(key)) {
        transformedRow[key] = row[key]
      }
    }
    transformedRows.push(transformedRow as T)
  }
  return transformedRows
}
