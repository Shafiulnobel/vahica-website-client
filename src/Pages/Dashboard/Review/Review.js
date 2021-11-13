import axios from 'axios';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import empty from '../../../images/user.png'
const Review = () => {
    const image ='https://i.ibb.co/ZTvHmxc/user.png';
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data =>{
         console.log(data)
         axios.post('https://nameless-reaches-52059.herokuapp.com/reviews',data)
         .then(res=>{
             if(res.data.insertedId){
                 alert('review added successfully!')
                 reset()
             }
         })
        };
    const{user}=useAuth();
    return (
        <div>
            <h2>Please give us your valuable <span className="text-warning">Feedback!</span></h2>
            <form className="bg-dark py-4" onSubmit={handleSubmit(onSubmit)}>
  <Row className="mx-auto">
    <Col className="my-3" xs={12} md={12}>
        {user?.photoURL?
            <img style={{width:'70px'}} className="rounded-circle" src={user?.photoURL}></img>
        :
            <img style={{width:'70px'}} className="rounded-circle" src={empty}></img>
        }
    </Col>
    <Col xs={12} md={12}>
  
      
      {user?.email && <input className="w-50" readOnly={true} defaultValue={user?.email} {...register("email")}/>} 
    
    </Col>
    <Col xs={12} md={12}>
   
       
        {user?.displayName && <input className="w-50 my-3" readOnly={true} defaultValue={user?.displayName} {...register("username", { required: true})} placeholder="user's name"/>}

    </Col>
    <Col xs={12}md={12}>
    <textarea className="w-50"  {...register("description")} placeholder="your review"/>
    </Col>
    <Col className="mt-2" xs={12}md={12}>
              <input className="w-50" {...register("rating")} placeholder="rating"/>
     </Col>
    <Col xs={12} md={12}>
    <div className="d-flex align-items-center pb-2">
       
        {user?.photoURL ? 
        <input className="w-50 d-none" readOnly={true} {...register("img")} defaultValue={user?.photoURL} placeholder="image url"/>
       :
       <input className="w-50 d-none" readOnly={true} {...register("img")} defaultValue={image} placeholder="image url"/>
    }
        </div>
    </Col>
  
    
    <Col className="text-center" xs={12}md={12}>
    <input className="btn btn-warning" type="submit" value="Review"/>
    </Col>
  </Row>
  
    </form>
        </div>
    );
};

export default Review;