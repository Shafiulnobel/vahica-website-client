import axios from 'axios';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const AddProducts = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data =>{
         console.log(data)
         axios.post('https://nameless-reaches-52059.herokuapp.com/cars',data)
         .then(res=>{
             if(res.data.insertedId){
                 alert('added successfully!')
                 reset()
             }
         })
        };
    
    return (
    <div className="bg-dark py-4">
    <h2 className="text-white">ADD CAR DETAIL</h2>
      <form  onSubmit={handleSubmit(onSubmit)}>
          <Row>
              <Col className="mb-2" xs={12}md={12}>
              <input className="w-50" {...register("name", { required: true})} placeholder="Car Name"/>
              </Col>
              <Col xs={12}md={12}>
              <textarea className="w-50" style={{width:'40%'}} {...register("description")} placeholder="Car Description"/>
              </Col>
              <Col className="mb-2" xs={12}md={12}>
              <input className="w-50" {...register("fuel_type", { required: true})} placeholder="Fuel Type"/>
              </Col>
              <Col className="mb-2" xs={12}md={12}>
              <input className="w-50" {...register("engine", { required: true})} placeholder="Engine Type"/>
              </Col>
              <Col className="mb-2" xs={12}md={12}>
              <input className="w-50" {...register("drive", { required: true})} placeholder="Drive(FWD/RWD)"/>
              </Col>
              <Col className="mb-2" xs={12}md={12}>
              <input className="w-50" {...register("pre_price")} placeholder="previous price(optional)"/>
              </Col>
              <Col className="mb-2" xs={12}md={12}>
              <input className="w-50" {...register("price")} placeholder="price"/>
              </Col>
              <Col className="mb-2" xs={12}md={12}>
              <input className="w-50" {...register("stock")} placeholder="in stock"/>
              </Col>
              <Col className="mb-2" xs={12}md={12}>
              <input className="w-50" {...register("rating")} placeholder="rating"/>
              </Col>
              <Col className="mb-2" xs={12}md={12}>
              <input className="w-50" {...register("img")} placeholder="image url"/>
              </Col>
              <Col xs={12} md={12}><input className="btn btn-warning" type="submit" /></Col>
          </Row>
         </form>
        </div>
    );
};

export default AddProducts;