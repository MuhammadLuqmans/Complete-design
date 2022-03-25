import React, { useEffect, useState } from 'react'
import { ReadData, DeleteDocs,EditeDocs  } from '../../services/Api'
import { Card,Button } from '@material-ui/core';
import { Link } from 'react-router-dom'

const ShowAllPost = ({ setIsEditing }) => {
    const [Products, setProducts] = useState([]);

    useEffect(() => {
        const GetPost = async () => {
            let data = await ReadData()
            setProducts(data)
        }
        GetPost()
    }, [])

    console.log(Products)

   const HandleDelete = (ProductId) =>{
       DeleteDocs(ProductId)
   }

   const HandleEdite = (ProductId) =>{
    EditeDocs(ProductId);
    setIsEditing(true)
   }

//    console.log(myIds)
    return (
        <div style={{ marginTop: "200px" }}>
            <h2>All Posts</h2>
            {Products.map((items) => {
                return (
                    <div key={items._id}>
                        <Card  >
                            <p>ID: {items._id}</p>
                            <h4>{items.title}</h4>
                            <p>Price: {items.price}</p>
                            <h4>Discreption :</h4>
                            <p>{items.dispcription}</p>
                            SKU: {items.sku}
                            <p>Colors: {items.colors}</p>
                            <p>Category: {items.category}</p>
                            <p>Date and time: {Date()}</p>
                            <Button variant="contained" color="primary" onClick={()=>HandleDelete(items._id)} >Delete</Button>
                           <Link to={`/add-products/${items._id}`} style={{ textDecoration:'none' }}> <Button variant="contained" color="primary" onClick={()=>HandleEdite(items._id)} >Edite</Button></Link>
                        </Card>
                        <hr />
                    </div>
                )
            })}
        </div>
    )
}

export default ShowAllPost;