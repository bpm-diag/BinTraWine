import React from 'react';
import { cn } from '@/utils/cn';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
);


interface BarChartProps extends React.HTMLAttributes<HTMLHeadElement> {
    title: string,
    labels: string[],
    values: number[]
}

const BarChart = ({ className, title, labels, values, ...props }: BarChartProps) => {

    const options = {
        plugins: {
            legend: {
                display: false
            },
        },
        responsive: true,
        scales: {
            x: {
                grid: {
                    drawOnChartArea: false
                }
            },
            y: {
                grid: {
                    drawOnChartArea: false,
                },
            }
        }
    }

    const dataset = [
        {
            label: title,
            data: values,
            backgroundColor: '#0F3835',
            borderRadius: 8
        }
    ]

    const data = {
        labels: labels,
        datasets: dataset,
    };

    return (
        <div className={cn('flex flex-col justify-center items-center sm:w-28 md:w-48 lg:w-96 relative', className)}>
            <Bar data={data} options={options} />
        </div>
    )
};

export default BarChart;
