import React from 'react'
import NavabaMenu from '../Menu/NavabaMenu';
import Footer from '../Footer/Footer';
import MenuTendance from '../Menu/MenuTendance'
import ListeTendance from '../Menu/ListeTendance'


const Tendance = () => {
    return (
        <div>
            <NavabaMenu/>

                <div class="hero_home_tendance version_3">
                    <div class="content"> 
                    </div>
                </div>

                {/* <MenuTendance/> */}

                <div class="row">
                    <div class="col-md-3">
                        {/* <ListeTendance/> */}
                    </div>
                </div>

            <Footer/>   
        </div>
    )
}

export default Tendance;
