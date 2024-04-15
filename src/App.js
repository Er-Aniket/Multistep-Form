import React, { useState } from 'react';
function App() {
  const [selectedOption, setSelectedOption] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [completedSteps, setCompletedSteps] = useState(0);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleContinue = () => {
    if (selectedOption) {
      console.log('Selected option:', selectedOption);
      setCompletedSteps(completedSteps + 1); // Increment completed steps
      setCurrentPage(currentPage + 1); // Move to the next page
      
    } else {
      alert('Please select an option.');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleContinue();
    }
  };



  const optionsPage4 = [
    { id: 'option11', text: ' Arithmetic Introductory' },
    { id: 'option12', text: 'Basic Algebra Fundamental' },
    { id: 'option13', text: 'Intermediate Algebra ' },
    { id: 'option14', text: 'Calculus advanced' }
  ];

  const optionsPage2 = [
    { id: 'option6', image: 'https://img.freepik.com/free-vector/big-business-idea-light-bulb-concept-background_1017-42796.jpg?t=st=1712990865~exp=1712994465~hmac=19da58f4297e8ea0f11489165e2b83d7ae1ca1c291522c1f9c7a9e38a159efa7&w=740', text: 'Learning specific skills to advance my career' },
    { id: 'option7', image: 'https://img.freepik.com/free-vector/basic-internet-globe-grid-flat-vector_78370-1481.jpg?t=st=1712990676~exp=1712994276~hmac=d4503cc801e5864ee813b2f1e51d8631d569d925bcf4a911f8a81fdc5ecb46de&w=740', text: 'Exploring new topics I am interested in' },
    { id: 'option8', image: 'https://img.freepik.com/free-vector/gradient-pi-day-illustration_23-2149258566.jpg?t=st=1712992066~exp=1712995666~hmac=11115ec996ca8be919faa940facb0e13433aca3e6fb4b452c756b8687e88e979&w=740', text: 'Refreshing my math foundations' },
    { id: 'option9', image: 'https://img.freepik.com/free-photo/ideas-coming-out-from-cutout-brain_23-2147865514.jpg?t=st=1712992239~exp=1712995839~hmac=f7ab480705abc4df067ea7cecb558c588dff588a9ff36136ada9baf5027f1503&w=740', text: 'Exercising my brain to stay sharp' },
    { id: 'option10', image: 'https://img.freepik.com/premium-vector/brand-name-logo-idea_1088810-425.jpg?w=740', text: 'Something else' }
  ];

  const options = [
    { id: 'option1', image: 'https://assets-modified.embeddables.com/UkI2pO4KD0xXQLHkN1GG%2FLife-Stage%3DStudent_830823629321515.png', text: 'Students' },
    { id: 'option2', image: 'https://assets-modified.embeddables.com/UkI2pO4KD0xXQLHkN1GG%2FLife-Stage%3DProfessional_3183921264115743.png', text: 'Professional' },
    { id: 'option3', image: 'https://assets-modified.embeddables.com/UkI2pO4KD0xXQLHkN1GG%2FLife-Stage%3DParent_6858243195481246.png', text: 'Parent of a student' },
   
    { id: 'option4', image: 'https://assets-modified.embeddables.com/UkI2pO4KD0xXQLHkN1GG%2FLife-Stage%3DTeacher_3477887921150866.png', text: 'Teacher' },
    { id: 'option5', image: 'https://assets-modified.embeddables.com/UkI2pO4KD0xXQLHkN1GG%2FLife-Stage%3DOther_39497974702587735.png', text: 'Other' }
  ];

  const pages = [
    <Page1 key="page1" options={options} selectedOption={selectedOption} handleOptionClick={handleOptionClick} />,
    <Page2 key="page2" options={optionsPage2} selectedOption={selectedOption} handleOptionClick={handleOptionClick} />,
    <Page3 key="page3" />,
    <Page4 key="page4" options={optionsPage4} selectedOption={selectedOption} handleOptionClick={handleOptionClick} />,
    <Page5 key="page5" />,
    <Page6 key="page6" />,
    <Page7 key="page7"  />
  ];

  // Calculate progress percentage
  const progress = (completedSteps / options.length) * 100;

  // Determine if we are on the last page
  const isLastPage = currentPage === pages.length;

  return (
    <div className="">
      <div className=" flex items-center px-40 w-full mt-4 bg-white">
        <div className="h-2 mt-2 rounded-xl px-28 bg-green-600" style={{ width: `${progress}%` }}></div>
      </div>

      {pages[currentPage -1]}

      {/* Render continue button only if it's not the last page */}
      {!isLastPage && (
        <button className="bg-black mx-auto flex items-center hover:bg-slate-750 text-white font-bold py-2 px-12 rounded-xl mt-4"
          onClick={handleContinue}
          onKeyPress={handleKeyPress}>
          Continue
        </button>
      )}
    </div>
  );
}

const Page1 = ({ options, selectedOption, handleOptionClick }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-4 py-4">Which describes you best?</h1>
      <h4 className="text-center mb-4">This will help us personalize your experience.</h4>
      <div className="flex flex-col p-6 mx-5 bg-white border-solid border-red-200">
        {options.map(option => (
          <OptionButton
            key={option.id}
            id={option.id}
            image={option.image}
            text={option.text}
            selectedOption={selectedOption}
            onClick={handleOptionClick}
          />
        ))}
      </div>
    </div>
  );
};

