import React from 'react';

const Blog = () => {
    return (
        <div className="py-3">
            <h2>OUR BLOG</h2>
<div className="container">

          
<div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <img style={{height:'14rem'}} src='https://i.ibb.co/fC444DL/Toyota-Camry.jpg' class="card-img-top img-fluid" alt="..."/>
      <div class="card-body text-start">
        <h5 class="card-title">Find your dream car</h5>
        <p class="card-text">Autocar is the companion site to the print magazine of the same name. It covers the British market with automotive industry news, racing features, sales rankings, and a special focus on used car selling.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img style={{height:'14rem'}} src='https://i.ibb.co/dW4ZG9P/Lamborghini-Huracan-STO.jpg' class="card-img-top img-fluid" alt="..."/>
      <div class="card-body text-start">
        <h5 class="card-title">Buying a best sports car</h5>
        <p class="card-text">The Huracan STO is essentially a Super Trofeo race car for the road. On outside you get a fancy body with a massive rear spoiler, wider fenders and a roof scoop. The interior has is mostly carbon fibre and Alcantara affair.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img style={{height:'14rem'}} src='https://i.ibb.co/Zm08X18/Audi-e-tron.jpg' class="card-img-top img-fluid" alt="..."/>
      <div class="card-body text-start">
        <h5 class="card-title">Selling you new cars?</h5>
        <p class="card-text">Sell your new car through us. We will give you the best deal ever. Hopefully you will be satified. so keep your eyes on our website to get the best deal.</p>
      </div>
    </div>
  </div>

</div>
</div>
        </div>
    );
};

export default Blog;