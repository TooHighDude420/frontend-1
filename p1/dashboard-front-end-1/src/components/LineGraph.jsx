import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

function LineGraph({ data }) {
    return (
        <LineChart width="100%" height="100%" data={data}>
            <Tooltip />
            <Line type="monotone" dataKey="price" stroke="#8884d8" dot={null} />
        </LineChart>
    )
}

export default LineGraph