import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import {useAppDispatch } from '../../../../../redux/store';
import '../Upload/UploadContacts.css'
import SaveList from '../Upload/SaveList/SaveList';
import MappingData from '../Upload/MappingData/MappingData';
import ShowExample from './ShowExample';

const CopyContacts = () => {
    const dispatch = useAppDispatch();
    const [isDivVisible, setDivVisible] = useState(true);

    const toggleDiv = () => {
        setDivVisible(!isDivVisible);
    };
    return (
        <div style={{ display: 'grid' }}>
            <div className="header-crl">
                <div className="">
                    <Link to='/createlists' style={{ textDecoration: 'none', display: 'flex', width: "90px", marginLeft: '45px', marginTop: '20px' }}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M8.77528 3.72505C9.01935 3.96913 9.01935 4.36486 8.77527 4.60894L4.00889 9.37527H17.5C17.8452 9.37527 18.125 9.65509 18.125 10.0003C18.125 10.3454 17.8452 10.6253 17.5 10.6253H4.00888L8.77528 15.3917C9.01935 15.6357 9.01935 16.0315 8.77528 16.2755C8.5312 16.5196 8.13547 16.5196 7.89139 16.2755L2.05806 10.4422C1.94085 10.325 1.875 10.166 1.875 10.0003C1.875 9.8345 1.94085 9.67553 2.05806 9.55832L7.89139 3.72505C8.13547 3.48097 8.5312 3.48097 8.77528 3.72505Z" fill="#747085" />
                        </svg>
                        <p style={{ fontWeight: '600', color: 'black', marginLeft: '5px', marginTop: '-2px', fontSize: '16px' }}>Back</p>
                    </Link>
                </div>
            </div>
            <div style={{ marginLeft: '45px', width: "880px" }}>
                <div>
                    <h2 style={{ display: 'flex', marginBottom: '0', height: '31px' }}>
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="0.5" width="24" height="24" rx="12" fill="#3490F6" />
                            <path d="M13.3146 7.77273V16.5H11.9936V9.09375H11.9425L9.8544 10.4574V9.19602L12.032 7.77273H13.3146Z" fill="white" />
                        </svg>
                        <p style={{ marginTop: '-0.5px', marginLeft: '10px' }}>Copy/Paste contacts</p>
                    </h2>
                    <form style={{ width: '880px', marginTop: '26px' }}>
                        <div style={{ display: 'flex', width: '880px', height: '20px', justifyContent: 'space-between' }}>
                            <p style={{ fontWeight: '700', lineHeight: '19.04px', marginTop: '0' }}>Copy/Paste your contacts from a file</p>
                            <Link to='#' onClick={toggleDiv} style={{ textDecoration: "none", color: "#3490F6" }}>
                                <div style={{ display: 'flex' }}>
                                    {isDivVisible ? (
                                        <svg style={{ marginTop: '2.5px' }} width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16.5 7C16.5 8.875 14.25 13 9 13C3.75 13 1.5 8.875 1.5 7C1.5 5.125 3.75 1 9 1C14.25 1 16.5 5.125 16.5 7Z" stroke="#3490F6" strokeWidth="1.2" strokeLinecap="round" />
                                            <path d="M11.25 7C11.25 8.24264 10.2426 9.25 9 9.25C7.75736 9.25 6.75 8.24264 6.75 7C6.75 5.75736 7.75736 4.75 9 4.75C10.2426 4.75 11.25 5.75736 11.25 7Z" stroke="#3490F6" strokeWidth="1.2" strokeLinecap="round" />
                                        </svg>
                                    ) : (
                                        <svg style={{ marginTop: '1.5px' }} width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.25 1.25024L4.36933 3.36958M15.75 14.7502L13.6307 12.6309M13.6307 12.6309C12.4719 13.4364 10.941 14.0002 9 14.0002C3.75 14.0002 1.5 9.87524 1.5 8.00024C1.5 6.81845 2.39385 4.74281 4.36933 3.36958M13.6307 12.6309L10.591 9.5912M4.36933 3.36958L7.40898 6.40922M7.40898 6.40922C7.00179 6.81639 6.74993 7.37891 6.74993 8.00024C6.74993 9.24288 7.75729 10.2502 8.99993 10.2502C9.62127 10.2502 10.1838 9.99839 10.591 9.5912M7.40898 6.40922L10.591 9.5912M15.3148 11.0002C15.4073 10.8758 15.4942 10.7506 15.5756 10.6252C16.2038 9.65704 16.5 8.68054 16.5 8.00024C16.5 6.12524 14.25 2.00024 9 2.00024C8.17726 2.00024 7.4282 2.10155 6.74993 2.27962C6.62246 2.31309 6.49749 2.34927 6.375 2.38799" stroke="#3490F6" strokeWidth="1.2" strokeLinecap="round" />
                                        </svg>)}
                                    <p style={{ marginTop: '-2px', marginLeft: '5px', marginBottom: '0' }}>Show the syntax example</p>
                                </div>
                            </Link>
                        </div>
                        {!isDivVisible && <ShowExample/>}
                        <div style={{ marginTop: '16px', display: 'grid' }}>
                            <div style={{ height: '200px', borderRadius: '8px', border: '1px solid #F7F8FA', display: 'flex' }}>
                                <div style={{ width: "24px", display: 'flex', flexDirection: 'column', height: '200px', borderTopLeftRadius: '8px', borderBottomLeftRadius: '8px', backgroundColor: "#F7F8FA" }}>
                                    <p style={{ fontSize: '12px', lineHeight: '15.6px', marginLeft: "7px", color: '#586374' }}>1</p>
                                    <p style={{ fontSize: '12px', lineHeight: '15.6px', marginTop: '-10px', marginLeft: "7px", color: '#586374' }}>2</p>
                                    <p style={{ fontSize: '12px', lineHeight: '15.6px', marginTop: '-10px', marginLeft: "7px", color: '#586374' }}>3</p>
                                </div>
                                <div style={{ height: '200px', width: '852px' }}>
                                    <p style={{ fontSize: '12px', lineHeight: '15.6px', marginLeft: "7px", color: '#ABB4C2' }}> junie@example.com,Junie,0682145672,2019-01-15,1</p>
                                    <p style={{ fontSize: '12px', lineHeight: '15.6px', marginTop: '-10px', marginLeft: "7px", color: '#ABB4C2' }}>john@example.com,John,0745632109,2019-03-10,2</p>
                                    <p style={{ fontSize: '12px', lineHeight: '15.6px', marginTop: '-10px', marginLeft: "7px", color: '#ABB4C2' }}>marc@example.com,Marc,0675489125,2019-08-22,1</p>
                                </div>
                            </div>
                            <p style={{ marginTop: '6px', fontWeight: '500', lineHeight: '19.6px' }}>We don’t sell or use your data for any commercial purposes</p>
                        </div>
                    </form>
                    <div style={{ height: '40px', marginTop: '24px' }}>
                        <button style={{ width: '71px', height: '40px', borderRadius: '8px', backgroundColor: '#FFFFFF', border: '1px solid #3490F6', color: '#3490F6' }}>Reset</button>
                        <button style={{ width: '135px', marginLeft: '15px', height: '40px', border: 'none', backgroundColor: "#E6E8EF", color: '#ABB4C2', borderRadius: '8px' }}>Check the data</button>
                    </div>
                    <div style={{ borderBottom: '1px solid #E0E4F0', marginTop: '30px' }}></div>
                </div>
                {/* Phần Mapping data */}
                <MappingData />
                {/* Phần Save list */}
                <SaveList />
            </div>
        </div>

    );
};

export default CopyContacts;