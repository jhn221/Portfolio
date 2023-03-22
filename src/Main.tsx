import { useState } from 'react';
import '../src/component/Style.scss';

const Main = () => {
    const [index, setIndex] = useState(false)
    const [hasModal, setHasModal] = useState(false)

    const handleImgClick = () => {
        setHasModal(!hasModal)

    }
    return (
        <div className='home'>
        <div className='title'><div>웹 프론트엔드 개발자 장한나의 포트폴리오입니다</div></div>
        <div className='main'>
            <div className='intro'>
                <h3>about me</h3>
                <div className='aboutMe'>
                    <h5>함께 일하고 싶은 개발자가 되자<br/><br/></h5>
                    <span className='introduce'>6개월동안의 부트캠프 기간동안 수많은 페어활동을 통해서 가장 크게 느꼈던 점은 함께하는 동료의 힘이였습니다.<br/>
                    동료와 함께 못 푸는 문제를 해결하고 서로 모르는 것을 알려주는 시간이 제가 가장 크게 발전하는 시간이였다는 생각이 들었습니다.<br/>
                    심지어 파트너에게 내 코드를 설명하는 동안 파트너가 아무 것도 하지 않고 듣기만 해도 정리가 되는 때도 있었습니다.<br/>
                    그만큼 함께하는 동료들과의 합이 중요하다는 생각이 들었고
                    저도 함께 일하고 싶은 개발자가 되어 좋은 결과물을 내기 위해 동료들과 시너지 효과를 내고 싶습니다.</span>
                    
                    {/* 저는 "문제해결능력이 뛰어난" 개발자가 되자는 목표를 가지고 있습니다.<br/>
                    코드를 고치지 않는 것이 때로는 가장 좋은 해결방안이 될 수 있다라는 말을 본 적이 있습니다.<br/>

                    이처럼 문제를 어떻게 바라보는지에 따라 올바르게 문제를 인지하고 해결하기 위해 노력하겠습니다. */}
                    {/* 올바르게 인지하고 문제를 어떻게 해결할 것인지에 대한 생각을 하며 간지러운 곳을 긁어주는 웹 사이트를 제작하고 싶습니다.
                    저의 목표를 이루기 위해  */}
                </div>
            </div>
            <h3>project</h3>
            <div className='Project'>    
                <div className='ProjectSummary'>
                    <h2>포트폴리오</h2>
                    <div>2023.03.06 ~ 현재</div>
                    배포링크 : 
                    <a href='https://jhn221.github.io/hanna_Portfolio/'>'hanna_Portfolio'</a>
                </div>
                <div className='ProjectDetail'>
                    <div className='aboutProject'>포트폴리오 소개를 위한 간단한 홈페이지 입니다.</div><br/>
                    <div>참여인원 : <span> 1명</span></div>
                    <div>사용 언어 및 프레임워크 : <span>typescript, HTML, SCSS, react</span></div>
                    <ul>
                        <li>더미데이터를 이용해 제작되었습니다.</li>
                        <li>git page를 이용해 배포되었습니다.</li>
                        <li>반응형 웹 페이지로 구현했습니다. </li>
                        {/* <li></li> */}
                    </ul>
                    {/* <div>간단한 회고.</div> */}
                </div>
            </div>
            <div className='Project'>
                <div className='ProjectSummary'>
                    <h2>SAYO</h2>
                    <div>2023.02.21 ~ 현재</div>
                    배포링크 : 
                    {/* <a href='https://jhn221.github.io/'>'sayo'</a> */}
                </div>
                <div className='ProjectDetail'>
                    <div className='aboutProject'>1인 가구가 늘어나는 현재, 이웃들과 대량의 제품을 공동구매 할 수 있도록 지도를 기반으로 제품을 검색하고 구매할 수 있도록 제작하게 된 사이트입니다.</div><br/>
                    <div>참여인원 : <span>백엔드 3명 프론트엔드 2명 중 FrontEnd로 참여 (팀원)</span></div>
                    <div>사용 언어 및 프레임워크 : <span>typescript, HTML, Styled-Component, react, react-query, axios, router-dom</span></div>
                    <ul>
                        <li>이용자의 위치 근처에서 구매할 수 있는 공동구매 제품을 확인하고 구매할 수 있는 사이트입니다.</li>
                        <li>타입스크립트를 사용하였으며 상태관리는 recoil을 이용하였습니다.</li>
                        <li>소셜로그인(카카오, 네이버, 구글)을 이용한 로그인을 구현하였습니다.</li>
                        <li>git page를 이용해 배포되었습니다.</li>
                        <li>반응형 웹 페이지로 구현했습니다. </li>
                        <li>Home, 상품 Detail 등 구현 </li>
                    </ul>
                    <div className='ProjectPic'>
                        <img src='assets/pro03_main.png' onClick={handleImgClick} alt=''></img>
                        <img src='assets/pro03_list.png' alt=''></img>
                        <img src='assets/pro03_login.png' alt=''></img>
                        <img src='assets/pro03_mobile_main.png' alt=''></img>
                        <img src='assets/pro03_mobile_login.png' alt=''></img>
                        <img src='assets/pro03_mobile_list.png' alt=''></img>
                        {/* <img src='assets/pro03_list.png' alt=''></img>
                        <img src='assets/pro03_login.png' alt=''></img>
                        <img src='assets/pro02_favorite.png' alt=''></img>
                        <img src='assets/pro02_signup.png' alt=''></img> */}
                    </div>
                   
                    {/* <div>간단한 회고.</div> */}
                </div>
            </div>
            <div className='Project'>
                <div className='ProjectSummary'>
                    <h2>뭘봐유</h2>
                    <div>2023.01.02 ~ 2023.02.03</div>
                    회고 :<a href='https://jhn221.tistory.com/84'> 뭘봐유 프로젝트 회고</a>
                </div>
                <div className='ProjectDetail'>
                    <div className='aboutProject'>OTT는 많고 볼 수 있는 작품도 많지만 항상 영화 고르는데만 시간을 쏟다 지쳐 결국 영화를 보지 못 한 경험에서 불편함을 느껴 제작하게 된 사이트 입니다.</div><br/>
                    <div>참여인원 : <span>백엔드 3명 프론트엔드 3명 중 FrontEnd로 참여 (팀원)</span></div>
                    <div>사용 언어 및 프레임워크 : <span>javascript, HTML, Styled-Component, react, react-query, axios, router-dom</span></div>
                    <ul>
                        <li>크롤링을 이용한 데이터를 받아와 OTT별 (왓챠, 티빙, 웨이브) 영화 순위를 확인할 수 있는 사이트입니다.</li>
                        <li>바닐라 자바스크립트를 사용하였으며 redux로 관리하던 상태를 react-query로 리펙토링 했습니다.</li>
                        <li>useRef를 이용한 무한 스크롤을 구현했습니다.</li>
                        <li>AWS S3를 이용해 배포되었습니다.</li>
                        <li>1280px(웹 사이즈) 350px(모바일 사이즈) 적응형 웹 페이지로 구현했습니다.</li>
                        <li>영화 소개 디테일 페이지, 마이페이지(추천, 비추천, 인생작품, 찜하기 list), 게시판 페이지 구현</li>
                    </ul>
                    <div className='ProjectPic'>
                        <img src='assets/pro02_main.png' alt=''></img>
                        <img src='assets/pro02_detail.png' alt=''></img>
                        <img src='assets/pro02_board.png' alt=''></img>
                        <img src='assets/pro02_favorite.png' alt=''></img>
                        <img src='assets/pro02_signup.png' alt=''></img>
                    </div>
                </div>                
               
            </div>
            <div className='Project'>
                <div className='ProjectSummary'>
                    <h2>cloneoverflow </h2>
                    <div>2022.12.20 ~ 2022.12.31</div>
                    회고 : <a href='https://jhn221.tistory.com/81'> stackover flow 회고</a>
                    {/* TODO:눌렀을 때 화면 커지도록 구현하기 */}
                    {/* <img src = '/assets/pre-project.gif' style={{"width":"50px","height":"50px"}}/> */}
                </div>
                <div className='ProjectDetail'> 
                    <div className='aboutProject'>stackover flow를 클론코딩하여 질문 및 답변을 작성하고,평가할 수 있는 사이트입니다.</div><br/>
                    <div>참여인원 : <span>백엔드 3명 프론트엔드 3명 중 FrontEnd로 참여 (팀장)</span></div>
                    <div>사용 언어 및 프레임워크 : <span>javascript, HTML, Styled-Component, react, redux, axios, router-dom, react-pagenation</span></div>
                    <ul>
                        <li>바닐라 자바스크립트를 사용하였으며 router-dom과 redux 상태관리에 대해 공부했습니다.</li>
                        <li>jwt 토큰을 이용한 로그인 인증방식을 이용했습니다.</li>
                        <li>Home, 질문 디테일 페이지 페이지 구현</li>
                    </ul>
                    <div className='ProjectPic'>
                        <img src='assets/pro01_main.png' alt=''></img>
                        <img src='assets/pro01_detail.png' alt=''></img>
                        <img src='assets/pro01_members.png' alt=''></img>
                        <img src='assets/pro01_question.png' alt=''></img>
                        <img src='assets/pro01_edit.png' alt=''></img>
                    </div>
                    {/* <div>처음 경험하는 팀 프로젝트로 작은 기능들만 구현했던 전과 달리 프로젝트 전체에 대한 이해를 할 수 있었던 프로젝트였습니다.<br/>
                    코드 컨벤션이 제대로 되지 않아 코드 통일성이 없는 부분에 있어서 아쉬움이 있었지만 <br/>
                    프로젝트가 진행될수록 팀원들과 많은 회의를 통해서 앞으로의 팀프로젝트에서는 코드의 효율성과 통일성을 위해 자주 코드리뷰와 컨벤션 회의가 필요하다는 생각이 들었습니다.<br/>
                    </div> */}
                </div>
            </div>
            <div className='content'>
                <h3>content</h3>
                <div className='Logos'>
                    <div className='Logo'>email : ewal4291@gmail.com</div>
                    <a href='https://github.com/jhn221' className='Logo'>git : https://github.com/jhn221</a>
                    <a href='https://jhn221.tistory.com' className='Logo'>블로그 : https://jhn221.tistory.com</a>
                
                    {/* <a href='https://jhn221.tistory.com/81' className='Logo'>git : <img src = '/assets/github.png' style={{"width":"50px","height":"50px"}}/></a>
                    <a href='https://jhn221.tistory.com/81' className='Logo'>블로그 : <img src = '/assets/tstoryBlack.png' style={{"width":"35px","height":"35px"}}/></a> */}
                </div>
            </div>
        </div>
        </div>
    )
}

export default Main; 