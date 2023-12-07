import React from "react";
interface TagFilterProps {
    handleFilterAudience: () => void
    handleFilterPerson: () => void
}
const TagFilter: React.FC<TagFilterProps> = ({ handleFilterAudience, handleFilterPerson }) => {
    return (
        <div style={{ zIndex: '9999', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginLeft: "-95px", marginTop: '50px', backgroundColor: '#fff', height: '317px', width: '353px', border: '0.5px solid #E0E4F0', borderRadius: '8px' }}>
            <div style={{ width: '341px', height: '32px', display: 'flex', border: '1px solid #E0E4F0', borderRadius: '8px', alignItems: 'center' }}>
                <svg style={{ marginLeft: '10px' }} width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.25 15.75L12.523 13.023M12.523 13.023C13.7445 11.8015 14.5 10.114 14.5 8.25C14.5 4.52208 11.4779 1.5 7.75 1.5C4.02208 1.5 1 4.52208 1 8.25C1 11.9779 4.02208 15 7.75 15C9.61396 15 11.3015 14.2445 12.523 13.023Z" stroke="#586374" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
                <input style={{ width: '299px', marginLeft: '5px', height: '16px', border: 'none', outline: 'none', marginTop: '5px' }} placeholder="Search attributes" />
            </div>
            <div style={{ border: '1px solid #E0E4F0', width: '341px', marginTop: '7px' }}></div>
            <div style={{ display: 'flex' }}>
                <div style={{ width: '341px', height: '260px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <p style={{ fontSize: '14px', fontWeight: '700', lineHeight: '17.92px', width: '299px' }}>Filter by</p>
                    <div onClick={handleFilterAudience} style={{ display: 'flex',cursor:'pointer', width: '299px' }}>
                        <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.99984 1.04818C3.61891 2.11006 1.1665 5.26864 1.1665 9.00001C1.1665 13.6024 4.89746 17.3333 9.49984 17.3333C13.2312 17.3333 16.3898 14.8809 17.4517 11.5M12.6998 8.99984H16.2332C16.7762 8.99984 17.0478 8.99984 17.2815 8.86339C17.4638 8.7569 17.6508 8.5303 17.7208 8.33104C17.8104 8.07573 17.7674 7.8535 17.6815 7.40904C17.0385 4.08251 14.4172 1.46117 11.0906 0.818169C10.6462 0.732257 10.4239 0.689301 10.1686 0.778922C9.96937 0.848865 9.74277 1.03586 9.63628 1.21822C9.49984 1.45189 9.49984 1.72343 9.49984 2.2665V5.79984C9.49984 6.91994 9.49984 7.48 9.71782 7.90782C9.90957 8.28414 10.2155 8.5901 10.5919 8.78185C11.0197 8.99984 11.5797 8.99984 12.6998 8.99984Z" stroke="#1E201F" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p style={{ width: '243px', marginTop: '-2px', marginLeft: '10px' }}>Audience</p>
                        <svg style={{ marginLeft: '10px', marginTop: '5px' }} width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.833496 1L5.8335 6L0.833496 11" stroke="#1E201F" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div onClick={handleFilterPerson} style={{ display: 'flex',cursor:'pointer', width: '299px', marginBottom: '0' }}>
                        <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.833496 14.6665C0.833496 12.4574 2.62436 10.6665 4.8335 10.6665H10.1668C12.376 10.6665 14.1668 12.4574 14.1668 14.6665V14.6665C14.1668 16.1393 12.9729 17.3332 11.5002 17.3332H3.50016C2.0274 17.3332 0.833496 16.1393 0.833496 14.6665V14.6665Z" stroke="#1E201F" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M10.8335 3.99984C10.8335 5.84079 9.34111 7.33317 7.50016 7.33317C5.65921 7.33317 4.16683 5.84079 4.16683 3.99984C4.16683 2.15889 5.65921 0.666504 7.50016 0.666504C9.34111 0.666504 10.8335 2.15889 10.8335 3.99984Z" stroke="#1E201F" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p style={{ width: '243px', marginTop: '-2px', marginLeft: '14px' }}>Person</p>
                        <svg style={{ marginLeft: '10px', marginTop: '5px' }} width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.833496 1L5.8335 6L0.833496 11" stroke="#1E201F" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <p style={{ fontSize: '14px', fontWeight: '700', lineHeight: '17.92px', width: '299px', marginTop: '0' }}>Email status</p>
                    <div style={{ display: "flex", width: '299px', marginBottom: '5px' }}>
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.8332 10.4166C18.8332 10.0071 18.8288 9.18086 18.82 8.77017C18.7656 6.21555 18.7383 4.93825 17.7957 3.99206C16.8531 3.04586 15.5412 3.0129 12.9175 2.94698C11.3004 2.90635 9.69926 2.90635 8.08219 2.94697C5.45844 3.01289 4.14657 3.04585 3.20396 3.99204C2.26136 4.93824 2.23412 6.21554 2.17964 8.77015C2.16212 9.59156 2.16212 10.4081 2.17964 11.2295C2.23412 13.7841 2.26136 15.0614 3.20397 16.0076C4.14657 16.9538 5.45845 16.9868 8.08219 17.0527C8.75116 17.0695 9.4174 17.0794 10.0832 17.0823" stroke="#141B34" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M2.1665 5L7.92736 8.27052C10.0321 9.46538 10.9676 9.46538 13.0723 8.27052L18.8332 5" stroke="#141B34" strokeWidth="1.2" strokeLinejoin="round" />
                            <path d="M18.8332 14.5833L12.1665 14.5833M18.8332 14.5833C18.8332 13.9998 17.1713 12.9096 16.7498 12.5M18.8332 14.5833C18.8332 15.1669 17.1713 16.2571 16.7498 16.6667" stroke="#141B34" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p style={{ marginTop: '0', marginLeft: '9px' }}>Email sent</p>
                    </div>
                    <div style={{ display: "flex", width: '299px', marginBottom: '5px' }}>
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.1665 4.16699L7.92736 7.43751C10.0321 8.63238 10.9676 8.63238 13.0723 7.43751L18.8332 4.16699" stroke="#1A2433" strokeWidth="1.2" strokeLinejoin="round" />
                            <path d="M18.8271 9.16683C18.8371 8.47876 18.8347 8.62633 18.82 7.93716C18.7656 5.38255 18.7383 4.10524 17.7957 3.15905C16.8531 2.21286 15.5412 2.17989 12.9175 2.11397C11.3004 2.07334 9.69926 2.07334 8.08219 2.11396C5.45844 2.17988 4.14657 2.21284 3.20396 3.15904C2.26136 4.10523 2.23412 5.38253 2.17964 7.93714C2.16212 8.75855 2.16212 9.57511 2.17964 10.3965C2.23412 12.9511 2.26136 14.2284 3.20397 15.1746C4.14657 16.1208 5.45845 16.1538 8.08219 16.2197C8.89073 16.24 8.86195 16.2502 9.6665 16.2502" stroke="#1A2433" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12.1665 15.8333C12.1665 15.8333 12.9998 15.8333 13.8332 17.5C13.8332 17.5 16.4802 13.3333 18.8332 12.5" stroke="#1A2433" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p style={{ marginTop: '-2px', marginLeft: '9px' }}>Email sent</p>
                    </div>
                    <div style={{ display: "flex", width: '299px' }}>
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.66663 5.83301L3.65096 6.51012C2.92286 6.99552 2.55881 7.23822 2.36152 7.60835C2.16424 7.97848 2.1657 8.41348 2.16862 9.28347C2.17214 10.3309 2.18188 11.3982 2.20883 12.4781C2.27279 15.0403 2.30476 16.3214 3.24676 17.2634C4.18876 18.2054 5.48715 18.2378 8.08391 18.3027C9.6994 18.3431 11.3006 18.3431 12.916 18.3027C15.5128 18.2378 16.8112 18.2054 17.7532 17.2634C18.6952 16.3213 18.7272 15.0403 18.7911 12.4781C18.8181 11.3982 18.8278 10.3309 18.8313 9.28347C18.8342 8.41348 18.8357 7.97848 18.6384 7.60835C18.4411 7.23822 18.0771 6.99552 17.349 6.51012L16.3333 5.83301" stroke="#141B34" strokeWidth="1.2" strokeLinejoin="round" />
                            <path d="M2.1665 8.33301L7.92736 11.7895C9.1807 12.5415 9.80738 12.9175 10.4998 12.9175C11.1923 12.9175 11.819 12.5415 13.0723 11.7895L18.8332 8.33301" stroke="#141B34" strokeWidth="1.2" strokeLinejoin="round" />
                            <path d="M4.6665 9.99984V4.99984C4.6665 3.42849 4.6665 2.64281 5.15466 2.15466C5.64281 1.6665 6.42849 1.6665 7.99984 1.6665H12.9998C14.5712 1.6665 15.3569 1.6665 15.845 2.15466C16.3332 2.64281 16.3332 3.42849 16.3332 4.99984V9.99984" stroke="#141B34" strokeWidth="1.2" />
                            <path d="M8.83301 8.33301H12.1663M8.83301 4.99967H12.1663" stroke="#141B34" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p style={{ marginTop: '-2px', marginLeft: '9px' }}>Email sent</p>
                    </div>
                </div>
                <div style={{ width: '10px', height: '260px' }}>
                    <div style={{ marginTop: '7px' }}>
                        <svg width="5" height="63" viewBox="0 0 5 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" width="4" height="63" rx="2" fill="#E0E4F0" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TagFilter