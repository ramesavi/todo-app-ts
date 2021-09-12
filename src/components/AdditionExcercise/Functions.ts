export const nextInt = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1)) + min

export const grouped = <T>(xs: T[], n: number): T[][] =>
    xs.reduce<T[][]>((acc, e) => {
            const last = acc[acc.length - 1]
            if (!last || last.length === n) acc.push([e])
            else last.push(e)
            return acc
        }
        , [])


export const randomNumbers = (n: number, min: number, max: number): number[] => new Array(n).fill(0).map(x => nextInt(min, max))