import './_Content.scss'
import Card from './Card/Card';
import "bootstrap/dist/css/bootstrap.css";

function Content() {
    return ( 

        <div className='content min-vh-100 pt-3'> 
            <div className='container-fluid d-flex flex-column align-items-center'>
                <div className='title d-flex'>
                    <hr className='doubleline'></hr>
                    <div className='title-block d-flex flex-column align-items-center'>
                        <h3 className='title-group'>Area 515</h3>
                        <div className='title-group'>Happy Mind Happy Life</div>
                    </div>
                    <hr className='doubleline'></hr>
                </div>
                <div className='row'>
                    <div className='col-xxl-3 py-3 card-hover'>
                        <Card></Card>
                    </div>
                    <div className='col-xxl-3 py-3 card-hover'>
                        <Card></Card>
                    </div>
                    <div className='col-xxl-3 py-3 card-hover'>
                        <Card></Card>
                    </div>
                    <div className='col-xxl-3 py-3 card-hover'>
                        <Card></Card>
                    </div>
                    <div className='col-xxl-3 py-3 card-hover'>
                        <Card></Card>
                    </div>
                    <div className='col-xxl-3 py-3 card-hover'>
                        <Card></Card>
                    </div>
                    <div className='col-xxl-3 py-3 card-hover'>
                        <Card></Card>
                    </div>
                    <div className='col-xxl-3 py-3 card-hover'>
                        <Card></Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;