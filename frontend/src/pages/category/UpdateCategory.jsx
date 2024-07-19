import { useNavigate } from "react-router-dom";

const UpdateCategory = () => {
    const navigate = useNavigate();
    return (
        <div>
            <button className="button button-block" onClick={() => navigate(-1)}>Go Back</button>
            <div className="form-container">
                <form className="inner-container">
                    <h2 className="form-title">Update Category</h2>
                    <div className="form-group">
                        <label>Title</label>
                        <input className="form-control" type="text" name="title" placeholder="Technology" />  
                        {/* {formError.email && <p className="error">{formError.email}</p>} */}
                    </div>

                    <div className="form-group">
                        <label>Description</label>
                        <textarea className="form-control" name="desc" placeholder="Lorem ipsum"></textarea> 
                        {/* {formError.email && <p className="error">{formError.email}</p>} */}
                    </div>

                    <div className="from-group">
                        <input type="submit" className="button" value="Update" />
                    </div>
                </form>
            </div>
            
        </div>
    );
};

export default UpdateCategory;

