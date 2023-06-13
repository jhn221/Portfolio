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
                        <strong>sayo 프로젝트의 main page로 찜하기 순으로 정렬된 인기 상품과 최근 등록된 상품을 확인할 수 있는 곳입니다.</strong><br/><br/><br/>
                        react-slick 라이브러리를 이용하여 아이템을 확인할 수 있도록 구성했습니다.<br/><br/>
                        전체보기 버튼을 통해 Item list 화면으로, 지도로 검색하기 버튼을 통해 Map 화면으로, 공동구매 제안하기 버튼을 통해 제안하기 화면으로 연결됩니다.
                    </span>
                </div>
                <div className='Pic2'>
                    <img src='assets/pro03_login.png' alt='pro03_login'/>
                    <span>
                        <strong>회원 로그인을 할 수 있는 페이지 입니다.</strong><br/><br/><br/>
                        소셜로그인을 메인 로그인으로 구현했으며 카카오, 다음, 구글 로그인이 가능합니다.<br/><br/>
                        test를 위한 계정이 따로 생성되어 있습니다.<br/><br/>
                        (이메일을 통한 로그인은 test를 위한 기능으로 회원가입 기능은 별도로 만들지 않았습니다.)</span>
                    <span className='pageName'>Login</span>
                </div>
                <div className='Pic1'>
                    <img src='assets/pro03_list.png' alt='pro03_list'/>
                    <span className='pageName'>Item List</span>
                    <span><strong>전체 아이템을 확인 할 수 있는 화면으로 판매 상태 및 카테고리별로 상품을 조회할 수 있는 화면입니다.</strong><br/><br/><br/>
                    아이템 사진을 hover 시 사진이 확대 되는 효과로 현재 보고 있는 아이템의 사진을 더 크게 볼 수 있습니다.<br/><br/>
                    각 사진을 누르면 아이템의 디테일 화면으로 들어갑니다.<br/><br/>
                    판매 종료된 상품은 판매 종료 표시가 붙게 됩니다.<br/><br/>
                    react-js-pagenation을 이용해 pagenation을 구현하였습니다.
                    </span>
                </div>
                <div className='Pic2'>
                    <img src='assets/pro03_info.png' alt='pro03_info'/>
                    <span><strong>회원 정보를 조회/수정할 수 있는 화면입니다.</strong><br/><br/><br/>
                    로그아웃 버튼과 회원탈퇴 기능이 구현되어 있습니다.<br/><br/>
                    정보 수정과 입력이 가능하며 react-daum-postcode 라이브러리를 이용해 주소를 입력할 수 있습니다.<br/><br/>
                    현재 회원탈퇴 기능은 테스트를 위해 기능을 막아놓은 상태입니다.</span>
                    <span className='pageName'>Myinfo</span>
                </div>
                <div className='Pic1'>
                    <img src='assets/pro03_map.png' alt='pro03_map'/>
                    <span className='pageName'>Map</span>
                    <span><strong>전체 아이템을 지도에서 확인 할 수 있는 화면에서 조회 할 수 있는 화면입니다.</strong><br/><br/><br/>
                    원하는 주소를 검색할 수 있습니다.(ex.을지로)<br/><br/>
                    해당하는 주소에서 판매하는 아이템을 확인할 수 있습니다.<br/><br/>
                    kakao-map 라이브러리를 이용해 구현하였습니다.
                    </span>
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