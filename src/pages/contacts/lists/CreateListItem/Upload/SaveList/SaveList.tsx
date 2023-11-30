import { useState, ChangeEvent } from 'react';
const SaveList = () => {
    const [activeTab, setActiveTab] = useState(1);
    const handleTabClick = (tabNumber: number) => {
        setActiveTab(tabNumber);
    };
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };
    const [isDropdown, setIsDropdown] = useState<boolean>(true);
    const [selectedOption, setSelectedOption] = useState('Khánh 1');
    const handleUpdateExisting = () => {
        setIsDropdown(!isDropdown);
    };
    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
        setIsDropdown(!isDropdown);
    };
    return (
        <div style={{ marginTop: "30px" }}>
            <h2 style={{ display: 'flex', marginBottom: '0', height: '31px' }}>
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="0.5" width="24" height="24" rx="12" fill="#E6E8EF" />
                    <path d="M12.0107 16.6193C11.4254 16.6193 10.9027 16.5185 10.4425 16.3168C9.98509 16.1151 9.62287 15.8352 9.35582 15.4773C9.09162 15.1165 8.94957 14.6989 8.92969 14.2244H10.2678C10.2848 14.483 10.3714 14.7074 10.5277 14.8977C10.6868 15.0852 10.8942 15.2301 11.1499 15.3324C11.4055 15.4347 11.6896 15.4858 12.0021 15.4858C12.3459 15.4858 12.6499 15.4261 12.9141 15.3068C13.1811 15.1875 13.3899 15.0213 13.5405 14.8082C13.6911 14.5923 13.7663 14.3438 13.7663 14.0625C13.7663 13.7699 13.6911 13.5128 13.5405 13.2912C13.3928 13.0668 13.1754 12.8906 12.8885 12.7628C12.6044 12.6349 12.2607 12.571 11.8572 12.571H11.12V11.4972H11.8572C12.1811 11.4972 12.4652 11.4389 12.7095 11.3224C12.9567 11.206 13.1499 11.044 13.2891 10.8366C13.4283 10.6264 13.4979 10.3807 13.4979 10.0994C13.4979 9.82955 13.4368 9.59517 13.3146 9.39631C13.1953 9.1946 13.0249 9.03693 12.8033 8.9233C12.5845 8.80966 12.326 8.75284 12.0277 8.75284C11.7436 8.75284 11.478 8.8054 11.2308 8.91051C10.9865 9.01278 10.7876 9.16051 10.6342 9.35369C10.4808 9.54403 10.3984 9.77273 10.3871 10.0398H9.11293C9.12713 9.56818 9.26634 9.15341 9.53054 8.79545C9.79759 8.4375 10.1499 8.15767 10.5874 7.95597C11.0249 7.75426 11.5107 7.65341 12.0447 7.65341C12.6044 7.65341 13.0874 7.76278 13.4936 7.98153C13.9027 8.19744 14.218 8.4858 14.4396 8.84659C14.6641 9.20739 14.7749 9.60227 14.772 10.0312C14.7749 10.5199 14.6385 10.9347 14.3629 11.2756C14.0902 11.6165 13.7266 11.8452 13.272 11.9616V12.0298C13.8516 12.1179 14.3004 12.348 14.6186 12.7202C14.9396 13.0923 15.0987 13.554 15.0959 14.1051C15.0987 14.5852 14.9652 15.0156 14.6953 15.3963C14.4283 15.777 14.0632 16.0767 13.6001 16.2955C13.1371 16.5114 12.6072 16.6193 12.0107 16.6193Z" fill="#586374" />
                </svg>
                <p style={{ marginTop: '-0.5px', marginLeft: '10px' }}>Save list</p>
            </h2>
            <div style={{ marginTop: '15px', height: '111px' }}>
                <div className="tab-container" style={{ borderBottom: '1px solid #E6E8EF' }}>
                    <div
                        className={`tab ${activeTab === 1 ? 'active' : ''}`}
                        onClick={() => handleTabClick(1)}>Create as a new list</div>
                    <div style={{ marginLeft: '32px' }}
                        className={`tab ${activeTab === 2 ? 'active' : ''}`}
                        onClick={() => handleTabClick(2)}>Update existing list</div>
                </div>
                <div style={{ marginTop: "15px" }}>
                    {activeTab === 1 &&
                        <div>
                            <label style={{ fontSize: '12px', fontWeight: '400' }}>List name</label>
                            <div style={{ marginTop: '-3px',border:'1px solid #E0E4F0', borderRadius: '8px', width: '570px', height: '40px' }}>
                                <input style={{ outline: 'none', border: 'none', width: '546px', height: '18px', marginLeft: '8px', marginTop: '10px' }} 
                                    placeholder='Enter new list name' value={inputValue} onChange={handleChange} />
                            </div>
                            <div>
                                <button style={{ marginTop: '15px', height: '40px', width: '101px', border: 'none', 
                                    background: inputValue ? '#1677ff' : '#E6E8EF', color: inputValue ? '#fff' : '#ABB4C2', borderRadius: '8px' }}>Create list</button>
                            </div>
                        </div>
                    }
                    {activeTab === 2 &&
                        <div>
                            <label style={{ fontSize: '12px', fontWeight: "400" }}>Select the list to update</label>
                            <div onClick={handleUpdateExisting} style={{ marginTop: '-3px', display: 'flex', border: '1px solid #E0E4F0 ', borderRadius: '8px', width: '570px', height: '40px' }}>
                                <input style={{ outline: 'none', border: 'none', width: '510px', height: '18px', marginLeft: '8px', marginTop: "10px" }} placeholder={selectedOption} />
                                <svg style={{ transform: isDropdown ? 'rotate(180deg)' : 'none', marginLeft: '15px', marginTop: '17px' }} width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7L7 1L13 7" stroke="#1A2433" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div>
                                <button style={{ marginTop: '15px', height: '40px', width: '101px', border: '1px solid #1677ff', background: '#1677ff', color: '#fff', borderRadius: "8px" }}>Update list</button>
                            </div>
                            {!isDropdown && (
                                <div style={{ borderRadius: '8px', border: '0.5px solid #E0E4F0', marginTop: '-50px', width: "570px", height: '168px', position: 'relative', backgroundColor: '#fff', zIndex: '9999' }}>
                                    <div style={{ display: 'grid', marginTop: '20px', marginLeft: '18px' }}>
                                        <div style={{ marginTop: '-3px', width: '570px', height: '40px' }}>
                                            <span onClick={() => handleOptionClick('Khánh 1')}>Khánh 1</span>
                                        </div>
                                        <div style={{ marginTop: '-3px', width: '570px', height: '40px' }}>
                                            <span onClick={() => handleOptionClick('Khánh 2')}>Khánh 2</span>
                                        </div>
                                        <div style={{ marginTop: '-3px', width: '570px', height: '40px' }}>
                                            <span onClick={() => handleOptionClick('Khánh 3')}>Khánh 3</span>
                                        </div>
                                        <div style={{ marginTop: '-3px', width: '570px', height: '40px' }}>
                                            <span onClick={() => handleOptionClick('Khánh 4')}>Khánh 4</span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
export default SaveList