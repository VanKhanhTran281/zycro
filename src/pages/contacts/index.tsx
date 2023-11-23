import { Link } from "react-router-dom";
import './contacts.css'
import AddIcon from '@mui/icons-material/Add';
const Contacts = () => {
    return (
        <div style={{ display: 'grid' }}>
            <div className="contacts-header">
                <div>
                    <h1 className="contacts_h1">Lists</h1>
                </div>
            </div>
            <div style={{ height: '737px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '90px' }}>
                    <svg width="80" height="81" viewBox="0 0 80 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.32" d="M18 5C15.1997 5 13.7996 5 12.73 5.54497C11.7892 6.02433 11.0243 6.78924 10.545 7.73005C10 8.79961 10 10.1997 10 13L10 68C10 70.8003 10 72.2004 10.545 73.27C11.0243 74.2108 11.7892 74.9757 12.73 75.455C13.7996 76 15.1997 76 18 76L64 76C66.8003 76 68.2004 76 69.27 75.455C70.2108 74.9757 70.9757 74.2108 71.455 73.27C72 72.2004 72 70.8003 72 68L72 13C72 10.1997 72 8.79961 71.455 7.73005C70.9757 6.78924 70.2108 6.02433 69.27 5.54497C68.2004 5 66.8003 5 64 5L18 5Z" fill="#3490F6" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M31.929 22.2488C32.2058 22.557 32.1803 23.0312 31.8722 23.308L25.4582 29.069C25.1731 29.325 24.7409 29.325 24.4558 29.069L21.2488 26.1885C20.9407 25.9117 20.9152 25.4375 21.192 25.1293C21.4688 24.8212 21.943 24.7958 22.2512 25.0725L24.957 27.5029L30.8698 22.192C31.178 21.9153 31.6522 21.9407 31.929 22.2488ZM40.242 25.6305C40.242 25.2163 40.5778 24.8805 40.992 24.8805L60.234 24.8805C60.6482 24.8805 60.984 25.2163 60.984 25.6305C60.984 26.0447 60.6482 26.3805 60.234 26.3805L40.992 26.3805C40.5778 26.3805 40.242 26.0447 40.242 25.6305ZM31.929 36.6514C32.2058 36.9595 32.1803 37.4337 31.8722 37.7105L25.4582 43.4715C25.1731 43.7276 24.7409 43.7276 24.4558 43.4715L21.2488 40.591C20.9407 40.3142 20.9152 39.84 21.192 39.5319C21.4688 39.2237 21.943 39.1983 22.2512 39.4751L24.957 41.9054L30.8698 36.5946C31.178 36.3178 31.6522 36.3432 31.929 36.6514ZM40.242 40.033C40.242 39.6188 40.5778 39.283 40.992 39.283L60.234 39.283C60.6482 39.283 60.984 39.6188 60.984 40.033C60.984 40.4473 60.6482 40.783 60.234 40.783L40.992 40.783C40.5778 40.783 40.242 40.4473 40.242 40.033ZM31.929 51.0539C32.2058 51.3621 32.1803 51.8362 31.8722 52.113L25.4582 57.874C25.1731 58.1301 24.7409 58.1301 24.4558 57.874L21.2488 54.9935C20.9407 54.7168 20.9152 54.2426 21.192 53.9344C21.4688 53.6262 21.943 53.6008 22.2512 53.8776L24.957 56.308L30.8698 50.9971C31.178 50.7203 31.6522 50.7457 31.929 51.0539ZM40.242 54.4356C40.242 54.0214 40.5778 53.6856 40.992 53.6856L60.234 53.6856C60.6482 53.6856 60.984 54.0214 60.984 54.4356C60.984 54.8498 60.6482 55.1856 60.234 55.1856L40.992 55.1856C40.5778 55.1856 40.242 54.8498 40.242 54.4356Z" fill="#3490F6" />
                        <path d="M31.8722 23.308L32.2063 23.68L32.2063 23.68L31.8722 23.308ZM31.929 22.2488L31.557 22.583L31.929 22.2488ZM25.4582 29.069L25.1241 28.697L25.4582 29.069ZM24.4558 29.069L24.7899 28.697L24.4558 29.069ZM21.2488 26.1885L21.583 25.8165L21.583 25.8165L21.2488 26.1885ZM21.192 25.1293L20.8201 24.7952H20.8201L21.192 25.1293ZM22.2512 25.0725L21.9171 25.4445L21.9171 25.4445L22.2512 25.0725ZM24.957 27.5029L24.6229 27.8749C24.8129 28.0456 25.1011 28.0456 25.2911 27.8749L24.957 27.5029ZM30.8698 22.192L30.5357 21.8201L30.5357 21.8201L30.8698 22.192ZM40.992 24.8805L40.992 25.3805L40.992 24.8805ZM60.234 24.8805L60.234 24.3805L60.234 24.8805ZM60.984 25.6305L61.484 25.6305L60.984 25.6305ZM60.234 26.3805L60.234 25.8805L60.234 26.3805ZM40.992 26.3805L40.992 26.8805L40.992 26.3805ZM31.8722 37.7105L32.2063 38.0825L32.2063 38.0825L31.8722 37.7105ZM25.4582 43.4715L25.7923 43.8435L25.7923 43.8435L25.4582 43.4715ZM24.4558 43.4715L24.1217 43.8435L24.1217 43.8435L24.4558 43.4715ZM21.2488 40.591L20.9147 40.963L21.2488 40.591ZM21.192 39.5319L20.8201 39.1978H20.8201L21.192 39.5319ZM22.2512 39.4751L21.9171 39.847L21.9171 39.847L22.2512 39.4751ZM24.957 41.9054L24.6229 42.2774C24.8129 42.4481 25.1011 42.4481 25.2911 42.2774L24.957 41.9054ZM30.8698 36.5946L30.5357 36.2226L30.5357 36.2226L30.8698 36.5946ZM40.992 39.283L40.992 38.783L40.992 39.283ZM40.242 40.033L39.742 40.033L40.242 40.033ZM60.234 39.283L60.234 39.783L60.234 39.283ZM60.234 40.783L60.234 41.283L60.234 40.783ZM40.992 40.783L40.992 40.283L40.992 40.783ZM31.8722 52.113L32.2063 52.485L32.2063 52.485L31.8722 52.113ZM25.4582 57.874L25.1241 57.5021L25.1241 57.5021L25.4582 57.874ZM24.4558 57.874L24.7899 57.5021L24.7899 57.5021L24.4558 57.874ZM21.2488 54.9935L20.9147 55.3655L20.9147 55.3655L21.2488 54.9935ZM21.192 53.9344L20.8201 53.6003L20.8201 53.6003L21.192 53.9344ZM22.2512 53.8776L22.5853 53.5056L22.5853 53.5056L22.2512 53.8776ZM24.957 56.308L24.6229 56.6799C24.8129 56.8506 25.1011 56.8506 25.2911 56.6799L24.957 56.308ZM30.8698 50.9971L31.2039 51.3691L30.8698 50.9971ZM40.992 53.6856L40.992 53.1856L40.992 53.6856ZM40.242 54.4356L40.742 54.4356L40.242 54.4356ZM60.234 53.6856L60.234 54.1856L60.234 53.6856ZM60.984 54.4356L60.484 54.4356L60.984 54.4356ZM60.234 55.1856L60.234 55.6856L60.234 55.1856ZM40.992 55.1856L40.992 54.6856L40.992 55.1856ZM32.2063 23.68C32.7199 23.2186 32.7623 22.4283 32.3009 21.9147L31.557 22.583C31.6492 22.6857 31.6408 22.8437 31.538 22.936L32.2063 23.68ZM25.7923 29.441L32.2063 23.68L31.538 22.936L25.1241 28.697L25.7923 29.441ZM24.1217 29.441C24.5968 29.8677 25.3172 29.8677 25.7923 29.441L25.1241 28.697C25.029 28.7824 24.885 28.7824 24.7899 28.697L24.1217 29.441ZM20.9147 26.5605L24.1217 29.441L24.7899 28.697L21.583 25.8165L20.9147 26.5605ZM20.8201 24.7952C20.3587 25.3088 20.4011 26.0992 20.9147 26.5605L21.583 25.8165C21.4802 25.7242 21.4718 25.5662 21.564 25.4635L20.8201 24.7952ZM22.5853 24.7006C22.0717 24.2393 21.2814 24.2816 20.8201 24.7952L21.564 25.4635C21.6563 25.3607 21.8143 25.3523 21.9171 25.4445L22.5853 24.7006ZM25.2911 27.1309L22.5853 24.7006L21.9171 25.4445L24.6229 27.8749L25.2911 27.1309ZM30.5357 21.8201L24.6229 27.1309L25.2911 27.8749L31.2039 22.564L30.5357 21.8201ZM32.3009 21.9147C31.8396 21.4011 31.0493 21.3587 30.5357 21.8201L31.2039 22.564C31.3067 22.4718 31.4647 22.4802 31.557 22.583L32.3009 21.9147ZM40.992 24.3805C40.3016 24.3805 39.742 24.9402 39.742 25.6305L40.742 25.6305C40.742 25.4924 40.8539 25.3805 40.992 25.3805L40.992 24.3805ZM60.234 24.3805L40.992 24.3805L40.992 25.3805L60.234 25.3805L60.234 24.3805ZM61.484 25.6305C61.484 24.9402 60.9243 24.3805 60.234 24.3805L60.234 25.3805C60.372 25.3805 60.484 25.4924 60.484 25.6305L61.484 25.6305ZM60.234 26.8805C60.9243 26.8805 61.484 26.3209 61.484 25.6305L60.484 25.6305C60.484 25.7686 60.372 25.8805 60.234 25.8805L60.234 26.8805ZM40.992 26.8805L60.234 26.8805L60.234 25.8805L40.992 25.8805L40.992 26.8805ZM39.742 25.6305C39.742 26.3209 40.3016 26.8805 40.992 26.8805L40.992 25.8805C40.8539 25.8805 40.742 25.7686 40.742 25.6305L39.742 25.6305ZM32.2063 38.0825C32.7199 37.6212 32.7623 36.8309 32.3009 36.3173L31.557 36.9855C31.6492 37.0882 31.6408 37.2463 31.538 37.3385L32.2063 38.0825ZM25.7923 43.8435L32.2063 38.0825L31.538 37.3385L25.1241 43.0995L25.7923 43.8435ZM24.1217 43.8435C24.5968 44.2702 25.3172 44.2702 25.7923 43.8435L25.1241 43.0995C25.029 43.1849 24.885 43.1849 24.7899 43.0995L24.1217 43.8435ZM20.9147 40.963L24.1217 43.8435L24.7899 43.0995L21.583 40.219L20.9147 40.963ZM20.8201 39.1978C20.3587 39.7114 20.4011 40.5017 20.9147 40.963L21.583 40.219C21.4802 40.1268 21.4718 39.9687 21.564 39.866L20.8201 39.1978ZM22.5853 39.1031C22.0717 38.6418 21.2814 38.6842 20.8201 39.1978L21.564 39.866C21.6563 39.7633 21.8143 39.7548 21.9171 39.847L22.5853 39.1031ZM25.2911 41.5334L22.5853 39.1031L21.9171 39.847L24.6229 42.2774L25.2911 41.5334ZM30.5357 36.2226L24.6229 41.5334L25.2911 42.2774L31.2039 36.9665L30.5357 36.2226ZM32.3009 36.3173C31.8396 35.8037 31.0493 35.7613 30.5357 36.2226L31.2039 36.9665C31.3067 36.8743 31.4647 36.8828 31.557 36.9855L32.3009 36.3173ZM40.992 38.783C40.3016 38.783 39.742 39.3427 39.742 40.033L40.742 40.033C40.742 39.895 40.8539 39.783 40.992 39.783L40.992 38.783ZM60.234 38.783L40.992 38.783L40.992 39.783L60.234 39.783L60.234 38.783ZM61.484 40.033C61.484 39.3427 60.9243 38.783 60.234 38.783L60.234 39.783C60.372 39.783 60.484 39.895 60.484 40.033L61.484 40.033ZM60.234 41.283C60.9243 41.283 61.484 40.7234 61.484 40.033L60.484 40.033C60.484 40.1711 60.372 40.283 60.234 40.283L60.234 41.283ZM40.992 41.283L60.234 41.283L60.234 40.283L40.992 40.283L40.992 41.283ZM39.742 40.033C39.742 40.7234 40.3016 41.283 40.992 41.283L40.992 40.283C40.8539 40.283 40.742 40.1711 40.742 40.033L39.742 40.033ZM32.2063 52.485C32.7199 52.0237 32.7623 51.2334 32.3009 50.7198L31.557 51.388C31.6492 51.4907 31.6408 51.6488 31.538 51.7411L32.2063 52.485ZM25.7923 58.246L32.2063 52.485L31.538 51.7411L25.1241 57.5021L25.7923 58.246ZM24.1217 58.246C24.5968 58.6728 25.3172 58.6728 25.7923 58.246L25.1241 57.5021C25.029 57.5874 24.885 57.5874 24.7899 57.5021L24.1217 58.246ZM20.9147 55.3655L24.1217 58.246L24.7899 57.5021L21.583 54.6216L20.9147 55.3655ZM20.8201 53.6003C20.3587 54.1139 20.4011 54.9042 20.9147 55.3655L21.583 54.6216C21.4802 54.5293 21.4718 54.3712 21.564 54.2685L20.8201 53.6003ZM22.5853 53.5056C22.0717 53.0443 21.2814 53.0867 20.8201 53.6003L21.564 54.2685C21.6563 54.1658 21.8143 54.1573 21.9171 54.2496L22.5853 53.5056ZM25.2911 55.936L22.5853 53.5056L21.9171 54.2496L24.6229 56.6799L25.2911 55.936ZM30.5357 50.6251L24.6229 55.936L25.2911 56.6799L31.2039 51.3691L30.5357 50.6251ZM32.3009 50.7198C31.8396 50.2062 31.0493 50.1638 30.5357 50.6251L31.2039 51.3691C31.3067 51.2768 31.4647 51.2853 31.557 51.388L32.3009 50.7198ZM40.992 53.1856C40.3016 53.1856 39.742 53.7452 39.742 54.4356L40.742 54.4356C40.742 54.2975 40.8539 54.1856 40.992 54.1856L40.992 53.1856ZM60.234 53.1856L40.992 53.1856L40.992 54.1856L60.234 54.1856L60.234 53.1856ZM61.484 54.4356C61.484 53.7452 60.9243 53.1856 60.234 53.1856L60.234 54.1856C60.372 54.1856 60.484 54.2975 60.484 54.4356L61.484 54.4356ZM60.234 55.6856C60.9243 55.6856 61.484 55.1259 61.484 54.4356L60.484 54.4356C60.484 54.5736 60.372 54.6856 60.234 54.6856L60.234 55.6856ZM40.992 55.6856L60.234 55.6856L60.234 54.6856L40.992 54.6856L40.992 55.6856ZM39.742 54.4356C39.742 55.1259 40.3016 55.6856 40.992 55.6856L40.992 54.6856C40.8539 54.6856 40.742 54.5736 40.742 54.4356L39.742 54.4356Z" fill="#3490F6" />
                    </svg>
                    <h1 style={{ fontSize: '25px', marginTop: '30px', marginBottom: '0' }}>You dont't have lists yet</h1>
                    <p style={{ marginTop: '10px' }}>Create new list by adding contacts and continue enrich your contact database</p>
                    <Link to='/createlists' style={{ textDecoration: 'none' }}>
                        <button className="contacts_button" style={{ display: 'flex', borderRadius: '4px', marginTop: '20px', background: 'rgb(52, 144, 246)', color: '#fff', border: 'none', width: '110px', height: '30px' }}>
                            <AddIcon style={{ width: '20px', height: '20px', marginTop: '4px' }} />
                            <p style={{ marginTop: '7.5px', marginLeft: '8px', fontSize: '12px' }}>Create a list</p>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Contacts