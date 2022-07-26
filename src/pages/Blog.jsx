import React from "react";

function Blog () {
    return (
        <main className="page-wrapper">
            <h1>Blog</h1>
            <summary className="main-text">
                This is where I share my thoughts. For now, there's not much of mine here, but I've found some interesting stuff to act as placeholders.
            </summary>
            <div className="tile-container">
                <article className="tile">
                    <img src="https://www.direct8.fr/wp-content/uploads/2022/05/Obi-Wan-Kenobi.jpg" alt="General Kenobi"/>
                    <h4>Hello there</h4>
                    <p>Look at this placeholder</p>
                </article>
                <article className="tile">Look at this placeholder</article>
                <article className="tile">Look at this placeholder</article>
                <article className="tile">Look at this placeholder</article>
                <article className="tile">Look at this placeholder</article>
                <article className="tile">Look at this placeholder</article>
                <article className="tile">Look at this placeholder</article>
                <article className="tile">Look at this placeholder</article>
            </div>
        </main>
        
    )
};

export default Blog;