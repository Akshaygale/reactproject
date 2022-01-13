import React from 'react'
import TechUserFace from './TechUserFace'
import TechnologyList from './TechnologyList'
import Clap from './Clap'

function DigitalMarketing() {
    return (
        <div >
            <div className='InfoBox'>
            <img className='MainImage' src='./Images/digital2.png' alt='Digital Marketing'></img>
            <h1>What is Digital Marketing?</h1>
            <p>Digital marketing is the act of promoting and selling products and services by leveraging online marketing tactics such as social media marketing, search marketing, and email marketing.</p>
            <h2>How Does Digital Marketing Work?</h2>
            <p>In many ways, digital marketing is no different than traditional marketing. In both, smart organizations seek to develop mutually beneficial relationships with prospects, leads, and customers.</p>
            <p>But digital marketing has replaced most traditional marketing tactics because it's designed to reach today's consumers.<br/>
                As an example...<br/>
                Think about the last important purchase you made. Perhaps you purchased a home, hired someone to fix your roof, or changed paper suppliers at your office.<br/>
                Regardless of what it was, you probably began by searching the Internet to learn more about available solutions, who provided them, and what your best options were. Your ultimate buying decision was then based on the reviews you read, the friends and family you consulted, and the solutions, features, and pricing you researched.<br/>
                Most purchasing decisions begin online.<br/>
                That being the case, an online presence is absolutely necessary—regardless of what you sell.<br/>
                The key is to develop a digital marketing strategy that puts you in all the places your followers are already hanging out, then using a variety of digital channels to connect with them in a multitude of ways...<br/>
                ...Content to keep them updated with industry news, the problems they're facing, and how you solve those problems...<br/>
                ...Social media to share that content and then engage with them as friends and followers...<br/>
                ...Search engine optimization (SEO) to optimize your content, so it will show up when someone is searching for the information you've written about...<br/>
                ...Advertising to drive paid traffic to your website, where people can see your offers...<br/>
                ...And email marketing to follow up with your audience to be sure they continue to get the solutions they're looking for.<br/>
                When you put all these pieces together, you'll end up with an efficient, easy-to-operate digital marketing machine. And while it looks intimidating to build that machine from scratch, it's as simple as learning and integrating one digital marketing tactic at a time.<br/>
                Which is why we've put together this guide: To help you build or refine your own digital marketing plan without the false starts and missteps that come with doing it alone.</p>
            <Clap/>
                </div>
            <TechUserFace/>
            <TechnologyList/>
        </div>
    )
}

export default DigitalMarketing



