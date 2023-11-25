import './_ChinhSachBaoMat.scss'
import img1 from '../../../../assets/img/chinhsachbaomat.jpg'
import { useEffect } from 'react';
function ChinhSachBaoMat(){
  useEffect(() => {
    window.scrollTo(0,0);
  })
    return(
      <div className="ChinhSachBaoMat">
        <p className='img'>
          <img src={img1} alt='chinhsachbaomat'></img>
        </p>
      </div>
    )
}

export default ChinhSachBaoMat;