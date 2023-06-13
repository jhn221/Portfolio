import { BiArrowBack } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import '../style.scss'



const Movie = () => {
    return(
        <div className='Movie'>
            <div className='DetailTitle'>
                <Link to='/'>
                    <BiArrowBack/>
                </Link>
                <h2>뭘봐유</h2><br/>
                <h5>구현 page : detail, mypage, board</h5>
                <h5>기여도 : 40%</h5>
            </div>
            <div className='desktopImg'>
                <h4>데스크탑 화면</h4>
                <div className='Pro2Pic1'>
                    <img src='assets/pro02_main.png' alt='pro02_main'/>
                    <span className='pageName'>Main</span>
                    <span>
                        <strong>뭘봐유 프로젝트의 main page로 왓챠, 티빙, 웨이브에서 받아온 영화 순위를 확인할 수 있습니다.</strong><br/><br/><br/>
                        react-slick 라이브러리를 이용하여 10등까지의 영화를 확인할 수 있도록 구성했습니다.<br/><br/>
                        24시간마다 최신화 되는 영화 순위에 따라 바뀐 순위가 적용되어 main 화면에 보이게 됩니다.<br/><br/>
                        원하는 영화를 검색을 통해 찾을 수 있습니다.<br/><br/>
                        각 영화를 선택하여 영화 detail 화면으로 넘어갈 수 있습니다.<br/><br/>
                    </span>
                </div>
                <div className='Pro2Pic2'>
                    <img src='assets/pro02_signup.png' alt='pro02_signup'/>
                    <span>
                        <strong>회원가입을 진행할 수 있는 페이지 입니다.</strong><br/><br/><br/>
                        유효성 검사를 통해 각각의 입력이 형식에 맞게 입력되야만 버튼이 활성화 됩니다.</span>
                    <span className='pageName'>SignUp</span>
                </div>
                <div className='Pro2Pic1'>
                    <img src='assets/pro02_detail.png' alt='pro02_detail'/>
                    <span className='pageName'>Detail</span>
                    <span>
                        <strong>각각의 영화 detail 정보를 확인할 수 있는 페이지 입니다.</strong><br/><br/>
                    해당 화면에서 추천/비추천, 인생영화, 찜하기 등으로 영화 평가를 할 수 있으며 아이콘을 hover 했을 때 다른 사용자들이 평가한 숫자를 확인할 수 있습니다.<br/><br/><br/>
                    각 영화를 볼 수 있는 OTT가 안내되어 있어 ott icon을 누르면 해당 OTT 웹 사이트로 연결됩니다.<br/><br/>
                    영화에 대한 한줄 평도 확인할 수 있습니다.<br/><br/> 
                    로그인 한 회원은 한줄 평 작성, 수정, 삭제가 가능하며 react-query를 이용한 무한 스크롤 기능이 구현되어있습니다.
                    </span>
                </div>
                <div className='Pro2Pic2'>
                    <img src='assets/pro02_favorite.png' alt='pro02_favorite'/>
                    <span><strong>사용자가 선택한 인생 영화(최대 3작품)을 확인할 수 있는 페이지 입니다.</strong><br/><br/><br/>
                    인생작품 외에도 detail 페이지에서 본인이 평가한 영화를 확인할 수 있습니다.<br/>(사이드 바에서 선택 가능 / 추천/비추천 페이지, 찜하기 페이지, 인생작품 선택 페이지)<br/><br/>
                    각 화면에서 작품을 삭제 할 수 있으며 인생페이지 화면에서는 별도로 영화 검색을 할 수 있도록 구현되어 있습니다.<br/><br/>
                    </span>
                    <span className='pageName'>Mypage</span>
                </div>
                <div className='Pro2Pic1'>
                    <img src='assets/pro02_board.png' alt='pro02_board'/>
                    <span className='pageName'>Board</span>
                    <span><strong>왓챠, 웨이브, 티빙 으로 탭으로 구분되어 각 OTT별로 자유롭게 이야기 할 수 있는 게시판 페이지 입니다.</strong><br/><br/><br/>
                    로그인을 한 사용자만 사용할 수 있는 페이지로,실시간 채팅 느낌이 나도록 다른 사용자가 입력한 것은 왼쪽에, 사용자 본인이 입력한 것은 오른쪽에 뜨도록 구현하였습니다.<br/><br/>
                    본인이 작성한 글은 작성, 수정, 삭제가 가능합니다.
                    </span>
                </div>
            </div>
            <div className='pro2MobileImgs'>
                <h4>모바일 화면(적응형)</h4>
                <div className='pro2MobileImg'>
                    <img src='assets/pro02_mobile_main.png' alt='mobile_main'></img>
                    <img src='assets/pro02_mobile_detail.png' alt='mobile_detail'></img>
                    <img src='assets/pro02_mobile_favorite.png' alt='mobile_list'></img>
                    <img src='assets/pro02_mobile_search.png' alt='mobile_list'></img>
                    <span>모바일 화면에서도 뭘봐유 페이지를 확인할 수 있도록 적응형으로 (350px 기준) 구현하였습니다.</span>
                </div>
            </div>
            
        </div>
    )
}

export default Movie;