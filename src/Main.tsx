import { forwardRef, useRef, useState } from 'react';
import '../src/component/Style.scss';
import { BsShift } from 'react-icons/bs';
import { Link } from 'react-router-dom';


const Main = forwardRef<any>((props, ref) => {

    const intro = useRef<HTMLDivElement>(null)

    const clickup = () => intro.current?.scrollIntoView({ behavior: 'smooth' });

    return (
        // <div className='home'>
        <div className='main' ref={ref}>
            <div className='intro' ref={intro}>
                <h3>about me</h3>
                <div className='aboutMe'>
                    <h5>함께 일하고 싶은 개발자가 되자<br/><br/></h5>
                    <span className='introduce'>평소 구현되어 있는 사이트를 들어가보면서 바꾸고 싶은 부분이나 수정하고 싶은 부분들이 있는 웹 사이트가 있었습니다.<br/>
                    먼저 눈으로 보이는 부분을 그려보고 싶다는 생각이 들어 먼저 JavaScript 인터넷 강의를 수강했습니다.<br/>
                    또한 기존 인터넷 강의를 보며 구현한 기능에서 더 나아가 새로운 기능을 넣어보는 스터디를 진행했습니다.<br/>
                    하지만 독학에서는 협업을 경험하기 힘들었고, 페어 활동 및 프로젝트에서 협업을 경험할 수 있는 부트캠프 프론트엔드 과정을 이수했습니다.<br/><br/>
                    6개월간의 학습과 2건의 프로젝트를 진행 후 수료를 했지만 마지막으로 프로젝트를 하면서 느낀 수 많은 type error와 run time 에러 등으로 javascript에 한계를 경험했습니다.
                    <br/> 뭘봐유 프로젝트를 함께 했던 팀원들과 다시 한번 프로젝트를 하기로 결정했고, typescript를 이용한 프로젝트를 진행하고 있으며 부족한 이론을 채우기 위해 유튜브 등 인터넷 강의를 병행하며 학습하고 있습니다.<br/>
                    지금까지의 경험과 이를 통해 얻은 지식을 발판으로 함께 일하고 싶은 개발자가 되자는 목표를 가지고 발전하기 위해 노력하겠습니다.<br/>
                   </span>
                </div>
                {/* <div className='aboutMe'>
                    <h5>함께 일하고 싶은 개발자가 되자<br/><br/></h5>
                    <span className='introduce'>6개월동안의 부트캠프 기간동안 수 많은 페어활동을 통해서 가장 크게 느꼈던 점은 함께하는 동료의 힘이였습니다.<br/><br/>
                    동료와 함께 못 푸는 문제를 해결하고 서로 모르는 것을 알려주는 시간이 제가 가장 크게 발전하는 시간이였다는 생각이 들었습니다.<br/>
                    하나의 과제에서도 다양한 문제 해결 방법을 알 수 있었고 많은 의사소통으로 상대방에게 내 코드, 내 의견을 전달하는 법을 익힐 수 있는 시간이였습니다.<br/>
                    파트너에게 내 코드를 논리적으로 설명하는 동안 머릿속으로 혼자 정리가 됐던 경험으로 논리적으로 말하는 것의 중요성도 깨달을 수 있었습니다.<br/><br/>
                    3개의 프로젝트를 진행하며 커뮤니케이션과 논리적으로 말하는 법과 타 팀원들에게 나의 의견을 전달하는 법을 발전시켰습니다.<br/>
                    이러한 저의 역량으로 함께 일하고 싶은 개발자가 되어 좋은 결과물을 내기 위해 동료들과 시너지 효과를 내고 싶습니다.</span>
                </div> */}
            </div>
            <h3>stack</h3>
                <div className='stackImg'>
                    
                    <div>
                        <img src={require('./img/git.png')} alt='git'/>
                        <img src={require('./img/aws.png')} alt='aws'/>
                    </div>
                    <div>
                        <img src={require('./img/react.png')} alt='react'/>

                    </div>
                    <div>
                        <img src={require('./img/HTML&CSS.png')} alt='react'/>
                        <img src={require('./img/javascript.png')} alt='react'/>
                        <img src={require('./img/typescript.png')} alt='react'/>
                    </div>
                    <div>
                        <img src={require('./img/styledComponent.png')} alt='react'/>
                        <img src={require('./img/sass.png')} alt='react'/>
                    </div>
                    <div>
                        <img src={require('./img/reactQuery.png')} alt='react'/>
                        <img src={require('./img/recoil.png')} alt='react'/>
                        <img src={require('./img/redux.jpeg')} alt='react'/>
                    </div>
                </div>
            <h3>project</h3>
           
            <div className='Project'>
                <div className='ProjectSummary'>
                    <h2>SAYO</h2>
                    <div>2023.02.21 ~ 현재</div>
                    배포링크 : 
                    <a href='http://sayo.s3-website.ap-northeast-2.amazonaws.com//'>'sayo'</a>
                    
                </div>
                <div className='ProjectDetail'>
                    <div className='aboutProject'>1인 가구가 늘어나는 현재, 이웃들과 대량의 제품을 공동구매 할 수 있도록 지도를 기반으로 제품을 검색하고 구매할 수 있도록 제작하게 된 사이트입니다.</div><br/><span>test ID :test@gmail.com</span>
                    <br/><span>test PW :asdf1234!!</span><br/><br/>
                    <div>참여인원 : <span>백엔드 3명 프론트엔드 2명 중 FrontEnd로 참여 (팀원)</span></div>
                    <div>사용 언어 및 프레임워크 : <span>typescript, HTML, Styled-Component, react, react-query, axios, router-dom</span></div>
                    {/* <ul>
                        <li>이용자의 위치 근처에서 구매할 수 있는 공동구매 제품을 확인하고 구매할 수 있는 사이트입니다.</li>
                        <li>타입스크립트를 사용하였으며 상태관리는 recoil을 이용하였습니다.</li>
                        <li>소셜로그인(카카오, 네이버, 구글)을 이용한 로그인을 구현하였습니다.</li>
                        <li>AWS S3를 이용해 배포되었습니다.</li>
                        <li>반응형 웹 페이지로 구현했습니다. </li><br/>
                    </ul> */}
                        <Link to='/sayo'>sayo 프로젝트 세부 정보 더보기</Link>
                    <div className='ProjectPic'>
                        {/* <Image/> */}
                    </div>
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
                    {/* <ul>
                        <li>크롤링을 이용한 데이터를 받아와 OTT별 (왓챠, 티빙, 웨이브) 영화 순위를 확인할 수 있는 사이트입니다.</li>
                        <li>javascript를 사용하였으며 redux로 관리하던 상태를 react-query로 리펙토링 했습니다.</li>
                        <li>useRef를 이용한 무한 스크롤을 구현했습니다.</li>
                        <li>AWS S3를 이용해 배포되었습니다.</li>
                        <li>1280px(웹 사이즈) 350px(모바일 사이즈) 적응형 웹 페이지로 구현했습니다.</li>
                    </ul> */}
                    <br/>
                    <Link to='/Movie'>
                        뭘봐유 프로젝트 세부 정보 더보기
                    </Link>
                    <div className='ProjectPic'>
                        {/* <Image2/> */}
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
                    <Link to='/clone'>cloneoverflow 프로젝트 세부정보 더보기</Link>

                </div>
            </div>
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
                    {/* <ul>
                        <li>더미데이터를 이용해 제작되었습니다.</li>
                        <li>git page를 이용해 배포되었습니다.</li>
                        <li>반응형 웹 페이지로 구현했습니다. </li>
                    </ul> */}
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
            <div className='Up'>
                <BsShift className='UpIcon' onClick={clickup}/>
            </div>
        </div>
        // </div>
    )
})

export default Main; 