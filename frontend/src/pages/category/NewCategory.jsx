import { useNavigate } from "react-router-dom";

const NewCategory = () => {
    const navigate = useNavigate();
    return (
        <div>
            <button className="button button-block" onClick={() => navigate(-1)}>Go Back</button>
            <div className="form-container">
                <form>
                    <h2 className="table-title">New Category</h2>
                    <div className="form-group">
                        <label>Title</label>
                        <input className="form-control" type="text" name="title" placeholder="Technology" />  
                    </div>

                    <div className="form-group">
                        <label>Description</label>
                        <textarea className="form-control" name="desc" placeholder="Lorem ipsum"></textarea> 
                    </div>

                    <div className="from-group">
                        <input type="submit" className="button" value="Add" />
                    </div>
                </form>
            </div>
            
        </div>
    );
};

export default NewCategory;

