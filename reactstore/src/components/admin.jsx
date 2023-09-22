import "./admin.css";

function Admin() {
    return (
        <div className="admin">
            <h1 className="title">Store Administration</h1>
            <div className="forms-container">
                <form>
                    <h1>Product register</h1>
                    <div class="form-group">
                        <label for="inputTitle">Title</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="inputTitle" placeholder="Enter product name"/>
                    </div>
                    <div class="form-group">
                        <label for="inputCategory">Category</label>
                        <input type="text" class="form-control" id="inputCategory" placeholder="Category"/>
                    </div>
                    <div class="form-group">
                        <label for="inputImage">Image</label>
                        <input type="file" class="form-control" id="inputImage" placeholder="Image" accept="image/*"/>
                    </div>
                    <div class="form-group">
                        <label for="inputPrice">Price</label>
                        <input type="number" class="form-control" id="inputPrice" placeholder="Enter price in dollars"/>
                    </div>
                    <button type="submit" class="btn btn-primary">Save</button>
                </form>

                <form >
                <h1>Coupons</h1>
                    <div class="form-group">
                        <label for="inputDiscount">Code</label>
                        <input type="text" class="form-control" id="inputDiscount" placeholder="Code"/>
                    </div>
                    <div class="form-group">
                        <label for="inputDiscount">Discount</label>
                        <input type="number" class="form-control" id="inputDiscount" placeholder="Discount %"/>
                    </div>
                    <button type="submit" class="btn btn-primary">Save</button>
                </form>
            </div>

        </div>
    );
}

export default Admin;