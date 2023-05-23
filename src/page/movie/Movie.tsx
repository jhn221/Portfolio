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
                        뭘봐유 프로젝트의 main page로 왓챠, 티빙, 웨이브에서 받아온 영화 순위를 확인할 수 있습니다.<br/><br/>
                        react-slick 라이브러리를 이용하여 10등까지의 영화를 확인할 수 있도록 구성했습니다.<br/><br/>
                        24시간마다 최신화 되는 영화 순위에 따라 최신 순위가 main 화면에 보이게 됩니다.<br/><br/>
                        원하는 영화를 검색을 통해 찾을 수 있습니다.
                    </span>
                </div>
                <div className='Pro2Pic2'>
                    <img src='assets/pro02_signup.png' alt='pro02_signup'/>
                    <span>
                        JWT로그인 방식을 적용함에 따라 회원가입을 진행할 수 있는 페이지 입니다.<br/><br/>
                        유효성 검사를 통해 각각의 입력이 올바르지 않다면 회원가입을 완료할 수 없습니다.</span>
                    <span className='pageName'>SignUp</span>
                </div>
                <div className='Pro2Pic1'>
                    <img src='assets/pro02_detail.png' alt='pro02_detail'/>
                    <span className='pageName'>Detail</span>
                    <span>각각의 영화 detail 정보를 확인할 수 있는 페이지 입니다.<br/><br/>
                    해당 화면에서 추천/비추천, 인생영화, 찜하기 등의 평가를 할 수 있으며 다른 사용자들이 평가한 데이터도 확인할 수 있습니다.<br/><br/>
                    또한 각 영화를 볼 수 있는 OTT가 안내되어 있으며 버튼을 누르면 해당 OTT 웹 사이트로 연결됩니다.<br/><br/>
                    영화에 대한 한줄 평도 확인할 수 있습니다.<br/><br/> 로그인 한 회원은 작성, 수정, 삭제가 가능하며 댓글은 react-query를 이용한 무한 스크롤 기능이 추가되어있습니다.
                    </span>
                </div>
                <div className='Pro2Pic2'>
                    <img src='assets/pro02_favorite.png' alt='pro02_favorite'/>
                    <span>사용자가 선택한 인생 영화(최대 3작품)을 확인할 수 있는 페이지 입니다.<br/><br/>
                    인생작품 외에도 detail 페이지에서 본인이 평가한 영화를 각각의 페이지에서 확인할 수 있습니다.</span>
                    <span className='pageName'>Mypage</span>
                </div>
                <div className='Pro2Pic1'>
                    <img src='assets/pro02_board.png' alt='pro02_board'/>
                    <span className='pageName'>Board</span>
                    <span>왓챠, 웨이브, 티빙 으로 탭으로 구분되어 각 OTT별로 자유롭게 이야기 할 수 있는 게시판 페이지 입니다.<br/><br/>
                    로그인을 한 사용자만 사용할 수 있는 페이지로, 채팅 느낌이 나도록 다른 사용자가 입력한 것은 왼쪽에, 사용자 본인이 입력한 것은 오른쪽에 뜨도록 구현하였습니다.<br/><br/>
                    본인이 작성한 글은 수정, 삭제가 가능합니다.
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