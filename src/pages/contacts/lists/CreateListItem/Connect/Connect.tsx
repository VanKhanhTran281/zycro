import { Link } from "react-router-dom";
import { Card } from "antd";
import './Connect.css'
const Connect = () => {
    return (
        <div style={{ display: 'grid' }}>
            <div className="header-crl">
                <div className="">
                    <Link to='/createlists' style={{ textDecoration: 'none', display: 'flex', marginLeft: '45px', marginTop: '20px' }}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M8.77528 3.72505C9.01935 3.96913 9.01935 4.36486 8.77527 4.60894L4.00889 9.37527H17.5C17.8452 9.37527 18.125 9.65509 18.125 10.0003C18.125 10.3454 17.8452 10.6253 17.5 10.6253H4.00888L8.77528 15.3917C9.01935 15.6357 9.01935 16.0315 8.77528 16.2755C8.5312 16.5196 8.13547 16.5196 7.89139 16.2755L2.05806 10.4422C1.94085 10.325 1.875 10.166 1.875 10.0003C1.875 9.8345 1.94085 9.67553 2.05806 9.55832L7.89139 3.72505C8.13547 3.48097 8.5312 3.48097 8.77528 3.72505Z" fill="#747085" />
                        </svg>
                        <p style={{ fontWeight: '600', color: 'black', marginLeft: '5px', marginTop: '-2px', fontSize: '16px' }}>Back</p>
                    </Link>
                </div>
                <div style={{ gap: '24px', width: '1120px', height: '359px', marginLeft: '45px', marginTop: '50px' }}>
                    <h2 style={{ marginBottom: '0', fontSize: '24px', lineHeight: '27.12px' }}>Connect a data source</h2>
                    <p style={{ marginTop: '5px', fontSize: '16px', lineHeight: '19.84px' }}>add all your data with one-click integrations</p>
                    <Card className="carditem_connect">
                        <div style={{ marginLeft: '-25px', marginTop: '-28px' }}>
                            <div style={{height:"90px",width:'228px'}}>
                                <svg width="127" height="36" viewBox="0 0 127 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_300_4666)">
                                        <path d="M37.6943 14.8603H27.0488L34.5293 7.4392C33.9538 6.58308 33.3782 6.01214 32.8027 5.15545C31.9747 4.56176 31.2042 3.89287 30.5013 3.15745L23.0219 10.5791V0.303889C22.0824 0.0679734 21.1128 -0.0281388 20.1449 0.0187013C19.1763 -0.0432501 18.2039 0.0530955 17.2668 0.303889V10.8648L9.4988 3.15858C8.60561 3.66647 7.8231 4.34544 7.19676 5.15601C6.62125 6.01214 5.75827 6.58308 5.18276 7.43976L12.6627 14.8603H2.30577L2.0183 17.7144C1.95598 18.675 2.05309 19.6392 2.30577 20.5685H12.9519L5.18389 28.2748C6.32054 29.9728 7.78776 31.4283 9.49937 32.556L16.9799 25.1349V35.6964C17.9193 35.9323 18.8889 36.0284 19.8569 35.9816C20.8251 36.0434 21.7971 35.9471 22.7338 35.6964V25.136L30.2138 32.5576C31.1068 32.0495 31.8891 31.3704 32.5153 30.5596C33.2566 29.8622 33.9308 29.0979 34.5293 28.2765L27.0488 20.8543H37.6943C37.9323 19.9223 38.0294 18.9604 37.9823 18.0001C38.0433 16.9452 37.9458 15.8871 37.6943 14.8603ZM24.4592 17.7144C24.4307 18.9709 24.2372 20.2183 23.8837 21.4252C22.6948 21.8877 21.4173 22.0827 20.1432 21.9961C18.8767 21.9678 17.6192 21.7759 16.4027 21.4252C15.9365 20.2457 15.7399 18.9783 15.8272 17.7144C15.8557 16.4579 16.0492 15.2105 16.4027 14.0036C17.5916 13.5411 18.8691 13.3461 20.1432 13.4326C21.4097 13.461 22.6672 13.6529 23.8837 14.0036C24.2156 15.2151 24.4086 16.4599 24.4592 17.7144Z" fill="#FF4A00" />
                                    </g>
                                </svg>
                                <h3 style={{ marginBottom: '7px', marginTop: '7px', fontSize: '18px', lineHeight: '24px' }}>Zapier</h3>
                            </div>
                            <div style={{marginTop:'15px',width:"228px",borderTop:"1px solid #E0E4F0"}}></div>
                            <Link to='/connecttozapier' >
                                <button className="buttonconnect" style={{marginTop:'10px', border: '1px solid #1677ff', background: '#fff', color: '#1677ff', borderRadius: "8px", width: '77px', height: '32px' }}>
                                    Connect
                                </button>
                            </Link>
                        </div>
                    </Card>
                </div>

            </div>
        </div>
    )
}
export default Connect