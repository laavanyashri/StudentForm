
    //get ininut form eleemsnt
    
    var table= document.getElementById("tbleStudentDetails");
    var username= document.getElementById("txtName");
    var age= document.getElementById("txtAge");
    var radio= document.getElementsByName("gender");
    
var selectedgender;
  // var gender= document.querySelector('input[name="gender"]:checked').value;
    var course=document.getElementById("course");
    var selectedcourse= course.options[course.selectedIndex].text;
    var email= document.getElementById("txtEmail");
    for(count=0;count<2;count++)
    {
        radio[count].addEventListener("click",function()
    {
        selectedgender=event.target.value;
    })
    }

btnsave.addEventListener("click",function()
{

var tableid=document.getElementById("tbleStudentDetails");
    var tr=document.createElement("tr");

//add html element in tr tag

    tr.innerHTML="<td>"+username.value+"</td><td>"+age.value+"</td> <td>"+selectedcourse+"</td><td>"+selectedgender+"</td> <td>"+email.value+"</td><td><button  type='button' onclick="+"deleteItem(event)"+">Delete</button> </td> ";
    tableid.append(tr);
})


function deleteItem(event)
{
    
//console.log(event.target); //get target button
//console.log(event.target.parentElement.parentElement); //get parent elemt td tag
event.target.parentElement.parentElement.remove(); //remove tr tag

clearForm();
}


function clearForm()
{
    username.value="";
    age.value="";
    email.value="";
    course.value="javascript";
  // clear all radio buttons
  $("input[type=radio][name=gender]").prop('checked', false);
   // $("input:radio").removeAttr("checked");
}