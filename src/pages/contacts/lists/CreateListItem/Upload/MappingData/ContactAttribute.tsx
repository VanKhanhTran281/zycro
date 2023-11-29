import React from "react";
interface DataContactAttribute {
    field?: string;
    type?: string;
}
interface ContactAttributeProps {
    data: DataContactAttribute;
}
const ContactAttribute: React.FC<ContactAttributeProps> = ({ data }) => {
    return (
        <div style={{ width: '372px', height: '48px',display:'flex',justifyContent:'space-between',alignItems:'center', marginTop: '24px', backgroundColor: '#FFFFFF', borderRadius: "10px", border: '1px solid #E0E4F0' }}>
                <div style={{display:'flex', marginLeft:"20px"}}>
                  <svg style={{marginTop:'16px'}} width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.5 3.50025C9.325 3.50025 10 2.82525 10 2.00025C10 1.17525 9.325 0.500246 8.5 0.500246C7.675 0.500245 7 1.17525 7 2.00025C7 2.82525 7.675 3.50025 8.5 3.50025Z" fill="#586374" />
                    <path d="M1.5 3.50024C2.325 3.50024 3 2.82524 3 2.00024C3 1.17524 2.325 0.500245 1.5 0.500244C0.675 0.500244 -1.18021e-07 1.17524 -2.62268e-07 2.00024C-4.06516e-07 2.82524 0.674999 3.50024 1.5 3.50024Z" fill="#586374" />
                    <path d="M8.5 10.5002C9.325 10.5002 10 9.82525 10 9.00025C10 8.17525 9.325 7.50025 8.5 7.50025C7.675 7.50025 7 8.17525 7 9.00025C7 9.82525 7.675 10.5002 8.5 10.5002Z" fill="#586374" />
                    <path d="M1.5 10.5002C2.325 10.5002 3 9.82524 3 9.00024C3 8.17524 2.325 7.50024 1.5 7.50024C0.674999 7.50024 -1.34194e-06 8.17524 -1.48619e-06 9.00024C-1.63043e-06 9.82524 0.674998 10.5002 1.5 10.5002Z" fill="#586374" />
                    <path d="M8.5 17.5002C9.325 17.5002 10 16.8252 10 16.0002C10 15.1752 9.325 14.5002 8.5 14.5002C7.675 14.5002 7 15.1752 7 16.0002C7 16.8252 7.675 17.5002 8.5 17.5002Z" fill="#586374" />
                    <path d="M1.5 17.5002C2.325 17.5002 3 16.8252 3 16.0002C3 15.1752 2.325 14.5002 1.5 14.5002C0.674998 14.5002 -2.56586e-06 15.1752 -2.71011e-06 16.0002C-2.85435e-06 16.8252 0.674997 17.5002 1.5 17.5002Z" fill="#586374" />
                  </svg>
                  <p style={{fontSize:'16px',fontWeight:'400',lineHeight:'19.84px',marginLeft:"15px"}}>{data?.field}</p>
                </div>
                <p style={{fontSize:'16px',fontWeight:'400',lineHeight:'19.84px',marginRight:"15px"}}>{data?.type}</p>
              </div>
    )
}
export default ContactAttribute