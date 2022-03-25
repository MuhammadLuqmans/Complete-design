import React, { useState } from 'react'
import axios from 'axios'

const URL = 'http://localhost:3001';

export const SendData = async (productData) => {
	try {
		return await axios.post(`${URL}/send`, productData);
		console.log("your poducts is sended successfully")
	} catch (error) {
		console.log("Error in Product Sending", error)
	}
}


export const ReadData = async () => {
	try {
		let data = await axios.get(`${URL}/read`);
		return data.data;
	}
	catch (error) {
		console.log(error)
	}
}


export const DeleteDocs = async (ProductId) => {
	console.log(ProductId)
	try {
		return await axios.delete(`${URL}/delete/${ProductId}`);
		console.log('Product is deleted successfully', { ProductId })
	} catch (error) {
		console.log("Error delete", error);
	}
}

export const EditeDocs = async (ProductId) => {
	try {
		let data = await axios.get(`${URL}/eidite/${ProductId}`);
		const objectData = data.data;
		return objectData;
	} catch (error) {
		console.log("Error edite");
	}

}
EditeDocs()

export const UpdateProducts = async (id, product) => {
	try {
		await axios.post(`${URL}/update/${id}`, product)
		console.log('Update complete')
	} catch (error) {
		console.log('Error ducting Update Products', error)
	}
}

// for send Images to mongodb 

export const getItems = () => axios.get(URL);
export const createItem = (item) => axios.post(URL, item);
