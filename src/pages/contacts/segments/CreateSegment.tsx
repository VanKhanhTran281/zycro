import { Link } from "react-router-dom";
import CardSegmentItem from "./CardSegmentItem";
const CreateSegments=()=>{
    return (
        <div style={{ display: 'grid' }}>
            <div className="header-crl">
                <div className="">
                    <Link to='/segment' style={{textDecoration:'none',width:"1084px",display:'flex',marginLeft:'45px',marginTop:'20px'}}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M8.77528 3.72505C9.01935 3.96913 9.01935 4.36486 8.77527 4.60894L4.00889 9.37527H17.5C17.8452 9.37527 18.125 9.65509 18.125 10.0003C18.125 10.3454 17.8452 10.6253 17.5 10.6253H4.00888L8.77528 15.3917C9.01935 15.6357 9.01935 16.0315 8.77528 16.2755C8.5312 16.5196 8.13547 16.5196 7.89139 16.2755L2.05806 10.4422C1.94085 10.325 1.875 10.166 1.875 10.0003C1.875 9.8345 1.94085 9.67553 2.05806 9.55832L7.89139 3.72505C8.13547 3.48097 8.5312 3.48097 8.77528 3.72505Z" fill="#747085" />
                        </svg>
                        <p style={{fontWeight:'600',color:'black',marginLeft:'5px',marginTop:'-2px',fontSize:'16px'}}>Create a new segment</p>
                    </Link>
                </div>
                <div style={{gap:'24px',width:'1120px',height:'376px',marginLeft:'45px',marginTop:'50px'}}>
                    <p style={{marginTop:'5px',fontSize:'16px',lineHeight:'19.84px'}}>Create a custom segment or use our suggested segments</p>
                    <CardSegmentItem/>
                </div>
                
            </div>
        </div>
    )
}
export default CreateSegments