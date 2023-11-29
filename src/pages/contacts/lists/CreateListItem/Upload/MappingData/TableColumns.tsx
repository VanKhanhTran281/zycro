import React from "react";
interface Data {
    field?: string;
    eg?: string;
}
interface TableColumnsProps {
    data: Data;
}
const TableColumns: React.FC<TableColumnsProps> = ({ data }) => {
    return (
        <div style={{ height: '94px', width: '372px', marginBottom: '8px', marginTop: '8px' }}>
            <div style={{ marginTop: '-21px' }}>
                <p style={{ marginBottom: '0', fontSize: '16px' }}>{data?.field}</p>
                <p style={{ marginBottom: '4px', marginTop: '-4px', color: '#586374' }}>{data?.eg}</p>
            </div>
            <div style={{ borderRadius: '10px', backgroundColor: '#FFFFFF', border: "1px dashed #3490F6", display: 'flex', justifyContent: 'center' }}>
                <p>Drag attribute field here to map</p>
            </div>
        </div>
    )
}
export default TableColumns