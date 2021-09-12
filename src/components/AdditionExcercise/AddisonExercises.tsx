import React, {FormEvent, useState} from 'react';
import {Inputs} from "./Inputs";
import {grouped, randomNumbers} from "./Functions";
import Table from "./Table";
import './AddisonExercises.css'
import styled from "styled-components";

export type Data = {
    numExpressions: number,
    minValue: number,
    maxValue: number,
    numCols: number,
}

const AddisonExercises = () => {
    const [data, setData] = useState<Data | null>(null)
    const handleSubmit = (e: FormEvent, data: Data) => {
        e.preventDefault()
        setData(data)
        console.log(data)
    }

    let table: any = null

    if (data) {
        const expressions =
            grouped(randomNumbers(data.numExpressions * 2, data.minValue, data.maxValue), 2)
                .map((n, i) => `${n[0]} + ${n[1]} =`)

        const maxLength = Math.max(...expressions.map(x => x.length))

        table =
            <Table numCols={data.numCols}
                   data={expressions.map(data => <div style={{paddingRight: `${maxLength / 2}rem`}}>{data}</div>)}/>
    }

    return (
        <div>
            <Inputs handleSubmit={handleSubmit}/>
            {
                table
            }
        </div>
    );
};

export default AddisonExercises;