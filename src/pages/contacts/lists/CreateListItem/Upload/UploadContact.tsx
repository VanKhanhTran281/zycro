import React, { useState } from 'react';
import './UploadContacts.css';

const UploadContacts = () => {
  const [step, setStep] = useState(1);
  const [file, setFile] = useState<File | null>(null);
  const [data, setData] = useState<any[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files && event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setStep(2);
    }
  };

  const handleDataSubmit = () => {
    // Logic to process and map the data
    setStep(3);
  };

  const handleSaveList = () => {
    // Logic to save the list
    // Reset the form
    setStep(1);
    setFile(null);
    setData([]);
  };

  return (
    <div className="upload-contacts-container">
      <div className={`step ${step === 1 ? 'active' : 'completed'}`}>
        <h2>Step 1: Choose a file</h2>
        <p>Options:</p>
        <ul>
          <li>Download an example of CSV file</li>
          <li>Read the tutorial</li>
        </ul>
        <input type="file" accept=".csv" onChange={handleFileChange} />
      </div>

      <div className={`step ${step === 2 ? 'active' : 'completed'}`}>
        <h2>Step 2: Mapping data</h2>
        {/* Render the form for data mapping */}
        <button onClick={handleDataSubmit}>Next</button>
      </div>

      <div className={`step ${step === 3 ? 'active' : 'completed'}`}>
        <h2>Step 3: Save list</h2>
        {/* Render the form for saving the list */}
        <button onClick={handleSaveList}>Save</button>
      </div>

      {file && step === 2 && <p>File uploaded successfully. Proceed to Step 2.</p>}
      {step === 3 && <p>List saved successfully.</p>}
    </div>
  );
};

export default UploadContacts;