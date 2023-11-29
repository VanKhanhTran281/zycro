import React from 'react';
import { Link } from 'react-router-dom';
import TableColumns from './TableColumns';
import ContactAttribute from './ContactAttribute';
import { data, DataAttribute } from './data'
const MappingData = () => {

  return (
    <div>
      <div style={{ marginTop: '30px', height: '688px' }}>
        <div style={{ height: '87px' }}>
          <h2 style={{ display: 'flex', marginBottom: '0', height: '31px' }}>
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect y="0.5" width="24" height="24" rx="12" fill="#E6E8EF" />
              <path d="M9.1598 16.5V15.5455L12.1129 12.4858C12.4283 12.1534 12.6882 11.8622 12.8928 11.6122C13.1001 11.3594 13.255 11.1193 13.3572 10.892C13.4595 10.6648 13.5107 10.4233 13.5107 10.1676C13.5107 9.87784 13.4425 9.62784 13.3061 9.41761C13.1697 9.20455 12.9837 9.04119 12.7479 8.92756C12.5121 8.81108 12.2464 8.75284 11.951 8.75284C11.6385 8.75284 11.3658 8.81676 11.1328 8.9446C10.8999 9.07244 10.7209 9.25284 10.5959 9.4858C10.4709 9.71875 10.4084 9.99148 10.4084 10.304H9.15128C9.15128 9.77273 9.27344 9.30824 9.51776 8.91051C9.76207 8.51278 10.0973 8.20455 10.5234 7.9858C10.9496 7.7642 11.4339 7.65341 11.9766 7.65341C12.5249 7.65341 13.0078 7.76278 13.4254 7.98153C13.8459 8.19744 14.174 8.4929 14.4098 8.8679C14.6456 9.24006 14.7635 9.66051 14.7635 10.1293C14.7635 10.4531 14.7024 10.7699 14.5803 11.0795C14.4609 11.3892 14.2521 11.7344 13.9538 12.1151C13.6555 12.4929 13.2408 12.9517 12.7095 13.4915L10.9751 15.3068V15.3707H14.9041V16.5H9.1598Z" fill="#586374" />
            </svg>
            <p style={{ marginTop: '-0.5px', marginLeft: '10px' }}>Mapping data</p>
          </h2>
          <p style={{ color: '#586374', marginTop: '0px' }}>Drag attributes that match your data. You can select existing attributes or create new ones</p>
          <p style={{ marginTop: '-10px' }}>All columns should be mapped*</p>
        </div>
        <div style={{ height: '513px', display: 'flex', marginTop: '20px' }}>
          {/* Table columns */}
          <div style={{ width: "420px", height: '512px' }}>
            <div style={{ height: '24', display: 'flex', marginTop: '-20px' }}>
              <p style={{ fontSize: '20px', fontWeight: '500', lineHeight: '24px', marginBottom: '0px' }}>Table columns</p>
              <p style={{ fontSize: '16px', fontWeight: '400', lineHeight: '19.84px', marginBottom: '0px', marginTop: '24px', marginLeft: "201px" }}>0/4 mapped</p>
            </div>
            <div style={{ height: '472px', marginTop: '16px', backgroundColor: '#F7F8FA', borderRadius: '12px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              {data.map((e, i) => {
                return <TableColumns key={i} data={e} />;
              })}
            </div>
          </div>
          {/* Contact attribute */}
          <div style={{ width: "420px", height: '513px', marginLeft: '40px' }}>
            <div style={{ height: '24', display: 'flex', marginTop: '-17px' }}>
              <p style={{ fontSize: '20px', fontWeight: '500', lineHeight: '24px', marginBottom: '0px' }}>Contact attribute</p>
              <Link to='#' style={{ textDecoration: 'none', display: 'flex', fontSize: '16px', fontWeight: '400', lineHeight: '19.84px', marginBottom: '0px', marginTop: '24px', marginLeft: "140px" }}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.75 6.00024H6M11.25 6.00024H6M6 6.00024V0.750244M6 6.00024V11.2502" stroke="#3490F6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p style={{ color: '#3490F6', marginTop: '-3px', marginLeft: '8px' }}>Add a new field</p>
              </Link>
            </div>
            <div style={{ height: '473px', backgroundColor: '#F7F8FA', borderRadius: '12px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <div style={{ width: '372px', height: '40px', borderRadius: '8px', border: '1px solid #E0E4F0', backgroundColor: "#FFFFFF", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 20.0002L16.364 16.3642M16.364 16.3642C17.9926 14.7355 19 12.4855 19 10.0002C19 5.02968 14.9706 1.00024 10 1.00024C5.02944 1.00024 1 5.02968 1 10.0002C1 14.9708 5.02944 19.0002 10 19.0002C12.4853 19.0002 14.7353 17.9929 16.364 16.3642Z" stroke="#586374" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
                <input style={{ outline: 'none', border: 'none', width: '324px', height: '18px', marginTop: "4px", marginLeft: "7px" }} placeholder='Search' />
              </div>
              <div style={{ border: '1px solid #E0E4F0', width: '372px', marginTop: "24px" }}></div>
              {DataAttribute.map((e, i) => {
                return <ContactAttribute key={i} data={e} />;
              })}
            </div>
          </div>
        </div>
        <div>
          <button style={{ width: '148px', height: '40px', marginTop: '24px',border:'none',borderRadius:"8px",backgroundColor:"#E6E8EF" }}>
            <p style={{color:'#ABB4C2'}}>Confirm mapping</p>
          </button>
        </div>
      </div>
      <div style={{ borderBottom: '1px solid #E0E4F0', marginTop: '30px' }}></div>
    </div>
  )
}
export default MappingData