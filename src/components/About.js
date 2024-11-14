import React from 'react'

function About() {
  return (
    <div className='About'>
      <div className='hero-section'>
        <h3 className='hero-h3'>About us</h3>
        <p className='hero-p'>redBus is India’s largest online bus ticketing platform that has transformed bus travel in the country by bringing ease and convenience to millions of Indians who travel using buses. Founded in 2006, redBus is part of India’s leading online travel company MakeMyTrip Limited (NASDAQ: MMYT). By providing widest choice, superior customer service, lowest prices and unmatched benefits, redBus has served over 18 million customers. redBus has a global presence with operations across Indonesia, Singapore, Malaysia, Colombia and Peru apart from India.</p>
      </div>
      <div className='management'>
        <h3 className='team-h3'>Management Team</h3>
        <div className='team'>
          <img className='ceo' src="https://bl-i.thgim.com/public/incoming/54c76h/article68465083.ece/alternates/FREE_1200/12BG_BL03_REDBUS_JUN_2019.jpg" alt='CEO' />
          <div className='sangam'>
            <h4 className='team-h4'>Prakash Sangam, CEO</h4>
            <p className='team-p'>Prakash Sangam has been Chief Executive Officer of redBus since June 2014. Prior to redBus. He served as an Executive Vice President of Info Edge India (Naukri group), heading two group businesses namely Shiksha.com and Jeevansathi.com. He’s also worked as General Manager of Marketing and Innovation at Airtel and has also had multiple roles across Marketing, Brand Management and Sales at Hindustan Unilever. Prakash has completed his MBA from IIM Calcutta and also holds an Honours degree in Production Engineering from Mumbai University.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