const OptionButton = ({ id, image, text, selectedOption, onClick }) => {
  return (
    <div className={`flex items-center justify-left bg-white p-2 px-8 mb-2 rounded-xl border-zinc-300 border-solid border-2  hover:border-amber-400 rounded cursor-pointer ${selectedOption === id ? 'bg-amber-100' : ''}`}
      onClick={() => onClick(id)}>
      <img src={image} alt={text} className="w-10 h-10 mr-2" />
      <span className='text-lg px-4'>{text}</span>
    </div>
  );
};

const Page2 = ({ options, selectedOption, handleOptionClick }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-4 py-4">Which are you most interested in</h1>
      <h4 className="text-center mb-4">Choose just one. this will help us get you started(but won't limit your experience)</h4>
      <div className="flex flex-col p-6 mx-5 bg-white border-solid border-red-200">
        {options.map(option => (
          <OptionButton
            key={option.id}
            id={option.id}
            image={option.image}
            text={option.text}
            selectedOption={selectedOption}
            onClick={handleOptionClick}
          />
        ))}
      </div>
    </div>
  );
};


const Page3 = () => {
  return (
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:order-2">
          <img className="mx-auto" src="Maths.png" alt=". logo"/>
        </div>
        <div className="md:w-1/2 md:order-1 m-4">
          <h1 className="text-3xl font-bold text-center mb-4 py-4">You're in the right place</h1>
          <p className="text-justify">Brilliant gets you hands-on help to improve your professional skills and knowledge. You'll interact with concepts and solve fun problems in maths, science, and computer science.</p>
        </div>
      </div>
    );
  };
    ;

const Page4 = ({ options, selectedOption, handleOptionClick }) => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center mb-4 py-4">What is your math comfort level</h1>
      <h4 className="text-center mb-4">Choose the highest level you feel confident in - you can always adjust later</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {options.map(option => (
          <OptionBox
            key={option.id}
            id={option.id}
            text={option.text}
            selectedOption={selectedOption}
            onClick={handleOptionClick}
          />
        ))}
      </div>
    </div>
  );
};

const OptionBox = ({ id, text, selectedOption, onClick }) => {
  return (
    <div className='mx-auto place-items-center '>
    <div 
      className={` mx-auto  flex space-x-4 text-center mt-6 bg-white p-4 px-4  rounded-xl border-zinc-300 border-solid border-2 hover:border-amber-400 rounded cursor-pointer ${selectedOption === id ? 'bg-amber-400' : ''}`}
      onClick={() => onClick(id)}
      style={{ width: '200px', height: '150px', marginRight: '20px' }}
    >
      <span className='text-xl'>{text}</span>
    </div>
    </div>
  );
};

const Page5 = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center">
      <div className="md:w-1/2">
        <img className="mx-auto" src="ab4c.png" alt="Img"/>
      </div>
      <div className="md:w-1/2 m-4">
        <h1 className="text-3xl font-bold text-center mb-4 py-4">You're on your way</h1>
        <p className="text-center mb-4">⭐⭐⭐⭐⭐</p>
        <p className="text-justify">"Through its engaging and well-structured courses, Brilliant has taught me mathematical concepts that I previously struggled to understand. I now feel confident approaching both technical job interviews and real-world problem-solving situations."</p>
        <p className="text-right">- Jacob S.</p>
      </div>
    </div>
  );
};
  
const Page6 = () => {
  return(
<div className='grid place-content-center h-screen'>
<div>
<img className='mx-auto ' src="Buffering.png"/>
</div>
<div>
  <p className=' text-center text-xl font-medium'> Finding learnings path recommendation or you based on your responses</p>
</div>
</div>
  );
};
const Page7 = ({ options, selectedOption, handleOptionClick }) => {
  return (  
    <div className="container mx-auto">
    <div>
      <h1 className="text-3xl font-bold text-center mb-4 py-4">Learning path based on your answer</h1>
      <h3 className="text-center mb-4 text-lg">Choose one to get started. You can switch anytime.</h3>
    </div>
    <div className="flex justify-center">
      <div className="bg-amber-400 text-white rounded-xl hover:bg-amber-800 mx-auto">
        <button className="px-4 py-2">MOST POPULAR</button>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="p-5">
        <div className="max-w-md bg-white rounded-xl shadow-lg flex flex-col items-center justify-center p-6">
          <p className="text-lg text-center text-black font-justify"><span className='font-bold'>Foundational Math</span> Build your foundational skills in algebra, geometry, and probability.</p>
          <img className="mt-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFNbpt9uyO4TWRE8hlzqp56tr1jCC41EbOYg&s" alt="Foundational Math"/>
        </div>
      </div>
      <div className="p-5">
        <div className="max-w-md bg-white rounded-xl shadow-lg flex flex-col items-center justify-center p-6">
          <p className="text-lg text-center text-black font-justify"><span className='font-bold'> Mathematical Thinking</span> Build your foundational skills in algebra, geometry, and probability.</p>
          <img className="mt-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFNbpt9uyO4TWRE8hlzqp56tr1jCC41EbOYg&s" alt="Mathematical Thinking"/>
        </div>
      </div>
    </div>
  </div>
);
};
    
    

export default App;
