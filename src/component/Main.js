import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/Main.css';
import download from '../images/download.jpg'
import Meetings from './Meetings';

const Main = () => {

  const location = useLocation();

  const route = location.pathname.replace('/', '').toLocaleLowerCase();
  console.log('Current Route:', route);

    const content = {
      home:  (
        <div>
          <h1>Welcome to the Home Page</h1>
          <img src={download} alt="Home" style={{ width: '100%', height: 'auto' }} />
        </div>
      ),
      meetings: <Meetings />,
      meals: (
        <div>
          <h1>Meals Details</h1>
          <p>Rice</p>
          <p>Bread</p>
        </div>
      ),
      faqs: (
        <div>
          <h1>FAQ's</h1>
          <p>Write your FAQ</p>
        </div>
      ),
      announcements: (
        <div>
          <h1>We are thrill to announce the great news for myIntegrity</h1>
        </div>
      ),
      contacts: (
        <div>
          <h1>Conatct Details</h1>
          <p>Mob: +91 123456789</p>
          <p>Address: Lilly</p>
        </div>
      ),
      audit_history: (
        <div>
          <h1>Audit History</h1>
        </div>
      ),
    };


  return (
    <main className="main-content">
      {content[route] || <div>Page Not Found</div>}
    </main>
  );
};

export default Main;
