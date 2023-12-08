import React from "react";
interface TagFilterPesonProps {
    handleBack: () => void
}
const FilterPerson: React.FC<TagFilterPesonProps> = ({ handleBack }) => {
    return (
        <div style={{ zIndex: '9999', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginLeft: "-95px", marginTop: '50px', backgroundColor: '#fff', height: '295px', width: '271px', border: '0.5px solid #E0E4F0', borderRadius: '8px' }}>
            <div style={{ height: '32px', display: "flex", alignItems: 'center' }}>
                <div onClick={handleBack} style={{ cursor: 'pointer', marginTop: '-10px', display: "flex", alignItems: 'center', height: '20px', width: '227px' }}>
                    <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.83333 1.16699L1 7.00027M1 7.00027L6.83333 12.8336M1 7.00027H16" stroke="#1A2433" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p style={{ marginTop: '0', marginBottom: '0', marginLeft: '5px' }}>Person</p>
                </div>
            </div>
            <div style={{ height: '32px', width: '259px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #E0E4F0', borderRadius: '8px' }}>
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.25 15.7502L12.523 13.0232M12.523 13.0232C13.7445 11.8017 14.5 10.1142 14.5 8.25024C14.5 4.52232 11.4779 1.50024 7.75 1.50024C4.02208 1.50024 1 4.52232 1 8.25024C1 11.9782 4.02208 15.0002 7.75 15.0002C9.61396 15.0002 11.3015 14.2447 12.523 13.0232Z" stroke="#586374" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
                <input style={{ width: '217px', marginLeft: '5px', height: '16px', border: 'none', outline: 'none', marginTop: '5px' }} placeholder="Search attributes" />
            </div>
            <div style={{ width: '259px', border: "1px solid #E0E4F0", marginTop: '5px',marginBottom:'10px' }}></div>
            <div style={{ width: '259px', height: '200px', display: 'flex' }}>
                <div style={{ display: 'grid', width: '249px', height: '200px' }}>
                    <div style={{height:'40px',cursor:'pointer',display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <p style={{width:'217px',height:'18px'}}>First name</p>
                    </div>
                    <div style={{height:'40px',cursor:'pointer',display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <p style={{width:'217px',height:'18px'}}>Last name</p>
                    </div>
                    <div style={{height:'40px',cursor:'pointer',display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <p style={{width:'217px',height:'18px'}}>Email</p>
                    </div>
                    <div style={{height:'40px',cursor:'pointer',display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <p style={{width:'217px',height:'18px'}}>Phone</p>
                    </div>
                    <div style={{height:'40px',cursor:'pointer',display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <p style={{width:'217px',height:'18px'}}>Email</p>
                    </div>
                </div>
                <div style={{ width: '10px', height: '200px',display:'flex',justifyContent:'center' }}>
                    <svg width="4" height="192" viewBox="0 0 4 192" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="0.000244141" width="4" height="48" rx="2" fill="#E0E4F0" />
                    </svg>
                </div>
            </div>
        </div>
    )
}
export default FilterPerson