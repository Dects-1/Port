import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Imgprofile } from './components/Imgprofile'
import { Title } from './components/Title'

function App() {
  const [hide, setHide] = useState(false)

  return (
    <main id="main">
      <div className='leftPort'>
      <div className='imgpro'>
        <Imgprofile image="/src/assets/react.svg" />
        </div>
<div className='name'>
<Title title="Jetarin Rueangsak (Jay)">
        <h3>Frontend</h3>
        </Title>
</div>
        
<Title title='Contact'>
        <p style={{display: hide? 'none' :'block'}}>
          Tel : 0948768680
          <br/>
          Email : jopprdroppe@gmail.com
          </p>
        <button onClick={() => setHide(!hide)}>
          {hide ?'Show': 'Hide'} </button>
        
    </Title>

<Title title='Education'>
      <p> ปริญญาตรี สาขาเทคโนโลยีสารสนเทศ</p>
        <p> มหาวิทยาลัยราชภัฏสวนสุนันทา</p>

      </Title>
      </div>

      <div className='rightPort'>
        <Title title="Profile">
        <p>  
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>

        </Title>
        
        <Title title="Work Experience">
        <p>  
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
           </p>

        </Title>

        <Title title="Skill">
        <p>  
          Comunication<br/>
          Fast Learner<br/>
          Team Working<br/>

           </p>

        </Title>

    
      </div>


    </main>
  )
}

export default App
