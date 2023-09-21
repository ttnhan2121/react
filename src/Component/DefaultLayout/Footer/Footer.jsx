import { Link } from 'react-router-dom'
import "./_Footer.scss"
import FB from '../../../assets/img/fb.png'
import INS from '../../../assets/img/ins.png'
import SP from '../../../assets/img/shopee.png'

function Footer() {
    return ( 
        <footer className="footer">
            <div className="ft-item">
                <h3>THÔNG TIN LIÊN HỆ:</h3>
                <hr></hr>
                <ul className="info">
                    <li>
                        Phone:
                        <a href=""> 096 653 81 77 </a>
                    </li>
                    <li>Email: store.area515@gmail.com</li>
                </ul>
            </div>
            <div className="ft-item">
                <h3>CHÍNH SÁCH HỖ TRỢ:</h3> 
                <hr></hr>
                <ul className="info">
                    <Link to={''} className="ft-link">Giới thiệu</Link><br></br>
                    <Link to={''} className="ft-link">Chính sách đổi trả</Link><br></br>
                    <Link to={''} className="ft-link">Chính sách bảo mật</Link><br></br>
                    <Link to={''} className="ft-link">Điều khoản dịch vụ</Link>
                </ul>
            </div>
            <div className="ft-item">
                <h3>THÔNG TIN LIÊN KẾT:</h3> 
                <hr></hr>
                <p>Hãy liên kết với chúng tôi.</p>
                <div className='iconLink'>
                    <div className='fb'>
                        <a href='https://www.facebook.com/store.area515' target='_blank' rel='noopenner noreferrer'>
                            <img src={FB} alt='fblogo'  width={25}></img>
                        </a>
                    </div>
                    <div className='ins'>
                        <a href='https://www.instagram.com/store.area515' target='_blank' rel='noopenner noreferrer'>
                            <img src={INS} alt='inslogo'  width={25}></img>
                        </a>
                    </div>
                    <div className='shopee'>
                        <a href='https://shopee.vn/store.area515' target='_blank' rel='noopenner noreferrer'>
                            <img src={SP} alt='splogo'  width={30}></img>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;