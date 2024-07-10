import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CyberSceurity(){
    const [blogs, setBlogs] = useState([])
    const params = useParams();

    useEffect(()=>{
        fetch("https://guvi-react-router-dom.netlify.app/blog.json")
        .then((response)=>response.json())
        .then((result)=>setBlogs(result.data.filter((d)=> d.subcategory === params.subcategory)))
    }, [params])
    return  <div>
                <div className="react-router">
                    <ul>
                        <li><Link to="/">ALL</Link></li>
                        <li><Link to="/blog/Full-stack-development">FULL STACK DEVELOPMENT</Link></li>
                        <li><Link to="/blog/DATA-SCIENCE">DATA SCIENCE</Link></li>
                        <li><Link to="/blog/CYBER-SECURITY">CYBER SECURITY</Link></li>
                        <li><Link to="/blog/BLOCKCHAIN">BLOCK CHAIN</Link></li>
                    </ul>
                </div>
                <div className="container">
                <div className="row">
                    {
                        blogs.map((data) => (
                            <div className="col-md-4 mb-4 mt-3" key={data.id}>
                                <div className="card h-100">
                                <img src={data.image} className="card-img-top" style={{height: "200px"}}alt={data.title} />
                                    <div className="card-body">
                                        <h6 className="text-body-tertiary">{data.subcategory}</h6>
                                        <h5 className="card-title">{data.title}</h5>
                                        <p className="card-text">{data.description}</p>
                                        <a href="#" className="text-end">Read more</a>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            </div>
            
}

export default CyberSceurity; 