import './animationCpn.css'

import React, { Component } from 'react'


class AnimationCpn extends Component {
    

    componentDidMount() {
        this.animateElement();

    }
    animateElement() {
        const table = ["A", "@", "?", "<>", "Chat", "%", "Search", ";", "C", "Y", "@", "${}", "Easy", "Simple", "Steps", "Speed", "=>", "Word", "I", "Can", "Help", "You", "Service", "Try", "AI", "Friend", "Code", "</>", "{}", "Assist", "Revolution", ""];
        const banner = document.getElementsByClassName('banner')[0];
        const blocks = document.getElementsByClassName('blocks');
       
        for (let i = 0; i < 400; i++) {
            blocks[i].textContent = ""; // Set initial text content to an empty string
            blocks[i].style.color = "#fff";
            banner.innerHTML += `<div class='blocks blocks-anim'>${table[Math.floor(Math.random() * table.length)]}</div>`;
            blocks[i].style.animationDelay = `${i * 0.10}s`;
            blocks[i].textContent = table[Math.floor(Math.random() * table.length)];

        }

    }

    render() {
        return (
            <section>
                <div className='banner'>
                    <div className="blocks"></div>
                </div>

            </section>

        )
    }
}

export default AnimationCpn