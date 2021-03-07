import {useState} from 'react';

function App() {

  return <div>
    <Folder name="Desktop">
    <Folder name="Music">
    <File name="all_star.mp4"/>
      <File name="express_file.mp4" />
    </Folder>
      <File name="dogs.jpeg"/>
      <File name="cats.png" />
    </Folder>

    <Folder name="Applications"/>
  </div>;
};

const Folder = (props) => {

  const [isOpen, setIsOpen] = useState(true);

  // instead of using props.name just convert this so we can shorten it
  const { name, children } = props;
  const direction = isOpen ? 'down' : 'right';

  //handle the toggle click function
  const handleClick = () => setIsOpen(!isOpen);

  return <div>
    { /*adding icon in react must use className instead of class */}
    <span onClick={handleClick}> 
      <i className="blue folder icon"></i>

      { /*change arrow based on isOpen */}
      <i className={`caret ${direction} icon`}></i> 
    </span>
    {name}

    <div style= {{ marginLeft: '15px' }}>
      { isOpen ? children : null }
    </div>
  </div>;
};

const File = (props) => {

  const {name} = props;
  const fileExtension = name.split('.')[1];

  //create object of all icon extensions
  const fileIcons = {
    mp4: 'headphones',
    jpeg: 'file image',
    png: 'file image outline'
  }


  //return the correct icon with the name
  return <div>
    <i className={`${fileIcons[fileExtension]} icon`}></i>
    {name}</div>
};

export default App;
