import React, { useState, useEffect } from "react";
import "./hero.css";

function Hero() {
    let [greeting, setGreeting] = useState('');

    useEffect(() => {
        getGreeting();
        setInterval(getGreeting, 10000);
        
    }, [])

    return(
        <section className="hero-section">
            <div>
                <h1>Good { greeting }, My name is Michael Chen</h1>
            </div>
        </section>
    )

    function getGreeting() {
        let d = new Date();
        let hr = d.getHours();
        console.log(d.getHours());
        if (hr < 12) {
            setGreeting("Morning");
        } else if (hr < 18) {
            setGreeting("Afternoon");
        } else {
            setGreeting("Evening");
        };
    }
};

export default Hero;