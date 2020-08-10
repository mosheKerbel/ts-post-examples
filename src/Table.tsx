import React from "react";

interface HasId {
  id: string;
}

interface TableProps<RowDataType extends HasId> {
  rows: Array<RowDataType>;
  cols: Array<keyof RowDataType>;
  onSortClick: (col: keyof RowDataType) => void;
  onRowClick: (row: RowDataType) => void;
}

function Table<RowDataType extends HasId>(props: TableProps<RowDataType>) {
  const _renderRow = (
    row: RowDataType,
    cols: Array<keyof RowDataType>,
    idx: number
  ) => {
    return (
      <tr key={idx}>
        {cols.map((col, tdIdx) => (
          <td key={tdIdx}>{row[col]}</td>
        ))}
      </tr>
    );
  };

  const _renderHeaderRow = (
    cols: Array<keyof RowDataType>,
    onSortClick: any
  ) => {
    return (
      <tr>
        {cols.map((col, idx) => (
          <th key={idx} onClick={() => onSortClick(col)}>
            {col} ↓
          </th>
        ))}
      </tr>
    );
  };

  const { cols, rows, onSortClick } = props;
  return (
    <table>
      <tbody>
        {_renderHeaderRow(cols, onSortClick)}
        {rows.map((row, idx) => _renderRow(row, cols, idx))}
      </tbody>
    </table>
  );
}
export default Table;
