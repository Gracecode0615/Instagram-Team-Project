import React from 'react';

function MediaGrid({ items = [], onItemClick }) {
  if (!Array.isArray(items) || items.length === 0) {
    return (
      <div className="empty-grid">
        <p>No content yet.</p>
      </div>
    );
  }

  return (
    <div className="media-grid">
      {items.map((item, idx) => (
        <div
          key={item.id || idx}
          className="media-cell"
          onClick={() => onItemClick && onItemClick(item)}
        >
          {item.type === 'video' ? (
            <video
              src={item.src}
              muted
              loop
              playsInline
              preload="metadata"
              className="media-thumb"
            />
          ) : (
            <img src={item.src} alt={item.alt || 'media'} className="media-thumb" />
          )}
        </div>
      ))}
    </div>
  );
}

export default MediaGrid;
