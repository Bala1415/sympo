import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const profileCardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: { opacity: 1, scale: 1, y: 0 }
};

const Events = () => {
  const events = [
    {
      id: 1,
      title: "TECHNOVERSE",
      description: "Showcase your innovative ideas and compete with the brightest minds in technology. Present your solutions to real-world problems and get a chance to win exciting prizes. This competition focuses on emerging technologies like IoT, Blockchain, AR/VR, and sustainable tech solutions.",
      date: "March 15, 2025",
      time: "10:00 AM - 4:00 PM",
      venue: "Main Auditorium",
      category: "Competition",
      eligibility: "All students",
      prizes: "₹50,000 cash prizes",
      requirements: "Team of 2-4 members, Prototype/Demo required"
    },
    {
      id: 2,
      title: "PROMPT NOT FOUND",
      description: "Comprehensive hands-on workshop covering the latest trends in AI and ML. Learn from industry experts and build practical projects using Python, TensorFlow, and PyTorch. Topics include neural networks, deep learning, computer vision, and natural language processing.",
      date: "March 16, 2025",
      time: "9:00 AM - 5:00 PM",
      venue: "Computer Science Lab",
      category: "Workshop",
      eligibility: "Basic programming knowledge required",
      prizes: "Certificates and internship opportunities",
      requirements: "Laptop with Python installed"
    },
    {
      id: 3,
      title: "THE CIPHER TEXT",
      description: "Explore the world of cybersecurity, ethical hacking, and data protection. Interactive sessions covering penetration testing, vulnerability assessment, digital forensics, and security best practices. Live demonstrations of common attack vectors and defense mechanisms.",
      date: "March 17, 2025",
      time: "11:00 AM - 3:00 PM",
      venue: "Conference Hall A",
      category: "Summit",
      eligibility: "CS/IT students preferred",
      prizes: "Industry certifications",
      requirements: "Basic networking knowledge"
    },
    {
      id: 4,
      title: "JADE JOURNEY",
      description: "Intensive bootcamp covering modern web development technologies including React, Node.js, MongoDB, and cloud deployment strategies. Build full-stack applications and learn industry best practices for scalable web development.",
      date: "March 18, 2025",
      time: "10:00 AM - 6:00 PM",
      venue: "IT Laboratory",
      category: "Bootcamp",
      eligibility: "Basic HTML/CSS knowledge",
      prizes: "Project showcase opportunity",
      requirements: "Laptop with code editor"
    },
    {
      id: 5,
      title: "PAPER PRESENTATION",
      description: "Present your startup ideas to a panel of investors and industry leaders. Perfect platform for aspiring entrepreneurs to showcase their business models, market analysis, and growth strategies. Network with potential co-founders and mentors.",
      date: "March 19, 2025",
      time: "2:00 PM - 6:00 PM",
      venue: "Business Center",
      category: "Competition",
      eligibility: "All students and recent graduates",
      prizes: "Funding opportunities up to ₹5 lakhs",
      requirements: "Business plan and pitch deck"
    }
  ];

  return (
    <div className="events-section">
      <motion.h1 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        All Events
      </motion.h1>
      <div className="events-grid">
        {events.map((event, index) => (
          <motion.div 
            key={event.id} 
            className="event-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div style={{ marginBottom: '1rem' }}>
              <span style={{ 
                background: '#667eea', 
                color: 'white', 
                padding: '0.3rem 0.8rem', 
                borderRadius: '15px', 
                fontSize: '0.8rem',
                fontWeight: 'bold'
              }}>
                {event.category}
              </span>
            </div>
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <div className="event-meta">
              <span>📅 {event.date}</span>
              <span>🕐 {event.time}</span>
            </div>
            <div className="event-meta">
              <span>📍 {event.venue}</span>
              <span>🎓 {event.eligibility}</span>
            </div>
            <div className="event-meta">
              <span>🏆 {event.prizes}</span>
            </div>
            <div className="event-actions">
              <Link to={`/events/${event.id}`} className="btn-primary">
                View Details
              </Link>
              <Link to={`/register/${event.id}`} className="btn-secondary">
                Register Now
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Events;
