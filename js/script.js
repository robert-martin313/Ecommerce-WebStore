
// *********************************************************
//  *********************Products Page**************************
// *********************************************************

async function loadNames() {
  
  console.log("Wel Come");
  var name=localStorage.getItem("firstname");
  document.querySelector('.header').textContent = name;
  console.log("Wel Come");
  for(i=8;i<=200;i++)
  {

          var html,newHtml;
          const response = await fetch("https://api.escuelajs.co/api/v1/products/"+i);
          const data = await response.json();
          console.log(data);
          var x = data.category.name.includes(name)
          console.log("x is: "+x);
          if(x)
          {

          console.log("inside iffffffffffffffffffffffffffffffff");
           html = '<a href="cart.html" onclick=getId('+i+')><div class="pro"><img id="imgUrl'+i+'" src="%src%" alt=""><div class="des"><span>%category%</span><h5>%brand%</h5><div class="star"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></div><h4>$%price%.00</h4></div><a href="#"><i class="fa fa-shopping-cart cart" style="font-size: 1.2rem;"></i></a></div></a>'
          newHtml = html.replace('%src%',data.images[0]);
          newHtml =  newHtml.replace('%category%',data.category.name);
          newHtml = newHtml.replace('%brand%',data.title);
          newHtml = newHtml.replace('%price%',data.price);
          document.querySelector('.pro-container').insertAdjacentHTML('beforeend',newHtml);
          }
  }
  }

  

  
  // cart
  
  // console.log(p);
  // console.log("myValue:"+myValue);
  // async function loadCart()
  // {
    
  //   const val=myValue;
  //    console.log("Runing");

    
    
  //     console.log("my value is: "+val);
  //    const response = await fetch("https://fakestoreapi.com/products/1");
  //     const data = await response.json();
    
     
  //    var element = document.querySelector('.cart-product');
  //    var newHTML;
    
  //    html =  '<div id="main" href="cart.html" onclick="cart(%pid%)"><a href="cart.html"><p style="display:none class="pid"></p><img id="cart-image" src="%src%" alt="" ><div class="sale__button"><span class="sale__text">Sale</span></div><i class="fa fa-eye myIcon" style="font-size:2rem"></i><i class="fa fa-shopping-cart myIcon myIcon1" style="font-size:2rem"></i><div id="cart-category" ><strong class="txt">Category:  </strong><span class="txt">%category%</span></div><div id="cart-rating"><strong class="txt">Rating:  </strong><span class="txt">%rating%</span></div><div id="cart-price"><strong class="txt">Price:   </strong><span class="txt">%price%</div></span> </a></div>';
    
     
  //    newHTML = html.replace('%src%',data.image);
  //    newHTML = newHTML.replace('%pid%',data.id);
  //    newHTML = newHTML.replace('%category%',data.category);
  //    newHTML = newHTML.replace('%rating%',data.rating.rate+"("+data.rating.count+")");
  //    newHTML = newHTML.replace('%price%',data.price);
  //   console.log("Running");
  //    document.querySelector('.cart-product').insertAdjacentHTML('beforeend',newHTML);
   
     
  //   console.log("inserted");
  // }

      function display()
      {
        document.querySelector('.product__submenu').classList.add('yz');
      }
      function hide()
      {
        document.querySelector('.product__submenu').classList.remove('yz');
      }

    var x=0;
    async function showSearchBar()
    {
      const response =  await fetch("https://api.escuelajs.co/api/v1/categories");
const beta =  await response.json();
console.log(beta);
      document.querySelector('.search__bar').classList.add('showSearchbar');
     x++;
    }
    function hideSearchBar()
    {
      
      const container = document.querySelector('.products__show');
      removeAllChildNodes(container);
      document.querySelector('.search__bar').classList.remove('showSearchbar');
      document.getElementById('input').value = "";
      document.getElementById('input').placeholder='Search for Products';
      document.querySelector('.search__bar').classList.remove('search__active');
      x--;
    }
    
   

  //   document.getElementById("searchbar").addEventListener("keypress", function (event) {
  //     if (event.key === "Enter") {
  //        // the code you want to run
  //        console.log("OKK");
  //     }
  // })
  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

