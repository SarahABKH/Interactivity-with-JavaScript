function billingFunction()
{
  name1 =document.getElementById("shippingName").value;
  zip=document.getElementById("shippingZip").value;
  if(document.getElementById("same").checked)
    {
      document.getElementById("billingName").value=name1;
      document.getElementById("billingZip").value=zip;    
    }
  else
    {
      document.getElementById("billingName").value="";
      document.getElementById("billingZip").value="";    
    }
}