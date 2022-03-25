import  express  from "express";
import { DeleteDocuments, EditeDocuments, getProducts, PostProducts , handleUpdates } from "../Controller/ProductController.js";
import { getItems, createItem } from '../Controller/Image-controller.js';

const router = express.Router();

router.post('/send', PostProducts);
router.get('/read', getProducts);
router.delete('/delete/:id' , DeleteDocuments);
router.get('/eidite/:id' , EditeDocuments);
router.post('/update/:id' , handleUpdates);

// images routes
router.get('/', getItems)
router.post('/', createItem);




export default router;