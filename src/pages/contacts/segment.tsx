import { Link } from "react-router-dom";
import './contacts.css'
import AddIcon from '@mui/icons-material/Add';
const Segment = () => {
    return (
        <div style={{ display: 'grid' }}>
            <div className="contacts-header">
                <div>
                    <h1 className="contacts_h1">Segments</h1>
                </div>
            </div>
            <div style={{ height: '737px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '90px' }}>
                    <svg width="80" height="81" viewBox="0 0 80 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.32" d="M36.6665 4.66699C18.7172 4.66699 4.1665 19.2177 4.1665 37.167C4.1665 55.1162 18.7172 69.667 36.6665 69.667C45.6404 69.667 53.7689 66.0266 59.6475 60.148C65.5261 54.2694 69.1665 46.1409 69.1665 37.167C69.1665 19.2177 54.6158 4.66699 36.6665 4.66699Z" fill="#3490F6" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M61.9199 62.6533C62.6648 61.6587 64.075 61.4563 65.0696 62.2012L75.9692 70.3642C76.9638 71.1091 77.1663 72.5193 76.4214 73.5139C75.6765 74.5085 74.2663 74.711 73.2717 73.9661L62.3721 65.803C61.3774 65.0581 61.175 63.6479 61.9199 62.6533Z" fill="#3490F6" />
                    </svg>
                    <h2 style={{ fontSize: '25px', marginTop: '30px', marginBottom: '0' }}>You dont't have any segments yet</h2>
                    <p style={{ marginTop: '10px' }}>Create a new segment by fiiltering contacts </p>
                    <Link to='/createsegments' style={{ textDecoration: 'none', }}>
                        <button className="contacts_button" style={{ display: 'flex', borderRadius: '4px', marginTop: '20px', background: 'rgb(52, 144, 246)', color: '#fff', border: 'none', width: '183px', height: '40px' }}>
                            <AddIcon style={{ width: '20px', height: '20px', marginTop: '10px',marginLeft:'9px' }} />
                            <p style={{ marginTop: '12px', marginLeft: '8px', fontSize: '14px' }}>Create a segments</p>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Segment