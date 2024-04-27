"use client"

import { AreaChart } from '@mantine/charts';
import { data } from './data';

export default function Chart() {
    return (
        <>
            <AreaChart
                h={300}
                data={data}
                dataKey="date"
                type="stacked"
                series={[
                    { name: 'Apples', color: 'indigo.6' },
                    { name: 'Oranges', color: 'blue.6' },
                    { name: 'Tomatoes', color: 'teal.6' },
                ]}
            />
        </>
    );
}