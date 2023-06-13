import {  useState } from "react";
import Modal from "./component/Modal";

const Image3 = () => {
 const [state, setState] = useState({
            contents: [ 'assets/pro01_main.png',
            'assets/pro01_detail.png',
            'assets/pro01_members.png',
            'assets/pro01_question.png',
            'assets/pro01_edit.png',],
            index: null,
            hasModal: false,
        });

    const controlModal = (index) => {
        setState({
            ...state,
            index: index,
            hasModal: !state.hasModal
        });
    }

    const images = state.contents.map((image, index) =>
        <img key={index} onClick={() => controlModal(index)} src={image} alt="alt" />
    )

    return (
        <div>
            {images}
            {state.hasModal && (
                <Modal images={state.contents} index={state.index} close={controlModal} ></Modal>
            )}
        </div>
    );

}

export default Image3;
 