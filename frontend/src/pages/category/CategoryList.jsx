import { useNavigate } from "react-router-dom";

const CategoryList = () => {
    const navigate = useNavigate();
    return (
        <div>
            <button className="button button-block" onClick={() => navigate("new-category")}>Add New Category</button>
            <h2 className="table-title">Category List</h2>
            <input className="search-input" type="text" name="search" placeholder="searh here" />

            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Created At</th>
                        <th>Updated At</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Category 1</td>
                        <td>Description 1</td>
                        <td>10/10/23</td>
                        <td>10/11/23</td>
                        <th>
                            <button className="button" onClick={()=>navigate("update-category")}>Update</button>
                            <button className="button">Delete</button>
                        </th>
                    </tr>
                    <tr>
                        <td>Category 1</td>
                        <td>Description 1</td>
                        <td>10/10/23</td>
                        <td>10/11/23</td>
                        <th>
                            <button className="button" onClick={()=>navigate("update-category")}>Update</button>
                            <button className="button">Delete</button>
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default CategoryList;

