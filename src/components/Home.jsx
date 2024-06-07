import React from 'react';
import Navbar from './Nav/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../CSS/navbar.css'; // Import the CSS file
import Footer from './Footer';

const Home = () => {
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
                <form>
                  <label>
                    Event Name:
                    <input type="text" name="name" className="form-control" />
                  </label>
                  <label>
                    Date:
                    <input type="date" name="date" className="form-control" />
                  </label>
                  <label>
                    Time:
                    <input type="time" name="time" className="form-control" />
                  </label>
                  <label>
                    Sponsor:
                    <input type="text" name="sponsor" className="form-control" />
                  </label>
                  <label>
                    Co-Sponsor:
                    <input type="text" name="co-sponsor" className="form-control" />
                  </label>
                  <label>
                    Security:
                    <input type="text" name="security" className="form-control" />
                  </label>
                  <label>
                    Food:
                    <input type="text" name="food" className="form-control" />
                  </label>
                  <label>
                    Custodian:
                    <input type="text" name="custodian" className="form-control" />
                  </label>
                  <label>
                    Description:
                    <textarea name="description" className="form-control"></textarea>
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
      </div>
      <Footer />
    </div>
  );
};

export default Home;