let products = [];
 const searchInput = document.querySelector("[data-search]")
 searchInput.addEventListener("input",e => {
  const value = e.target.value;
  
   //e.firstElementChild can be used.
   var child = e.lastElementChild;
   
   const container = document.querySelector('.products__show');
   removeAllChildNodes(container);
     
  products.forEach(product => {
    
    
    console.log("inside for each");
   
    
    if(value==="")
    {
      
      document.querySelector('.search__bar').classList.remove('search__active');
    }
    else if(value!=null || value!="" )
    {
     
      document.querySelector('.search__bar').classList.add('search__active');

      var e = document.querySelector(".products__show");
        
     
     
      
      
     console.log(product);



      if(product.category.includes(value))
      {
        
        
        var element = document.querySelector('.products__show');
        var newHTML;
        html =  '<div id="main" class="main1" href="cart.html" onclick="cart(%pid%)"><a href="cart.html" ><p style="display:none class="pid"></p><img id="image" src="%src%" alt="" ><div class="sale__button"><span class="sale__text">Sale</span></div><i class="fa fa-eye myIcon" style="font-size:2rem"></i><i class="fa fa-shopping-cart myIcon myIcon1" style="font-size:2rem"></i><div id="category" ><strong class="txt">Category:  </strong><span class="txt">%category%</span></div><div id="rating"><strong class="txt">Rating:  </strong><span class="txt">%rating%</span></div><div id="price"><strong class="txt">Price:   </strong><span class="txt">%price%</div></span> </a></div>';
    
        newHTML = html.replace('%src%',product.image);
        newHTML = newHTML.replace('%pid%',product.id);
        newHTML = newHTML.replace('%category%',product.category);
        newHTML = newHTML.replace('%rating%',product.rating+"("+product.count+")");
        newHTML = newHTML.replace('%price%',product.price);
    
        document.querySelector('.products__show').insertAdjacentHTML('beforeend',newHTML);
      }
      
    }
    
    else
    {
      console.log("else");
      
      
    }
   
  })

 })


 fetch('https://api.escuelajs.co/api/v1/products')
  .then(res => res.json())
  .then(data => {
    console.log("mapping");
    products = data.map(product => {

      console.log("REturneddddddddddddddddd");
      return {category: product.category.name, image:product.images[0],price:product.price,id:product.id }
    }) 


  })


  // async function showProducts(value)
  // {
  //   console.log("inside show");
  //   for( i=1;i<=4;i++)
  //     {
  //       const response =  await fetch("https://fakestoreapi.com/products/"+i);
  //        const data =  await response.json();
  //        var element = document.querySelector('.products__show');
  //        var newHTML;
  //        if(data.category.includes(value))
  //        {
        
  //     html =  '<div id="main"><img id="image" src="%src%" alt=""><div class="sale__button"><span class="sale__text">Sale</span></div><i class="fa fa-eye myIcon" style="font-size:2rem"></i><i class="fa fa-shopping-cart myIcon myIcon1" style="font-size:2rem"></i><div id="category" ><strong class="txt">Category:  </strong><span class="txt">%category%</span></div><div id="rating"><strong class="txt">Rating:  </strong><span class="txt">%rating%</span></div><div id="price"><strong class="txt">Price:   </strong><span class="txt">%price%</div></span></div>';

  //     newHTML = html.replace('%src%',data.image);
  //     newHTML = newHTML.replace('%category%',data.category);
  //     newHTML = newHTML.replace('%rating%',data.rating.rate+"("+data.rating.count+")");
  //     newHTML = newHTML.replace('%price%',data.price);

  //     document.querySelector('.products__show').insertAdjacentHTML('beforeend',newHTML);
  //        }
  //        else
  //        {
  //         console.log("no match");
  //        }
  //     }

  // }
//   fetch("https://fakestoreapi.com/products/"+i)
 
//   .then((res) => res.json())
//   .then((json) => document.getElementById("image").src = json.image);

//   fetch("https://fakestoreapi.com/products/1")
 
//   .then((res) => res.json())
//   .then((json) => document.getElementById("category").innerHTML = json.category);

//   fetch("https://fakestoreapi.com/products/1")
 
//   .then((res) => res.json())
//   .then((json) => document.getElementById("rating").innerHTML ="Rating: " + json.rating.rate+ "("+json.rating.count+")");

//   fetch("https://fakestoreapi.com/products/1")
 
//   .then((res) => res.json())
//   .then((json) => document.getElementById("price").innerHTML ="price: " + json.price);


  
 
  


  
 
  
//nav toggler  
// const collapsibles = document.querySelectorAll(".collapsible");
// collapsibles.forEach((item) =>
//   item.addEventListener("click", function () {
//     this.classList.toggle("collapsible--expanded");
//   })
// );

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


  function Change(){

    console.log("clicked");
    
    document.querySelector('.mobile__nav').classList.add('show__nav');
    document.querySelector('.body__move').classList.add('abc');
  }

  function Change1(){

    document.querySelector('.mobile__nav').classList.remove('show__nav');
    document.querySelector('.body__move').classList.remove('abc');
  }




