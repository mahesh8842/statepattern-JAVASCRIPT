const pagestate=function(){
  let currentstate=new aboutState(this);
  this.init=function(){
    // console.log('initialized');
    this.change(new homeState);
  }
  this.change=function(state){
    // console.log(state);
    currentstate=state;
  }
};

//create states

const homeState=function(page){
  document.querySelector('#heading').textContent=null;
  document.querySelector('#content').innerHTML=`
    <div class="jumbotron">
    <h1 class="display-4">Hello, world!</h1>
    <p class="lead">This is a simple navigation developed using state pattern in javascript.</p>
    <hr class="my-4">
    <p>click on various nav items to navigate.</p>
    <p class="lead">
      <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </p>
  </div>
  `;
}

const aboutState=function(page){
document.querySelector('#heading').textContent="about us";
document.querySelector('#content').innerHTML=`
<div class="card">
  <div class="card-body">
    This is about page
  </div>
</div>
`;
}

const contactState=function(page){
document.querySelector('#heading').textContent="contact us";
document.querySelector('#content').innerHTML=`
    <form>
      <div class="form-group">
        <label for="exampleFormControlInput1">Email address</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
      </div>
      <div class="form-group">
        <label for="exampleFormControlSelect1">Example select</label>
        <select class="form-control" id="exampleFormControlSelect1">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
      <div class="form-group">
        <label for="exampleFormControlSelect2">Example multiple select</label>
        <select multiple class="form-control" id="exampleFormControlSelect2">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
      <div class="form-group">
        <label for="exampleFormControlTextarea1">Example textarea</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
    </form>
`;
};

//initializing page 

const page=new pagestate();

page.init();

// page.change(aboutState);

const home=document.getElementById('home'),
  about=document.getElementById('about'),
  contact=document.getElementById('contact');

  home.addEventListener('click',e=>{
    page.change(new homeState);
  });

  about.addEventListener('click',e=>{
    page.change(new aboutState);
  })

  contact.addEventListener('click',e=>{
    page.change(new contactState);
  })




