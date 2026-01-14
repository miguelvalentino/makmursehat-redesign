import React from 'react';

function Contact() {
  return (
    <div className="container mt-5">
      <h1>Contact Us</h1>
      <p>This is the contact page.</p>

      <section className='section'>
        <div className='container'>
          <div className='card shadow'>
            <div className='card-body'>
              <div className='row'>
                <div className='col-md-6'>
                  <h6>Contact Us!</h6>
                  <hr />
                  <div className='form-group'>
                    <label className='mb-1'>Full Name</label>
                    <input type="text" className='form-control' placeholder='Enter Full Name' />
                  </div>
                  <div className='form-group'>
                    <label className='mb-1'>Email</label>
                    <input type="text" className='form-control' placeholder='Enter Email Address' />
                  </div>
                  <div className='form-group'>
                    <label className='mb-1'>Phone Number (With Country Code)</label>
                    <input type="text" className='form-control' placeholder='Enter Phone Number' />
                  </div>
                  <div className='form-group'>
                    <label className='mb-1'>Message</label>
                    <textarea rows="3" className='form-control' placeholder='Type your message'></textarea>
                  </div>
                  <div className='form-group py-3'>
                    <button type='button' className='btn btn-success shadow w-100'>Sent</button>

                  </div>
                </div>
                <div className='col-md-6 border-start'>
                    <h5 className='main-heading'>Find Us Here</h5>
                    <div className='underline'></div>
                    <div className="card-body">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <i className="bi bi-geo-alt-fill me-2"></i>
                                <strong>Address:</strong> 123 Health Ave, Wellness City, HW 54321
                            </li>
                            <li className="list-group-item">
                                <i className="bi bi-telephone-fill me-2"></i>
                                <strong>Phone:</strong> +1 (555) 123-4567
                            </li>
                            <li className="list-group-item">
                                <i className="bi bi-envelope-fill me-2"></i>
                                <strong>Email:</strong> info@makmursehat.com
                            </li>
                            <li className="list-group-item">
                                <i className="bi bi-clock-fill me-2"></i>
                                <strong>Hours:</strong> Mon-Fri: 9 AM - 5 PM
                            </li>
                        </ul>
                        <div className="mt-3">
                            <h6>Location Map</h6>
                            <div className="map-placeholder">
                                Map Placeholder
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </section>
    </div>
  );
}

export default Contact;
