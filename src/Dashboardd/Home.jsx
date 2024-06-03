import React from 'react'
import {BsPeopleFill} from 'react-icons/bs'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import {RiMoneyDollarCircleFill} from 'react-icons/ri'
import { SiBookstack } from 'react-icons/si'
import { TbUsersGroup } from "react-icons/tb";

function Home() {

    const data = [
        {
          name: 'Pending Books',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Books Available',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Books Availaible',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Lost Books',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Lost Books',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Pending Books',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Income',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
     

  return (
    <div className='main-dash-container'>
    <main className='main-dasboard-container'>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>USERS</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>300</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>EMPLOYEES</h3>
                    <TbUsersGroup className='card_icon'/>
                </div>
                <h1>12</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>BOOKS</h3>
                    <SiBookstack className='card_icon'/>
                </div>
                <h1>33</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>INCOME</h3>
                    <RiMoneyDollarCircleFill className='card_icon'/>
                </div>
                <h1>42</h1>
            </div>
        </div>

        <div className='charts'>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#C8AB8D" />
                <Bar dataKey="uv" fill="#000" />
                </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#C8AB8D" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#000" />
                </LineChart>
            </ResponsiveContainer>

        </div>
    </main>
    </div>
  )
}

export default Home