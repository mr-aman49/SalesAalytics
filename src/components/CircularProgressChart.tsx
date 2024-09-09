import React, { useEffect, useRef } from 'react';
import { Chart, DoughnutController, ArcElement, Tooltip, Legend } from 'chart.js';

const CircularProgressChart = ({ percentage, label, color }: { percentage: number; label: string; color: string }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    Chart.register(DoughnutController, ArcElement, Tooltip, Legend);

    if (chartRef.current) {
      const chartInstance = new Chart(chartRef.current, {
        type: 'doughnut',
        data: {
          labels: [label, ''],
          datasets: [
            {
              label: label,
              data: [percentage, 100 - percentage],
              backgroundColor: [color, '#e0e0e0'],
              borderWidth: 1,
            },
          ],
        },
        options: {
          cutout: '40%', // Makes the bar thinner (increase the percentage to make it smaller)
          plugins: {
            tooltip: {
              enabled: true,
            },
            legend: {
              display: false,
            },
          },
        },
      });

      return () => {
        chartInstance.destroy(); // Cleanup chart on component unmount
      };
    }
  }, [percentage, label, color]);

  return (
    <div className="w-32 h-32 "> {/* Adjust the width and height to make the chart smaller */}
      <canvas ref={chartRef} />
    </div>
  );
};

export default CircularProgressChart;
