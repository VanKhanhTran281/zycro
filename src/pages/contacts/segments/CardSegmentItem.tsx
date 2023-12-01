import React from "react";
import { Card } from 'antd';
import { useNavigate } from 'react-router-dom';
import { DataSM, DataSM2 } from './DataSegment'
import './CreateSegment.css'
const CardSegmentItem = () => {
    const navigate = useNavigate();
    const handleClick = (path: string) => {
        navigate(path);
    };
    return (
        <div style={{ display: 'grid' }}>
            <div style={{ display: 'flex' }}>
                {DataSM.map((card, index) => (
                    <Card className="hover" key={index} onClick={() => handleClick(card.path)} style={{ marginRight: "20px", width: '362.67px', height: '180px', padding: '20px', borderRadius: '12px', border: '1px solid #E0E4F0' }}>
                        <div  style={{ marginTop: '-21.06px', marginLeft: '-10px' }}>
                            {card.img}
                            <div>
                                <p style={{ fontSize: '20px', lineHeight: '24px', fontWeight: '700', marginBottom: '0' }}>{card.title}</p>
                                <p style={{ fontSize: '16px', lineHeight: '19.84px', fontWeight: '400', marginTop: '5px', width: '322.67px' }}>{card.description}</p>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
            <div style={{ display: 'flex', marginTop: '20px' }}>
                {DataSM2.map((card, index) => (
                    <Card className="hover" key={index} onClick={() => handleClick(card.path)} style={{ marginRight: "20px", width: '362.67px', height: '180px', padding: '20px', borderRadius: '12px', border: '1px solid #E0E4F0' }}>
                        <div style={{ marginTop: '-21.06px', marginLeft: '-10px' }}>
                            {card.img}
                            <div>
                                <p style={{ fontSize: '20px', lineHeight: '24px', fontWeight: '700', marginBottom: '0' }}>{card.title}</p>
                                <p style={{ fontSize: '16px', lineHeight: '19.84px', fontWeight: '400', marginTop: '5px', width: '301.67px' }}>{card.description}</p>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    )
}
export default CardSegmentItem