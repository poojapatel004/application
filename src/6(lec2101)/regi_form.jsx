// create a regi. form with has details when user enter details 
// is should be visible under the regi.form
// 1. Cricketer name(textbox) min :10 
// 2. Gender (Radio Button)
// 3. Email (Textbox) formate validation
// 4. Type of mathces played (checkbox) ODI, TEST, T20, DOMESTIC 
// 5. State (Dropdown)
// 6. Date of Birth

import { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    email: '',
    matches: [],
    state: '',
    dob: '',
  });

  const [submittedData, setSubmittedData] = useState(null);
  const [errors, setErrors] = useState({});

  const states = ['Select State', 'Gujarat', 'Punjab', 'Maharashtra', 'Madhya Pradesh', 'Rajasthan'];
  const matchTypes = ['ODI', 'TEST', 'T20', 'DOMESTIC'];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prevData) => {
        const matches = checked
          ? [...prevData.matches, value]
          : prevData.matches.filter((match) => match !== value);
        return { ...prevData, matches };
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (formData.name.length < 10) {
      newErrors.name = 'Cricketer name must be at least 10 characters long.';
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      newErrors.email = 'Email format is invalid.';
    }

    if (!formData.gender) {
      newErrors.gender = 'Gender is required.';
    }

    if (!formData.state || formData.state === 'Select State') {
      newErrors.state = 'State is required.';
    }

    if (!formData.dob) {
      newErrors.dob = 'Date of Birth is required.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmittedData(formData);
      setErrors({});
      setFormData({
        name: '',
        gender: '',
        email: '',
        matches: [],
        state: '',
        dob: '',
      });
    }
  };

  return (
    <div>
      <h1>Cricketer Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Cricketer Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
        </div>

        <br />

        <div>
          <label>Gender:</label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={formData.gender === 'Male'}
              onChange={handleChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={formData.gender === 'Female'}
              onChange={handleChange}
            />
            Female
          </label>
          {errors.gender && <span style={{ color: 'red' }}>{errors.gender}</span>}
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
        </div>

        <div>
          <label>Type of Matches Played:</label>
          {matchTypes.map((match) => (
            <label key={match}>
              <input
                type="checkbox"
                name="matches"
                value={match}
                checked={formData.matches.includes(match)}
                onChange={handleChange}
              />
              {match}
            </label>
          ))}
        </div>

        <div>
          <label>State:</label>
          <select name="state" value={formData.state} onChange={handleChange}>
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
          {errors.state && <span style={{ color: 'red' }}>{errors.state}</span>}
        </div>

        <div>
          <label>Date of Birth:</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />
          {errors.dob && <span style={{ color: 'red' }}>{errors.dob}</span>}
        </div>

        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div>
          <h2>Submitted Details:</h2>
          <p><strong>Cricketer Name:</strong> {submittedData.name}</p>
          <p><strong>Gender:</strong> {submittedData.gender}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Matches Played:</strong> {submittedData.matches?.join(', ') || 'N/A'}</p>
          <p><strong>State:</strong> {submittedData.state}</p>
          <p><strong>Date of Birth:</strong> {submittedData.dob}</p>
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;
