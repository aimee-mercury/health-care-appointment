import React from 'react'
import './finance.css'
import Headersidebar from './Headersidebar'
import styled from 'styled-components'
import { SiBookstack } from 'react-icons/si'

function Finance() {
  return (
    <>
    <Headersidebar/>
    <div className='finance-dash-container'>
    
    <Section>
            <div className='title'>
            <h4>Upcoming Payments</h4>
                <h5>13 Jan 2024</h5>
            </div>
        <div className="analytic ">
            <div className="design">
                <div className="logo">
                    <SiBookstack />
                </div>
                <div className="content">
                    <h5>Book Rent</h5>
                    <h5 className='color'>Pending</h5>
                </div>           
            </div>
            <div className="money">
                    <h5>$250</h5>                 
            </div>         
        </div>
        <div className="analytic ">
            <div className="design">
                <div className="logo">
                    <SiBookstack />
                </div>
                <div className="content">
                    <h5>Bought Books</h5>
                    <h5 className='color'>Pending</h5>
                </div>              
            </div>
            <div className="money">
                    <h5>$950</h5>            
                </div>   
        </div>
    </Section>
    <Section>
            <div className='title'>
                <h4>Done Payments</h4>
                <h5>25 Jan 2024</h5>
            </div>
        <div className="analytic ">
            <div className="design">
                <div className="logo">
                    <SiBookstack />
                </div>
                <div className="content">
                    <h5>Rented Books</h5>
                    <h5 className='color'>Well paid</h5>
                </div>           
            </div>
            <div className="money">
                    <h5>$800</h5>                 
            </div>         
        </div>
        <div className="analytic ">
            <div className="design">
                <div className="logo">
                    <SiBookstack />
                </div>
                <div className="content">
                    <h5>Bought Books</h5>
                    <h5 className='color'>Well paid</h5>
                </div>              
            </div>
            <div className="money">
                    <h5>$650</h5>            
                </div>   
        </div>
    </Section>
    </div>
    </>
  )
}

export default Finance

// styled component css for payment

const Section = styled.section `
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 3rem;
    .title{
        margin-left: 22rem;
        h4{
            font-weight:bold;
        }
        h5{
            color: grey;
        }
    }
    .analytic {
        padding: 0.3rem 0.8rem 0.3rem 1.2rem;
        margin-left: 15rem;
        color: black;
        justify-content: space-evenly;
        align-items: center;
        gap: 1rem;
        transition: 0.5s ease-in-out;
        &:hover {
            background-color: #F5F5FD;
            color: black;
            svg {
                color: black;
            }
        }
        float: both;
        .design{
            display: flex;
            align-items: center;
            gap: 1rem;
            .logo {
                background-color: white;
                border-radius: 1rem;
                border: 1px solid white;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 0.5rem;
                svg {
                    font-size: 1.5rem;
                }
            }
            .color{
                color:grey;
            }    
        }
        .money{ 
            h5{
                 float: right;
                 margin-top: -30px;
            }  
        }   
    }
    
`;