// *********************************************************
//  *********************Cart Page**************************
// *********************************************************

async function loadProducts(){
  // console.log("isnide function");
  // const response = await fetch("https://api.escuelajs.co/api/v1/products/8");
  //         const data = await response.json();
  //         console.log(data);
 
  console.log("no data");
  for(i=8;i<=200;i++)
  {
          var html,newHtml;
          const response = await fetch("https://api.escuelajs.co/api/v1/products/"+i);
          const data = await response.json();
          console.log(data);


           html = '<a href=cart.html"><div class="pro" onclick=getProductDesc('+i+')>< <img id="imgUrl'+i+'" src="%src%" alt=""><div class="des"><span>%category%</span><h5>%brand%</h5><div class="star"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></div><h4>$%price%.00</h4></div><a href="#"><i class="fa fa-shopping-cart cart" style="font-size: 1.2rem;"></i></a></div></a>';
          newHtml = html.replace('%src%',data.images[0]);
          newHtml = newHtml.replace('%id%',data.id)
          newHtml =  newHtml.replace('%category%',data.category.name);
          newHtml = newHtml.replace('%brand%',data.title);
          newHtml = newHtml.replace('%price%',data.price);
          document.querySelector('.pro-container').insertAdjacentHTML('beforeend',newHtml);
  }
  
  

}
// loadProducts();
async function changeImage(param){
  
  document.querySelector('#MainImg').src = param.src;
 
  };

  // function changeBg(param)
  // {
  //     var x = param.src;
  //     console.log(x);
  //     const myArray = x.split("1.jpg");
  //     const p = myArray[0].split("/");
  //     console.log(p[6]);
  //     var url = myArray[0]+"2.jpg"
      
  //     document.querySelector('#imgUrl'+p[6]).src = url;
  // }
  // function changeBack(param)
  // {
      
  //     var x = param.src;
  //     console.log(x);
  //     const myArray = x.split("2.jpg");
  //     const p = myArray[0].split("/");
  //     console.log(p[6]);
  //     var url = myArray[0]+"1.jpg";
  //     console.log(url);
      
  //     document.querySelector('#imgUrl'+p[6]).src = url;
  // }




// *********************************************************
//  *********************Index Page**************************
// *********************************************************


let slideIndex = 0;


function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function getValue(val)
{
  localStorage["key"] = 4;
  localStorage.setItem("firstname", val);
}

function getId(id)
{
  console.log(id);
  localStorage.setItem("pid", id);
  console.log("description taken");
  
}

async function setCart()
{
  console.log("Wel Come");
  var name=localStorage.getItem("pid");
 
  console.log("name is: "+name);
  console.log("Wel Come");
 
          var html,newHtml;
          const response = await fetch("https://api.escuelajs.co/api/v1/products/"+name);
          const data = await response.json();
         console.log(data);

          
          html = '<div class="single-pro-image"><img src="%mainImage%" width="100%" id="MainImg" alt=""><div class="small-img-group"><div class="small-img-col"><img src="%small1%" alt="" width="100%" class="small-img" onclick="changeImage(this)"></div><div class="small-img-col"><img src="%small2%" alt="" width="100%" class="small-img" onclick="changeImage(this)"></div><div class="small-img-col"><img src="%small3%" alt="" width="100%" class="small-img" onclick="changeImage(this)"></div><div class="small-img-col"><img src="%small4%" alt="" width="100%" class="small-img" onclick="changeImage(this)"></div></div></div><div class="single-pro-detials"><h6>Home / T-shirts</h6><h5>%title%</h5><h2>$%price%.00</h2><select ><option>Select Size</option><option>XL</option><option>XXL</option><option>small</option><option>large</option></select><input type="number" value="1" min="1"><button>Add To Cart</button><h4>Product Details</h4><span>%des%</span></div>'
          newHtml = html.replace('%mainImage%',data.images[0]);
          newHtml = newHtml.replace('%small1%',data.images[1]);
          newHtml = newHtml.replace('%small2%',data.images[2]);
          newHtml = newHtml.replace('%small3%',data.images[0]);
          newHtml = newHtml.replace('%small4%',data.images[1]);
          newHtml = newHtml.replace('%title%',data.title);
          newHtml = newHtml.replace('%price%',data.price);
          newHtml = newHtml.replace('%des%',data.description);

          
          document.querySelector('#prodetails').insertAdjacentHTML('beforeend',newHtml);
 

}