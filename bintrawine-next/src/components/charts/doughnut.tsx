import React from 'react';
import { Chart as ChartJS, ArcElement } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement);

import { cn } from '@/utils/cn';


interface DoughnutChartProps extends React.HTMLAttributes<HTMLHeadElement> {
    percentage: number;
    fullData?: boolean;
}

const DoughnutChart = ({ className, percentage, fullData, ...props }: DoughnutChartProps) => {

    const options = {
        cutout: '90%',
        radius: '100%',
        legend: {
            display: false
        },
        animation: {
            rotation: false
        }
    }

    const data = {
        labels: ['Red', 'Blue'],
        datasets: [
            {
                label: '# of Votes',
                data: [percentage, 100 - percentage],
                backgroundColor: [
                    fullData ? 'rgb(224, 187, 246)' : 'rgb(183, 97, 234)',
                    'rgb(237, 237, 237)',
                ],
                borderColor: [
                    fullData ? 'rgb(224, 187, 246)' : 'rgb(183, 97, 234)',
                    'rgb(237, 237, 237)',
                ],
                spacing: 5,
                borderRadius: 10,
            },
        ],
    };

    return (
        <div className={cn('sm:h-28 sm:w-28 md:h-48 md:w-48 relative', className)}>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <p className='font-primary text-primary font-semibold text-5xl'>{percentage}%</p>
            </div>
            <Doughnut data={data} options={options} />
        </div>
    )

};

export default DoughnutChart;

