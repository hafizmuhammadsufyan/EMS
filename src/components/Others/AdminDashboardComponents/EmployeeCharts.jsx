import React, { useContext } from 'react'
import { AuthContext } from '../../../context/AuthProvider'
import { Chart as ChartJs, PolarAreaController } from 'chart.js/auto'
import { Bar, Doughnut, PolarArea } from 'react-chartjs-2'

const EmployeeCharts = () => {


    const { userData } = useContext(AuthContext)

    // let length = userData.employees.map(elem => elem.tasks.length)

    // console.log(length);


    return (
        <div className='py-2 px-6'>
            <div className='flex w-full py-4 flex-wrap items-center justify-center  gap-4 lg:h-[50vh] lg:overflow-y-auto'>
                {userData.employees.map((elem, idx) => {

                    let length = elem.tasks.length
                    let activePercent = elem.taskStats.active ? ((elem.taskStats.active / length) * 100).toFixed(1) : 0
                    let completedPercent = elem.taskStats.completed ? ((elem.taskStats.completed / length) * 100).toFixed(1) : 0
                    let failedPercent = elem.taskStats.failed ? ((elem.taskStats.failed / length) * 100).toFixed(1) : 0
                    let pendingPercent = elem.taskStats.newTask ? ((elem.taskStats.newTask / length) * 100).toFixed(1) : 0


                    return (
                        <div className='mt-3 shrink-0 lg:w-[45%] w-full h-64 border-l-4 border-amber-500 rounded-xl py-2 px-4 flex justify-between shadow-xl' key={idx}>
                            <div className='w-[30%] flex flex-col items-start justify-around'>
                                <h1 className='font-bold text-[16px] mb-2'><span className='text-amber-500 text-2xl'>{elem.name}</span>'s Task Overview</h1>
                                <h3 className='text-[13px]'>Total Tasks Given: <span className='text-amber-500 text-xl font-bold'>{length}</span></h3>
                            </div>
                            <div className='w-[70%]'>
                                <PolarArea
                                    data={{
                                        labels: ['Active Tasks', 'Pending Tasks', 'Completed Tasks', 'Failed Tasks'],
                                        datasets: [
                                            {
                                                label: 'Task Overview',
                                                data: [activePercent, pendingPercent, completedPercent, failedPercent],
                                                backgroundColor: [
                                                    'rgba(59, 130, 246, 0.7)', // Blue for Active Tasks
                                                    'rgba(234, 179, 8, 0.7)', // Yellow for Pending Tasks
                                                    'rgba(34, 197, 94, 0.7)', // Green for Completed Tasks
                                                    'rgba(239, 68, 68, 0.7)', // Red for Failed Tasks
                                                ],
                                            },
                                        ],
                                    }}
                                    options={{
                                        responsive: true,
                                        maintainAspectRatio: false,
                                        scales: {
                                            r: {
                                                min: 0,
                                                max: 100,
                                                ticks: {
                                                    stepSize: 25,
                                                    callback: function (value) {
                                                        return value + '%'
                                                    },
                                                },
                                            },
                                        },
                                        plugins: {
                                            legend: {
                                                position: 'bottom',
                                            },
                                        },
                                    }}
                                />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default EmployeeCharts