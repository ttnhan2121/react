import './_AboutPage.scss'
import bg1 from '../../../../assets/img/background.png'
import { useEffect } from 'react';
function AboutPage() {
    useEffect(() => {
        window.scrollTo(0,0);
    })
    return ( 
        <div className='aboutpage'>
            <h1>AREA 515</h1>
            <p className='text'>Ngoài thị trường họ chỉ quan tâm đến doanh thu, lợi nhuận. Còn chúng tôi thì tìm đủ mọi cách, làm bất cứ điều gì để khách hàng luôn cảm thấy hài lòng và hạnh phúc. Chúng tôi chưa dám nghĩ mình là số một, nhưng trong tương lai chúng tôi tự tin khẳng định sẽ mãi nỗ lực nâng cao, phát triển nhằm mục đích vươn lên đỉnh điểm về chất lượng dịch vụ và sản phẩm trong từng ngày, từng giờ, từng phút, từng giây, để đem lại cho khách hàng những item tinh tuý nhất, kèm theo đó là một mức giá phù hợp với túi tiền của tất cả mọi người.</p>
            <p className='text'>Chào mừng đến với AREA 515! Hãy để chúng tôi có cơ hội được phục vụ bạn một cách chân thành và tận tâm hết sức có thể.</p>
            <p className='img'><img src={bg1}  alt="gioithieu"></img></p>
        </div>
    );
}

export default AboutPage;