import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub} from '@fortawesome/free-brands-svg-icons';

const Card = ({ title, needBtn,imageUrl,repoLink  }: { title: string, needBtn:boolean,imageUrl?:string,repoLink?:string }) => {
    return (
        <>

            <div className="card p-4 relative" style={{ width: "18rem",height:"15rem"  }}>
                <h3>{title}</h3>
                <div className="imageContainer flex flex-col justify-center items-center absolute w-full top-15 left-1">
                    <img id="cardImg" src={imageUrl} alt="" />
                </div>
                <div className="card-body mt-25">
                    <a type="button" href={repoLink} style={{display:`${needBtn?"block":"none"}`}} className="btn btn-dark w-25." target='_blank'>
                    <FontAwesomeIcon icon={faGithub} size='2x' />
                    </a>
                </div>
                <div className={"starContainer"}>

                </div>
            </div>
        </>
    )
}

export default Card