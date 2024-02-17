import React from 'react';

const Team = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f4f4', padding: '20px' }}>
      <h2 style={{ textAlign: 'center', color: '#333' }}>Our Team</h2>
      <div className="team-member" style={{ backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', padding: '20px', margin: '20px' }}>
        <h2>Ansh Kanungo</h2>
        <p>Team Leader</p>
        <div className="social-icons" style={{ display: 'flex' }}>
          <a href="https://www.linkedin.com/in/anshkanungo" target="_blank"><i className="fab fa-linkedin" style={{ fontSize: '32px', color: '#0077b5', marginRight: '10px' }}></i></a>
          <a href="mailto:ansh@example.com" target="_blank"><i className="far fa-envelope" style={{ fontSize: '32px', color: '#d93025' }}></i></a>
        </div>
      </div>

      <div className="team-member" style={{ backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', padding: '20px', margin: '20px' }}>
        <h2>Akshat Tamrakar</h2>
        <p>Team Member</p>
        <div className="social-icons" style={{ display: 'flex' }}>
          
        <a href="https://www.linkedin.com/in/anshkanungo" target="_blank"><i className="fab fa-linkedin" style={{ fontSize: '32px', color: '#0077b5', marginRight: '10px' }}></i></a>
          <a href="mailto:ansh@example.com" target="_blank"><i className="far fa-envelope" style={{ fontSize: '32px', color: '#d93025' }}></i></a>
          {/* Add social icons for Akshat Tamrakar */}
        </div>
      </div>
      <div className="team-member" style={{ backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', padding: '20px', margin: '20px' }}>
        <h2>Akshat Tamrakar</h2>
        <p>Team Member</p>
        <div className="social-icons" style={{ display: 'flex' }}>
          
        <a href="https://www.linkedin.com/in/anshkanungo" target="_blank"><i className="fab fa-linkedin" style={{ fontSize: '32px', color: '#0077b5', marginRight: '10px' }}></i></a>
          <a href="mailto:ansh@example.com" target="_blank"><i className="far fa-envelope" style={{ fontSize: '32px', color: '#d93025' }}></i></a>
          {/* Add social icons for Akshat Tamrakar */}
        </div>
      </div>
      <div className="team-member" style={{ backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', padding: '20px', margin: '20px' }}>
        <h2>Akshat Tamrakar</h2>
        <p>Team Member</p>
        <div className="social-icons" style={{ display: 'flex' }}>
          
        <a href="https://www.linkedin.com/in/anshkanungo" target="_blank"><i className="fab fa-linkedin" style={{ fontSize: '32px', color: '#0077b5', marginRight: '10px' }}></i></a>
          <a href="mailto:ansh@example.com" target="_blank"><i className="far fa-envelope" style={{ fontSize: '32px', color: '#d93025' }}></i></a>
          {/* Add social icons for Akshat Tamrakar */}
        </div>
      </div>

      {/* Repeat the structure for other team members */}
      {/* Anshika Verma, Amit Singh Thakur */}
    </div>
  );
}

export default Team;
