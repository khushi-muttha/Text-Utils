import React from 'react'

export default function About(props) {

    // const [myStyle,setmyStyle] = useState({
    //     color:'white',
    //     backgroundColor:'black',
    //     border: '2px solid white'
    // })

    let myStyle = {
        color:props.mode === 'dark'?'white' : '#042743',
        backgroundColor: props.mode === 'dark'?'#042743':'white',
        // border: '2px solid',
        // borderColor: props.mode === 'dark'?'white': '#042743'
    }
    // const [btnText, setbtnText] = useState("Enable Dark Mode")
    // const toggleStyle = ()=>{
    //     if(myStyle.color === 'white'){
    //     setmyStyle({
    //         color:'black',
    //     backgroundColor:'white'
    //     })
    //     setbtnText("Enable Dark Mode");
    //     }
    //     else{
    //         setmyStyle({
    //             color:'white',
    //         backgroundColor:'black'
            
    //     })
    //     setbtnText("Enable Light Mode");
    //     }
    
  return (
    <div className='container' style={myStyle}>
            <h1 className='my-2' style={{color:props.mode === 'dark'?'white' : '#042743'}}>About Us</h1>
            <div class="accordion" id="accordionExample">
        <div class="accordion-item">
            <h2 class="accordion-header">
            <button class="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
            <strong>Our Mission</strong>
            </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div class="accordion-body" style={myStyle}>
                Our mission is to provide the best service possible. We are dedicated to helping our customers achieve their goals by providing innovative solutions and exceptional customer service.
            </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header">
            <button class="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            <strong>Our Vision</strong>
            </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body" style={myStyle}>
            Our vision is to be the leading company in our industry. We strive to set the standard for excellence and innovation, continually improving and adapting to the needs of our customers.
            </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header">
            <button class="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <strong>Our Values</strong>
            </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body" style={myStyle}>
            We value integrity, transparency, and respect. Our team is dedicated to upholding these values in all our interactions and decisions, fostering a positive and inclusive environment.
            </div>
            </div>
        </div>
        </div>
        {/* <div className="container">
        <button onClick = {toggleStyle} type="button" class="btn btn-primary">{btnText}</button>
        </div> */}
        

        
    </div>
  )
}

