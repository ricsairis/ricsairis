// JSON array holding all the book items
var json_books = '['+
'{"name":"Fire Manual",'+
'"img":"firebook.png",'+
'"info": "This book will teach you to make a fire everywhere!",'+
'"cost": 70},'+

'{"name":"Kingly Etiquette",'+
'"img":"fancybook.png",'+
'"info": "Look like a king while covered in the blood of your enemies.",'+
'"cost": 300},'+

'{"name":"Bible",'+
'"img":"bible.jpg",'+
'"info": "This one will get you saved. No seriously!",'+
'"cost": 500},'+

'{"name":"Frigid",'+
'"img":"icebook.png",'+
'"info": "This book will teach you the lost art of becoming a yetti!",'+
'"cost": 50},'+

'{"name":"Secret Diary",'+
'"img":"lockedbook.png",'+
'"info": "A locked diary from many ages ago.",'+
'"cost": 70},'+

'{"name":"Wooden Tales ",'+
'"img":"woodenbook.png",'+
'"info": "All the classic tales on the many different trees.",'+
'"cost": 50}'+
']';



var json_health = '['+
'{"name":"Purple Mystery Potion",'+
'"img":"health.png",'+
'"info": "Don\'t drink too much before heading out to fight the dragon!",'+
'"cost": 25},'+

'{"name":"Matrix Potion",'+
'"img":"greenpotion.png",'+
'"info": "Take the green potion, Morpheus ran out of the pills.",'+
'"cost": 70},'+

'{"name":"Smurf",'+
'"img":"bluepotion.png",'+
'"info": "Escape the dragon. By becoming a smurf!",'+
'"cost": 25},'+

'{"name":"Minecraft Potion",'+
'"img":"minecraftpotion.png",'+
'"info": "Blend in with the many other people in Minecraft Nation.",'+
'"cost": 25},'+

'{"name":"Cherry Pie",'+
'"img":"cherrypie.png",'+
'"info": "Eating this delicious pie will up your health by 50%.",'+
'"cost": 75},'+

'{"name":"Scary Mushroom",'+
'"img":"highmushroom.png",'+
'"info": "Careful! This mushroom eats up happiness!",'+
'"cost": 95},'+

'{"name":"Meat Ball Soup",'+
'"img":"meatballsoup.png",'+
'"info": "The perfect soup for when your about to die of hunger.",'+
'"cost": 150},'+

'{"name":"Blood-Replenishing Potion",'+
'"img":"redpotion.png",'+
'"info": "Good if your bleeding to death and if your a hungry vampire.",'+
'"cost": 50}'+

']';



var json_armor = '['+
'{"name":"Super Detailed Shield",'+
'"img":"armor.png",'+
'"info": "Feel fancy and good about yourself while you slay orcs!",'+
'"cost": 200},'+

'{"name":"Basic Armor",'+
'"img":"brownarmor.jpg",'+
'"info": "This basic armor protecs you from paper cuts.",'+
'"cost": 95},'+

'{"name":"Ratty Cloak",'+
'"img":"cloak.jpg",'+
'"info": "This ratty cloak will disuade thieves from robbing you.",'+
'"cost": 25},'+

'{"name":"Pointy Armor Set",'+
'"img":"armor2.png",'+
'"info": "Protect yourself from all incoming arrows and birds!",'+
'"cost": 250},'+

'{"name":"Blue Chest Plate",'+
'"img":"bluearmor.jpg",'+
'"info": "Makes you look skinnier and is water resistant.",'+
'"cost": 150},'+

'{"name":"Mage Cloak",'+
'"img":"armor1.png",'+
'"info": "Do hocus pocus and look fabulous.",'+
'"cost": 250},'+

'{"name":"Furry Love",'+
'"img":"furryglove.jpg",'+
'"info": "Turn into a furry with this glove, gross out your enemies to death.",'+
'"cost": 45}'+

']';



var json_weapons = '['+
'{"name":"Pretty Generic Sword",'+
'"img":"weapon.png",'+
'"info": "This is a great for newbie adventurers! Good luck!",'+
'"cost": 150},'+

'{"name":"Basic Bow",'+
'"img":"simplebow.png",'+
'"info": "This basic bow has good aim. If your aiming at nothing.",'+
'"cost": 75},'+

'{"name":"Speedy Bow",'+
'"img":"fastbow.png",'+
'"info": "This bow will help you shoot any arrow super fast!",'+
'"cost": 160},'+

'{"name":"Lightning Bow",'+
'"img":"electricbow.png",'+
'"info": "Shoot lightning bolts out of this bow killing everything in it\'s way!",'+
'"cost": 150},'+

