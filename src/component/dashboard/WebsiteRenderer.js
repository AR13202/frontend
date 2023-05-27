import React from 'react';

const WebsiteRenderer = ({ url }) => {
  return (
    <div style={{width: 'auto' , height: 'auto'}}>
      <iframe src={url} title="Website Renderer" width="100%" height="100%" />
    </div>
  );
};

export default WebsiteRenderer;
