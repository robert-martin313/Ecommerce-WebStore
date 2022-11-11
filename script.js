async function loadNames() {
    for(i=1;i<=20;i++)
    {


    const response = await fetch("https://fakestoreapi.com/products/"+i);
    const data = await response.json();
    
    var element = document.querySelector('.products');
    var newHTML;
    html =  '<div id="main"><img id="image" src="%src%" alt=""><div class="sale__button"><span class="sale__text">Sale</span></div><i class="fa fa-eye myIcon" style="font-size:2rem"></i><i class="fa fa-shopping-cart myIcon myIcon1" style="font-size:2rem"></i><div id="category" ><strong class="txt">Category:  </strong><span class="txt">%category%</span></div><div id="rating"><strong class="txt">Rating:  </strong><span class="txt">%rating%</span></div><div id="price"><strong class="txt">Price:   </strong><span class="txt">%price%</div></span></div>';

    newHTML = html.replace('%src%',data.image);
    newHTML = newHTML.replace('%category%',data.category);
    newHTML = newHTML.replace('%rating%',data.rating.rate+"("+data.rating.count+")");
    newHTML = newHTML.replace('%price%',data.price);

    document.querySelector('.products').insertAdjacentHTML('beforeend',newHTML);
    }
  }
  loadNames();
  // fetch('https://dummyjson.com/products/1')
  // .then(res => res.json())
  // .then(json => console.log(json))

      function display()
      {
        document.querySelector('.product__submenu').classList.add('yz');
      }
      function hide()
      {
        document.querySelector('.product__submenu').classList.remove('yz');
      }

    var x=0;
    function showSearchBar()
    {
      
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
    
    
    
   
    
    if(value==="")
    {
      
      document.querySelector('.search__bar').classList.remove('search__active');
    }
    else if(value!=null || value!="" )
    {
     
      document.querySelector('.search__bar').classList.add('search__active');

      var e = document.querySelector(".products__show");
        
     
     
      
      
     



      if(product.category.includes(value))
      {
        
        
        var element = document.querySelector('.products__show');
        var newHTML;
        html =  '<div id="main"><img id="image" src="%src%" alt=""><div class="sale__button"><span class="sale__text">Sale</span></div><i class="fa fa-eye myIcon" style="font-size:2rem"></i><i class="fa fa-shopping-cart myIcon myIcon1" style="font-size:2rem"></i><div id="category" ><strong class="txt">Category:  </strong><span class="txt">%category%</span></div><div id="rating"><strong class="txt">Rating:  </strong><span class="txt">%rating%</span></div><div id="price"><strong class="txt">Price:   </strong><span class="txt">%price%</div></span></div>';
    
        newHTML = html.replace('%src%',product.image);
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

 fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(data => {
    console.log("mapping");
    products = data.map(product => {

      
      return {category: product.category, image:product.image,rating:product.rating.rate,count:product.rating.count,price:product.price }
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


  // fetch('https://jsonplaceholder.typicode.com/posts/1/photos')
  // .then(response => response.json())
  // .then(json => console.log(json))