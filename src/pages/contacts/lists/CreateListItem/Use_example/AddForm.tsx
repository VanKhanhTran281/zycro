import { useState } from "react";
import { Checkbox, Button } from "antd";
import { useAppDispatch } from "../../../../../redux/store";
import {createContact} from '../../../../../redux/actions'
interface ComponentProps {
    onClick: () => void;
    onCreateContact:()=> void;
}
const AddForm: React.FC<ComponentProps> = ({ onClick,onCreateContact }) => {
    const dispatch=useAppDispatch()
    const [contactData, setContactData] = useState<ContactsAddData>({
        first_name: '',
        last_name: '',
        email: '',
        phone:''
      });
    const resetForm=()=>{
        setContactData({
            first_name: '',
        last_name: '',
        email: '',
        phone:''
        })
    }
    const handleListChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setContactData({
          ...contactData, [name]:value
        });
      };
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
    
        await dispatch(createContact(contactData));
        onCreateContact();
        resetForm();
    };
    return (
        <>
            <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: '#1e201f99', zIndex: 9999, }} />
            <div style={{ position: 'fixed', top: '50%', left: '81.5%', transform: 'translate(-50%, -50%)', zIndex: 9999, width: "560px", height: '780px', backgroundColor: '#fff' }}>
                <div style={{ height: '64px', display: 'flex', marginLeft: '25px', alignItems: 'center' }}>
                    <p style={{ height: '20px', width: '476px', fontSize: '16px', fontWeight: '700', marginTop: '30px' }}>Edit contact</p>
                    <svg style={{ marginTop: '20px', marginLeft: '20px' }} onClick={onClick} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 13L13 1M1 1L13 13" stroke="#1E201F" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <div style={{ borderTop: '1px solid #E0E4F0', height: '630px', display: 'flex', justifyContent: 'center' }}>
                    <form style={{ width: '512px', height: '360px', marginTop: '24px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between',marginTop:'-7px',marginBottom:'20px' }}>
                            <div>
                                <label style={{ width: '234.5px', height: '16px', fontSize: '12px' }}>Label</label>
                                <div style={{ width: '248px', height: '40px', border: '1px solid #E0E4F0', borderRadius: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <input style={{ outline: 'none', border: 'none', width: '210.5px', height: '18px' }} placeholder="First name" name="first_name" value={contactData.first_name} onChange={handleListChange} />
                                </div>
                            </div>
                            <div>
                                <label style={{ width: '234.5px', height: '16px', fontSize: '12px' }}>Label</label>
                                <div style={{ width: '248px', height: '40px', border: '1px solid #E0E4F0', borderRadius: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <input style={{ outline: 'none', border: 'none', width: '210.5px', height: '18px' }} placeholder="Last name" name="last_name" value={contactData.last_name} onChange={handleListChange} />
                                </div>
                            </div>
                        </div>
                        <div style={{ width: '512px',marginBottom:'20px' }}>
                            <label style={{ width: '512px', height: '16px', fontSize: '12px' }}>Label</label>
                            <div style={{ width: '512px', height: '40px', border: '1px solid #E0E4F0', borderRadius: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <input style={{ outline: 'none', border: 'none', width: '488px', height: '18px' }} placeholder="Email address" name="email" value={contactData.email} onChange={handleListChange} />
                            </div>
                        </div>
                        <div style={{ width: '512px',marginBottom:'20px' }}>
                            <label style={{ width: '512px', height: '16px', fontSize: '12px' }}>Label</label>
                            <div style={{ width: '512px', height: '40px', border: '1px solid #E0E4F0', borderRadius: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div style={{ width: '44px', height: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_509_17512)">
                                            <mask id="mask0_509_17512" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="3" width="24" height="18">
                                                <rect y="3" width="24" height="18" fill="white" />
                                            </mask>
                                            <g mask="url(#mask0_509_17512)">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M0 15H24V21H0V15Z" fill="#FFD018" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M0 9H24V15H0V9Z" fill="#E31D1C" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M0 3H24V9H0V3Z" fill="#1A2433" />
                                            </g>
                                        </g>
                                        <rect x="0.375" y="3.375" width="23.25" height="17.25" rx="3.625" stroke="#2A3342" strokeOpacity="0.1" strokeWidth="0.75" />
                                    </svg>
                                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1L5 5L9 1" stroke="#1A2433" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <input style={{ outline: 'none', border: 'none', width: '440px', marginLeft: '10px', height: '18px' }} placeholder="000 000 000" name="phone" value={contactData.phone} onChange={handleListChange} />
                            </div>
                        </div>
                        <div style={{ height: '44px',marginBottom:'24px' }}>
                            <label style={{ width: '512px', height: '16px', fontSize: '12px' }}>Subscribtion type</label>
                            <div style={{ height: '20px', display: 'flex' }}>
                                <div style={{ height: '20px', width: '62px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Checkbox />
                                    <p>Email</p>
                                </div>
                                <div style={{ height: '20px', marginLeft: '20px', width: '62px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Checkbox />
                                    <p>SMS</p>
                                </div>
                                <div style={{ height: '20px', marginLeft: '20px', width: '93px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Checkbox />
                                    <p>Whatsapp</p>
                                </div>
                            </div>
                        </div>
                        <Button style={{ width: '142px',border:'1px solid #3490F6', height: '40px', display: 'flex' ,alignItems:'center'}}>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.1665 7.00008H6.99984M12.8332 7.00008H6.99984M6.99984 7.00008V1.16675M6.99984 7.00008V12.8334" stroke="#3490F6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <p style={{color:'#3490F6',marginLeft:'10px'}}>Add contact</p>
                        </Button>
                    </form>
                </div>
                <div style={{borderTop:'1px solid #E0E4F0',display:'flex',alignItems:'center',height:'72px',justifyContent:'space-between'}}>
                    <Button onClick={onClick} style={{height:'40px',width:'79px',border:'1px solid #3490F6',color:'#3490F6',marginLeft:'24px'}}>Cancel</Button>
                    <Button onClick={handleSubmit} style={{height:'40px',width:'132px',border:'none',backgroundColor:'#3490F6',color:'#FFFFFF',marginRight:'24px'}}>Create contact</Button>
                </div>
            </div>
        </>
    )
}
export default AddForm