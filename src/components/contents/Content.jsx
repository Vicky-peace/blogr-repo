import React from 'react';
import Image1 from '../../images/illustration-editor-desktop.svg';
import './combined.scss'; // Importing combined styles

const Content = () => {
  return (
    <div className="content">
      <div className="text-block">
        <h2>Introducing an extensible editor</h2>
        <p>
          Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
          The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
          videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
          change the looks of a blog.
        </p>
        <h2>Robust content management</h2>
        <p>
          Flexible content management enables users to easily move through posts. Increase the usability of your blog 
          by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.
        </p>
      </div>
      <div className="image-block">
        <img src={Image1} alt="Editor interface" />
      </div>
    </div>
  );
};

export default Content;
