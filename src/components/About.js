import React, {useState} from 'react'

function About() {
    // State for accordion
  const [isMissionOpen, setIsMissionOpen] = useState(false);

  // State for modal
  const [selectedTeamMember, setSelectedTeamMember] = useState(null);

  const teamMembers = [
    {
      name: 'Rohit Foujdar',
      role: 'Founder & Head Instructor',
      img: 'https://via.placeholder.com/150',
      description: 'Rohit has been practicing yoga for over a decade and is passionate about sharing its benefits with the world.',
    },
    {
      name: 'Jane Doe',
      role: 'Yoga Specialist',
      img: 'https://via.placeholder.com/150',
      description: 'Jane focuses on Vinyasa and Hatha yoga, helping students find balance and inner peace.',
    },
    {
      name: 'John Smith',
      role: 'Marketing Lead',
      img: 'https://via.placeholder.com/150',
      description: 'John manages all marketing initiatives to spread the word about our yoga community.',
    },
  ];

//   Function to handle scrolling
  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="about-wrapper">
    {/* Hero Section */}
    <section className="hero-section">
      <div className="hero-content">
        <h1>Welcome to Yoga Vairagyam</h1>
        <p>
          Embrace the journey of self-discovery and wellness with Yoga Vairagyam. We are dedicated to transforming lives through the power of yoga.
        </p>
        <button className="scroll-button"onClick={scrollToContact}>
          Contact Us
        </button>
      </div>
    </section>

    {/* Mission Section with Accordion */}
    <section className="mission-section">
      <h2 onClick={() => setIsMissionOpen(!isMissionOpen)}>
        Our Mission {isMissionOpen ? '▲' : '▼'}
      </h2>
      {isMissionOpen && (
        <p>
          At Yoga Vairagyam, our mission is to empower individuals with the tools to achieve physical strength, mental clarity, and spiritual growth. Yoga is not just a practice—it's a way of life.
        </p>
      )}
    </section>

    {/* Team Section with Modal */}
    <section className="team-section">
      <h2>Meet the Team</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div
            className="team-card"
            key={index}
            onClick={() => setSelectedTeamMember(member)}
          >
            <img src={member.img} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Modal for Team Member Details */}
    {selectedTeamMember && (
      <div className="modal-overlay" onClick={() => setSelectedTeamMember(null)}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="close-button" onClick={() => setSelectedTeamMember(null)}>×</button>
          <img src={selectedTeamMember.img} alt={selectedTeamMember.name} />
          <h3>{selectedTeamMember.name}</h3>
          <p>{selectedTeamMember.role}</p>
          <p>{selectedTeamMember.description}</p>
        </div>
      </div>
    )}

    {/* Contact Section */}
    <section id="contact" className="contact-section">
      <h2>Get in Touch</h2>
      <p>
        Interested in learning more? Reach out to us at{' '}
        <a href="mailto:contact@yogavairagyam.com">contact@yogavairagyam.com</a>
      </p>
    </section>
  </div>
  )
}

export default About
