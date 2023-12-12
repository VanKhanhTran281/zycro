import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import ExampleListContent from "./ExampleListContent";
import AddForm from "./AddForm";
import { useAppDispatch } from "../../../../../redux/store";
import { fetchContact } from "../../../../../redux/actions";
const ExampleList: React.FC = () => {
    const dispatch = useAppDispatch()
    const [showAdd, setShowAdd] = useState(false)
    const [showAddForm, setShowAddForm] = useState(false)
    const handleAdd = () => {
        setShowAdd(!showAdd)
    }
    const handleAddForm = () => {
        setShowAddForm(!showAddForm)
    }
    const handleCreateContact = () => {
        dispatch(fetchContact());
    };
    return (
        <div >
            <div style={{ width: '1300px', height: '62px', borderBottom: '1px solid #31363669' }}>
                <div style={{ display: 'flex' }}>
                    <Link to='/createlists' style={{ textDecoration: 'none', display: 'flex', marginLeft: '45px', marginTop: '20px' }}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M8.77528 3.72505C9.01935 3.96913 9.01935 4.36486 8.77527 4.60894L4.00889 9.37527H17.5C17.8452 9.37527 18.125 9.65509 18.125 10.0003C18.125 10.3454 17.8452 10.6253 17.5 10.6253H4.00888L8.77528 15.3917C9.01935 15.6357 9.01935 16.0315 8.77528 16.2755C8.5312 16.5196 8.13547 16.5196 7.89139 16.2755L2.05806 10.4422C1.94085 10.325 1.875 10.166 1.875 10.0003C1.875 9.8345 1.94085 9.67553 2.05806 9.55832L7.89139 3.72505C8.13547 3.48097 8.5312 3.48097 8.77528 3.72505Z" fill="#747085" />
                        </svg>
                        <p style={{ fontWeight: '600', color: 'black', marginLeft: '5px', marginTop: '-2px', fontSize: '16px' }}>Example list</p>
                    </Link>
                    <Link to='#' onClick={handleAdd} style={{ textDecoration: 'none', width: '150px' }}>
                        <button className="contacts_button" style={{ display: 'flex', borderRadius: '4px', marginLeft: '970px', marginTop: '16px', background: '#1677ff', color: '#fff', border: 'none', width: '110px', height: '30px' }}>
                            <AddIcon style={{ width: '20px', height: '20px', marginTop: '4px' }} />
                            <p style={{ marginTop: '7.5px', marginLeft: '8px', fontSize: '12px' }}>Add contacts</p>
                        </button>
                        {showAdd && <form style={{ marginLeft: '873px', marginTop: '5px', display: 'flex', flexDirection: 'column',justifyContent:'center',alignItems:'center', zIndex: '9999', position: 'relative', width: '209px', height: '88px', borderRadius: "8px", border: '0.5px solid #E0E4F0', backgroundColor: '#FFFFFF' }}>
                            <div onClick={handleAddForm} style={{ cursor: 'pointer', height: '40px', width: '201px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.66683 14.9998C1.57086 14.3623 0.833496 13.1708 0.833496 11.806C0.833496 10.0876 2.00254 8.64377 3.58451 8.23482C3.58383 8.19626 3.5835 8.15763 3.5835 8.11892C3.5835 4.55535 6.45634 1.6665 10.0002 1.6665C13.0177 1.6665 15.5488 3.76107 16.234 6.58324C17.9497 7.24946 19.1668 8.92393 19.1668 10.8842C19.1668 12.3921 18.4467 13.7308 17.3335 14.5717M10.0002 10.8332V18.3332M10.0002 18.3332L12.9168 15.4165M10.0002 18.3332L7.0835 15.4165" stroke="#1A2433" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p style={{ width: '141px', height: '18px', marginLeft: '5px', color: 'black', marginTop: '10px' }}>Import contacts</p>
                            </div>
                            <div onClick={handleAddForm} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '40px', width: '201px' }}>
                                <svg style={{marginLeft:"5px"}} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.1665 6.99984H6.99984M12.8332 6.99984H6.99984M6.99984 6.99984V1.1665M6.99984 6.99984V12.8332" stroke="#1A2433" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p style={{ width: '141px', height: '18px', marginLeft: '7px', color: 'black', marginTop: '10px' }}>Create a contacts</p>
                            </div>
                        </form>}
                    </Link>

                </div>
                {showAddForm&& <AddForm onClick={handleAddForm} onCreateContact={handleCreateContact}/>} 
            </div>
            <ExampleListContent />
        </div>
    )
}
export default ExampleList