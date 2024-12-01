var bookMarkName = document.getElementById("name")
var webUrl = document.getElementById("url")

var allWebsite=[];
if(localStorage.getItem("allwebsite") != null){
    allWebsite =JSON.parse(localStorage.getItem("allwebsite"))

    display()
}
function addWebsite(){
    if(validName()== true && validUrl()== true){
    var website={
        webName:bookMarkName.value,
        siteUrl:webUrl.value
        }
    allWebsite.push(website)
        console.log(allWebsite)
        
       localStorage.setItem("allwebsite" , JSON.stringify(allWebsite)) 
        display()
        
        clr()
    }     

}

function display(){
    var cartona="";
    for(var i=0 ; i<allWebsite.length ; i++ ){
     cartona +=`
     <tr>
    <td>${i+1}</td>
    <td>${allWebsite[i].webName}</td>
    <td>
        <a href="${allWebsite[i].siteUrl}">
            <button type="button" class="btn btn-success ">
                <i class="fa-solid fa-eye"></i>
                visit
            </button>
        </a>
    </td>
    <td>
        <button onclick="deleteElement(${i})" class="btn btn-warning">delete</button>
    </td>
</tr>
`
    
    
    document.getElementById("tbody").innerHTML=cartona
    
   }

   
}

function clr(){
    bookMarkName.value=""
    webUrl.value=""
}


function deleteElement(index){
    allWebsite.splice(index , 1);
    localStorage.setItem("allwebsite" , JSON.stringify(allWebsite))
    display()
}


function validName(){

    var regex = /^[a-zA-Z0-9]{3,20}$/
    if(regex.test(bookMarkName.value) == true){
        document.getElementById("alert-url").classList.replace("d-block" , "d-none")
        return true
    }
    document.getElementById("alert-name").classList.replace("d-none" , "d-block")
    return false
    
}

function validUrl(){

    var regex = /^www.[a-z0-9]{1,10}.com$/
    if(regex.test(webUrl.value) == true){
        document.getElementById("alert-url").classList.replace("d-block" , "d-none")
        return true
    }
    document.getElementById("alert-url").classList.replace("d-none" , "d-block")
    return false
}
