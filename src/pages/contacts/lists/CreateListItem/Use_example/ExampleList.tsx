import { Link} from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import ExampleListContent from "./ExampleListContent";
const ExampleList=()=>{
    return (
        <div style={{ display: 'grid' }}>
            <div style={{width:'1300px',height:'62px',borderBottom:'1px solid #31363669'}}>
                <div style={{display:'flex'}}>
                    <Link to='/createlists' style={{textDecoration:'none',display:'flex',marginLeft:'45px',marginTop:'20px'}}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M8.77528 3.72505C9.01935 3.96913 9.01935 4.36486 8.77527 4.60894L4.00889 9.37527H17.5C17.8452 9.37527 18.125 9.65509 18.125 10.0003C18.125 10.3454 17.8452 10.6253 17.5 10.6253H4.00888L8.77528 15.3917C9.01935 15.6357 9.01935 16.0315 8.77528 16.2755C8.5312 16.5196 8.13547 16.5196 7.89139 16.2755L2.05806 10.4422C1.94085 10.325 1.875 10.166 1.875 10.0003C1.875 9.8345 1.94085 9.67553 2.05806 9.55832L7.89139 3.72505C8.13547 3.48097 8.5312 3.48097 8.77528 3.72505Z" fill="#747085" />
                        </svg>
                        <p style={{fontWeight:'600',color:'black',marginLeft:'5px',marginTop:'-2px',fontSize:'16px'}}>Example list</p>
                    </Link>
                    <Link to='/createlists'style={{textDecoration:'none',width:'150px'}}>
                        <button className="contacts_button" style={{ display:'flex',borderRadius:'4px',marginLeft:'970px',marginTop:'16px',background:'#1677ff',color:'#fff',border:'none',width:'110px',height:'30px'}}>
                        <AddIcon style={{width:'20px',height:'20px',marginTop:'4px'}}/>
                        <p style={{marginTop:'7.5px',marginLeft:'8px',fontSize:'12px'}}>Add contacts</p>
                        </button>
                    </Link>
                </div>
            </div>
            <ExampleListContent/>
            
        </div>
    )
}
export default ExampleList