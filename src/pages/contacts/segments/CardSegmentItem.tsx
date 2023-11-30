import React from "react";
import { Card } from 'antd';
import { Link } from "react-router-dom";
const CardSegmentItem = () => {
    return (
        <div style={{ display: 'grid' }}>
            <div style={{ display: 'flex' }}>
                <Card style={{ width: '362.67px', height: '180px',padding:'20px', borderRadius: '12px', border: '1px solid #E0E4F0' }}>
                    <div style={{marginTop:'-21.06px',marginLeft:'-10px'}}>
                        <svg style={{marginBottom:'-8px'}} width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="52" height="52" rx="4" fill="#F7F8FA" />
                            <path d="M19 26H26M33 26H26M26 26V19M26 26V33" stroke="#3490F6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <div>
                            <p style={{fontSize:'20px',lineHeight:'24px',fontWeight:'700',marginBottom:'0'}}>New custome segment</p>
                            <p style={{fontSize:'16px',lineHeight:'19.84px',fontWeight:'400',marginTop:'5px',width:'322.67px'}}>Create you own segment from scratch for future campaigns</p>
                        </div>
                    </div>
                </Card>
            </div>
            <div style={{ display: 'flex' }}>

            </div>
        </div>
    )
}
export default CardSegmentItem