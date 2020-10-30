import React from 'react'
import './Home.css'
import Banner from './Banner'
import Card from './Card'

// ES7 snippets to do 'rfce
function Home() {
    return (
        <div className="home">          
             <Banner/>
             <div className="home__section">
                 <Card 
                    src="https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    title="Unique Stays"
                    description="Spaces that are more than a place to sleep"
                    price="$135/nigth"
                    />
                    <Card 
                    src="https://www.thewowstyle.com/wp-content/uploads/2015/06/best-home-interior-designer-04.jpg"
                    title="Unique Stays"
                    description="Spaces that are more than a place to sleep"
                    price="154/night"
                    />
                    <Card 
                    src="https://i2.wp.com/designwud.com/wp-content/uploads/2018/12/drawing-room-cam-01.jpg?fit=1050%2C624&ssl=1"
                    title="Unique Stays"
                    description="Spaces that are more than a place to sleep"
                    price="154/night"                    
                    />                 
             </div>
             <div className="home__section">
                 <Card 
                    src="https://cdn.home-designing.com/wp-content/uploads/2018/06/kid-s-decor.jpg"
                    title="Unique Stays"
                    description="Spaces that are more than a place to sleep"
                    price="154/night"                    
                    />
                    <Card 
                    src="https://picasaltd.co.uk/wp-content/uploads/2019/10/large-interior-window-red-rug-artistic-living-rooms.jpg"
                    title="Unique Stays"
                    description="Spaces that are more than a place to sleep"
                    price="154/night"
                    />
                    <Card 
                    src="https://d1hy6t2xeg0mdl.cloudfront.net/image/296343/80ec6a8218/standard"
                    title="Unique Stays"
                    description="Spaces that are more than a place to sleep"
                    price="154/night"
                    />                 
             </div>
        </div>
    )
}

export default Home
