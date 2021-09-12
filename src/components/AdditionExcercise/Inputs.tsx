import * as React from 'react';
import {FormEvent, useState} from "react";
import {Data} from "./AddisonExercises";
import './Form.css'

type Props = {
    handleSubmit: (e: FormEvent, data: Data) => void
};
export const Inputs = ({handleSubmit}: Props) => {
    const [numExpressions, setNumExpression] = useState(1)
    const [minValue, setMinValue] = useState(1)
    const [maxValue, setMaxValue] = useState(10)
    const [numCols, setNumCols] = useState(3)

    return (
        <div className={"form"}>
            <form onSubmit={e => handleSubmit(e, {
                numExpressions: numExpressions,
                minValue: minValue,
                maxValue: maxValue,
                numCols: numCols
            })}>
                <label>
                    Number of Expressions
                    <input type="number" min={1} value={numExpressions}
                           onChange={e => setNumExpression(parseInt(e.target.value))}/>
                </label>
                <label>
                    Min Value
                    <input type="number" min={0} value={minValue}
                           onChange={e => setMinValue(parseInt(e.target.value))}/>
                </label>
                <label>
                    Max Value
                    <input type="number" min={1} value={maxValue}
                           onChange={e => setMaxValue(parseInt(e.target.value))}/>
                </label>
                <label>
                    Num Cols
                    <input type="number" min={1} value={numCols}
                           onChange={e => setNumCols(parseInt(e.target.value))}/>
                </label>
                <input type="submit" value="Generate"/>
            </form>
        </div>
    );
};