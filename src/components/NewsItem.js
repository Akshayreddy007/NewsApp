import react from 'react';
import img from "../notAvailable.jpg";
const NewsItem =(props)=>{
        return (
            <div>
                <div className="card">
                    <img src={props.imageUrl?props.imageUrl:img} alt={img}/>
                        <div className="card-body">
                            <h5 className="card-title fs-6">{props.title}</h5>
                            <p className="card-text fs-6">{props.description}</p>
                            <p className="card-text fs-6 my-auto"><small className="text-danger"><b className='text-body'>By</b> {props.author?props.author:"UnKnown"}</small></p>
                            <p className="card-text fs-6 my-auto"><small className="text-danger"><b className='text-body'>On</b> {new Date(props.date).toGMTString()}</small></p>
                            <p className="card-text fs-6 my-auto"><small className="text-danger"><b className='text-body'>Source:</b> {props.source}</small></p>
                            <a href={props.newsUrl} target="_blank" rel='noreferrer' className="btn btn-sm btn-primary">Read More..</a>
                        </div>
                </div>
            </div>
        );
}
export default NewsItem;