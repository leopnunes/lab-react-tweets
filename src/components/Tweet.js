import Message from "./Message";
import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";
import Actions from "./Actions";

function Tweet({tweet}) {

  console.log(tweet)

  return (
    <div className="tweet">
     <ProfileImage image={tweet.user.image}/>
     

      <div className="body">
        <div className="top">
          <span className="user">
           <User user={tweet.user.name}/>
           <User handle={tweet.user.handle}/>
          </span>

         <Timestamp timestamp={tweet.timestamp}/>
          
        </div>

       <Message message={tweet.message}/>

        <Actions/>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
};

export default Tweet;