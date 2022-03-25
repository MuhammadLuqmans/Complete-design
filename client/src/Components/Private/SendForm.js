import React, { useEffect, useState } from "react";
import { Button, Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles'
import { EditeDocs, SendData, UpdateProducts } from "../../services/Api";
import { useParams } from "react-router-dom";
import FileBase64 from 'react-file-base64';

import { createItem, getItems } from '../../services/myFunctions';



const initialValue = {
    title: "",
    price: "",
    colors: '',
    category: '',
    dispcription: '',
    sku: '',
    date: Date(),
};
const initialValueImages = {
    title: '', image: ''
}

const myStyles = makeStyles((theme) => ({
    product_Inputs: {
        padding: "10px",
        width: "80%",
        background: "#f6f6f6",
        margin: "auto"
    },
    Form_wrapper: {
        margin: 'auto',
        border: '2px solid gray',
        justifyContent: 'center'
    }
}))

function SendForm({ isEditing, setIsEditing }) {
    console.log(isEditing)
    const classes = myStyles()
    const [productData, setProductData] = useState(initialValue);
    const [item, setItem] = useState(initialValueImages);
    const [items, setItems] = useState([])

    // to set value in input for update ubject
    const params = useParams()

    useEffect(() => {
        const EditeProducts = async () => {
            let data = await EditeDocs(params.id);
            setProductData(data);
        }
        EditeProducts()
    }, []);



    //  to upload image to mongodb

    useEffect(() => {
        const fetchData = async () => {
        const result = await getItems();
            console.log('fetch data', result)
            setItems(result)
        }
            fetchData()
        }, [])
        
   
const onSubmitHandler = async (event) => {
        event.preventDefault();
    const result = await createItem(item);
    setItems([...items, result]);

}

    if (!productData) {
        return setProductData(initialValue);
    }

    const handleChanges = (e) => {
        setProductData({ ...productData, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        SendData(productData)
        console.log(productData)
    }

    const hendleUpdate = async () => {
        console.log('update');
        await UpdateProducts(params.id, productData)
        setIsEditing(false);
    }

    const handleReset = (e) => {
        setIsEditing(false);
        setProductData(initialValue)
    }

    return (
        <div >
            <Grid item container xs={12}>
                <Grid item xs={12} sm={12} md={8} lg={6} className={classes.Form_wrapper}>
                    <h2 style={{ marginTop: "150px" }}>Add Products</h2>
                    <form>
                        <label>Product Title *</label><br />
                        <input
                            type="text"
                            value={productData.title}
                            name="title"
                            id="filled-basic"
                            className={classes.product_Inputs}
                            label="Product Title"
                            variant="filled"
                            onChange={(e) => handleChanges(e)}
                        /><br />
                        <label>Product Price *</label><br />
                        <input
                            type="number"
                            value={productData.price}
                            name="price"
                            id="filled-basic"
                            label="Price"
                            variant="filled"
                            className={classes.product_Inputs}
                            onChange={(e) => handleChanges(e)}
                        />
                        <br />
                        <label>Product Colors *</label><br />
                        <input
                            type="text"
                            value={productData.colors}
                            name="colors"
                            id="filled-basic"
                            label="Image Url"
                            variant="filled"
                            className={classes.product_Inputs}
                            onChange={(e) => handleChanges(e)}
                        />
                        <br />
                        <label>Product Category *</label><br />
                        <input
                            type="text"
                            name="category"
                            value={productData.category}

                            id="filled-basic"
                            label="Product Title"
                            variant="filled"
                            className={classes.product_Inputs}

                            onChange={(e) => handleChanges(e)}
                        />
                        <br />
                        <label>Product Discreption *</label><br />
                        <input
                            type="text"
                            value={productData.dispcription}
                            name="dispcription"
                            id="filled-basic"
                            label="Product Title"
                            variant="filled"
                            className={classes.product_Inputs}

                            onChange={(e) => handleChanges(e)}
                        />
                        <br />
                        <label>Product SKU *</label><br />
                        <input
                            type="text"
                            value={productData.sku}
                            name="sku"
                            id="filled-basic"
                            label="Product Title"
                            variant="filled"
                            className={classes.product_Inputs}

                            onChange={(e) => handleChanges(e)}
                        />
                        <br />
                        <br />
                        <label>Image</label>
                         <form action="" >
                            <input type="text" className="input-field"

                                onChange={e => setItem({ ...item, title: e.target.value })}
                            />
                            <FileBase64
                                type="file"
                                multiple={false}
                                onDone={({ base64 }) => setItem({ ...item, image: base64 })}
                            />
                            <div className="right-align">
                                <button className="btn" onClick={onSubmitHandler}>submit</button>
                            </div>

                        </form> 
                        <input
                            type="file"
                            id='fileInput'
                            onClick={(e) => console.log(e.target.file[0])}
                        />
                        <Button variant="contained" type="button" onClick={isEditing ? hendleUpdate : handleSubmit} color="primary">
                            {isEditing ? 'Update Product' : 'Add Product'}
                        </Button>
                        {isEditing && <Button onClick={handleReset} >Reset</Button>}
                    </form>
                </Grid>
            </Grid>
        </div>
    );
}

export default SendForm;
