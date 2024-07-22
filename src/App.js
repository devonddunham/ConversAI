import "./App.css";
import gptLogo from "./assets/chatgpt.svg";
import addBtn from "./assets/add-30.png";
import query from "./assets/message.svg";
import homeImg from "./assets/home.svg";
import bookmark from "./assets/bookmark.svg";
import proImg from "./assets/rocket.svg";
import sendBtn from "./assets/send.svg";
import userIcon from "./assets/computer-user-icon.webp";
import gptIconLogo from "./assets/chatgptLogo.svg";

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={gptLogo} alt="Logo" className="logo" />
            <span className="brand">ConversAI</span>
          </div>
          <button className="midBtn">
            <img src={addBtn} alt="" className="addBtn" />
            New Conversation
          </button>
          <div className="upperSideBottom">
            <button className="query">
              <img src={query} alt="" className="" />
              What is Programming?
            </button>
            <button className="query">
              <img src={query} alt="" className="" />
              How to use an API?
            </button>
          </div>
        </div>
        <div className="lowerSide">
          <div className="listItems">
            <img src={homeImg} alt="Home" className="listItemsImg" />
            Home
          </div>
          <div className="listItems">
            <img src={bookmark} alt="Bookmark" className="listItemsImg" />
            Saved
          </div>
          <div className="listItems">
            <img src={proImg} alt="Rocket" className="listItemsImg" />
            Upgrade to Pro
          </div>
        </div>
      </div>
      <div className="main">
        <div className="chats">
          <div className="chat">
            <img className="chatimg" src={userIcon} alt="" />
            <p className="txt">
              Lorem ipsum dolor sit amet. Vel deserunt aliquid et natus dicta
              sed odio excepturi. Et molestiae maiores vel perferendis magni ut
              molestias saepe.
            </p>
          </div>
          <div className="chat bot">
            <img className="chatimg" src={gptIconLogo} alt="" />
            <p className="txt">
              Lorem ipsum dolor sit amet. Vel deserunt aliquid et natus dicta
              sed odio excepturi. Et molestiae maiores vel perferendis magni ut
              molestias saepe. Sed voluptas optio et natus commodi aut nihil
              iste ut temporibus dignissimos non itaque mollitia vel nobis eaque
              et iure ratione. Ut reprehenderit enim hic ipsam ducimus cum rerum
              enim qui omnis eius est rerum laudantium? Sed quidem totam est
              voluptate voluptas est obcaecati facere. Et assumenda delectus est
              galisum explicabo non animi natus.
            </p>
          </div>
        </div>
        <div className="chatFooter">
          <div className="inp">
            <input type="text" placeholder="Send message..." />
            <button className="send">
              <img src={sendBtn} alt="Send" />
            </button>
          </div>
          <p>
            ChatGPT may produce inaccurate information about people, places, or
            facts.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
