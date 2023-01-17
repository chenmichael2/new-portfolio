import React, { Component } from "react";
import "./hero.css";

class Hero extends Component {
    componentDidMount () {
        console.log("hello");
        console.log("hello 2");
    }

    render() {
        return(
            <section className="hero-section">
                <div>
                    <h1>Good {}, My name is Michael Chen</h1>
                </div>
            </section>
        )
    }
};

export default Hero;