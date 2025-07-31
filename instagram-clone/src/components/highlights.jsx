import HighlightsMedia from './HighlightsMedia';
import '../styles/stories.scss';

function Highlights({ stories }) {
  return (
    <div className="stories-scroll">
      {stories.map((story, index) => (
        <div key={index} className="story-block">
          <div className="dp-container">
            <UserDP imgSrc={story.media} borderColor={ 'light-gray' } />
          </div>
          <p className="story-name">{story.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Highlights;