'{"name":"Obsidian Club",'+
'"img":"obsidianclub.png",'+
'"info": "Mesmerize your enemies as you defeat them!",'+
'"cost": 150}'+

']';



var json_misc = '['+
'{"name":"Super Rare Dungeon Key",'+
'"img":"misc.png",'+
'"info": "This is the key to success! Literally!",'+
'"cost": 400},'+

'{"name":"Ancient Dragon Eggs",'+
'"img":"dragoneggs.png",'+
'"info": "Nobody has ever hatched these eggs. Maybe you can.",'+
'"cost": 250},'+

'{"name":"Dust Bunny",'+
'"img":"dustbunny.png",'+
'"info": "All the DB needs to survive is love and dust.",'+
'"cost": 25},'+

'{"name":"Sir Richard\'s Key",'+
'"img":"goldnkey.png",'+
'"info": "Lost key to Sir Richard\'s castle in Naples.",'+
'"cost": 500},'+

'{"name":"Fools Gold",'+
'"img":"goldbars.png",'+
'"info": "Fake gold bars to trick your enemies with.",'+
'"cost": 250},'+

'{"name":"Poke-Ball",'+
'"img":"pokeball.png",'+
'"info": "In a world we must defend. Pokemon, gotta catch\'em all!",'+
'"cost": 150}'+

']';






// Parsing the json arrays into javascript objects
var books = JSON.parse(json_books);
var health = JSON.parse(json_health);
var armor = JSON.parse(json_armor);
var weapons = JSON.parse(json_weapons);
var misc = JSON.parse(json_misc);

// This variable holds the current item category
var item_type = "weapons";

setItemTypeWeapons = function() {item_type = "weapons"; drawStore(); saveCart();}
setItemTypeArmor = function() {item_type = "armor"; drawStore(); saveCart();}
setItemTypeHealth = function() {item_type = "health"; drawStore(); saveCart();}
setItemTypeBook = function() {item_type = "books"; drawStore(); saveCart();}
setItemTypeMiscellaneous = function() {item_type = "misc"; drawStore(); saveCart();}

// This variable is the cart and is an associative array
var cart = {};

// Sales tax
var tax = 0.075;

var card = false;

//This is the function we are calling  in the string to that counts the items by name and tells us how many there are
getCount = function(key)
{
    if(key in cart)
        return cart[key].count.toString();
    
    return "0";
}

drawStore = function()
{
    if(!document.getElementById("store"))
        return;
    // Array that points to the category of item array we want to loop over
    var array;

    // Set the array depending on what type of items we want to see
    switch(item_type)
    {
        case "weapons": array = weapons; break;
        case "armor": array = armor; break;
        case "health": array = health; break;
        case "books": array = books; break;
        case "misc": array = misc; break;
    }

    // Loop over our array that we chose in the switch statement
    var content = "";

    for(i = 0; i < array.length; i++)
    {
        content += "<div class=\"store-item col-md-3 my-padding\">" +
            "<h4>" + array[i].name + "</h4>" +
            "<img src=\"./img/" + array[i].img + "\" class=\"img-thumbnail\"/>" +
            "<p><br>" + array[i].info + "<br></p>" +
            // To get the count you cant add an if statment inside of it, you need to call a function
            // The furnction must return a string or else it will cause an error
            "<strong style=\"position: absolute;\">" + array[i].cost + " Rupees<br>Qty: " + getCount(array[i].name) + "</strong>" +
            "<div class=\"btn-group pull-right\">" + 
                "<button class=\"btn btn-success glyphicon glyphicon-plus\" type=\"button\"" + 
                "onclick=\"addCartStore(" + item_type + "[" + i + "], 1)\"></button>" +
                    
                "<button class=\"btn btn-danger glyphicon glyphicon-minus\" type=\"button\"" + 
                "onclick=\"delCartStore(" + item_type + "[" + i + "], 1)\"></button>" + 
            "</div>" +
        "</div>";
    }

    document.getElementById("store").innerHTML = content;
}


