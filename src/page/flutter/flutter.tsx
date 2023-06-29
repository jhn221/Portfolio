import '../style.scss'
import {BiArrowBack} from 'react-icons/bi';
import { Link } from 'react-router-dom';


const Flutter = () => {
        return(
            <div className='Sayo'>
                <div className='DetailTitle'>
                    <Link to='/'>
                        <BiArrowBack/>
                    </Link>
                    <h2>flutter</h2><br/>
                    <h5>구현 app : quiz, timer, movie</h5>
                    <h5>기여도 : 100% </h5>
                </div>
                <div className='desktopImg'>
                    <h4>실 기기(IOS/iphone 12 pro) 화면</h4>
                    <div className='pro2MobileImgs'>
                        <h4>quiz
                           <br/><span>chat GPT를 이용하여 영어 공부를 할 수 있는 앱입니다.</span>

                        </h4>
                        {/* <h6>실 기기 (Iphone 12 Pro 구현 화면 )</h6> */}
                        <div className='quiz'>
                        <h4>login</h4>
                            <img src='assets/quiz_login.PNG' alt='quiz_category'></img>
                        <span>
                        firebase auth과 google sign in 패키지를 이용해서 google 로그인을 구현했습니다.<br/><br/><br/>
                        GoogleSignIn함수를 호출하여 google 계정으로 인증 할 수 있도록 화면이 이동됩니다.<br/><br/>
                        로그인에 성공하면 사용자 정보를 받아올 수 있고 accessoken과 idToken을 사용하여 firebase에서 google계정을 사용하여 인증을 수행할 수 있는 credential을 생성합니다.<br/><br/>
                        firebase 인증 서비스를 사용하여 받아온 credential로 로그인을 시도하고 성공시 userCredential 객체를 반환받는 과정으로 로그인이 진행됩니다.<br/><br/><br/>
                        회원 정보 관리는 firestore를 이용하고 있으며 회원가입한 사용자의 정보가 firestore에 추가됩니다.<br/><br/>
                        회원으로 등록이 되어 있으며 레벨 선택이 완료된 사용자는 카테고리 화면으로 이동되며,새로 회원가입을 한 회원은 및 레벨 선택이 안되어 있는 회원은 레벨선택 페이지로 넘어가게 됩니다.<br/><br/>
                        </span>
                    </div>
                    <div className='MoviePic1'>
                        <span className='pageName'>level</span>
                            <img src='assets/quiz_level.PNG' alt='quiz_category'></img>
                            <img src='assets/quiz_category.PNG' alt='quiz_category'></img>
                        <span>
                            레벨과 카테고리를 선택할 수 있는 화면입니다.<br/><br/>
                            선택된 난이도는 firestore에 생성 되어 있는 collection에 documentID를 가지고 level의 값이 업데이트 됩니다.<br/><br/>
                            선택된 카테고리는 argument chatGPT에게 전달됩니다.<br/><br/>
                            
                        </span>
                    </div>
                    <div className='quiz'>
                        <h4>quiz</h4>
                            <img src='assets/quiz_test.PNG' alt='quiz_category'></img>
                        <span>
                            chatGPT REST API를 이용하여 사용자가 이전화면에서 선택한 카테고리와 레벨을 바탕으로 알맞은 문장을 출력해줍니다.<br/><br/><br/>

                            http 패키지를 이용하여 rest API와 통신합니다.<br/><br/>
                            제공된 endpoint에 post 요청을 보낼 때 Encode과정을 통해 객체를 JSON 문자열로 변환하여 값을 전달합니다.<br/><br/>
                            response 값은 decode 과정을 통해 객체로 변환하여 값을 사용합니다.<br/><br/><br/>
                            사용자가 하단의 Textfield에 문자를 입력하면 제출 버튼이 활성화 되도록 구현했습니다.<br/><br/>
                        </span>
                            </div>
                        <div className='MoviePic1'>
                        <span className='pageName'>quiz_result</span>
                            <img src='assets/quiz_moreSentence.PNG' alt='quiz_category'></img>
                            <img src='assets/quiz_result.PNG' alt='quiz_category'></img>
                        <span>
                            퀴즈 정답과 해설 더보기 화면입니다.<br/><br/>
                            내가 쓴 글에 사용자가 작성한 글이 출력되며 chatGPT가 사용자가 입력한 문장이 맞았는지 확인하여 해설에 여부와 정답을 출력해줍니다.<br/><br/>
                            더보기 버튼을 누르면 출제된 문제와 비슷한 난이도와 주제에 맞는 문장을 출력해줍니다.<br/><br/>
                            
                        </span>
                    </div>
                        <div className='quizImg'>
                        </div>
                            <span className='detail'>
                            </span>
                    </div>
                    <h4>시뮬레이터(IOS/iphone 14 pro) 화면</h4>
                    <div className='MoviePic1'>
                        <span className='pageName'>Movie</span>
                        <img src='assets/pro04_main1.png' alt='pro04_main'/>
                        <img src='assets/pro04_main2.png' alt='pro04_main'/>
                        <span>
                            개봉중인 영화, 앞으로 개봉할 영화, 인기 영화를 한 눈에 볼 수 있는 앱입니다.<br/><br/>
                            제공받은 api를 이용하여 3개의 영화 list를 확인할 수 있습니다.<br/><br/>
                            futureBuild를 이용하여 데이터를 불러옵니다.<br/><br/>
                            main 화면에서 각 포스터를 클릭하면 영화의 디테일 화면으로 전환됩니다.<br/><br/>
                            
                        </span>
                    </div>
                    <div className='Timer'>
                        <h4>Timer</h4>
                        <img src='assets/timer.gif' alt='pro01_detail'/>
                        <span>
                            15분부터 35분까지 5분 간격으로 설정할 수 있는 타이머 앱입니다.<br/><br/>
                            설정해 놓은 타이머는 일시 정지가 가능하며 타이머가 종료되면 휴식시간 5분 타이머가 자동재생됩니다.<br/><br/>
                            타이머가 종료되면 ROUND 숫자가 count되며 4회의 round가 모두 종료되면 GOAL 숫자가 count됩니다.<br/><br/>
                        </span>
                    </div>
                </div>
            </div>
    )
}

export default Flutter;