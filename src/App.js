import "./App.css";
import gptLogo from "./assets/chatgpt.svg";
import addBtn from "./assets/add-30.png";
import query from "./assets/message.svg";
import homeImg from "./assets/home.svg";
import bookmark from "./assets/bookmark.svg";
import proImg from "./assets/rocket.svg";

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
      <div className="main"></div>
    </div>
  );
}

export default App;