drawCart = function()
{
    if(!document.getElementById("cart"))
        return;

    //Shopping Cart Table
    var content = "<h3>Shopping Cart</h3><table class=\"table table-striped\">" +
    "<thead><tr>" + 
        "<th>Thumbnail</th>" + 
        "<th>Name</th>" + 
        "<th>Description</th>" + 
        "<th>Price</th>" + 
        "<th>Amount</th>" + 
        "<th>Remove</th>" +
    "</tr></thead>" +
    "<tbody>";

    // Dont forget to define what your calling since you can't do so in the string.
    var sub_total = 0;


    for(var key in cart)
    {
        //This string formats how we want the inner.html to look when we call our var's
        content += "<tr>" +
        "<td style=\"width: 10%;\"><img src=\"./img/" + cart[key].item.img + "\" class=\"img-thumbnail\"/></td>" +
        "<td style=\"width: 15%;\"><p>" + cart[key].item.name + "</p></td>" + 
        "<td style=\"width: 45%;\"><p>" + cart[key].item.info + "</p></td>" + 
        "<td style=\"width: 10%;\"><p>" + cart[key].item.cost + " Rs</p></td>" +
        "<td style=\"width: 10%;\"><p>" + cart[key].count + "</p></td>" +
        "<td style=\"width: 10%;\"><button class=\"btn btn-danger glyphicon glyphicon-minus\" type=\"button\"" + 
        "onclick=\"delCartCart(\'" + cart[key].item.name + "\', 1)\"></button></td>" + 
        "</tr>";

        sub_total += cart[key].count * cart[key].item.cost;
    }

    var sales_tax = sub_total * tax;
    var total = sub_total + sales_tax;
    
    //This is another string where we close our tags
    content +=  "</tbody></table><br><br><br>";

    //Checkout Table
    content += "<h3>Checkout</h3><table class=\"table table-striped\">" +
    "<tr><th>Sub Total : </th>" +
    "<td>" + sub_total + " Rs</td></tr>" +
    "<tr><th>Tax (7.5%) : </th>" +
    "<td>" + sales_tax + " Rs</td></tr>" +
    "<tr><th>Total : </th>" +
    "<td>" + total + " Rs</td></tr>" +
    "</table><br><br><br>";

    if(total > 100)
    {
        content += "<div class=\"row\">" +
        "<div class=\"form-check form-check-inline\">" + 
            "<div class=\"col-md-5\"><h3>Thats a lot of rupees!<br>Would you like to sign up for a credit line via Orc Card?</h3></div>" +
            "<div class=\"col-md-2\"><label class=\"form-check-label\">" +
                "<a href=\"#\" id=\"orc\" onclick=\"toggleGlyph()\" style=\"position: absolute; padding-top: 20%;\">" +
                "<span class=\"glyphicon " + setCheckGlyph() + "\" style=\"font-size:40px;\"></span></a>" + 
                "</label>" +
            "</div>" + 
            "</div>" +
            "<div class=\"col-md-5\"><img src=\"./img/card.png\" style=\"width:170px;\"/></div>" + 
        "</div>";
    }
    else
        content += "<h3>If you spend less than 100 rupees I will need my rupees immediately!<br>No credit!</h3>";

    //and then put our string on our document
    document.getElementById("cart").innerHTML = content;
}

toggleGlyph = function()
{
    card = !card;
    drawCart();
}

setCheckGlyph = function()
{
    // A trinary if statement. It just looks way coolor than an 'if else'
    return card ? "glyphicon-check" : "glyphicon-unchecked";
}

// This function will take the var 'item' and add it to the cart
addCartStore = function(item, count)
{
    if(item.name in cart)
        cart[item.name].count += count;
    else
        cart[item.name] = {"item" : item, "count" : count};
    
    saveCart();
}

// This function will take the var 'item' and TRY to remove it from the cart
delCartStore = function(item, count)
{
    if(item.name in cart)
    {
        if(cart[item.name].count <= count)
            delete cart[item.name];
        else
            cart[item.name].count -= count;
    }

    saveCart();
}

delCartCart = function(name, count)
{
    if(name in cart)
    {
        if(cart[name].count <= count)
            delete cart[name];
        else
            cart[name].count -= count;
    }

    saveCart();
}

// This functino will save the cart array to a cookie
saveCart = function()
{
    var d = new Date();
    d.setTime(d.getTime() + (7*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();

    document.cookie = "cart=" + JSON.stringify(cart) + ";" + expires + ";path=./";
    document.cookie = "type=" + JSON.stringify(item_type) + ";" + expires + ";path=./";

    drawStore();
    drawCart();
}

// This function will load the cart array from a cookie
loadCart = function()
{
    // A regular expression scans a string looking for these characters
    var result = document.cookie.match(new RegExp('cart=([^;]+)'));
    
    if(result && (result = JSON.parse(result[1])))
        cart = result;

    result = document.cookie.match(new RegExp('type=([^;]+)'));

    if(result && (result = JSON.parse(result[1])))
        item_type = result;

    drawStore();
    drawCart();
}
