
import Card from './Card'

const Skills = () => {
  return (
    <section className='skill w-full'>
        <div> <h3 className={"projectSectioHeading text-white pl-7 pb-3 "}> FrontEnd</h3></div>
        <div className="card-container flex justify-evenly items-center gap-2 p-8">
            <Card title='Reactjs' needBtn = {false} imageUrl={"./public/images/reactnbg.png"} />
            {/* <Card title='Python' needBtn = {false} imageUrl={"./public/images/nobgpy.png"}/>*/}
            <Card title='JavaScript'  needBtn = {false}  imageUrl={"./public/images/javascript-logo.png"}/> 
            <Card title='HTML/CSS'  needBtn = {false} imageUrl={"./public/images/html-css.jpg"}/>
        </div>
        <div> <h3 className={"projectSectioHeading text-white pl-7 pb-3 "}> BackEnd</h3></div>
        <div className="card-container flex justify-evenly items-center gap-2 p-8">
            <Card title='NodeJs' needBtn = {false} imageUrl={"./public/images/Nodejs.png"} />
            <Card title='Expressjs' needBtn = {false} imageUrl={"./public/images/Expressjsn.png"}/>
            <Card title='Mongoose'  needBtn = {false}  imageUrl={"./public/images/mongoose.png"}/>
          
        </div>
        <div> <h3 className={"projectSectioHeading text-white pl-7 pb-3 "}> Database</h3></div>
        <div className="card-container flex justify-evenly items-center gap-2 p-8">
            
            <Card title='Mongodb'  needBtn = {false} imageUrl={"./public/images/mongodbn.png"}/>
        </div>
        <div> <h3 className={"projectSectioHeading text-white pl-7 pb-3 "}> Languages</h3></div>
        <div className="card-container flex justify-evenly items-center gap-2 p-8">
            
            <Card title='Python'  needBtn = {false} imageUrl={"./public/images/nobgpy.png"}/>
            <Card title='Java'  needBtn = {false} imageUrl={"./public/images/Javalogo.png"}/>
            <Card title='JavaScript'  needBtn = {false} imageUrl={"./public/images/javascript-logo.png"}/>
        </div>
        
    </section>
  )
}

export default Skills