import React, { useState } from 'react';

const AppScraperInterface = () => {
  const [formData, setFormData] = useState({
    action: 'LIST_APPS',
    platform: 'GOOGLE_PLAY',
    selectedCategory: 'BUSINESS',
    selectedCollection: 'TOP_FREE',
    selectedCountry: 'United_States',
    selectedSort: 'RECENT',
    limit: 10,
  });

  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('https://api.apify.com/v2/acts/avezqureshi14~play-store-and-app-store-scraper/runs?token=apify_api_K5K8YdtNs0u7PD6u0f9ohkDfI5lFj61HYJJy&method=POST', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      console.log('API response:', data);
      // Handle the API response data as needed (update state, display results, etc.)
    } catch (error) {
      console.error('Error:', error.message);
      // Handle error (display error message, etc.)
    }
  };

  return (
    <div>
      {/* Render your form fields based on the formData state */}
      {/* You can use libraries like Formik or react-hook-form for form management */}
      {/* Example: */}
      <label>
        Action:
        <select value={formData.action} onChange={(e) => handleInputChange('action', e.target.value)}>
          <option value="LIST_APPS">List Apps</option>
          <option value="LIST_DEVELOPER_APPS">List Developer Apps</option>
          <option value="GET_DETAILS">Get Details</option>
        </select>
      </label>

      {/* Render other form fields similarly */}
      
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default AppScraperInterface;
