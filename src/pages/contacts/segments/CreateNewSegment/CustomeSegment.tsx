import { Link} from "react-router-dom";
import CustomeSegmentContent from "./CustomeSegmentContent";
const CustomeSegment =()=>{
    return(
        <div style={{ display: 'grid' }}>
            <div style={{width:'1300px',height:'72px',borderBottom:'1px solid #31363669'}}>
                <div style={{display:'flex'}}>
                    <Link to='/createsegments' style={{textDecoration:'none',display:'flex',marginLeft:'45px',marginTop:'25px'}}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M8.77528 3.72505C9.01935 3.96913 9.01935 4.36486 8.77527 4.60894L4.00889 9.37527H17.5C17.8452 9.37527 18.125 9.65509 18.125 10.0003C18.125 10.3454 17.8452 10.6253 17.5 10.6253H4.00888L8.77528 15.3917C9.01935 15.6357 9.01935 16.0315 8.77528 16.2755C8.5312 16.5196 8.13547 16.5196 7.89139 16.2755L2.05806 10.4422C1.94085 10.325 1.875 10.166 1.875 10.0003C1.875 9.8345 1.94085 9.67553 2.05806 9.55832L7.89139 3.72505C8.13547 3.48097 8.5312 3.48097 8.77528 3.72505Z" fill="#747085" />
                        </svg>
                        <p style={{fontWeight:'600',color:'black',marginLeft:'5px',marginTop:'-2px',fontSize:'16px'}}>New custom segment</p>
                    </Link>
                    <Link to='/createsegments'style={{textDecoration:'none',width:'147px'}}>
                        <button className="contacts_button" style={{ display:'flex',justifyContent:'center',alignItems:'center',width:'147px',borderRadius:'8px',marginLeft:'866px',marginTop:'15px',background:'#1677ff',color:'#fff',border:'none',height:'40px'}}>
                            <p style={{fontSize:'14px',fontWeight:'500',lineHeight:"19.6px"}}>Save as segment</p>
                        </button>
                    </Link>
                </div>

            </div> 
            <CustomeSegmentContent/>
        </div>
    )
}
export default CustomeSegment