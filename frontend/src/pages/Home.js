import React from 'react';
import IntroAnimation from '../components/IntroAnimation';
import Galaxy from '../components/Galaxy';
import ClickSpark from '../components/ClickSpark';
import SpotlightCard from '../components/SpotlightCard';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';



const Home = () => {
  // Uncomment and use the events array if you want to show the events preview section
  // const events = [
  //   {
  //     id: 1,
  //     title: "Tech Innovation Challenge",
  //     description: "Showcase your innovative ideas and compete with the brightest minds in technology. Present your solutions to real-world problems.",
  //     date: "March 15, 2025",
  //     time: "10:00 AM - 4:00 PM",
  //     venue: "Main Auditorium"
  //   },
  //   {
  //     id: 2,
  //     title: "AI & Machine Learning Workshop",
  //     description: "Hands-on workshop covering the latest trends in AI and ML. Learn from industry experts and build practical projects.",
  //     date: "March 16, 2025",
  //     time: "9:00 AM - 5:00 PM",
  //     venue: "Computer Science Lab"
  //   },
  //   {
  //     id: 3,
  //     title: "Cybersecurity Summit",
  //     description: "Explore the world of cybersecurity, ethical hacking, and data protection. Interactive sessions and live demonstrations.",
  //     date: "March 17, 2025",
  //     time: "11:00 AM - 3:00 PM",
  //     venue: "Conference Hall A"
  //   },
  //   {
  //     id: 4,
  //     title: "Web Development Bootcamp",
  //     description: "Learn modern web development technologies including React, Node.js, and cloud deployment strategies.",
  //     date: "March 18, 2025",
  //     time: "10:00 AM - 6:00 PM",
  //     venue: "IT Laboratory"
  //   },
  //   {
  //     id: 5,
  //     title: "Startup Pitch Competition",
  //     description: "Present your startup ideas to a panel of investors and industry leaders. Win exciting prizes and potential funding.",
  //     date: "March 19, 2025",
  //     time: "2:00 PM - 6:00 PM",
  //     venue: "Business Center"
  //   }
  // ];

  return (
    <ClickSpark
      sparkColor='#fff'
      sparkSize={20}
      sparkRadius={25}
      sparkCount={8}
      duration={400}
    >
      <div>
        <IntroAnimation />
        {/* Hero Section with Galaxy Background */}
        <motion.section 
          className="hero"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Galaxy 
            style={{ 
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: -1
            }}
            hueShift={180}
            density={1.5}
            glowIntensity={0.5}
            twinkleIntensity={0.4}
            rotationSpeed={0.05}
            transparent={false}
          />
          <h1>ALTRUIXX 2K25</h1>
          <Link to="/events" className="cta-button">
            Explore Events
          </Link>
        </motion.section>

        {/* About Section */}
        <section className="events-section" style={{ background: '#4b4b4c86', padding: '4rem 0' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-title" style={{ color: '#764ba2', textAlign: 'center', marginBottom: '3rem' }}>About ALTRUIXX 2K25</h2>
              
              {/* Row 1: Image Left, Content Right */}
              <motion.div 
                className="about-section-grid"
                style={{ 
                  display: 'grid', 
                  gridTemplateColumns: '1fr 1fr', 
                  gap: '3rem', 
                  alignItems: 'center', 
                  marginBottom: '4rem' 
                }}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {/* Image */}
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <SpotlightCard 
                    className="about-image-card" 
                    spotlightColor="rgba(118, 75, 162, 0.3)"
                  >
                    <div style={{ 
                      width: '100%', 
                      height: '300px', 
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      borderRadius: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '3rem',
                      position: 'relative',
                      overflow: 'hidden'
                    }}>
                      <div style={{ 
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        textAlign: 'center'
                      }}>
                        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🚀</div>
                        <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Innovation</div>
                      </div>
                    </div>
                  </SpotlightCard>
                </div>
                
                {/* Content */}
                <div>
                  <h3 style={{ color: '#764ba2', marginBottom: '1.5rem', fontSize: '2rem' }}>Our Vision</h3>
                  <p style={{ 
                    lineHeight: '1.8', 
                    color: '#555', 
                    marginBottom: '2rem', 
                    fontSize: '1.1rem' 
                  }}>
                    ALTRUIXX 2K25 is designed to be the premier technology event that brings together students, 
                    industry professionals, and innovators to explore the latest trends in technology, foster innovation, 
                    and create meaningful connections that will shape the future of technology.
                  </p>
                  
                  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <span style={{ 
                      background: '#764ba2', 
                      color: 'white', 
                      padding: '0.5rem 1rem', 
                      borderRadius: '20px',
                      fontSize: '0.9rem'
                    }}>
                      Innovation
                    </span>
                    <span style={{ 
                      background: '#667eea', 
                      color: 'white', 
                      padding: '0.5rem 1rem', 
                      borderRadius: '20px',
                      fontSize: '0.9rem'
                    }}>
                      Technology
                    </span>
                    <span style={{ 
                      background: '#f093fb', 
                      color: 'white', 
                      padding: '0.5rem 1rem', 
                      borderRadius: '20px',
                      fontSize: '0.9rem'
                    }}>
                      Future
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Row 2: Content Left, Image Right */}
              <motion.div 
                className="about-section-grid"
                style={{ 
                  display: 'grid', 
                  gridTemplateColumns: '1fr 1fr', 
                  gap: '3rem', 
                  alignItems: 'center', 
                  marginBottom: '3rem' 
                }}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {/* Content */}
                <div>
                  <h3 style={{ color: '#764ba2', marginBottom: '1.5rem', fontSize: '2rem' }}>What We Offer</h3>
                  <ul style={{ 
                    paddingLeft: '0', 
                    color: '#555', 
                    lineHeight: '2', 
                    fontSize: '1.1rem',
                    listStyle: 'none'
                  }}>
                    <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.8rem' }}>
                      <span style={{ marginRight: '1rem', fontSize: '1.5rem' }}>🎯</span>
                      Hands-on Workshops with industry experts
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.8rem' }}>
                      <span style={{ marginRight: '1rem', fontSize: '1.5rem' }}>🏆</span>
                      Competitive Events with exciting prizes
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.8rem' }}>
                      <span style={{ marginRight: '1rem', fontSize: '1.5rem' }}>🤝</span>
                      Networking with peers and professionals
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.8rem' }}>
                      <span style={{ marginRight: '1rem', fontSize: '1.5rem' }}>📈</span>
                      Industry insights and future prospects
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center' }}>
                      <span style={{ marginRight: '1rem', fontSize: '1.5rem' }}>⚡</span>
                      Skill development opportunities
                    </li>
                  </ul>
                </div>
                
                {/* Image */}
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <SpotlightCard 
                    className="about-image-card" 
                    spotlightColor="rgba(102, 126, 234, 0.3)"
                  >
                    <div style={{ 
                      width: '100%', 
                      height: '300px', 
                      background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                      borderRadius: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '3rem',
                      position: 'relative',
                      overflow: 'hidden'
                    }}>
                      <div style={{ 
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        textAlign: 'center'
                      }}>
                        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>💡</div>
                        <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Excellence</div>
                      </div>
                    </div>
                  </SpotlightCard>
                </div>
              </motion.div>

              {/* Feature Cards Grid */}
              <motion.div 
                style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
                  gap: '1.5rem', 
                  marginTop: '3rem' 
                }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <SpotlightCard 
                  className="feature-card"
                  spotlightColor="rgba(118, 75, 162, 0.2)"
                >
                  <div style={{ textAlign: 'center', color: 'white' }}>
                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏆</div>
                    <h4 style={{ color: 'white', marginBottom: '0.8rem', fontSize: '1.2rem' }}>Competitions</h4>
                    <p style={{ color: '#ccc', fontSize: '0.9rem', lineHeight: '1.6' }}>
                      Tech Innovation Challenge and Startup Pitch Competition with substantial prizes.
                    </p>
                  </div>
                </SpotlightCard>
                
                <SpotlightCard 
                  className="feature-card"
                  spotlightColor="rgba(102, 126, 234, 0.2)"
                >
                  <div style={{ textAlign: 'center', color: 'white' }}>
                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎓</div>
                    <h4 style={{ color: 'white', marginBottom: '0.8rem', fontSize: '1.2rem' }}>Learning</h4>
                    <p style={{ color: '#ccc', fontSize: '0.9rem', lineHeight: '1.6' }}>
                      Comprehensive workshops covering AI/ML, Cybersecurity, and Web Development.
                    </p>
                  </div>
                </SpotlightCard>
                
                <SpotlightCard 
                  className="feature-card"
                  spotlightColor="rgba(240, 147, 251, 0.2)"
                >
                  <div style={{ textAlign: 'center', color: 'white' }}>
                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🤝</div>
                    <h4 style={{ color: 'white', marginBottom: '0.8rem', fontSize: '1.2rem' }}>Networking</h4>
                    <p style={{ color: '#ccc', fontSize: '0.9rem', lineHeight: '1.6' }}>
                      Connect with industry leaders, entrepreneurs, and like-minded peers.
                    </p>
                  </div>
                </SpotlightCard>
                
                <SpotlightCard 
                  className="feature-card"
                  spotlightColor="rgba(245, 87, 108, 0.2)"
                >
                  <div style={{ textAlign: 'center', color: 'white' }}>
                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💼</div>
                    <h4 style={{ color: 'white', marginBottom: '0.8rem', fontSize: '1.2rem' }}>Career</h4>
                    <p style={{ color: '#ccc', fontSize: '0.9rem', lineHeight: '1.6' }}>
                      Internship opportunities, job placements, and professional mentorship.
                    </p>
                  </div>
                </SpotlightCard>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="events-section">
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="section-title" style={{ color: '#764ba2' }}>Get In Touch</h2>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                {/* Contact Information */}
                <div>
                  <h3 style={{ color: '#764ba2', marginBottom: '1.5rem' }}>Contact Information</h3>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                    <span style={{ fontSize: '1.5rem' }}>📧</span>
                    <div>
                      <strong>Email</strong>
                      <p style={{ margin: 0, color: '#666' }}>altruixx@srmvec.edu</p>
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                    <span style={{ fontSize: '1.5rem' }}>📱</span>
                    <div>
                      <strong>Phone</strong>
                      <p style={{ margin: 0, color: '#666' }}>+91-9876543210</p>
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                    <span style={{ fontSize: '1.5rem' }}>📍</span>
                    <div>
                      <strong>Address</strong>
                      <p style={{ margin: 0, color: '#666' }}>
                        SRM Valliammai Engineering College<br />
                        Kattankulathur, Chennai - 603203
                      </p>
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span style={{ fontSize: '1.5rem' }}>🕐</span>
                    <div>
                      <strong>Event Dates</strong>
                      <p style={{ margin: 0, color: '#666' }}>
                        March 15-19, 2025<br />
                        Registration Deadline: March 10, 2025
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick Contact Form */}
                <div>
                  <h3 style={{ color: '#764ba2', marginBottom: '1.5rem' }}>Quick Message</h3>
                  <div style={{ background: '#f8f9fa', padding: '1.5rem', borderRadius: '10px' }}>
                    <div style={{ marginBottom: '1rem' }}>
                      <label style={{ display: 'block', marginBottom: '0.5rem', color: '#666' }}>Name</label>
                      <input 
                        type="text" 
                        style={{ 
                          width: '100%', 
                          padding: '0.75rem', 
                          border: '1px solid #ddd', 
                          borderRadius: '5px',
                          fontSize: '1rem'
                        }} 
                        placeholder="Your Name"
                      />
                    </div>
                    
                    <div style={{ marginBottom: '1rem' }}>
                      <label style={{ display: 'block', marginBottom: '0.5rem', color: '#666' }}>Email</label>
                      <input 
                        type="email" 
                        style={{ 
                          width: '100%', 
                          padding: '0.75rem', 
                          border: '1px solid #ddd', 
                          borderRadius: '5px',
                          fontSize: '1rem'
                        }} 
                        placeholder="your@email.com"
                      />
                    </div>
                    
                    <div style={{ marginBottom: '1rem' }}>
                      <label style={{ display: 'block', marginBottom: '0.5rem', color: '#666' }}>Message</label>
                      <textarea 
                        rows="4"
                        style={{ 
                          width: '100%', 
                          padding: '0.75rem', 
                          border: '1px solid #ddd', 
                          borderRadius: '5px',
                          fontSize: '1rem',
                          resize: 'vertical'
                        }} 
                        placeholder="Your message here..."
                      />
                    </div>
                    
                    <button 
                      style={{
                        background: '#764ba2',
                        color: 'white',
                        padding: '0.75rem 2rem',
                        border: 'none',
                        borderRadius: '5px',
                        fontSize: '1rem',
                        cursor: 'pointer',
                        width: '100%'
                      }}
                      onMouseOver={(e) => e.target.style.background = '#5a3780'}
                      onMouseOut={(e) => e.target.style.background = '#764ba2'}
                    >
                      Send Message
                    </button>
                  </div>
                  
                  <div style={{ marginTop: '1.5rem' }}>
                    <h4 style={{ color: '#764ba2', marginBottom: '1rem' }}>Follow Us</h4>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                      <a href="https://facebook.com/altruixx" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#764ba2', fontSize: '0.9rem' }}>📘 Facebook</a>
                      <a href="https://twitter.com/altruixx" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#764ba2', fontSize: '0.9rem' }}>🐦 Twitter</a>
                      <a href="https://linkedin.com/company/altruixx" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#764ba2', fontSize: '0.9rem' }}>💼 LinkedIn</a>
                      <a href="https://instagram.com/altruixx" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#764ba2', fontSize: '0.9rem' }}>📷 Instagram</a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Events Preview
        <section className="events-section">
          <h2 className="section-title">Featured Events</h2>
          <div className="events-grid">
            {events.map((event, index) => (
              <motion.div 
                key={event.id} 
                className="event-card"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <div className="event-meta">
                  <span>📅 {event.date}</span>
                  <span>🕐 {event.time}</span>
                </div>
                <div className="event-meta">
                  <span>📍 {event.venue}</span>
                </div>
                <div className="event-actions">
                  <Link to={`/events/${event.id}`} className="btn-primary">
                    Learn More
                  </Link>
                  <Link to={`/register/${event.id}`} className="btn-secondary">
                    Register Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        */}
      </div>
    </ClickSpark>
  );
};

export default Home;
