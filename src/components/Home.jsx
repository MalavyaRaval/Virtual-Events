// Home.js
import React, { useState } from 'react';
import { FaVideo } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Navbar from './Nav/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../CSS/navbar.css'; // Import the CSS file
import Footer from './Footer';

const Home = () => {
  const [events, setEvents] = useState([]);
  const [eventDetails, setEventDetails] = useState({
    name: '',
    date: '',
    time: '',
    sponsor: '',
    coSponsor: '',
    security: '',
    food: '',
    custodian: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventDetails({
      ...eventDetails,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEvents([...events, { ...eventDetails, isExpanded: false }]);
    setEventDetails({
      name: '',
      date: '',
      time: '',
      sponsor: '',
      coSponsor: '',
      security: '',
      food: '',
      custodian: '',
      description: ''
    });
    document.querySelector('[data-bs-dismiss="modal"]').click(); // Close the modal
  };

  const toggleDetails = (index) => {
    setEvents(events.map((event, i) => (
      i === index ? { ...event, isExpanded: !event.isExpanded } : event
    )));
  };

  return (
    <div className="page-container">
      <Navbar />
      <div className="content-wrap">
        <button
          type="button"
          className="btn btn-primary create-event-button"
          data-bs-toggle="modal"
          data-bs-target="#createEventModal"
        >
          +
        </button>

        <div className="modal fade" id="createEventModal" tabIndex="-1" aria-labelledby="createEventModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="createEventModalLabel">Create Event</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <label>
                    Event Name:
                    <input type="text" name="name" className="form-control" value={eventDetails.name} onChange={handleChange} required />
                  </label>
                  <label>
                    Date:
                    <input type="date" name="date" className="form-control" value={eventDetails.date} onChange={handleChange} required />
                  </label>
                  <label>
                    Time:
                    <input type="time" name="time" className="form-control" value={eventDetails.time} onChange={handleChange} required />
                  </label>
                  <label>
                    Sponsor:
                    <input type="text" name="sponsor" className="form-control" value={eventDetails.sponsor} onChange={handleChange} required />
                  </label>
                  <label>
                    Co-Sponsor:
                    <input type="text" name="coSponsor" className="form-control" value={eventDetails.coSponsor} onChange={handleChange} />
                  </label>
                  <label>
                    Security:
                    <input type="text" name="security" className="form-control" value={eventDetails.security} onChange={handleChange} />
                  </label>
                  <label>
                    Food:
                    <input type="text" name="food" className="form-control" value={eventDetails.food} onChange={handleChange} />
                  </label>
                  <label>
                    Custodian:
                    <input type="text" name="custodian" className="form-control" value={eventDetails.custodian} onChange={handleChange} />
                  </label>
                  <label>
                    Description:
                    <textarea name="description" className="form-control" value={eventDetails.description} onChange={handleChange} required></textarea>
                  </label>
                  <button type="submit" className="btn btn-primary mt-3">Submit</button>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>

        <div className="events-list mt-4">
          {events.map((event, index) => (
            <div key={index} className="event-box p-3 mb-3 border rounded">
              <h5>{event.name}</h5>
              <button onClick={() => toggleDetails(index)} className="btn btn-link">
                {event.isExpanded ? 'Hide Details' : 'Show Details'}
              </button>
              <Link to="/camera" className="btn btn-link">
                <FaVideo size={20} />
              </Link>
              {event.isExpanded && (
                <div className="event-details">
                  <p><strong>Date:</strong> {event.date}</p>
                  <p><strong>Time:</strong> {event.time}</p>
                  <p><strong>Sponsor:</strong> {event.sponsor}</p>
                  <p><strong>Co-Sponsor:</strong> {event.coSponsor}</p>
                  <p><strong>Security:</strong> {event.security}</p>
                  <p><strong>Food:</strong> {event.food}</p>
                  <p><strong>Custodian:</strong> {event.custodian}</p>
                  <p><strong>Description:</strong> {event.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
