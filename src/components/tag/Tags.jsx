import React, {useContext} from 'react'
import './tags.css';
import { StateContext } from '../state_provider/StateProvider';


const Tags = () => {
    const {activeTag, setActiveTag} = useContext(StateContext);
    const handleTagClick = (index) => {setActiveTag(index);}

    return (
        <>
        <div className="tag-container">
        <button onClick={() => handleTagClick(0)} className={
                activeTag === 0 ? "option-button-active" : "option-button"
            }>Work
        </button>
        <button onClick={() => handleTagClick(1)} className={
                activeTag === 1 ? "option-button-active" : "option-button"
            }>Short Break
        </button>
        <button onClick={() => handleTagClick(2)} className={
                activeTag === 2 ? "option-button-active" : "option-button"
            }>Long Break
        </button>
        </div>
        </>

    )
}

export default Tags
