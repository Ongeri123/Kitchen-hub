function Home() {
    return (
        <div className="home-container">
            <div className="home">
                <div className="heading1">
                    <h1>Healthy &</h1>
                    <h1>Delicious</h1>
                    <h1>Fast Food</h1>
                    <p className="subtitle">Fresh ingredients, bold flavors, delivered fast</p>
                    <button className="cta-button">Order Now</button>
                </div>
                <div className="Image-space">
                    <img src="/background7.jpg" alt="food"/>
                </div>
            </div>
            <div className="home-footer">
                <div className="footer-content">
                    <div className="footer-item">
                        <h3>📍 Location</h3>
                        <p>Downtown Kitchen Hub</p>
                    </div>
                    <div className="footer-item">
                        <h3>⏰ Hours</h3>
                        <p>Mon-Sun: 10AM - 10PM</p>
                    </div>
                    <div className="footer-item">
                        <h3>📞 Contact</h3>
                        <p>+254------</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;