import React from "react";
interface TagFilterAudienceProps {
    handleBack: () => void
}
const FilterAudience: React.FC<TagFilterAudienceProps> = ({ handleBack }) => {
    return (
        <div style={{ zIndex: '9999', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginLeft: "-95px", marginTop: '50px', backgroundColor: '#fff', height: '215px', width: '353px', border: '0.5px solid #E0E4F0', borderRadius: '8px' }}>
            <div onClick={handleBack}>Khánh</div>
        </div>
    )
}
export default FilterAudience