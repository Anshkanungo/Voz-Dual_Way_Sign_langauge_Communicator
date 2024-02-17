import React from 'react';

const About = () => {
  return (
    <div>
      <header style={{ backgroundColor: '#333', color: '#fff', padding: '20px' }}>
        <h1>About Us</h1>
       
      </header>

      <section style={{ padding: '20px', backgroundColor: '#f2f2f2', fontFamily: 'Arial, sans-serif' }}>
        <h2>Our Project</h2>
        <p>Our project is a 2-way Sign Language Translator. It converts both Sign Language to text and Text to Sign Language.</p>
        <p>We chose this topic because of the data supporting that the majority of people in the world don't know sign language, and thus can't have a smooth conversation with a disabled person.</p>
        <p>Sign language is crucial for effective communication among the deaf and hard of hearing community. By creating a Sign Language Translator, we aim to bridge the communication gap and promote inclusivity.</p>
        <p>This technology has the potential to positively impact the lives of millions of people worldwide by enabling them to communicate more effectively and participate fully in society.</p>
      </section>

      <footer style={{ backgroundColor: '#333', color: '#fff', textAlign: 'center', padding: '10px', position: 'fixed', bottom: 0, width: '100%' }}>
        <p>&copy; 2024 Your Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default About;
