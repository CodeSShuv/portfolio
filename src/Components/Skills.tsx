
import Card from './Card'

const Skills = () => {
  return (
    <section className='skill w-full'>
        <div> <h3 className={"projectSectioHeading text-white pl-7 pb-3 "}> FrontEnd</h3></div>
        <div className="card-container flex justify-evenly items-center gap-2 p-8">
            <Card title='Reactjs' needBtn = {false} imageUrl={"/images/reactnbg.png"} />
            {/* <Card title='Python' needBtn = {false} imageUrl={"/images/nobgpy.png"}/>*/}
            <Card title='JavaScript'  needBtn = {false}  imageUrl={"/images/javascript-logo.png"}/> 
            <Card title='HTML/CSS'  needBtn = {false} imageUrl={"/images/html-css.jpg"}/>
        </div>
        <div> <h3 className={"projectSectioHeading text-white pl-7 pb-3 "}> BackEnd</h3></div>
        <div className="card-container flex justify-evenly items-center gap-2 p-8">
            <Card title='NodeJs' needBtn = {false} imageUrl={"/images/Nodejs.png"} />
            <Card title='Expressjs' needBtn = {false} imageUrl={"/images/Expressjsn.png"}/>
            <Card title='Mongoose'  needBtn = {false}  imageUrl={"/images/mongoose.png"}/>
          
        </div>
        <div> <h3 className={"projectSectioHeading text-white pl-7 pb-3 "}> Database</h3></div>
        <div className="card-container flex justify-evenly items-center gap-2 p-8">
            
            <Card title='Mongodb'  needBtn = {false} imageUrl={"/images/mongodbn.png"}/>
        </div>
        <div> <h3 className={"projectSectioHeading text-white pl-7 pb-3 "}> Languages</h3></div>
        <div className="card-container flex justify-evenly items-center gap-2 p-8">
            
            <Card title='Python'  needBtn = {false} imageUrl={"/images/nobgpy.png"}/>
            <Card title='Java'  needBtn = {false} imageUrl={"/images/Javalogo.png"}/>
            <Card title='JavaScript'  needBtn = {false} imageUrl={"/images/javascript-logo.png"}/>
        </div>
        
    </section>
  )
}

export default Skills