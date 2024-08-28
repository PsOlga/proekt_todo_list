import styles from "./style.module.css"
import Post from "../Post";
import userLogo from "../../assets/icons/user.png"
function PostList () {

const handleClick = () => {
    alert('Удалить');
};

    return(
    <div className={styles.listContainer}>
        <h1>Список постов</h1>
    <div className={styles.postContainer}>
       <div className={styles.userLogo}>
            <img src={userLogo} alt=""/>
            <p >User logo</p>
            <div className={styles.linieLogo}></div>
        </div>
        <div className={styles.userText}>
            <h5>Заголовок</h5>
            <h2>ТЕКСТ ЗАГОЛОВКА</h2>
        </div>
        <div className={styles.idPost}>
            <p>id ПОСТА</p>
            <button type="button" onClick={handleClick}>Удалить</button>
        </div>
    </div>
    
    
    </div>
    ) 
 }
 export default PostList;