import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './stylesheets/home.css'

import Header from './subcomponents/Header'

function home()
{
    const navigate = useNavigate();

    const setpathLogin = () => {
        navigate("/SignIn");
    }
    const setpathGuest = () => {
        navigate("/BlogSearch");
    }

  return (
    <div className='MainContainer'>

        <Header />

        <div className='HeroSection dividerTop2'>    
            <h1>Paint Your Thoughts</h1>
            <h2>For The World To Admire</h2>
            <p className='downhint'>
                Continue Reading<br/><i class="fa-solid fa-arrow-down"></i>
            </p>
        </div>

        <div className='demoSection dividerTop'>
            <p>Read from over a million Blogs discussing various topics</p>
            <div className="SpacerLess">
            </div>
            <img src='../../src/assets/demoPic.png' className='demoImg' />
            <div className="SpacerLess">
            </div>
            <br />
            <button onClick={setpathGuest()}>Start Reading</button>
        </div>

        <div className='InfoSection'>
            <h2>Can't Find What You Are Looking For?</h2>
            <div className="Spacer">
            </div>

            <h1>Paint Your Own Thoughts</h1>
            <h1>For Others To Read</h1>
            <div className="Spacer">
            </div>

            <p>Join Thousand Other Content Creators and Start Writing Your Own Blogs Now</p>
            <button className='' onClick={setpathLogin}>Register Now</button>

            <div className="Spacer">
            </div>
            <div className="Spacer">
            </div>

            <div className="ContentBlock">
                <div>
                    <h2>Gain Complete Control Over Your Content</h2>
                    <div className="SpacerLess">
                    </div>
                    <p>Style Your Blogs and Personalize them to perfectly match your brand and style.</p>
                </div>
                <img src='../../src/assets/completeControl.jpeg'/>
            </div>
            <div className="Spacer">
            </div>
            <div className="Spacer">
            </div>


            <div className="ContentBlock">
                <img src='../../src/assets/dashboard.jpeg'/>
                <div>
                    <h2 style={{textAlign: 'right'}}>Monitor Your Content and Growth With Modern Tools</h2>        
                    <div className="SpacerLess">
                    </div>
                    <p style={{textAlign: 'right'}}>Use the built in Dashboard to monitor Trends and growth in your content views, and build new content to grow your Audience.</p>
                </div>
            </div>
            <div className="Spacer">
            </div>
            <div className="Spacer">
            </div>


            <div className="ContentBlock">
                <div>
                    <h2>And Most Importantly, Pay Nothing</h2>
                    <div className="SpacerLess">
                    </div>
                    <p>Our Platform is completely free for you to paint your thoughts and ideas and showcase them to the world.</p>
                </div>
                <img src='../../src/assets/pricing.jpeg'/>
            </div>
        </div>

        <div className='Footer'>
            <div className='Identity'>
                <img src='../../src/assets/logo.png' height='40px'/>
                <h5>Thought Canvas</h5>
            </div>
            <div>
                <a>About</a>
                <a>Explore</a>
                <a>Privacy</a>
                <a>Contact</a>
            </div>
        </div>
        <div className='Footer mid'>
            <h6>Thought Canvas © 2024</h6>
        </div>
    
    </div>
  )
}

export default home