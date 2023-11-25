import './_DieuKhoanDichVu.scss'
import img1 from '../../../../assets/img/dieukhoandichvu.jpg'
import { useEffect } from 'react';
function DieuKhoanDichVu(){
  useEffect(()=>{
    window.scrollTo(0,0);
  })
  return (
    <div className='DieuKhoanDichVu'>
      <p className='img'>
        <img src={img1} alt='dieukhoandichvu'/>
      </p>
    </div>
  )
}
export default DieuKhoanDichVu;