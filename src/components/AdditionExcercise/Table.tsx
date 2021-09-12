import React from 'react';
import {grouped} from "./Functions";
import styled from "styled-components";

type Props = {
    numCols: number
    data: JSX.Element[]
}


const Table = ({
                   numCols, data
               }
                   : Props) => {
        const rows = grouped(data, numCols).map(cols =>
            <tr>
                {cols.map(c => <td>{c}</td>)}
            </tr>
        )

        const Table = styled.div`
          margin: 2rem;

          table {
            margin: auto;
            border-collapse: collapse;
          }

          td, tr {
            border: 1px solid black;
            padding: 1rem;
          }
        `

        return (
            <Table>
                <table>
                    {rows}
                </table>
            </Table>
        );
    }
;

export default Table;