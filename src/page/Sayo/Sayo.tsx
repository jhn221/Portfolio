import '../style.scss'
import {BiArrowBack} from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Sayo = () => {
    return(
        <div className='Sayo'>
            <div className='DetailTitle'>
                <Link to='/'>
                    <BiArrowBack/>
                </Link>
                <h2>Sayo</h2><br/>
                <h5>구현 page : itemList, 소셜로그인 (kakao), myinfo, main</h5>
                <h5>기여도 : 50% </h5>
            </div>
            <div className='desktopImg'>
                <h4>데스크탑 화면</h4>
                <div className='Pic1'>
                    <img src='assets/pro03_main.png' alt='pro03_main'/>
                    <span className='pageName'>Main</span>
                    <span>
                        sayo 프로젝트의 main page로 찜하기 순으로 정렬된 인기 상품과 전체 상품 중 일부 아이템을 우선 확인할 수 있는 곳입니다.<br/><br/>
                        react-slick 라이브러리를 이용하여 아이템을 확인할 수 있도록 구성했습니다.
                    </span>
                </div>
                <div className='Pic2'>
                    <img src='assets/pro03_login.png' alt='pro03_login'/>
                    <span>
                        소셜로그인을 메인 로그인으로 구성했으며 test를 위한 JWT로그인도 추가했습니다.<br/><br/>
                        (jwt 로그인은 test를 위한 기능으로 회원가입 기능은 별도로 만들지 않았습니다.)</span>
                    <span className='pageName'>Login</span>
                </div>
                <div className='Pic1'>
                    <img src='assets/pro03_list.png' alt='pro03_list'/>
                    <span className='pageName'>Item List</span>
                    <span>전체 아이템을 확인 할 수 있는 화면으로 판매 상태 및 카테고리별로 상품을 조회할 수 있습니다.<br/><br/>
                    아이템 사진을 hover 시 사진이 확대 되는 효과로 현재 보고 있는 아이템의 사진을 더 크게 볼 수 있습니다.<br/><br/>
                    판매 종료된 상품은 판매 종료 표시가 붙게 됩니다.<br/><br/>
                    react-js-pagenation을 이용해 pagenation을 구현하였습니다.
                    </span>
                </div>
                <div className='Pic2'>
                    <img src='assets/pro03_info.png' alt='pro03_info'/>
                    <span>나의 정보를 조회/수정할 수 있는 화면으로 로그아웃이 가능합니다.<br/><br/>
                    react-daum-postcode 라이브러리를 이용해 주소 정보를 받아옵니다.<br/><br/>
                    현재 회원탈퇴는 jwt에만 있는 기능으로 테스트를 위해 기능을 막아놓은 상태입니다.</span>
                    <span className='pageName'>Myinfo</span>
                </div>
            </div>
            <div className='mobileImgs'>
                <h4>모바일 화면(반응형)</h4>
                <div className='mobileImg'>
                    <img src='assets/pro03_mobile_main.png' alt='mobile_main'></img>
                    <img src='assets/pro03_mobile_detail.png' alt='mobile_detail'></img>
                    <img src='assets/pro03_mobile_list.png' alt='mobile_list'></img>
                    <span>모바일, 태블릿, PC 화면에서도 sayo 페이지를 확인할 수 있도록 반응형으로 구현하였습니다.</span>
                </div>
            </div>
            
        </div>
    )
}

export default Sayo;