import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { uploadFileAsync } from '../../../../../redux/actions'
import { RootState, useAppDispatch } from '../../../../../redux/store';
import './UploadContacts.css';
import SaveList from './SaveList/SaveList';
import MappingData from './MappingData/MappingData';

const UploadContacts = () => {
  const dispatch = useAppDispatch();
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  const uploadFile = useSelector((state: RootState) => state.user.file);

  useEffect(() => {
    if (uploadFile === 100) {
    }
  }, [uploadFile]);
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      dispatch(uploadFileAsync(file));
      setFile(file);
    }
  };
  return (
    <div style={{ display: 'grid' }}>
      <div className="header-crl">
        <div className="">
          <Link to='/createlists' style={{ textDecoration: 'none', display: 'flex', width: "90px", marginLeft: '45px', marginTop: '20px' }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M8.77528 3.72505C9.01935 3.96913 9.01935 4.36486 8.77527 4.60894L4.00889 9.37527H17.5C17.8452 9.37527 18.125 9.65509 18.125 10.0003C18.125 10.3454 17.8452 10.6253 17.5 10.6253H4.00888L8.77528 15.3917C9.01935 15.6357 9.01935 16.0315 8.77528 16.2755C8.5312 16.5196 8.13547 16.5196 7.89139 16.2755L2.05806 10.4422C1.94085 10.325 1.875 10.166 1.875 10.0003C1.875 9.8345 1.94085 9.67553 2.05806 9.55832L7.89139 3.72505C8.13547 3.48097 8.5312 3.48097 8.77528 3.72505Z" fill="#747085" />
            </svg>
            <p style={{ fontWeight: '600', color: 'black', marginLeft: '5px', marginTop: '-2px', fontSize: '16px' }}>Back</p>
          </Link>
        </div>
      </div>
      <div className="upload-contacts-container">
        <div>
          <h2 style={{ display: 'flex', marginBottom: '0', height: '31px' }}>
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect y="0.5" width="24" height="24" rx="12" fill="#3490F6" />
              <path d="M13.3146 7.77273V16.5H11.9936V9.09375H11.9425L9.8544 10.4574V9.19602L12.032 7.77273H13.3146Z" fill="white" />
            </svg>
            <p style={{ marginTop: '-0.5px', marginLeft: '10px' }}>Upload contacts</p>
          </h2>
          <p style={{ color: '#586374', marginTop: '0' }}>Add contacts by uploading CSV file</p>
          <form style={{ height: '200px', display: 'grid', marginTop: "25px" }}>
            <div style={{ height: '20px', display: 'flex', justifyContent: 'space-between' }}>
              <p style={{ width: '479px', marginTop: '-3px', fontWeight: '700' }}>Upload your file in csv format</p>
              <div style={{ width: '401px' }}>
                <div style={{ display: 'flex', width: '373.68px', marginLeft: '27.32px' }}>
                  <Link to='#' style={{ display: 'flex', textDecoration: 'none' }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 1.25V11M8 11L5 8M8 11L11 8M1.25 14.75H14.75" stroke="#3490F6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p style={{ marginLeft: '4px', color: '#3490F6', marginTop: '-3px' }}>Download an example of CSV file</p>
                  </Link>
                  <Link to="#" style={{ marginLeft: '24px', display: 'flex', textDecoration: 'none' }}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.25 6H12.75M5.25 9H9.75M5.25 12H11.25M7.9 16.5H10.1C12.3402 16.5 13.4603 16.5 14.316 16.064C15.0686 15.6805 15.6805 15.0686 16.064 14.316C16.5 13.4603 16.5 12.3402 16.5 10.1V7.9C16.5 5.65979 16.5 4.53968 16.064 3.68404C15.6805 2.93139 15.0686 2.31947 14.316 1.93597C13.4603 1.5 12.3402 1.5 10.1 1.5H7.9C5.65979 1.5 4.53968 1.5 3.68404 1.93597C2.93139 2.31947 2.31947 2.93139 1.93597 3.68404C1.5 4.53968 1.5 5.65979 1.5 7.9V10.1C1.5 12.3402 1.5 13.4603 1.93597 14.316C2.31947 15.0686 2.93139 15.6805 3.68404 16.064C4.53968 16.5 5.65979 16.5 7.9 16.5Z" stroke="#3490F6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p style={{ marginLeft: '4px', color: '#3490F6', marginTop: '-3px' }}>Read the tutorial</p>
                  </Link>
                </div>
              </div>
            </div>
            <div onClick={handleFileClick} style={{ height: '164px', border: '1px dashed', borderColor: '#E0E4F0', borderRadius: '12px', marginTop: '14px' }}>
              <input ref={fileInputRef} type="file" accept=".csv" onChange={handleFileUpload} style={{ display: 'none' }} />
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '43px' }}>
                <svg style={{ marginRight: '15px' }} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.32" d="M4.74516 12.7079C5.01751 6.58824 9.92606 1.6665 15.9999 1.6665C21.1467 1.6665 25.4599 5.20443 26.8193 10.0045C29.6906 11.3636 31.6666 14.3416 31.6666 17.7776C31.6666 22.4744 27.9636 26.3332 23.3333 26.3332H18.6666V23.7711L18.781 23.8855C19.8224 24.9269 21.5108 24.9269 22.5522 23.8855C23.5936 22.8441 23.5936 21.1556 22.5522 20.1142L17.8855 15.4476C16.8441 14.4062 15.1557 14.4062 14.1143 15.4476L9.44763 20.1142C8.40624 21.1556 8.40624 22.8441 9.44763 23.8855C10.489 24.9269 12.1775 24.9269 13.2189 23.8855L13.3333 23.7711V26.3332H7.19992C3.37963 26.3332 0.333252 23.1509 0.333252 19.2887C0.333252 16.2998 2.15248 13.7257 4.74516 12.7079Z" fill="#3490F6" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M15.9999 16.5835C16.1988 16.5835 16.3896 16.6625 16.5302 16.8032L21.1969 21.4698C21.4898 21.7627 21.4898 22.2376 21.1969 22.5305C20.904 22.8234 20.4291 22.8234 20.1363 22.5305L16.7499 19.1442V29.3335C16.7499 29.7477 16.4141 30.0835 15.9999 30.0835C15.5857 30.0835 15.2499 29.7477 15.2499 29.3335V19.1442L11.8636 22.5305C11.5707 22.8234 11.0958 22.8234 10.8029 22.5305C10.51 22.2376 10.51 21.7627 10.8029 21.4698L15.4696 16.8032C15.6102 16.6625 15.801 16.5835 15.9999 16.5835Z" fill="#3490F6" />
                </svg>
                <div style={{ display: 'grid', width: '194px', height: '44px' }}>
                  <p style={{ fontSize: '16px', fontWeight: '700', color: '#3490F6', lineHeight: "19.84px", marginBottom: '0', marginTop: '6px' }}>Click here to upload CSV</p>
                  <p style={{ marginTop: '0', marginLeft: '15px' }}>or drag and drop it here</p>
                </div>
              </div>
            </div>
          </form>
          <div style={{ height: '86px', marginTop: '25px', borderRadius: '12px', border: '1px solid #E0E4F0' }}>
            {uploadFile !== null && (
              <div style={{ marginTop: '14px', marginLeft: '15px' }}>
                <div style={{ display: "flex", marginTop: '13px', height: '43px' }}>
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="39" height="39" rx="7.5" fill="#FCFDFD" />
                    <rect x="0.5" y="0.5" width="39" height="39" rx="7.5" stroke="#E0E4F0" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M20.9166 11.0418C20.8696 11.0417 20.8209 11.0417 20.7706 11.0417H17.5083C15.8281 11.0417 14.988 11.0417 14.3463 11.3687C13.7818 11.6563 13.3229 12.1153 13.0352 12.6798C12.7083 13.3215 12.7083 14.1616 12.7083 15.8417V24.1584C12.7083 25.8386 12.7083 26.6787 13.0352 27.3204C13.3229 27.8849 13.7818 28.3438 14.3463 28.6314C14.988 28.9584 15.8281 28.9584 17.5082 28.9584H22.4916C24.1717 28.9584 25.0118 28.9584 25.6536 28.6314C26.218 28.3438 26.677 27.8849 26.9646 27.3204C27.2916 26.6787 27.2916 25.8386 27.2916 24.1584V17.5628C27.2916 17.5124 27.2916 17.4638 27.2916 17.4168H24.8666H24.8362C24.302 17.4168 23.8562 17.4168 23.4919 17.387C23.112 17.356 22.7554 17.2889 22.4181 17.117C21.9007 16.8534 21.48 16.4327 21.2163 15.9152C21.0445 15.578 20.9774 15.2213 20.9463 14.8414C20.9166 14.4772 20.9166 14.0313 20.9166 13.4972V13.4668V11.0418ZM27.1533 15.9168C27.0797 15.6831 26.9778 15.459 26.8495 15.2497C26.664 14.9469 26.4046 14.6875 25.8857 14.1686L25.8857 14.1686L24.1647 12.4476L24.1647 12.4476C23.6458 11.9288 23.3864 11.6694 23.0837 11.4838C22.8743 11.3556 22.6503 11.2536 22.4166 11.1801V13.4668C22.4166 14.0392 22.4172 14.4234 22.4413 14.7193C22.4648 15.0064 22.5067 15.1437 22.5528 15.2342C22.6727 15.4694 22.8639 15.6607 23.0991 15.7805C23.1897 15.8267 23.3269 15.8685 23.6141 15.892C23.9099 15.9162 24.2942 15.9168 24.8666 15.9168H27.1533Z" fill="#3490F6" />
                  </svg>
                  <p style={{ fontSize: '14px', fontWeight: '700', marginTop: '-4px', marginLeft: '10px' }}>Khánh</p>
                </div>
                <progress value={uploadFile} max={100} style={{ width: '848px' }} />
              </div>
            )}
          </div>
          <div style={{ borderBottom: '1px solid #E0E4F0',marginTop:'30px' }}></div>
        </div>
        {/* Phần Mapping data */}
        <MappingData/>
        {/* Phần Save list */}
        <SaveList/>
      </div>
    </div>

  );
};

export default UploadContacts;