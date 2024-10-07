const get= (parm) => document.querySelector(`.${parm}`);

const body=document.querySelector("[body");
const cross = get("cross");
const placeholderValue= get("placeholderValue");
const modeImg=get("modeImg"); 
const wrapper=get("wrapper");
const mode= get("mode");
const searchBtn= get("searchBtn");
const form = get("form");
const cards=get("cards");
const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const pointers= document.querySelectorAll(".pointer");

let cnt=0;
let name=get("name");
let username;


init();

function init(){

    console.log("i ma");
    username="sbmraj03";
    fetchInfo(username);

    console.log("hello2");

    form.addEventListener("click",(e)=> {
        e.preventDefault();
    }) 
    
    cross.addEventListener("click", () => {
    placeholderValue.value = "";
    })
    
    modeImg.addEventListener("click", () => {
    if(mode.innerText=="DARK"){
            wrapper.classList.add("bg-slate-950");
            pointers.forEach(pointer => {
                pointer.classList.add("bg-slate-800")});
                 
                    cards.classList.add("bg-slate-700");
    
                
               name.classList.add("text-white");
                mode.innerText="LIGHT";
                modeImg.src= "assets/images/sun-icon.svg";
            }
    
    else {
        wrapper.classList.remove("bg-slate-950");
        cards.classList.remove("bg-slate-700");
    
    
        pointers.forEach(pointer => {
            pointer.classList.remove("bg-slate-800")});
            mode.innerText="DARK";
            modeImg.src= "assets/images/moon-icon.svg";
            name.classList.remove("text-white");
        }
    
    
        
    })
    
}

searchBtn.addEventListener("click", ()=>{
    fetchInfo(placeholderValue.value);

 })   

     //username = placeholderValue.value;
async function fetchInfo(username){

    console.log("hello3");
         console.log(username);
         try{
             console.log("ander");
             let response = await fetch(`https://api.github.com/users/${username}`);
             console.log("ander again");
             let data = await response.json();
             console.log(data);
     
             renderInfo(data);
     
         }
         catch{
             console.log("some error has occured");
         }

     }
 

function renderInfo(data){
    console.log("hello");
    const user_image = get("userImg");
    const joined = get("date");
    const followers = get("followers");
    const following = get("following");
    const repos =get("repos");
    const about=get("about");
    const location=get("location");
    const contact=get("contact");
    const twitterId=get("twitter");
    const company=get("company");
    const name = get("name");
    const link = get("link");

    user_image.src= data?.avatar_url;
    let date_segments= data?.created_at.split("T").shift().split("-");
    joined.innerText= `Joined ${date_segments[2]} ${month[date_segments[1]-1]} ${date_segments[0]} `;
    followers.innerText= data?.followers;
    following.innerText= data?.following;
    repos.innerText= data?.public_repos;
    about.innerText= data?.bio == null ? "No bio" : data?.bio;
    location.innerText= data?.location == null ? "Not Available" : data?.location;
    console.log(location);
    contact.href= data?.html_url;
    twitterId.innerText= data.twitter_username == null ? "Not Available" : data?.twitter_username;
    name.innerText = data?.name;
    contact.innerText=`@${data?.login}`;
    company.innerText= data?.company == null ? "Not Avalilable" : data?.company;
    link.innerText= data?.email == null ? "Not Available" : data?.email;
    console.log("hello");


}
    

    