import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PokeBallsBackground from '../components/PokeBallsBackground';
import { useAppStore } from '../store/useAppStore';
import { useNotifStore } from '../components/Notification';

const ProfileScreen = () => {
  const navigate = useNavigate();
  const { name, setName, setProfile } = useAppStore();
  const { showNotif } = useNotifStore();
  
  const [formData, setFormData] = useState({
    name: name,
    ageRange: '',
    education: '',
    field: '',
    yearsSchool: '',
    jobTitle: '',
    industry: '',
    experience: '',
    gender: '',
    country: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [error, setError] = useState("");
  const [missingFields, setMissingFields] = useState([]);
  const requiredFields = [
    { key: 'name', label: 'Preferred Name' },
    { key: 'ageRange', label: 'Age Range' },
    { key: 'education', label: 'Highest Education Level' },
    { key: 'field', label: 'Field of Study' },
    { key: 'yearsSchool', label: 'Years in School' },
    { key: 'jobTitle', label: 'Current / Most Recent Job Title' },
    { key: 'industry', label: 'Industry' },
    { key: 'experience', label: 'Years of Work Experience' },
    { key: 'country', label: 'Country / Region' }
  ];
  const handleSave = () => {
    const missing = requiredFields.filter(f => !formData[f.key] || formData[f.key].trim() === "");
    setMissingFields(missing.map(f => f.key));
    if (missing.length > 0) {
      setError('Fill in the required information');
      showNotif('⚠️ Fill in the required information!');
      return;
    }
    setError("");
    setMissingFields([]);
    if (formData.name) setName(formData.name);
    setProfile(formData);
    showNotif(`✅ Profile saved, ${formData.name || 'Trainer'}!`);
    navigate('/topics');
  };

  return (
    <div className="screen active scrollable-screen" id="profile-screen">
      <div className="form-screen-bg"></div>
      <PokeBallsBackground count={10} />
      
      <div className="form-container">
        <div className="form-box">
          {error && (
            <div style={{ color: '#ff6b6b', marginBottom: 12, fontWeight: 600, textAlign: 'center' }}>{error}</div>
          )}
          <div className="form-header">🧑‍💼 YOUR TRAINER CARD</div>
          <div className="form-title">Tell Us About Yourself</div>
          <div className="form-sub">Help us personalise your learning path. All fields are optional.</div>

          <div className="form-row">
            <div className="form-field">
              <label className="form-label">Preferred Name {missingFields.includes('name') && <span style={{color:'#ff6b6b', fontWeight:600}}>FILL IN</span>}</label>
              <input 
                className="form-input" 
                name="name"
                placeholder="What should we call you?"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-field">
              <label className="form-label">Age Range {missingFields.includes('ageRange') && <span style={{color:'#ff6b6b', fontWeight:600}}>FILL IN</span>}</label>
              <select className="form-input" name="ageRange" value={formData.ageRange} onChange={handleChange}>
                <option value="">Select...</option>
                <option>Under 18</option>
                <option>18–24</option>
                <option>25–34</option>
                <option>35–44</option>
                <option>45–54</option>
                <option>55+</option>
              </select>
            </div>
          </div>

          <div className="form-field">
            <label className="form-label">Highest Education Level {missingFields.includes('education') && <span style={{color:'#ff6b6b', fontWeight:600}}>fill in</span>}</label>
            <select className="form-input" name="education" value={formData.education} onChange={handleChange}>
              <option value="">Select...</option>
              <option>High School / GED</option>
              <option>Some College</option>
              <option>Associate Degree</option>
              <option>Bachelor's Degree</option>
              <option>Master's Degree</option>
              <option>Doctoral Degree (PhD, EdD, etc.)</option>
              <option>Professional Degree (MD, JD, etc.)</option>
              <option>Bootcamp / Certification</option>
            </select>
          </div>

          <div className="form-row">
            <div className="form-field">
              <label className="form-label">Field of Study {missingFields.includes('field') && <span style={{color:'#ff6b6b', fontWeight:600}}>FILL IN</span>}</label>
              <input className="form-input" name="field" placeholder="e.g. Computer Science" value={formData.field} onChange={handleChange} />
            </div>
            <div className="form-field">
              <label className="form-label">Years in School {missingFields.includes('yearsSchool') && <span style={{color:'#ff6b6b', fontWeight:600}}>FILL IN</span>}</label>
              <select className="form-input" name="yearsSchool" value={formData.yearsSchool} onChange={handleChange}>
                <option value="">Select...</option>
                <option>Less than 2 years</option>
                <option>2–4 years</option>
                <option>4–6 years</option>
                <option>6–8 years</option>
                <option>8+ years</option>
              </select>
            </div>
          </div>

          <div className="form-field">
            <label className="form-label">Current / Most Recent Job Title {missingFields.includes('jobTitle') && <span style={{color:'#ff6b6b', fontWeight:600}}>fill in</span>}</label>
            <input className="form-input" name="jobTitle" placeholder="e.g. Data Analyst, Software Engineer" value={formData.jobTitle} onChange={handleChange} />
          </div>

          <div className="form-row">
            <div className="form-field">
              <label className="form-label">Industry {missingFields.includes('industry') && <span style={{color:'#ff6b6b', fontWeight:600}}>Fill in</span>}</label>
              <select className="form-input" name="industry" value={formData.industry} onChange={handleChange}>
                <option value="">Select...</option>
                <option>Technology</option>
                <option>Finance / Banking</option>
                <option>Healthcare</option>
                <option>Education</option>
                <option>Retail / E-commerce</option>
                <option>Consulting</option>
                <option>Government / Public Sector</option>
                <option>Non-profit</option>
                <option>Media / Entertainment</option>
                <option>Other</option>
              </select>
            </div>
            <div className="form-field">
              <label className="form-label">Years of Work Experience {missingFields.includes('experience') && <span style={{color:'#ff6b6b', fontWeight:600}}>FILL IN</span>}</label>
              <select className="form-input" name="experience" value={formData.experience} onChange={handleChange}>
                <option value="">Select...</option>
                <option>Student / No experience</option>
                <option>Less than 1 year</option>
                <option>1–3 years</option>
                <option>3–5 years</option>
                <option>5–10 years</option>
                <option>10+ years</option>
              </select>
            </div>
          </div>

          <div className="form-field">
            <label className="form-label">Gender (optional)</label>
            <select className="form-input" name="gender" value={formData.gender} onChange={handleChange}>
              <option value="">Prefer not to say</option>
              <option>Female</option>
              <option>Male</option>
              <option>Non-binary / Third gender</option>
              <option>Prefer to self-describe</option>
            </select>
          </div>

          <div className="form-field">
            <label className="form-label">Country / Region {missingFields.includes('country') && <span style={{color:'#ff6b6b', fontWeight:600}}>fill in</span>}</label>
            <input className="form-input" name="country" placeholder="e.g. United States, Nigeria, India..." value={formData.country} onChange={handleChange} />
          </div>

          <button className="form-btn" onClick={handleSave}>▶ CONTINUE TO TOPICS</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
