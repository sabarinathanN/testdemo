import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PriceCard from './PriceCard';
 
function App(){
  let priceCard=[{
    title:'free',
    price:0,
    features:[
      {
      name:'5 Users',
      isEnable:true
    },
    {
      name:'50GB Storage',
      isEnable:true
    },
    {
      name:'Unlimited Public Projects',
      isEnable:true
    },
    {
      name:'Community Access',
      isEnable:true
    },
    {
      name:'Unlimited Private Projects',
      isEnable:true
    },
    {
      name:'Dedicated Phone Support',
      isEnable:true
    },
    {
      name:'Free Subdomain',
      isEnable:true
    },
    {
      name:'Monthly Status Reports',
      isEnable:true
    }
  ]

  },
  {
    title:'pro',
    price:0,
    features:[
      {
      name:'5 Users',
      isEnable:true
    },
    {
      name:'50GB Storage',
      isEnable:true
    },
    {
      name:'Unlimited Public Projects',
      isEnable:true
    },
    {
      name:'Community Access',
      isEnable:true
    },
    {
      name:'Unlimited Private Projects',
      isEnable:true
    },
    {
      name:'Dedicated Phone Support',
      isEnable:true
    },
    {
      name:'Free Subdomain',
      isEnable:true
    },
    {
      name:'Monthly Status Reports',
      isEnable:true
    }
  ]

  },
  {
    title:'plus',
    price:0,
    features:[
      {
      name:'5 Users',
      isEnable:true
    },
    {
      name:'50GB Storage',
      isEnable:true
    },
    {
      name:'Unlimited Public Projects',
      isEnable:true
    },
    {
      name:'Community Access',
      isEnable:true
    },
    {
      name:'Unlimited Private Projects',
      isEnable:true
    },
    {
      name:'Dedicated Phone Support',
      isEnable:true
    },
    {
      name:'Free Subdomain',
      isEnable:true
    },
    {
      name:'Monthly Status Reports',
      isEnable:true
    }
  ]

  }
]
  return(
    <section className="pricing py-5">
  <div className="container">
    <div className="row">
    {
    priceCard.map((card)=>{
      return(
<PriceCard data={priceCard}></PriceCard>
      );
    })
    
  }

  </div>
    </div>
    </section>
)}
export default App;

