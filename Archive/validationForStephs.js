//Function to validate form inputs
function validate(){

    var email = document.getElementById("t1").value;

    var fname = document.getElementById("t2").value;

    var lname = document.getElementById("t3").value;

    var isValid = true;

    if(email ==""){

        document.getElementById("t1result").innerHTML=" Email is required";

        isValid=false;

    }
    else{
        document.getElementById("t1result").innerHTML="";
    }

    if(fname ==""){

        document.getElementById("t2result").innerHTML=" First Name is required";

        isValid=false;

    }
    else{
        document.getElementById("t2result").innerHTML="";
    }

    if(lname ==""){

        document.getElementById("t3result").innerHTML=" Last name is required";

        isValid=false;

    }
    else{
        document.getElementById("t3result").innerHTML="";

            document.getElementById("infoValid").innerHTML="Your information has been submitted";
    }
    
   
}