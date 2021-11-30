function Click(){
    
    datee();
    fnamee();
    maill();
    mobilee();
    namee();
    addresss();
    
    
    
    function maill(){
        var a=document.getElementById("mail").value;
      
        var regx=/^([a-z 0-9\.-]+)@([a-z 0-9-]+).([a-z]{2,8})$/;
        if(a.trim()==""){
            document.getElementById("label").style.visibility="visible";
            
            
    
    
        }
        else if(regx.test(a)){
           
            document.getElementById("label").style.visibility="hidden";
        }
        else{
            document.getElementById("label").innerHTML="Invalid mail";
            document.getElementById("label").style.visibility="visible";
        }
    }
    function mobilee(){
        var mob=document.getElementById("mobile").value;
        var r=/^([6-9]\d{9})$/;
        if(mob.trim()==""){
               document.getElementById("molabel").style.visibility="visible";
        }
        else if(r.test(mob)){
        
            document.getElementById("molabel").style.visibility="hidden";
        }
        else{
            document.getElementById("molabel").innerHTML="Invalid mobile number";
             document.getElementById("molabel").style.visibility="visible";
        }
    }
    function namee(){
        var n=document.getElementById("name").value;
        var t=/[0-9]/;
        
        if(n.trim()==""){
            document.getElementById("lb1").style.visibility="visible";
        }
        else if(t.test(n)){
            document.getElementById("lb1").innerHTML="Enter correct Name";
            document.getElementById("lb1").style.visibility="visible";
        }
        else{
            document.getElementById("lb1").style.visibility="hidden"; 
        }
    
    } 
    function fnamee(){
        
        var fn=document.getElementById("fname").value;
        var tt=/[0-9]/;
        
        if(fn.trim()==""){
            document.getElementById("flabel").style.visibility="visible";
        }
        else if(tt.test(fn)){
            document.getElementById("flabel").innerHTML="Enter correct Name";
            document.getElementById("flabel").style.visibility="visible";
        }
        else{
            document.getElementById("flabel").style.visibility="hidden";
        }
    
    }
    function addresss(){
        var f=document.getElementById("add").value;
        if(f.trim()==""){
            document.getElementById("alabel").style.visibility="visible";
        }
        else{
            document.getElementById("alabel").style.visibility="hidden"; 
        }
    
    
    }
    function datee(){
        
        var dat=document.getElementById("dob").value;
        
        var rr=/^([0-9]{2})-([0-9]{2})-([0-9]{4})$/;
        if(rr.test(dat)){
            document.getElementById("dlabel").style.visibility="hidden"; 

        }
        else if(dat.trim()==""){
            document.getElementById("dlabel").style.visibility="visible";

        }
        else{
            document.getElementById("dlabel").innerHTML="Enter correct DOB";;
            document.getElementById("dlabel").style.visibility="visible"; 
        }
       
    }
    
   
}
function chekk(){
       var chek=document.getElementById("check"); 
    
        var f=document.getElementById("add").value;
         var al2=document.getElementById("a2").value;
         var cti=document.getElementById("cty").value;
         var ste=document.getElementById("state").value;
         var code=document.getElementById("z1").value;
         document.getElementById("add2").innerHTML=f;
         document.getElementById("a22").innerHTML=al2;
         document.getElementById("cty2").innerHTML=cti;
         document.getElementById("state2").innerHTML=ste;
       document.getElementById("z2").innerText=code;

}
    

   
   
        
