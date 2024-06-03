import React, { useState } from 'react';
import './settings.css';
import Headersidebar from './Headersidebar';

function Settings() {
  // State for user profile settings
  const [userProfile, setUserProfile] = useState({
    username: 'JohnDoe',
    email: 'john.doe@example.com',
    bio: 'A passionate reader',
  });

  // State for notification settings
  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    pushNotifications: false,
  });

  // State for security settings
  const [securitySettings, setSecuritySettings] = useState({
    twoFactorAuth: false,
    changePassword: false,
  });

  // State for theme mode (dark/light)
  const [themeMode, setThemeMode] = useState('light');

  const toggleThemeMode = () => {
    setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      <Headersidebar />
      <div className={`settings-dashboard-container ${themeMode}-mode`}>
        <div className='dashboard-settings-page'>
          <h1 className='sombe'>SETTINGS</h1><br />
          <br />
          <div className="dashbord-settings-section">
            <h2 className='dash-headings'>User Profile</h2>
            <div className="settings-section-content">
              <p>Username: {userProfile.username}</p>
              <p>Email: {userProfile.email}</p>
              <p>Bio: {userProfile.bio}</p>
              {/* Add form fields and update functionality */}
            </div>
          </div>
          <div className="section">
            <h2 className='dash-headings'>Notification Settings</h2>
            <div className="settings-section-content">
              <label>
                <input
                  type="checkbox"
                  checked={notificationSettings.emailNotifications}
                  onChange={() => setNotificationSettings({ ...notificationSettings, emailNotifications: !notificationSettings.emailNotifications })}
                />
                Receive Email Notifications
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={notificationSettings.pushNotifications}
                  onChange={() => setNotificationSettings({ ...notificationSettings, pushNotifications: !notificationSettings.pushNotifications })}
                />
                Receive Push Notifications
              </label>
              {/* Add more notification settings */}
            </div>
          </div><br />
          <div className="section">
            <h2 className='dash-headings'>Security Settings</h2>
            <div className="settings-section-content">
              <label>
                <input
                  type="checkbox"
                  checked={securitySettings.twoFactorAuth}
                  onChange={() => setSecuritySettings({ ...securitySettings, twoFactorAuth: !securitySettings.twoFactorAuth })}
                />
                Enable Two-Factor Authentication
              </label>
              <button onClick={() => console.log('Change Password clicked')}>Change Password</button>
              {/* Add more security settings */}
            </div>
          </div>
          <div className="section">
            <h2 className='dash-headings'>Theme Mode</h2>
            <div className="settings-section-content">
              <label>
                <input
                  type="checkbox"
                  checked={themeMode === 'dark'}
                  onChange={toggleThemeMode}
                />
                Dark Mode
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Settings;
;
