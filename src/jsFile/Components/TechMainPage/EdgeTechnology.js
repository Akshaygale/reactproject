import React from 'react'
import TechUserFace from './TechUserFace'
import TechnologyList from './TechnologyList'
import Clap from './Clap'

function EdgeTechnology() {
    

    return (
        <div >
            <div className='InfoBox'>
            <img className='MainImage' src='./Images/edge2.jpg' alt='Edge Technology'></img>
            <h1>Observability and Controllability</h1>
            <p>edgeTI provides a Single Point of Control Platform that enriches the usefulness of existing data and systems such as RPA, BI, ERP, ITSM, CRM, and BPM and delivers real-time, secure, connected, role-based data aggregation, digital process orchestration, and information visualization –  helping enterprises experience significantly improved returns.</p>
            <h2>How We Connect The Enterprise</h2>
            <img className='TechImage' src='./Images/edgevindiagram.png' alt='Edge Technology'></img>
            <p>edgeTI solves real world problems by extracting and aggregating operational and management data from disconnected systems, while providing automated workflow “pipelines” to orchestrate specific tasks across various business and IT systems. Progress, status, and results are presented in the context of the user’s role and assignment (C-level to System Admin to Customer Support), allowing the same data to be used for different perspectives and ensuring everyone is working in sync. Through the combination of data aggregation, task automation, and user visualization, both everyday scheduled and ad-hoc work becomes more observable, scalable, faster, efficient, and accurate.</p>
            <Clap/>
            
            </div>
            <TechUserFace/>
            <TechnologyList/>
        </div>
    )
}

export default EdgeTechnology
