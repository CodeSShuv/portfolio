
import Card from './Card'

const Project = () => {
  return (
    <> 
    
    <section className='projects flex justify-center items-center w-full'>

        <div className="card-container flex justify-evenly items-center gap-8 p-6 w-full  flex-wrap">
            <Card title='Portfolio Site' needBtn={true} />
            <Card title='Confession Site' needBtn={true}repoLink={"https://github.com/CodeSShuv/confession"}  />
            <Card title='Bloging Site FrontEnd' needBtn={true} repoLink={"https://github.com/CodeSShuv/blogSite"} />
              <Card title='Bloging Site BackEnd' needBtn={true} repoLink={"https://github.com/CodeSShuv/blogBackend"} />
            
            
            <Card title='Note App' needBtn={true} repoLink='https://github.com/CodeSShuv/noteApp' />
        </div>
    </section>
    </>
  )
}

export default Project