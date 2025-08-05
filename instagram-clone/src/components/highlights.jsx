import HighlightsMedia from './HighlightsMedia';
import PlusIcon from './PlusIcon';
import '../styles/stories.scss';

function Highlights({ stories = [] }) {
  
  return (
    <div className="stories-scroll">
      {/* "New" bubble with PlusIcon always first */}
      <div className="story-block">
        <div className="dp-container">
          <PlusIcon />
        </div>
        <p className="story-name">New</p>
      </div>

      {stories.map((story, index) => (
        <div key={index} className="story-block">
          <div className="dp-container">
            <HighlightsMedia media={story.img} borderColor={ 'light-gray' } />
          </div>
          <p className="story-name">{story.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Highlights;
