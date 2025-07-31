import UserDP from './DisplayPics';
import '../styles/stories.scss';

function Stories({ stories }) {
  return (
    <div className="stories-scroll">
      {stories.map((story, index) => (
        <div key={index} className="story-block">
          <div className="dp-container">
            <UserDP imgSrc={story.img} borderColor={story.isProfile ? 'light-gray' : '#c13584' } />
            {story.isLive && <div className="live-badge">LIVE</div>}
          </div>
          <p className="story-name">{story.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Stories;
