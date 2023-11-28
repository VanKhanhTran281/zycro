import { Link, Outlet } from "react-router-dom";
import logo from '../../img/logo.jpg'
import './main.css';
import { theme } from 'antd';
import { useState } from 'react'

const { useToken } = theme;
interface Token {
    colorPrimaryBg: string;
    borderRadius: string;
    colorPrimaryText: string;
}
const MainLayout: React.FC = () => {

    const [activeLink, setActiveLink] = useState<string>('');

    const handleLinkClick = (link: string) => {
        setActiveLink(link);
        if (isDropdownOpen == true) {
            setIsDropdownOpen(!isDropdownOpen);
        }
    };
    const handleLinkClick2 = (link: string) => {
        handleLinkClick(link)
        setIsDropdownOpen(!isDropdownOpen);
    };
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
    const token: Token = {
        colorPrimaryBg: '#e6f4ff',
        borderRadius: '6px',
        colorPrimaryText: '#0068B9',
    };
    const linkStyle = {
        textDecoration: 'none',
        borderRadius: token.borderRadius,
    };

    const activeLinkStyle = {
        color: token.colorPrimaryText,
    };

    const inactiveLinkStyle = {
        color: 'inherit',
    };
    return (
        <div style={{ display: 'flex' }}>
            <header style={{ width: '220px', height: '800px', backgroundColor: '#f1f2f269' }}>
                <div >
                    <div style={{ display: 'grid', marginRight: '19px', fontWeight: '600', paddingLeft: "15px ", paddingTop: '10px' }}>
                        <div style={{ marginLeft: '-13px' }}><img src={logo} alt="" /></div>
                        <div style={{ display: 'grid', marginTop: '30px', borderBottom: '1px solid #E0E4F0' }}>
                            <Link
                                to="/"
                                style={{
                                    textDecoration: 'none',
                                    backgroundColor: activeLink === '/' ? token.colorPrimaryBg : 'inherit',
                                    borderRadius: token.borderRadius,
                                    color: activeLink === '/' ? token.colorPrimaryText : 'inherit',
                                    border: activeLink === '/' ? '1px solid #1677ff' : 'none',
                                }}
                                onClick={() => handleLinkClick('/')}
                            >
                                <div style={{ display: 'flex', marginLeft: '10px' }}>
                                    <svg style={{ marginTop: '17px' }} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_226_6884)">
                                            <path d="M6.75 12H11.25M6.00146 2.39883L3.30146 4.55883C2.63991 5.08807 2.30914 5.35269 2.07105 5.68114C1.86012 5.97212 1.70319 6.29862 1.60774 6.6451C1.5 7.0362 1.5 7.4598 1.5 8.307V11.7C1.5 13.3802 1.5 14.2202 1.82698 14.862C2.1146 15.4265 2.57354 15.8854 3.13803 16.173C3.77976 16.5 4.61984 16.5 6.3 16.5H11.7C13.3802 16.5 14.2202 16.5 14.862 16.173C15.4265 15.8854 15.8854 15.4265 16.173 14.862C16.5 14.2202 16.5 13.3802 16.5 11.7V8.307C16.5 7.4598 16.5 7.0362 16.3923 6.6451C16.2968 6.29862 16.1399 5.97212 15.929 5.68114C15.6909 5.35269 15.3601 5.08807 14.6985 4.55883L11.9985 2.39883C10.9284 1.54271 10.3933 1.11464 9.79989 0.950479C9.27646 0.805673 8.72354 0.805673 8.20011 0.950479C7.6067 1.11464 7.07162 1.54271 6.00146 2.39883Z" stroke='#1A2433' strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_226_6884">
                                                <rect width="18" height="18" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <p style={{ marginLeft: '5px', height: '18px' }}>Dashboard</p>
                                </div>
                            </Link>
                            <Link
                                to="/contacts"
                                style={{
                                    textDecoration: 'none',
                                    backgroundColor: activeLink === '/contacts' ? token.colorPrimaryBg : 'inherit',
                                    borderRadius: token.borderRadius,
                                    color: activeLink === '/contacts' ? token.colorPrimaryText : 'inherit',
                                    border: activeLink === '/contacts' ? '1px solid #1677ff' : 'none',
                                }}
                                onClick={() => handleLinkClick2('/contacts')}
                            >
                                <div style={{ display: 'flex', marginLeft: '10px' }}>
                                    <svg style={{ marginTop: '17px' }} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M7.3375 17.0625C5.09729 17.0625 3.97719 17.0625 3.12154 16.6265C2.36889 16.243 
                                        1.75697 15.6311 1.37347 14.8785C0.9375 14.0228 0.9375 12.9027 0.9375 10.6625V7.3375C0.9375 5.09729 0.9375 3.97719 1.37347 
                                        3.12154C1.75697 2.36889 2.36889 1.75697 3.12154 1.37347C3.97719 0.9375 5.09729 0.9375 7.3375 0.9375H10.6625C12.9027 0.9375 
                                        14.0228 0.9375 14.8785 1.37347C15.6311 1.75697 16.243 2.36889 16.6265 3.12154C17.0625 3.97719 17.0625 5.09729 17.0625 
                                        7.3375V10.6625C17.0625 12.9027 17.0625 14.0228 16.6265 14.8785C16.243 15.6311 15.6311 16.243 14.8785 16.6265C14.0228 17.0625 
                                        12.9027 17.0625 10.6625 17.0625H7.3375ZM11.25 6C11.25 7.24264 10.2426 8.25 9 8.25C7.75736 8.25 6.75 7.24264 6.75 6C6.75 4.75736 
                                        7.75736 3.75 9 3.75C10.2426 3.75 11.25 4.75736 11.25 6ZM10.25 9.75C11.6307 9.75 12.75 10.8693 12.75 12.25C12.75 12.9404 12.1904 
                                        13.5 11.5 13.5H6.5C5.80964 13.5 5.25 12.9404 5.25 12.25C5.25 10.8693 6.36929 9.75 7.75 9.75H10.25Z" fill="#0068B9" />
                                    </svg>
                                    <p style={{ marginLeft: '5px', height: '18px' }}>Contacts</p>
                                    <div style={{ marginLeft: '64px', marginTop: '8px', }}>
                                        <svg style={{ transform: isDropdownOpen ? 'rotate(180deg)' : 'none' }} enableBackground="new 0 0 11 11" viewBox="0 0 11 11" x="0" y="0" className="shopee-svg-icon icon-arrow-down" >
                                            <g>
                                                <path d="m11 2.5c0 .1 0 .2-.1.3l-5 6c-.1.1-.3.2-.4.2s-.3-.1-.4-.2l-5-6c-.2-.2-.1-.5.1-.7s.5-.1.7.1l4.6 5.5 4.6-5.5c.2-.2.5-.2.7-.1.1.1.2.3.2.4z"></path>
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                            {isDropdownOpen && (

                                <div className="dropdown-menu">
                                    <svg style={{ marginLeft: '-15px' }} width="40" height="84" viewBox="0 0 40 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M23 12V20C23 22.2091 24.7909 24 27 24H31" stroke="#ABB4C2" strokeLinecap="round" />
                                        <path d="M23 12V66C23 68.2091 24.7909 70 27 70H31" stroke="#ABB4C2" strokeLinecap="round" />
                                    </svg>
                                    <div style={{ display: 'grid', marginLeft: '8px' }}>
                                        <Link
                                            to="/contacts"
                                            className={`dropdown-item ${activeLink === '/contacts' ? 'active' : ''}`}
                                            style={activeLink === '/contacts' ? { ...linkStyle, ...activeLinkStyle, marginTop: '9px', display: 'flex' } : { ...linkStyle, ...inactiveLinkStyle, marginTop: '9px', display: 'flex' }}
                                            onClick={() => setActiveLink('/contacts')}
                                        >
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2.625 7.02632C2.625 4.42119 2.625 3.11862 3.39384 2.30931C4.16269 1.5 5.40013 1.5 7.875 1.5H10.125C12.5999 1.5 13.8373 1.5 14.6062 2.30931C15.375 3.11862 15.375 4.42119 15.375 7.02632V10.9737C15.375 13.5788 15.375 14.8814 14.6062 15.6907C13.8373 16.5 12.5999 16.5 10.125 16.5H7.875C5.40013 16.5 4.16269 16.5 3.39384 15.6907C2.625 14.8814 2.625 13.5788 2.625 10.9737V7.02632Z" fill="#0068B9" stroke="#0068B9" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M10.125 8.25H12.75" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
                                                <path d="M5.25 9C5.25 9 5.625 9 6 9.75C6 9.75 7.19118 7.875 8.25 7.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M10.125 12.75H12.75" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
                                                <path d="M6 1.5L6.06165 1.8699C6.2113 2.76783 6.28613 3.21679 6.60085 3.4834C6.91556 3.75 7.37072 3.75 8.28104 3.75H9.71896C10.6293 3.75 11.0844 3.75 11.3992 3.4834C11.7139 3.21679 11.7887 2.76783 11.9384 1.8699L12 1.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M6 12.75H6.75" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <p style={{ marginLeft: '14px', marginTop: '-2px' }}>List</p>
                                        </Link>
                                        <Link
                                            to="/segment"
                                            className={`dropdown-item ${activeLink === '/segment' ? 'active' : ''}`}
                                            style={activeLink === '/segment' ? { ...linkStyle, ...activeLinkStyle, marginTop: '9px', display: 'flex' } : { ...linkStyle, ...inactiveLinkStyle, marginTop: '9px', display: 'flex' }}
                                            onClick={() => setActiveLink('/segment')}
                                        >
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6.75 1.84351C3.70717 2.7992 1.5 5.64192 1.5 9.00015C1.5 13.1423 4.85786 16.5002 9 16.5002C12.3582 16.5002 15.201 14.293 16.1566 11.2502M12.2 9H14.9C15.4396 9 15.7094 9 15.9452 8.86029C16.1268 8.75263 16.3168 8.51729 16.3838 8.317C16.4707 8.05709 16.4243 7.84191 16.3315 7.41154C15.7132 4.54435 13.4557 2.28682 10.5885 1.66854C10.1581 1.57574 9.94291 1.52934 9.683 1.61621C9.48271 1.68315 9.24737 1.87315 9.13971 2.05483C9 2.29059 9 2.56039 9 3.1V5.8C9 6.9201 9 7.48016 9.21799 7.90798C9.40973 8.28431 9.71569 8.59027 10.092 8.78201C10.5198 9 11.0799 9 12.2 9Z" stroke="#1A2433" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>

                                            <p style={{ marginLeft: '14px', marginTop: '-1px' }}>Segment</p>
                                        </Link>
                                    </div>
                                </div>
                            )}
                            <Link to='/forms' style={{
                                textDecoration: 'none',
                                borderRadius: token.borderRadius,
                                color: activeLink === '/forms' ? token.colorPrimaryText : 'inherit',
                                ...(activeLink === '/forms' && {
                                    backgroundColor: token.colorPrimaryBg,
                                    border: '1px solid #1677ff'
                                })
                            }}
                                onClick={() => handleLinkClick('/forms')}>
                                <div style={{ display: 'flex', marginLeft: '10px' }}>
                                    <svg style={{ marginTop: '17px' }} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_231_3957)">
                                            <path d="M5.25 6H12.75M5.25 9H9.75M5.25 12H11.25M7.9 16.5H10.1C12.3402 16.5 13.4603 16.5 14.316 16.064C15.0686 15.6805 15.6805 15.0686 16.064 14.316C16.5 13.4603 16.5 12.3402 16.5 10.1V7.9C16.5 5.65979 16.5 4.53968 16.064 3.68404C15.6805 2.93139 15.0686 2.31947 14.316 1.93597C13.4603 1.5 12.3402 1.5 10.1 1.5H7.9C5.65979 1.5 4.53968 1.5 3.68404 1.93597C2.93139 2.31947 2.31947 2.93139 1.93597 3.68404C1.5 4.53968 1.5 5.65979 1.5 7.9V10.1C1.5 12.3402 1.5 13.4603 1.93597 14.316C2.31947 15.0686 2.93139 15.6805 3.68404 16.064C4.53968 16.5 5.65979 16.5 7.9 16.5Z" stroke="#1A2433" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                        </g>
                                    </svg>
                                    <p style={{ marginLeft: '5px', height: '18px' }}>Forms</p>
                                </div>
                            </Link>
                            <Link to='/landingpage' style={{
                                textDecoration: 'none',
                                backgroundColor: activeLink === '/landingpage' ? token.colorPrimaryBg : 'inherit',
                                borderRadius: token.borderRadius,
                                color: activeLink === '/landingpage' ? token.colorPrimaryText : 'inherit',
                                border: activeLink === '/landingpage' ? '1px solid #1677ff' : 'none',
                            }}
                                onClick={() => handleLinkClick('/landingpage')}>
                                <div style={{ display: 'flex', marginLeft: '10px' }}>
                                    <svg style={{ marginTop: '17px' }} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.5 1.875V2.80002C10.5 3.92013 10.5 4.48018 10.718 4.908C10.9097 5.28433 11.2157 5.59029 11.592 5.78204C12.0198 6.00002 12.5799 6.00002 13.7 6.00002H14.625M15 7.90165V11.7C15 13.3802 15 14.2202 14.673 14.862C14.3854 15.4265 13.9265 15.8854 13.362 16.173C12.7202 16.5 11.8802 16.5 10.2 16.5H7.8C6.11984 16.5 5.27976 16.5 4.63803 16.173C4.07354 15.8854 3.6146 15.4265 3.32698 14.862C3 14.2202 3 13.3802 3 11.7V6.3C3 4.61984 3 3.77976 3.32698 3.13803C3.6146 2.57354 4.07354 2.1146 4.63803 1.82698C5.27976 1.5 6.11984 1.5 7.8 1.5H8.59835C9.16907 1.5 9.45442 1.5 9.72825 1.53027C10.6709 1.63446 11.5644 2.00458 12.3046 2.59744C12.5197 2.76966 12.7214 2.97144 13.125 3.375V3.375C13.5286 3.77856 13.7303 3.98034 13.9026 4.19536C14.4954 4.93557 14.8655 5.82913 14.9697 6.77175C15 7.04558 15 7.33093 15 7.90165Z" stroke="#1A2433" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>

                                    <p style={{ marginLeft: '5px', height: '18px' }}>Landing Page</p>
                                </div>
                            </Link>
                            <Link to='/campaign' style={{
                                textDecoration: 'none',
                                backgroundColor: activeLink === '/campaign' ? token.colorPrimaryBg : 'inherit',
                                borderRadius: token.borderRadius,
                                color: activeLink === '/campaign' ? token.colorPrimaryText : 'inherit',
                                border: activeLink === '/campaign' ? '1px solid #1677ff' : 'none',
                            }}
                                onClick={() => handleLinkClick('/campaign')}>
                                <div style={{ display: 'flex', marginLeft: '10px' }}>
                                    <svg style={{ marginTop: '17px' }} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.5 5.25037L4.5 5.25037C2.84315 5.25037 1.5 6.59351 1.5 8.25037V8.25037C1.5 9.90722 2.84315 11.2504 4.5 11.2504L7.5 11.2504M7.5 5.25037L7.5 11.2504M7.5 5.25037L10.0844 3.44115C11.6092 2.37374 12.3716 1.84004 13.0045 1.84147C13.6539 1.84293 14.2622 2.15962 14.6358 2.69079C15 3.2085 15 4.13912 15 6.00036V6.00036M7.5 11.2504L10.0848 13.0596C11.6093 14.1267 12.3716 14.6602 13.0045 14.6588C13.654 14.6574 14.2623 14.3406 14.6359 13.8094C15 13.2917 15 12.3613 15 10.5004V10.5004M4.5 11.2504L4.5 14.6254C4.5 15.2467 5.00368 15.7504 5.625 15.7504V15.7504C6.24632 15.7504 6.75 15.2467 6.75 14.6254L6.75 11.2504M15 6.00036V6.00036C16.2426 6.00036 17.25 7.00772 17.25 8.25036V8.25036C17.25 9.493 16.2426 10.5004 15 10.5004V10.5004M15 6.00036L15 10.5004" stroke="#1A2433" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <p style={{ marginLeft: '5px', height: '18px' }}>Campaign</p>
                                </div>
                            </Link>
                            <Link to='#' style={{ display: 'flex', textDecoration: 'none', marginLeft: '10px', marginTop: '240px', color: 'black' }}>
                                <svg style={{ marginTop: '17px' }} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 3.00027C8.47727 3.00027 7.95991 2.80398 7.63977 2.39075L7.49526 2.2042C6.9244 1.46733 5.89698 1.26543 5.08973 1.7315L4.65931 1.98C3.85262 2.44574 3.51399 3.43578 3.86647 4.298L3.95611 4.51728C4.15402 5.00141 4.06626 5.54515 3.80415 5.99776V5.99776C3.54227 6.44996 3.11279 6.80307 2.59502 6.87368L2.36074 6.90563C1.43796 7.03146 0.75 7.8196 0.75 8.75092V9.24963C0.75 10.1809 1.43796 10.9691 2.36074 11.0949L2.59505 11.1269C3.1128 11.1975 3.54227 11.5506 3.80414 12.0028V12.0028C4.06624 12.4554 4.154 12.9991 3.9561 13.4832L3.86645 13.7025C3.51398 14.5647 3.85261 15.5547 4.65929 16.0205L5.08976 16.269C5.89698 16.7351 6.92437 16.5332 7.49522 15.7963L7.63969 15.6098C7.95985 15.1966 8.47724 15.0003 9 15.0003V15.0003V15.0003C9.52282 15.0003 10.0403 15.1966 10.3605 15.6099L10.5048 15.7963C11.0757 16.5331 12.103 16.735 12.9102 16.2689L13.3408 16.0203C14.1474 15.5546 14.486 14.5646 14.1336 13.7024L14.0439 13.4831C13.846 12.999 13.9338 12.4553 14.1959 12.0028V12.0028C14.4577 11.5506 14.8872 11.1975 15.4049 11.1269L15.6393 11.0949C16.562 10.9691 17.25 10.1809 17.25 9.24963V8.75092C17.25 7.8196 16.562 7.03146 15.6393 6.90563L15.4049 6.87368C14.8872 6.80307 14.4577 6.44997 14.1959 5.99778V5.99778C13.9338 5.54519 13.846 5.00147 14.0439 4.51736L14.1335 4.29809C14.486 3.4359 14.1474 2.44588 13.3407 1.98016L12.9102 1.73158C12.103 1.26554 11.0756 1.46743 10.5048 2.20425L10.3604 2.39068C10.0402 2.80396 9.52279 3.00027 9 3.00027V3.00027V3.00027Z" stroke="#1A2433" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M11.25 9.00024C11.25 10.2429 10.2426 11.2502 9 11.2502C7.75736 11.2502 6.75 10.2429 6.75 9.00024C6.75 7.7576 7.75736 6.75024 9 6.75024C10.2426 6.75024 11.25 7.7576 11.25 9.00024Z" stroke="#1A2433" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p style={{ marginLeft: '5px', height: '18px' }}>Setting</p>
                            </Link>
                        </div>
                        <div>
                            <Link to='#' style={{ display: 'flex', textDecoration: 'none', color: 'black', marginTop: '15px', marginLeft: '5px' }}>
                                <svg style={{ marginTop: '-5px' }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="24" height="24" rx="4" fill="#3490F6" />
                                    <path d="M16.6049 10.3828H14.4274C14.3876 10.1011 14.3064 9.85085 14.1838 9.6321C14.0611 9.41004 13.9037 9.22112 13.7115 9.06534C13.5192 8.90956 13.2972 8.79025 13.0453 8.70739C12.7967 8.62453 12.5266 8.5831 12.2349 8.5831C11.7079 8.5831 11.2489 8.71402 10.8578 8.97585C10.4667 9.23437 10.1634 9.61222 9.94798 10.1094C9.73254 10.6032 9.62482 11.2031 9.62482 11.9091C9.62482 12.6349 9.73254 13.2448 9.94798 13.7386C10.1667 14.2325 10.4717 14.6054 10.8627 14.8572C11.2538 15.1091 11.7063 15.2351 12.22 15.2351C12.5083 15.2351 12.7752 15.197 13.0204 15.1207C13.269 15.0445 13.4894 14.9335 13.6816 14.7876C13.8739 14.6385 14.033 14.4579 14.1589 14.2457C14.2882 14.0336 14.3777 13.7917 14.4274 13.5199L16.6049 13.5298C16.5486 13.9972 16.4077 14.4479 16.1824 14.8821C15.9603 15.313 15.6603 15.6991 15.2825 16.0405C14.908 16.3786 14.4605 16.647 13.9402 16.8459C13.4231 17.0414 12.8381 17.1392 12.1852 17.1392C11.277 17.1392 10.465 16.9337 9.74911 16.5227C9.03652 16.1117 8.47307 15.5168 8.05877 14.7379C7.64779 13.959 7.44229 13.0161 7.44229 11.9091C7.44229 10.7988 7.6511 9.85417 8.06871 9.07528C8.48633 8.2964 9.05309 7.70312 9.769 7.29545C10.4849 6.88447 11.2903 6.67898 12.1852 6.67898C12.7752 6.67898 13.322 6.76184 13.8258 6.92756C14.3329 7.09328 14.782 7.33523 15.1731 7.65341C15.5642 7.96828 15.8824 8.3544 16.1277 8.81179C16.3762 9.26918 16.5353 9.79285 16.6049 10.3828Z" fill="white" />
                                </svg>
                                <p style={{ marginLeft: '5px', marginTop: '-5px' }}> Corey Bergson</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
            <Outlet />
        </div>
    )
}
export default MainLayout