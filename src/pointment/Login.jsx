import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navigation from '../components/Navigation';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    date: '',
    emergencyContact: '',
    emergencyPhone: '',
    therapist: '',
    conditions: {
      neckInjury: false,
      infection: false,
      pms: false,
      emotionalChanges: false,
      sinusCongestion: false,
      headaches: false,
      coldVirus: false,
      flu: false,
      allergies: false,
      alcoholWithin24hrs: false,
      kidneyAlignment: false,
      sportsInjury: false,
      phlebitis: false,
      bruises: false,
      highBloodPressure: false,
      varicoseVeins: false,
      acutePain: false,
      griefProcess: false,
      recentSurgery: false,
      openWounds: false,
      osteoporosis: false,
      chronicPains: false,
      bloodClot: false,
      feverWithin24hrs: false,
      wearContacts: false,
      others: '',
    },
    signature: '',
    referralSource: '',
    previousMassage: '',
    medications: '',
    exercise: '',
    exerciseFrequency: '',
    exerciseHours: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        conditions: {
          ...formData.conditions,
          [name]: checked,
        },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Navigate to home page after form submission
    navigate('/Dashboard');
  };

  return (
    <>
      <Navigation />
      <form className='fm' onSubmit={handleSubmit}>
        <h2>Personal Information</h2>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label>
          Address:
          <input type="text" name="address" value={formData.address} onChange={handleChange} />
        </label>
        <label>
          Phone:
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
        </label>
        <label>
          Date:
          <input type="date" name="date" value={formData.date} onChange={handleChange} />
        </label>
        <label>
          Emergency Contact:
          <input type="text" name="emergencyContact" value={formData.emergencyContact} onChange={handleChange} />
        </label>
        <label>
          Doctor:
          <input type="text" name="therapist" value={formData.therapist} onChange={handleChange} />
        </label>

        <h2>Please mark any of the following conditions you may currently have.</h2>
        {Object.keys(formData.conditions).map((condition) => (
          <label key={condition}>
            <input
              type="checkbox"
              name={condition}
              checked={formData.conditions[condition]}
              onChange={handleChange}
            />
            {condition.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}
          </label>
        ))}

        <label>
          Others, please specify:
          <input type="text" name="others" value={formData.conditions.others} onChange={handleChange} />
        </label>

        <h2>Please answer the questions below.</h2>
        <label>
          How did you learn about us?
          <input type="text" name="referralSource" value={formData.referralSource} onChange={handleChange} />
        </label>
        <label>
          Have you received massage therapy or bodywork before?
          <div>
            <label>
              <input type="radio" name="previousMassage" value="yes" onChange={handleChange} />
              Yes
            </label>
            <label>
              <input type="radio" name="previousMassage" value="no" onChange={handleChange} />
              No
            </label>
          </div>
        </label>
        <label>
          Are you on any medication?
          <div>
            <label>
              <input type="radio" name="medications" value="yes" onChange={handleChange} />
              Yes
            </label>
            <label>
              <input type="radio" name="medications" value="no" onChange={handleChange} />
              No
            </label>
          </div>
        </label>
        <label>
          Do you exercise?
          <div>
            <label>
              <input type="radio" name="exercise" value="yes" onChange={handleChange} />
              Yes
            </label>
            <label>
              <input type="radio" name="exercise" value="no" onChange={handleChange} />
              No
            </label>
          </div>
        </label>
        {formData.exercise === 'yes' && (
          <>
            <label>
              If yes, how many times per week?
              <input type="number" name="exerciseFrequency" value={formData.exerciseFrequency} onChange={handleChange} />
            </label>
            <label>
              How many hours?
              <input type="number" name="exerciseHours" value={formData.exerciseHours} onChange={handleChange} />
            </label>
          </>
        )}

        <h2>Signature</h2>
        <label>
          <textarea name="signature" value={formData.signature} onChange={handleChange} />
        </label>

        <button type="submit">Submit</button>
      </form>
      <Footer />
    </>
  );
};

export default Form;
