var names = ["Fmaily Book", "VED PRAKASH", "PRERNA", "VIJAY LAXAMI",];
var images = ["https://images-na.ssl-images-amazon.com/images/I/61zTGIEvQoL.jpg", "https://t4.ftcdn.net/jpg/01/38/71/15/360_F_138711505_K9YfscnIghBdBE1MvQbgUGixdRNKEg2P.jpg", "https://thumbs.dreamstime.com/z/sister-portrait-pretty-teenage-girl-schoolgirl-long-brown-hair-satchel-bag-school-uniform-skirt-blouse-daughter-86364433.jpg", "https://thumbs.dreamstime.com/b/mother-child-mom-hugging-her-son-lot-love-tenderness-mother-s-day-holiday-concept-cartoon-flat-mother-218510495.jpg"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i];
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
