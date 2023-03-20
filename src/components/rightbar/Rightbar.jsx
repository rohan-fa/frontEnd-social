import './rightbar.css';
import {Users} from '../../dummyData';

function Rightbar() {
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className='birthdayImg' src="/assests/gift.png" alt="" />
          <span className="birthdayText">
            <b>Snow Zoey</b> and <b>3 other friends</b> have a birthday today</span>
        </div>
        <img className='rightbarAd' src="assests/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map()} {/*for each user,im going to return online component and im going to pass this user */}
        </ul>
      </div>
    </div>
  )
}

export default Rightbar
