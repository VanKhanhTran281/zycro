import React, { useState } from 'react'
import * as text from './text';

const ShowExample = () => {
    const [isDropdown, setIsDropdown] = useState<boolean>(true);
    const [selectedOption, setSelectedOption] = useState('Comma');
    const [content, setContent] = useState(text.comma);
    const handleUpdateExisting = () => {
        setIsDropdown(!isDropdown);
    };
    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
        setIsDropdown(!isDropdown);
        if (option === 'Comma') {
            setContent(text.comma);
        } else if (option === 'Semicolon') {
            setContent(text.semicolon);
        } else if (option === 'Tabulation') {
            setContent(text.tabulation);
        }
    };
    return (
        <div style={{ marginTop: '16px', height: '232px', borderRadius: '8px', backgroundColor: '#F7F8FA' }}>
            <div style={{ height: '52px', display: 'flex' }}>
                <svg style={{ marginLeft: '15px', marginTop: '16px', marginRight: '5px' }} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.00002 12.3332V8.1665M9.41669 5.6665C9.41669 5.89662 9.23014 6.08317 9.00002 6.08317M9.41669 5.6665C9.41669 5.43639 9.23014 5.24984 9.00002 5.24984M9.41669 5.6665H9.00002M9.00002 6.08317C8.7699 6.08317 8.58335 5.89662 8.58335 5.6665M9.00002 6.08317V5.6665M8.58335 5.6665C8.58335 5.43639 8.7699 5.24984 9.00002 5.24984M8.58335 5.6665H9.00002M9.00002 5.24984V5.6665M17.3334 8.99984C17.3334 13.6022 13.6024 17.3332 9.00002 17.3332C4.39765 17.3332 0.666687 13.6022 0.666687 8.99984C0.666687 4.39746 4.39765 0.666504 9.00002 0.666504C13.6024 0.666504 17.3334 4.39746 17.3334 8.99984Z" stroke="#586374" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p style={{ width: '796px' }}>Example of expected syntax</p>
                <svg style={{ marginLeft: '15px', marginTop: '20px',cursor:'pointer'}} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 11L11 1M1 1L11 11" stroke="#1A2433" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            <div style={{ height: '180px', display: 'grid' }}>
                <div style={{ marginLeft: '16px' }}>
                    <div style={{ width: '848px', display: 'grid', height: '124px', border: '1px solid #E0E4F0', borderRadius: '4px', backgroundColor: '#FFFFFF' }}>
                        <div style={{ display: 'flex' }}>
                            <div style={{ height: '52px', width: '808px' }}>
                                <div style={{ display: 'flex', height: '32px', marginLeft: '5px' }}>
                                    <p style={{ marginTop: '11px' }}>Separator:</p>
                                    <div onClick={handleUpdateExisting} style={{ border: isDropdown ? '1px solid #E0E4F0' : '1px solid #3490F6', width: '111px',cursor:'pointer', marginLeft: '9px', marginTop: '7px', display: 'flex', alignItems: 'center', borderRadius: '8px', height: '32px' }}>
                                        <input readOnly style={{ outline: 'none', border: 'none',cursor:'pointer', width: '63px', height: '18px', marginLeft: '9px' }} placeholder={selectedOption} />
                                        <svg style={{ transform: isDropdown ? 'rotate(180deg)' : 'none', marginLeft: '10px' }} width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 7L7 1L13 7" stroke="#1A2433" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                                {!isDropdown && (
                                    <div style={{ borderRadius: '8px',cursor:'pointer', border: '0.5px solid #E0E4F0', marginLeft: '78px', marginTop: '15px', width: "154px", height: '128px', position: 'relative', backgroundColor: '#fff', zIndex: '9999' }}>
                                        <div style={{ display: 'grid', marginTop: '20px', marginLeft: '18px' }}>
                                            <div style={{ marginTop: '-3px', width: '154px', height: '40px' }}>
                                                <span onClick={() => handleOptionClick('Comma')}>Comma</span>
                                            </div>
                                            <div style={{ marginTop: '-3px', height: '40px' }}>
                                                <span onClick={() => handleOptionClick('Semicolon')}>Semicolon</span>
                                            </div>
                                            <div style={{ marginTop: '-3px', height: '40px' }}>
                                                <span onClick={() => handleOptionClick('Tabulation')}>Tabulation</span>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <svg style={{ marginTop: "11px",cursor:'pointer' }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.4723 8.6665V8.6665C16.2724 8.6665 16.6724 8.6665 17.0065 8.72354C18.6799 9.00921 19.9907 10.32 20.2764 11.9934C20.3334 12.3275 20.3334 12.7276 20.3334 13.5276V14.4998C20.3334 16.2073 20.3334 17.061 20.0771 17.7422C19.6713 18.8202 18.8205 19.671 17.7424 20.0768C17.0613 20.3332 16.2075 20.3332 14.5001 20.3332H13.5279C12.7278 20.3332 12.3278 20.3332 11.9937 20.2761C10.3203 19.9905 9.00947 18.6797 8.7238 17.0063C8.66676 16.6721 8.66676 16.2721 8.66676 15.4721V15.4721M9.5001 15.3332V15.3332C11.2075 15.3332 12.0613 15.3332 12.7424 15.0768C13.8205 14.671 14.6713 13.8202 15.0771 12.7422C15.3334 12.061 15.3334 11.2073 15.3334 9.49984V9.49984C15.3334 7.7924 15.3334 6.93868 15.0771 6.2575C14.6713 5.17944 13.8205 4.32863 12.7424 3.92288C12.0613 3.6665 11.2075 3.6665 9.5001 3.6665V3.6665C7.79266 3.6665 6.93894 3.6665 6.25776 3.92288C5.1797 4.32863 4.32889 5.17944 3.92314 6.2575C3.66676 6.93868 3.66676 7.7924 3.66676 9.49984V9.49984C3.66676 11.2073 3.66676 12.061 3.92314 12.7422C4.32889 13.8202 5.1797 14.671 6.25776 15.0768C6.93894 15.3332 7.79266 15.3332 9.5001 15.3332Z" stroke="#3490F6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div style={{ height: '76px', marginTop: '-5px', display: 'flex', borderTop: '1px solid #E0E4F0' }}>
                            <div style={{ width: "24px", display: 'flex', flexDirection: 'column', backgroundColor: "#F7F8FA" }}>
                                <p style={{ fontSize: '12px', lineHeight: '15.6px', marginLeft: "7px", color: '#586374' }}>1</p>
                                <p style={{ fontSize: '12px', lineHeight: '15.6px', marginTop: '-10px', marginLeft: "7px", color: '#586374' }}>2</p>
                                <p style={{ fontSize: '12px', lineHeight: '15.6px', marginTop: '-10px', marginLeft: "7px", color: '#586374' }}>3</p>
                            </div>
                            {/* <div style={{ height: '200px', width: '852px' }}>
                                <p style={{ fontSize: '12px', lineHeight: '15.6px', marginLeft: "7px" }}> junie@example.com,Junie,0682145672,2019-01-15,1</p>
                                <p style={{ fontSize: '12px', lineHeight: '15.6px', marginTop: '-10px', marginLeft: "7px" }}>john@example.com,John,0745632109,2019-03-10,2</p>
                                <p style={{ fontSize: '12px', lineHeight: '15.6px', marginTop: '-10px', marginLeft: "7px" }}>marc@example.com,Marc,0675489125,2019-08-22,1</p>
                            </div> */}
                            <pre style={{ fontSize: '12px', lineHeight: '15.6px', marginLeft: "7px" }}>
                                {content}
                            </pre>
                        </div>
                    </div>
                    <p style={{ marginTop: "3.5px", marginBottom: '0', width: '529px', fontSize: '12px' }}>Separators are mandatory and can be either: a comma, a semicolon or a tabulation.</p>
                    <p style={{ marginTop: "-8px", marginBottom: '0', width: '529px', fontSize: '12px' }}>Each type of data must be correctly formatted as an email address, text, number or category.</p>
                </div>
            </div>
        </div>
    )
}
export default ShowExample