import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchContact,deleteContact } from "../../../../../redux/actions";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../../../redux/store";
import {deleteContactData} from "../../../../../redux/api";
import { Table, Checkbox,message } from "antd";
import "./Example.css"
import UpdateForm from "../../../segments/CreateNewSegment/children/UpdateForm";

const ExampleListContent: React.FC = () => {
    const dispatch = useAppDispatch();
    const userData = useSelector((state: RootState) => state.user.data);
    const userDataArray = userData ? Object.values(userData) : [];
    const [showUpdate, setShowUpdate] = useState(true);
    const [valueUd, setValueUd] = useState<ContactsData | null>(null);
    const fetchData = () => {

        dispatch(fetchContact());
    }
    useEffect(() => {
        fetchData()
    }, []);
    // 
    const [activeIndex, setActiveIndex] = useState(-1);
    const [showTooltip, setShowTooltip] = useState(false);
    const [tooltipContent, setTooltipContent] = useState('');
    const handleMouseEnter = (content: string, index: number) => {
        setActiveIndex(index);
        setShowTooltip(true);
        setTooltipContent(content);
    };
    const handleMouseLeave = () => {
        setActiveIndex(-1);
        setShowTooltip(false);
        setTooltipContent('');
    };


    // Xử lý sự kiện hiện form khi bấm vào dấu 3 chấm và thao tác sửa xóa
    const [showFormArray, setShowFormArray] = useState(Array(userDataArray.length).fill(false));
    const [selectedRowIndex, setSelectedRowIndex] = useState(-1); // Chỉ số dòng được chọn, ban đầu là -1
    const handleThreeDotsClick = (index: number) => {
        if (selectedRowIndex === index) {
            setSelectedRowIndex(-1);
        } else {
            setSelectedRowIndex(index);
        }

        const updatedShowFormArray = [...showFormArray];
        updatedShowFormArray[index] = true;
        setShowFormArray(updatedShowFormArray);
    };
    const handleUpdateContact = (updateContact:ContactsData) => {
        dispatch(fetchContact());
      };
    const handleEditClick = (record:ContactsData) => {
        setShowUpdate(!showUpdate)
        setValueUd(record)
        setSelectedRowIndex(-1);
    };
    const handleDeleteClick = async (user: ContactsData) => {
        await deleteContactData(user.id);
        dispatch(deleteContact(user.id));
        dispatch(fetchContact());
        setSelectedRowIndex(-1);    
    };
    const columns = [
        {
            title: <Checkbox className="bgr" disabled />, render: () => (<Checkbox />),
        },
        { title: "First Name", dataIndex: "first_name", key: "first_name" },
        { title: "Last Name", dataIndex: "last_name", key: "last_name" },
        {
            title: "Email", dataIndex: "email", key: "email",
            render: (email: string) => {
                if (email.length > 12) {
                    return (
                        <span>
                            {email.substring(0, 11)}
                            <span style={{ color: "black" }}>...</span>
                        </span>
                    );
                } else {
                    return <span>{email}</span>;
                }
            },
        },
        { title: "Phone", dataIndex: "phone", key: "phone" },
        {
            title: "Subcribtion", key: "actions",
            render: (index: number) => (
                <div style={{ marginLeft: '5px' }}>
                    <svg width="18" height="16" viewBox="0 0 18 16" fill="none" onMouseEnter={() => handleMouseEnter('Email', index)}
                        onMouseLeave={handleMouseLeave} xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.5 5L12.75 5.5L11.6626 6.22496C10.7003 6.86647 10.2192 7.18723 9.69912 7.31185C9.23954 7.42198 8.76046 7.42198 8.30088 7.31185C7.78085 7.18723 7.29971 6.86647 6.33744 6.22496L5.25 5.5L4.5 5M6.3 14.75H11.7C13.3802 14.75 14.2202 14.75 14.862 14.423C15.4265 14.1354 15.8854 13.6765 16.173 13.112C16.5 12.4702 16.5 11.6302 16.5 9.95V6.05C16.5 4.36984 16.5 3.52976 16.173 2.88803C15.8854 2.32354 15.4265 1.8646 14.862 1.57698C14.2202 1.25 13.3802 1.25 11.7 1.25H6.3C4.61984 1.25 3.77976 1.25 3.13803 1.57698C2.57354 1.8646 2.1146 2.32354 1.82698 2.88803C1.5 3.52976 1.5 4.36984 1.5 6.05V9.95C1.5 11.6302 1.5 12.4702 1.82698 13.112C2.1146 13.6765 2.57354 14.1354 3.13803 14.423C3.77976 14.75 4.61984 14.75 6.3 14.75Z" stroke="#1A2433" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                    {showTooltip && activeIndex === index && (
                        <div className="tooltip">
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{tooltipContent}</div>
                        </div>
                    )}
                    <svg style={{ marginLeft: '5px' }} width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.5 8.25C1.5 6.62228 1.5 5.80842 1.68772 5.1428C2.15993 3.46847 3.46847 2.15993 5.1428 1.68772C5.80842 1.5 6.62228 1.5 8.25 1.5H9C11.3297 1.5 12.4946 1.5 13.4134 1.8806C14.6386 2.38807 15.6119 3.36144 16.1194 4.58658C16.5 5.50544 16.5 6.67029 16.5 9V14.3781C16.5 14.5709 16.5 14.6673 16.4941 14.7336C16.4011 15.7795 15.2899 16.4086 14.3452 15.9503C14.2853 15.9212 14.2027 15.8716 14.0374 15.7724V15.7724C13.9384 15.713 13.8889 15.6833 13.8396 15.6552C13.119 15.2448 12.3076 15.0201 11.4786 15.0013C11.4218 15 11.3641 15 11.2487 15H8.25C6.62228 15 5.80842 15 5.1428 14.8123C3.46847 14.3401 2.15993 13.0315 1.68772 11.3572C1.5 10.6916 1.5 9.87772 1.5 8.25V8.25Z" stroke="#1A2433" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <svg style={{ marginLeft: '5px' }} width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M6.42655 4.64934C6.60135 4.69683 6.72019 4.84836 6.79376 5.01386L7.46474 6.52337C7.55212 6.71995 7.51475 6.96752 7.401 7.15011C7.21608 7.44697 7.00622 7.84304 7.15414 8.15995C7.52501 8.95448 8.03851 9.43985 8.81329 9.81604C9.12983 9.96974 9.52326 9.7441 9.82019 9.55528C9.99119 9.44654 10.2324 9.40505 10.4168 9.48895L11.9904 10.2046C12.1529 10.2785 12.3015 10.3961 12.349 10.5681C12.5989 11.4718 11.5077 12.6338 10.6647 12.6338C9.83733 12.6338 9.01811 12.4709 8.25376 12.1543C7.4894 11.8377 6.7949 11.3737 6.20989 10.7888C5.62488 10.2039 5.16082 9.50945 4.84422 8.7452C4.52762 7.98095 4.36466 7.16183 4.36466 6.33461C4.36466 5.49296 5.52325 4.40395 6.42655 4.64934ZM6.73696 6.76942L6.12009 5.38164C5.99099 5.39327 5.78901 5.46327 5.5562 5.66382C5.24283 5.93378 5.12966 6.22337 5.12966 6.33461C5.12966 7.06138 5.27283 7.78104 5.55099 8.45248C5.82915 9.12393 6.23685 9.73403 6.75082 10.2479C7.2648 10.7618 7.87497 11.1695 8.54651 11.4476C9.21805 11.7257 9.93779 11.8689 10.6647 11.8689C10.7762 11.8689 11.0665 11.7553 11.3366 11.4412C11.5382 11.2067 11.6073 11.0041 11.618 10.8755L10.1904 10.2263C10.0395 10.3211 9.81936 10.4518 9.57513 10.5367C9.30933 10.629 8.89801 10.7075 8.47911 10.5041C7.56112 10.0584 6.91273 9.45138 6.46093 8.48344C6.27112 8.07681 6.33875 7.67725 6.42518 7.41121C6.50818 7.1557 6.63944 6.9274 6.73696 6.76942Z" fill="#1A2433" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M8.375 16.4979C12.7242 16.4979 16.25 12.9726 16.25 8.62397C16.25 4.2753 12.7242 0.75 8.375 0.75C4.02576 0.75 0.5 4.2753 0.5 8.62397C0.5 9.93614 0.821009 11.1733 1.38879 12.2613C1.44259 12.3644 1.45766 12.4838 1.42756 12.5961L0.533284 15.9331C0.443627 16.2677 0.749813 16.5738 1.08442 16.4842L4.43383 15.5868C4.54549 15.5569 4.66412 15.5716 4.76684 15.6247C5.84778 16.1828 7.07458 16.4979 8.375 16.4979ZM15.35 8.62397C15.35 12.4757 12.2272 15.5981 8.375 15.5981C7.2216 15.5981 6.13606 15.3188 5.17977 14.8251C4.88768 14.6743 4.53937 14.6269 4.20089 14.7176L1.60435 15.4133L2.2969 12.829C2.38813 12.4885 2.33967 12.1382 2.1867 11.8451C1.68439 10.8825 1.4 9.78777 1.4 8.62397C1.4 4.77229 4.52281 1.64988 8.375 1.64988C12.2272 1.64988 15.35 4.77229 15.35 8.62397Z" fill="#1A2433" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M6.42655 4.64934C6.60135 4.69683 6.72019 4.84836 6.79376 5.01386L7.46474 6.52337C7.55212 6.71995 7.51475 6.96752 7.401 7.15011C7.21608 7.44697 7.00622 7.84304 7.15414 8.15995C7.52501 8.95448 8.03851 9.43985 8.81329 9.81604C9.12983 9.96974 9.52326 9.7441 9.82019 9.55528C9.99119 9.44654 10.2324 9.40505 10.4168 9.48895L11.9904 10.2046C12.1529 10.2785 12.3015 10.3961 12.349 10.5681C12.5989 11.4718 11.5077 12.6338 10.6647 12.6338C9.83733 12.6338 9.01811 12.4709 8.25376 12.1543C7.4894 11.8377 6.7949 11.3737 6.20989 10.7888C5.62488 10.2039 5.16082 9.50945 4.84422 8.7452C4.52762 7.98095 4.36466 7.16183 4.36466 6.33461C4.36466 5.49296 5.52325 4.40395 6.42655 4.64934ZM6.73696 6.76942L6.12009 5.38164C5.99099 5.39327 5.78901 5.46327 5.5562 5.66382C5.24283 5.93378 5.12966 6.22337 5.12966 6.33461C5.12966 7.06138 5.27283 7.78104 5.55099 8.45248C5.82915 9.12393 6.23685 9.73403 6.75082 10.2479C7.2648 10.7618 7.87497 11.1695 8.54651 11.4476C9.21805 11.7257 9.93779 11.8689 10.6647 11.8689C10.7762 11.8689 11.0665 11.7553 11.3366 11.4412C11.5382 11.2067 11.6073 11.0041 11.618 10.8755L10.1904 10.2263C10.0395 10.3211 9.81936 10.4518 9.57513 10.5367C9.30933 10.629 8.89801 10.7075 8.47911 10.5041C7.56112 10.0584 6.91273 9.45138 6.46093 8.48344C6.27112 8.07681 6.33875 7.67725 6.42518 7.41121C6.50818 7.1557 6.63944 6.9274 6.73696 6.76942Z" stroke="#1A2433" strokeWidth="0.1" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M8.375 16.4979C12.7242 16.4979 16.25 12.9726 16.25 8.62397C16.25 4.2753 12.7242 0.75 8.375 0.75C4.02576 0.75 0.5 4.2753 0.5 8.62397C0.5 9.93614 0.821009 11.1733 1.38879 12.2613C1.44259 12.3644 1.45766 12.4838 1.42756 12.5961L0.533284 15.9331C0.443627 16.2677 0.749813 16.5738 1.08442 16.4842L4.43383 15.5868C4.54549 15.5569 4.66412 15.5716 4.76684 15.6247C5.84778 16.1828 7.07458 16.4979 8.375 16.4979ZM15.35 8.62397C15.35 12.4757 12.2272 15.5981 8.375 15.5981C7.2216 15.5981 6.13606 15.3188 5.17977 14.8251C4.88768 14.6743 4.53937 14.6269 4.20089 14.7176L1.60435 15.4133L2.2969 12.829C2.38813 12.4885 2.33967 12.1382 2.1867 11.8451C1.68439 10.8825 1.4 9.78777 1.4 8.62397C1.4 4.77229 4.52281 1.64988 8.375 1.64988C12.2272 1.64988 15.35 4.77229 15.35 8.62397Z" stroke="#1A2433" strokeWidth="0.1" />
                    </svg>
                </div>
            ),
        },

        { title: "Date Added", dataIndex: "date_added", key: "date_added" },
        { title: "Last Updated", dataIndex: "last_updated", key: "last_updated" },
        {
            title: 'Actions',
            key: 'actions',
            render: (_: any, record: ContactsData, index: number) => (
                <div style={{cursor:'pointer'}} onClick={() => handleThreeDotsClick(index)}>
                    <svg style={{ fontSize: '30px', marginLeft: '15px' }}  width="14" height="4" viewBox="0 0 14 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.25 1.5C2.6625 1.5 3 1.8375 3 2.25C3 2.6625 2.6625 3 2.25 3M2.25 1.5C1.8375 1.5 1.5 1.8375 1.5 2.25C1.5 2.6625 1.8375 3 2.25 3M2.25 1.5V3M6.75 1.5C7.1625 1.5 7.5 1.8375 7.5 2.25C7.5 2.6625 7.1625 3 6.75 3M6.75 1.5C6.3375 1.5 6 1.8375 6 2.25C6 2.6625 6.3375 3 6.75 3M6.75 1.5V3M11.75 1.5C12.1625 1.5 12.5 1.8375 12.5 2.25C12.5 2.6625 12.1625 3 11.75 3M11.75 1.5C11.3375 1.5 11 1.8375 11 2.25C11 2.6625 11.3375 3 11.75 3M11.75 1.5V3" stroke="#1A2433" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {showFormArray[index] && selectedRowIndex === index && (
                        <div
                            style={{
                                position: 'absolute',
                                top: '60px',
                                left: '-147px',
                                zIndex: 9999,
                                backgroundColor: 'white',
                                padding: '10px',
                                height: '88px',
                                width: '160px',
                                display: 'grid',
                                border: '0.5px solid rgb(224, 228, 240)',
                                borderRadius: '8px'
                            }}
                        >
                            <div style={{ marginTop: '-5px' }}>
                                <span style={{ display: 'flex', alignItems: 'center', marginLeft: '10px',cursor:'pointer' }} onClick={() => handleEditClick(record)}>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.4999 4.1665C12.4999 6.00745 13.9923 7.49984 15.8333 7.49984M3.33325 16.6665L3.78655 14.4C3.92781 13.6937 3.99844 13.3406 4.1276 13.0113C4.24225 12.719 4.39091 12.4412 4.57051 12.1837C4.77286 11.8936 5.02751 11.6389 5.53681 11.1296L13.3334 3.33316C13.5678 3.09867 13.6851 2.98143 13.7973 2.89699C14.5095 2.36092 15.4905 2.36093 16.2028 2.89702C16.3149 2.98146 16.4322 3.09871 16.6667 3.33319V3.33319C16.9011 3.56767 17.0184 3.68492 17.1028 3.79711C17.6389 4.50933 17.6389 5.49033 17.1028 6.20255C17.0184 6.31474 16.9011 6.43198 16.6666 6.66645L8.87012 14.463C8.36083 14.9723 8.10618 15.2269 7.81605 15.4293C7.55853 15.6089 7.28076 15.7575 6.98848 15.8722C6.65919 16.0013 6.30605 16.0719 5.59978 16.2132L3.33325 16.6665Z" stroke="#1A2433" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <p style={{ display: 'flex', alignItems: 'center', marginLeft: '10px' }} >Edit contact</p>
                                </span>
                                <span style={{ display: 'flex', alignItems: 'center', marginLeft: '10px',cursor:'pointer' }} onClick={() => handleDeleteClick(record)}>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.33341 4.1665L3.90098 13.815C3.99452 15.4053 4.0413 16.2005 4.38071 16.8039C4.67949 17.3351 5.13299 17.7627 5.68082 18.0298C6.30313 18.3332 7.09965 18.3332 8.69269 18.3332H11.3075C12.9005 18.3332 13.697 18.3332 14.3193 18.0298C14.8672 17.7627 15.3207 17.3351 15.6195 16.8039C15.9589 16.2005 16.0056 15.4053 16.0992 13.815L16.6667 4.1665M3.33341 4.1665H1.66675M3.33341 4.1665H16.6667M16.6667 4.1665H18.3334M13.3334 4.1665L13.0471 3.30756C12.8504 2.71744 12.752 2.42238 12.5696 2.20424C12.4085 2.0116 12.2016 1.8625 11.968 1.77059C11.7033 1.6665 11.3923 1.6665 10.7703 1.6665H9.2299C8.60787 1.6665 8.29685 1.6665 8.03221 1.77059C7.79852 1.8625 7.59164 2.0116 7.43055 2.20424C7.24812 2.42238 7.14977 2.71744 6.95306 3.30756L6.66675 4.1665M8.33342 8.33317V14.1665M11.6667 8.33317V11.6665" stroke="#E61D41" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <p style={{ marginLeft: '10px', color: '#E61D41' }} >Delete</p>
                                </span>
                            </div>
                        </div>
                    )}
                </div>
            ),
        },
    ];
    return (
        <div style={{ display: 'grid'}}>
            <div style={{ display: 'flex', width: '1200px', height: '64px',justifyContent: "space-between", padding: '24px 40px 0 40px' }}>
                <div>
                    <p style={{ fontSize: '16px', lineHeight: '19.84px' }}>{userDataArray.length} Contacts</p>
                </div>
                <div style={{ border: '1px solid #E0E4F0 ', marginTop: '7px', display: 'flex', borderRadius: '8px', width: '335px', height: '40px' }}>
                    <svg style={{ padding: '8px' }} width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 20L16.364 16.364M16.364 16.364C17.9926 14.7353 19 12.4853 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19C12.4853 19 14.7353 17.9926 16.364 16.364Z" stroke="#586374" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                    <input style={{ outline: 'none', border: 'none', width: '287px', height: '18px', marginLeft: '5px', marginTop: "13px" }} placeholder="Search by email, name or phone..." />
                </div>
            </div>
            {userDataArray.length > 0 && (
                <Table style={{width:'1200px',marginLeft:'45px'}} dataSource={userDataArray} columns={columns} pagination={false} className="your-table" />
            )}
            {!showUpdate&&<UpdateForm valueUd={valueUd} onUpdate={handleUpdateContact} handleEditClick={handleEditClick} />}
        </div>

    )
}
export default ExampleListContent