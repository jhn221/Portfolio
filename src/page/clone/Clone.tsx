import '../style.scss'
import {BiArrowBack} from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Clone = () => {
        return(
            <div className='Sayo'>
                <div className='DetailTitle'>
                    <Link to='/'>
                        <BiArrowBack/>
                    </Link>
                    <h2>clone</h2><br/>
                    <h5>구현 page : home, detail</h5>
                    <h5>기여도 : 30% </h5>
                </div>
                <div className='desktopImg'>
                    <h4>데스크탑 화면</h4>
                    <div className='Pro1Pic1'>
                        <img src='assets/pro01_main.png' alt='pro01_main'/>
                        <span className='pageName'>Main</span>
                        <span>
                            clone 프로젝트의 main page로 전체 질문 list를 확인할 수 있으며, 작성자, 제목, 내용 중 일부를 확인할 수 있도록 구성했습니다.
                            <br/><br/>header의 검색기능을 통해 질문을 검색할 수 있습니다
                        </span>
                    </div>
                    <div className='Pro1Pic2'>
                        <img src='assets/pro01_detail.png' alt='pro01_detail'/>
                        <span>
                           각 질문을 누르면 질문의 내용을 확인할 수 있습니다.<br/><br/>
                            질문의 내용 뿐 아니라 좋아요/싫어요 갯수,작성자 정보, 질문 시간등을 확인할 수 있습니다.<br/><br/>
                            해당 질문에 대해 답글을 달 수 있으며 답글은 하단에서 확인 가능합니다.<br/><br/>
                            답글 또한 좋아요/싫어요 평가가 가능하며 작성자 본인에 한해 수정/삭제가 가능합니다 
                        </span>
                        <span className='pageName'>Detail</span>
                    </div>
                    <div className='Pro1Pic1'>
                    <img src='assets/pro01_members.png' alt='pro_01_members' />
                        <span className='pageName'>user List</span>
                        <span>회원가입한 user의 정보를 확인할 수 있는 페이지 입니다<br/><br/>
                        닉네임을 가지고 user 검색이 가능합니다.<br/><br/>
                        각 유저가 작성한 post의 갯수도 확인 가능합니다.<br/><br/>
                        </span>
                    </div>
                    <div className='Pro1Pic2'>
                    <img src='assets/pro01_edit.png'  alt='pro01_edit'/>
                        <span>나의 정보를 조회/수정할 수 있는 화면입니다.<br/><br/>
                        정보 중 이미지와 닉네임을 수정할 수 있으며 회원탈퇴가 가능합니다.<br/><br/>
                        </span>
                        <span className='pageName'>edit</span>
                    </div>
                    <div className='Pro1Pic1'>
                        <img src='assets/pro01_question.png' alt='pro01_question'/>
                        <span className='pageName'>write</span>
                        <span>질문을 작성할 수 있는 페이지입니다.<br/><br/>
                        reactQuill 라이브러리를 이용해 구현되었습니다.<br/><br/>
                       </span>
                    </div>
                </div>
            </div>
    )
}

export default Clone;