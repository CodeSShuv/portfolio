
import Card from './Card'
import reactImage from '../assets/photos/reactnbg.png'
import tsImage from "../assets/photos/Typescript.png"
import jsImage from "../assets/photos/javascript-logo.png"
import htmlImage from "../assets/photos/html-css.jpg"
import expressImage from "../assets/photos/Expressjsn.png"
import mongooseImage from "../assets/photos/mongoose.png"
import nodeImage from "../assets/photos/Nodejs.png"
import mongodbImage from "../assets/photos/mongodbn.png"
import './Css/skill.css'
const Skills = () => {
  return (
    <section className='skill w-full'>
      
        <div> <h3 className={"projectSectioHeading text-white pl-7 pb-3 "}> FrontEnd</h3></div>
        <div className="card-container flex justify-evenly items-center gap-2 p-8">
            <Card title='Reactjs' needBtn = {false} imageUrl={reactImage} />
            {/* <Card title='Python' needBtn = {false} imageUrl={"/images/nobgpy.png"}/>*/}
            <Card title='TypeScript'  needBtn = {false}  imageUrl={tsImage}/> 
            <Card title='HTML/CSS'  needBtn = {false} imageUrl={htmlImage}/>
        </div>
        <div> <h3 className={"projectSectioHeading text-white pl-7 pb-3 "}> BackEnd</h3></div>
        <div className="card-container flex justify-evenly items-center gap-2 p-8">
            <Card title='NodeJs' needBtn = {false} imageUrl={nodeImage} />
            <Card title='Expressjs' needBtn = {false} imageUrl={expressImage}/>
            <Card title='Mongoose'  needBtn = {false}  imageUrl={mongooseImage}/>
          
        </div>
        <div> <h3 className={"projectSectioHeading text-white pl-7 pb-3 "}> Database</h3></div>
        <div className="card-container flex justify-evenly items-center gap-2 p-8">
            
            <Card title='Mongodb'  needBtn = {false} imageUrl={mongodbImage}/>
        </div>
        <div> <h3 className={"projectSectioHeading text-white pl-7 pb-3 "}> Languages</h3></div>
        <div className="card-container flex justify-evenly items-center gap-2 p-8">
            
            {/* <Card title='Python'  needBtn = {false} imageUrl={"/images/nobgpy.png"}/> */}
            <Card title='TypeScript'  needBtn = {false} imageUrl={tsImage}/>
            <Card title='JavaScript'  needBtn = {false} imageUrl={jsImage}/>
        </div>
        
    </section>
  )
}

export default Skills