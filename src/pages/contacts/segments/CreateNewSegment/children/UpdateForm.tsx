import { useState, useEffect } from 'react'
import { useAppDispatch } from '../../../../../redux/store';
import { updateContact, fetchContact } from '../../../../../redux/actions'
import { patchContactData } from '../../../../../redux/api';
import dayjs from 'dayjs';
import 'dayjs/locale/en';
interface ChildComponentProps {
    handleEditClick: (record: ContactsData) => void;
    onUpdate: (updateContact: ContactsData) => void;
    valueUd: ContactsData | null
}
const UpdateForm: React.FC<ChildComponentProps> = ({ handleEditClick, valueUd, onUpdate }) => {
    const dispatch = useAppDispatch();
    const [updatedContact, setUpdatedContact] = useState({
        id: '',
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
    });
    useEffect(() => {
        if (valueUd) {
            const updatedContactWithIdAsString = {
                ...valueUd,
                id: String(valueUd.id),
            };
            setUpdatedContact(updatedContactWithIdAsString);
        }
    }, [valueUd]);
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (valueUd && valueUd.id !== undefined) {
            const currentDate = dayjs().locale('en').format('MMM DD, YYYY');
            const updatedContacts: ContactsData = {
                ...valueUd,
                first_name: updatedContact.first_name || valueUd?.first_name,
                last_name: updatedContact.last_name || valueUd?.last_name,
                email: updatedContact.email || valueUd?.email,
                phone: updatedContact.phone || valueUd?.phone,
                last_updated: currentDate
            };
            const updatedUserData = await patchContactData(updatedContacts);
            await dispatch(updateContact(updatedUserData));
            await dispatch(fetchContact());
            onUpdate(updatedUserData);
        }
    };
    return (
        <div>
            <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: '#1e201f99', zIndex: 9999, }} />
            <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '533px', height: '312px', borderRadius: '16px', backgroundColor: '#FFFFFF', zIndex: 9999, display: 'flex', flexDirection: 'column' }}>
                <div style={{ height: '56px', display: 'flex', marginLeft: '25px', alignItems: 'center' }}>
                    <p style={{ height: '20px', width: '453px', fontSize: '16px', fontWeight: '700' }}>Edit contact</p>
                    <svg onClick={() => valueUd && handleEditClick(valueUd)} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 13L13 1M1 1L13 13" stroke="#1E201F" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <div style={{ height: '184px', marginTop: '-5px', padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ display: 'flex' }}>
                        <div>
                            <label style={{ width: '234.5px', height: '16px', fontSize: '12px' }}>First name</label>
                            <div style={{ width: '234.5px', height: '40px', border: '1px solid #E0E4F0', borderRadius: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <input style={{ outline: 'none', border: 'none', width: '210.5px', height: '18px' }} value={updatedContact?.first_name} onChange={(event) => setUpdatedContact({ ...updatedContact, first_name: event.target.value })} />
                            </div>
                        </div>
                        <div style={{ marginLeft: "10px" }}>
                            <label style={{ width: '234.5px', height: '16px', fontSize: '12px' }}>Last name</label>
                            <div style={{ width: '234.5px', height: '40px', border: '1px solid #E0E4F0', borderRadius: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <input style={{ outline: 'none', border: 'none', width: '210.5px', height: '18px' }} value={updatedContact?.last_name} onChange={(event) => setUpdatedContact({ ...updatedContact, last_name: event.target.value })} />
                            </div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', marginTop: '10px' }}>
                        <div>
                            <label style={{ width: '234.5px', height: '16px', fontSize: '12px' }}>Email</label>
                            <div style={{ width: '234.5px', height: '40px', border: '1px solid #E0E4F0', borderRadius: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <input style={{ outline: 'none', border: 'none', width: '210.5px', height: '18px' }} value={updatedContact?.email} onChange={(event) => setUpdatedContact({ ...updatedContact, email: event.target.value })} />
                            </div>
                        </div>
                        <div style={{ marginLeft: "10px" }}>
                            <label style={{ width: '234.5px', height: '16px', fontSize: '12px' }}>Phone</label>
                            <div style={{ width: '234.5px', height: '40px', border: '1px solid #E0E4F0', borderRadius: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <input style={{ outline: 'none', border: 'none', width: '210.5px', height: '18px' }} value={updatedContact?.phone} onChange={(event) => setUpdatedContact({ ...updatedContact, phone: event.target.value })} />
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ height: '72px', display: 'flex', justifyContent: 'center' }}>
                    <div style={{ width: '485px', height: '40px', display: 'flex' }}>
                        <button style={{ color: '#3490F6', width: '79px', marginLeft: '265px', borderRadius: '8px', border: '1px solid #3490F6', backgroundColor: '#FFFFFF' }} onClick={() => valueUd && handleEditClick(valueUd)}>Cancel</button>
                        <button style={{ color: '#FFFFFF', width: '126px', marginLeft: '12px', borderRadius: '8px', border: 'none', backgroundColor: '#3490F6' }} onClick={handleSubmit}>Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateForm;