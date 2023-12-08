import React from "react";
interface TagFilterAudienceProps {
    handleBack: () => void
}
const FilterAudience: React.FC<TagFilterAudienceProps> = ({ handleBack }) => {
    return (
        <div style={{ zIndex: '9999', display: 'flex', flexDirection: 'column',justifyContent:'center', alignItems: 'center', marginLeft: "-95px", marginTop: '50px', backgroundColor: '#fff', height: '215px', width: '353px', border: '0.5px solid #E0E4F0', borderRadius: '8px' }}>
            <div style={{ height: '32px', display: "flex", alignItems: 'center' }}>
                <div onClick={handleBack} style={{ cursor: 'pointer',marginTop:'-10px', display: "flex", alignItems: 'center', height: '20px', width: '309px' }}>
                    <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.83333 1.16699L1 7.00027M1 7.00027L6.83333 12.8336M1 7.00027H16" stroke="#1A2433" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p style={{marginTop:'0',marginBottom:'0',marginLeft:'5px'}}>Audience</p>
                </div>
            </div>
            <div style={{ height: '32px', width: '341px',display:'flex',alignItems:'center',justifyContent:'center', border: '1px solid #E0E4F0', borderRadius: '8px' }}>
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.25 15.7502L12.523 13.0232M12.523 13.0232C13.7445 11.8017 14.5 10.1142 14.5 8.25024C14.5 4.52232 11.4779 1.50024 7.75 1.50024C4.02208 1.50024 1 4.52232 1 8.25024C1 11.9782 4.02208 15.0002 7.75 15.0002C9.61396 15.0002 11.3015 14.2447 12.523 13.0232Z" stroke="#586374" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
                <input style={{ width: '299px', marginLeft: '5px', height: '16px', border: 'none', outline: 'none', marginTop: '5px' }} placeholder="Search attributes" />
            </div>
            <div style={{width:'341px',border:"1px solid #E0E4F0",marginTop:'5px'}}></div>
            <div style={{width:'341px',height:'120px'}}>
                <div style={{display:'grid'}}>
                    <div style={{height:'40px',cursor:'pointer',display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <p style={{width:'309px',height:'18px'}}>Member of audience</p>
                    </div>
                    <div style={{height:'40px',cursor:'pointer',display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <p style={{width:'309px',height:'18px'}}>Subscriber of audience</p>
                    </div>
                    <div style={{height:'40px',cursor:'pointer',display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <p style={{width:'309px',height:'18px'}}>Subscriber of SMS audience</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FilterAudience