function sendTowhatsapp(){
    let num = "+7667350125";
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let Phone = document.getElementById('Phone').value;
    let Subject = document.getElementById('Subject').value;
    let message = document.getElementById('sms').value;

    var url = "https://wa.me/" + num + "?text=" + "Name : " +name+ "%0a"
    + "email :" +email+ "%0a" + "Phone :"+Phone+"%0a" + "Subject :"+Subject+ "%0a"
    +"message :" +message+ "%0a%0a";

    window.open(url,'_blank').focus();

}
document.getElementById('contact-form').addEventListener("click",function(){
  document.getElementById("Contact").scrollIntoView({behavior:"smooth"});
});

function downloadPDF(){
  const link = document.createElement('a');
  link.href="picture/RESUME.pdf";
  link.download = "RESUME.pdf";
  link.click();
}