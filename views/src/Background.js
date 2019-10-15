var AllBlock;
var mainHTML = document.getElementsByTagName("html")[0]

function CreateCollunm(XLeft)
{
    var InitialText = '<div style="color:#80EE80; opacity:0.45;text-shadow:1px 1px 8px #30EE30,-1px -1px 8px #30EE30;font-family: \'Courier\';z-index:__ZINDEX__;font-size:__SIZE__px;line-height: 100%;left:__LEFT__px;position:fixed">__TEXT__</div>';
    var IncludeText = '0123456789QWERTYUIOPASDFGHJKLZXCVBNM010101';
    var InsideText="";
    var Xsize = Math.floor(Math.random()*25) + 5;   
    var DivText = InitialText.replace("__SIZE__", Xsize); 
    //var Zindex = -30 - Xsize;
    DivText = DivText.replace("__ZINDEX__", -5);
    Xsize*=2;
    var MaxHeight = 2000;
    var NumOfCol = MaxHeight/Xsize*2 > 50 ?  MaxHeight/Xsize*2: 50;
    
    var Left = XLeft;
    DivText = DivText.replace("__LEFT__", Left);
    for (i = 0 ; i < NumOfCol; i ++){
        InsideText += IncludeText.charAt(Math.floor(Math.random()*IncludeText.length)) + "<br>";
    } 
    DivText = DivText.replace("__TEXT__",InsideText )
    $("#BackGround").prepend(DivText);
    return Xsize + Left
}


// function SettingOpen()
// {
//    // $("#settingpannel").animate({width:"toggle"},450)
//     $("#lang").animate({width:"toggle"},300, function()
//     {
//         $("#feedback").animate({width:"toggle"},150)
//     })
// }


//keep
function showContent(element)
{
    var Parent = element.parentNode.parentNode;
    var textbox = Parent.children[0];
    
    if(textbox.getAttribute("type") === "password")
    {
        textbox.setAttribute("type","text")  
        element.setAttribute("src", "views/images/showcontent_red.png") 
    }
    else
    {
        element.setAttribute("src", "views/images/showcontent.png")
        textbox.setAttribute("type","password")
    }
    
}

$( window ).resize(function() {
    if($("#menu-right").css("display") === "none")
    {
        $("#menu-right").css("display", "inline")
        // $("#menu-right").css("left", "-50px")
        // $("#menu-right").css("background", "black")
        // $("#menu-right").css("opacity", "1")
    }
})  
//     $("#BackGround").empty()
//     var i = 0 ;
//     var Xleft = -1;
//     var MaxWidth = $(window).width()
//     while( Xleft < MaxWidth + 5){
//         Xleft = CreateCollunm(Xleft);
//     }
    
//     var BlockWidth = $("#BlockContain").width();
//     var AddButtonWidth = $("#AddButton").width();
//     var BlockRealWidth = BlockWidth - 2*AddButtonWidth
//     $("#BlockName").width(BlockRealWidth + "px")
//     var BackGround = document.getElementById("BackGround").childNodes
//     BackGround[0].innerHTML.split("<br>").length
//     var IncludeText = '0123456789QWERTYUIOPASDFGHJKLZXCVBNM010101';
//     var NumOfCol;
// });

//fixed
function IsVisible(div)
{
    var Arr =[];
    for (var i =0; i < div.length; i++)
    {

        if(div[i].style.display === "")
        {
            Arr.push(div[i]);
        }
    }
    return Arr;
}
//fix
function filterFunction(event) {
    
    var x = event.which || event.keyCode;
    var input, filter, ul, li, a, i;
    input = document.getElementById("BlockName");
    filter = input.value.toUpperCase();
    div = document.getElementById("BlockFilter");
    a = div.getElementsByTagName("div")
    var VisiableDiv = IsVisible(a);
    var hightlight;
    if (x === 40 )
    {        
        if (VisiableDiv.length > 0)
        {
            hightlight = VisiableDiv[0];
            
            VisiableDiv[VisiableDiv.length - 1].style.color = "white";
            VisiableDiv[VisiableDiv.length - 1].style.background = "black";
            for(i=0; i<VisiableDiv.length - 1; i++)
            {
                if (VisiableDiv[i].style.background.indexOf("white") > -1 )
                {
                    hightlight = VisiableDiv[i + 1];
                    VisiableDiv[i].style.color = "white";
                    VisiableDiv[i].style.background = "black";
                }
            }
            hightlight.style.background = "white";        
            hightlight.style.color = "black";            
        }
    }
    else if (x === 38)
    {
        if (VisiableDiv.length > 0)
        {
            hightlight = VisiableDiv[VisiableDiv.length - 1];
            
            VisiableDiv[0].style.color = "white";
            VisiableDiv[0].style.background = "black";
            for(i=VisiableDiv.length - 1; i > 0; i--)
            {
                if (VisiableDiv[i].style.background.indexOf("white") > -1 )
                {
                    hightlight = VisiableDiv[i - 1];
                    VisiableDiv[i].style.color = "white";
                    VisiableDiv[i].style.background = "black";
                }
            }
            hightlight.style.background = "white";        
            hightlight.style.color = "black";            
        }
    }
    else if (x === 13)
    {
        if (VisiableDiv.length > 0)
        {          
            for(i = 0; i < VisiableDiv.length; i++)
            {
                if (VisiableDiv[i].style.background.indexOf("white") > -1 )
                {
                    hightlight = VisiableDiv[i];
                    
                    VisiableDiv[i].style.color = "white";
                    VisiableDiv[i].style.background = "black";   
                }
            }
            
            selectABlockname(hightlight);
        }
    }
    else
    {
        for (i = 0; i < a.length; i++) {
            if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
                a[i].style.display = "";
            } 
            else {
                a[i].style.display = "none";
            }
            a[i].style.color = "white";
            a[i].style.background = "black"; 
        }  
        VisiableDiv = IsVisible(a);

        if (VisiableDiv.length > 0)
        {
            $("#BlockFilter").show()
            VisiableDiv[0].style.background = "white";
            VisiableDiv[0].style.color = "black"; 
        }      
        if ($("#BlockFilter").height() > 300){
            $("#BlockFilter").height("300px")
        }
        else{
            $("#BlockFilter").height("")
            
            if ($("#BlockFilter").height() > 300){
                $("#BlockFilter").height("300px")
            }
        }
    }
}

//fix
$(document).ready(function(){
    var i = 0 ;
    var Xleft = -1;
    var MaxWidth = 4000
    $("#QuickTour").show()
    if (navigator.userAgent.indexOf("Edge") >= 0 || navigator.userAgent.length === NaN )
    {
        $(".btnShowHidePassword").css("display", "none")
        $("[name='keyword']").css("padding-right","0")
    }
    var lang = navigator.language
    if (lang.indexOf("en") >= 0)
    {
        lang = "en"
        mainHTML.setAttribute("lang", lang)
    }
    else if (lang.indexOf("vi") >= 0)
    {
        lang = "vi"
        mainHTML.setAttribute("lang",lang)
    }
    $("#lang").val(lang)
    SelectLanguage()
    // $("btnShowHidePassword").Edge
    while( Xleft < MaxWidth + 5){
        Xleft = CreateCollunm(Xleft);
        // i++
    }
    //SettingOpen()
//     $(document).on("swiperight",function(){
//     alert("You swiped right!");
//   });
    
   $.get('blockchain/getAllBlockNames', function(data, status) {
       
        if(data.OK) {
            var allBlockNames = data.OK.msg
            // console.log(allBlockNames)
            var blockFilter = document.getElementById('BlockFilter')
            var firstBlockName = blockFilter.firstElementChild
            for (var i in allBlockNames) {
                var clone = firstBlockName.cloneNode(false)
                clone.innerHTML = allBlockNames[i]
                blockFilter.appendChild(clone)
            }
        } 
        else {
            console.log('Cannot get data from servers! Please check your internet connection!')
        }
   })

    // var BackGround = document.getElementById("BackGround").childNodes
    // BackGround[0].innerHTML.split("<br>").length
    // var IncludeText = '0123456789QWERTYUIOPASDFGHJKLZXCVBNM010101';
    // var NumOfCol;
    // window.setInterval(function() {
    //     for(i=0;i < BackGround.length - 1; i++)
    //     {
    //         var InsideText="";
    //         NumOfCol = BackGround[i].innerHTML.split("<br>").length
    //         for (j = 0 ; j < NumOfCol; j ++)
    //         {
    //             InsideText += IncludeText.charAt(Math.floor(Math.random()*IncludeText.length)) + "</br>";
    //         }
    //         NumOfCol = BackGround[i].innerHTML = InsideText
    //     }
    // }, 200);
}); 
//fixed
function DeleteThisHint(element)
{
    var RemoveItem = element.parentNode.parentNode.parentNode;
    var AllHintsBlock = document.getElementById("HintsBlock");
    if (AllHintsBlock.children.length > 1){
        AllHintsBlock.removeChild(RemoveItem)
    }
    UpdateHint()
}
//fixed
function AddNewHintBlock()
{
    var AllHintsBlock = document.getElementById("HintsBlock");
    
    var Item = AllHintsBlock.children[0];
    var CloneItem = Item.cloneNode(true);
    CloneItem.children[2].children[0].value = ""
    AllHintsBlock.appendChild(CloneItem);
    UpdateHint()
}
//fixed
function UpdateHint()
{
    element = document.getElementById("lang")
    var lang = element.value;  
    var Hint = language[lang].Hint;
    var AllHintsBlock = document.getElementById("HintsBlock");

    for (var i = 0; i < AllHintsBlock.children.length; i++)
    {
        var HintBlock = AllHintsBlock.children[i];
        HintBlock.children[1].innerHTML = "<span langkey=\"Hint\">" + Hint + "</span>"+" &#35;" + (i+1) + ":";
    }
}
//fixed
function BackToHome()
{
    $("#NewBlock").hide( function(){
        
        $.get('blockchain/getAllBlockNames', function(data, status) {
            if(data.OK) {
                var allBlockNames = data.OK.msg
                
                var blockFilter = document.getElementById('BlockFilter')
                var firstBlockName = blockFilter.firstElementChild
            
                var l = blockFilter.children.length
                for (var i = 1; i < l; i++)
                {
                    blockFilter.removeChild(blockFilter.children[1])
                }
                for (var i in allBlockNames) {
                    var clone = firstBlockName.cloneNode(false)
                    clone.innerHTML = allBlockNames[i]
                    blockFilter.appendChild(clone)
                }
                $("#MainBlock").show()
            } 
            else {
                $("#MainBlock").show()
                console.log('Cannot get data from servers! Please check your internet connection!')
            }

        })
        $("#MainBlock").show();
    })
}
//fixed
function AddNewBlockOpen()
{
    $("#MainBlock").hide( function(){
        $("#NewBlock").show()
    })
}
//fixed
function selectABlockname(element)
{
    document.getElementById("BlockName").value = element.innerHTML;
    $('#BlockFilter').toggle();
    var choosenBlock = element.innerHTML
    $.post('blockchain/getHintsOfABlock', 
        {
            blockname: choosenBlock
        }, 
        function(data, status)
        {
            
        
        if(data.OK) {
            var hints = data.OK.msg
            var keySector = document.getElementById('keySector')                
            
            
            var firstHintDiv = keySector.firstElementChild
            //firstHintDiv.style.display = ""
            var len = keySector.children.length
            for (var i = 1; i < len; i++)
            {
                keySector.removeChild(keySector.lastChild);
            }
            if (hints.length > 0)
            {
                for(var i = 1; i < hints.length; i++) {
                    var clone = firstHintDiv.cloneNode(true)
                    var Hint = clone.children[1]
                    Hint.innerHTML = "<span>" + hints[i] + "</span>";
                    var Input = clone.children[2].children[1].children[0];
                    Input.value = "";
                    keySector.appendChild(clone)
                }
                firstHintDiv.children[1].innerHTML = "<span>" + hints[0] + "</span>";
                //firstHintDiv.style.display = "none"
            }
            else
            {
                element = document.getElementById("lang")
                var lang = element.value;  
                var KEYWORD = language[lang].keyword;
                firstHintDiv = keySector.firstElementChild
                firstHintDiv.children[1].innerHTML = "<span langkey=\"keyword\">"+KEYWORD + ":</span>";
            }  
            if (document.getElementById("BlockName").value == "defaultblock")
            {
                $("#AddKeyword").show("fast")
            }
            else
            {
                $("#AddKeyword").hide("fast")
            }
        } 
        else
        {
            console.log('Cannot get data from servers! Please check your internet connection!')
        }
    })

}
//Fixed
function AddnewKeyword()
{
    var keySector = document.getElementById('keySector')
    var firstHintDiv = keySector.firstElementChild
    var clone = firstHintDiv.cloneNode(true)     
    clone.children[2].children[0].value = ""     
    clone.children[2].children[0].setAttribute("type", "password")
    clone.children[2].children[1].children[0].setAttribute("src", "views/images/showcontent.png") 
    keySector.appendChild(clone)
    UpdateKeyword()
}

//fixed
function RemoveLastKeyword()
{
    var keySector = document.getElementById('keySector');
    if (keySector.children.length > 1)
    {
        keySector.removeChild(keySector.lastChild)
        
        if (document.getElementById('keySector').children.length > 1)
        {
            UpdateKeyword()
        }
        else
        {       
            element = document.getElementById("lang") 
            var lang = element.value;  
            var KEYWORD = language[lang].keyword;  
            keySector = document.getElementById('keySector')
            keySector.children[0].children[1].innerHTML = "<span langkey=\"keyword\">" + KEYWORD + "</span>:";
           // $("span[langkey='keyword']").text =  KEYWORD 
        }
              
    }
    
}

//keep
function ReForcusthis(element)
{
    
    div = document.getElementById("BlockFilter");
    a = div.getElementsByTagName("div")
    for (var i = 0; i < a.length; i++)
    {
        a[i].style.background = "black";
        a[i].style.color = "white"; 
    }  
    element.style.background = "white";
    element.style.color = "black"; 
}

function emptyAllInput() {
    $("input").val("")
}

//fixed
function generatePassword() {
    var blockname = $("input[name='blockName']").val()
    
    var keyword = []
    $("input[name='keyword']").each(function() {
        keyword.push($(this).val());
    })
    $.post('passgen', {
        blockname: blockname,
        keyword: keyword
    }, function(data, status) {
        
        if(data.OK) {
            var z = data.OK.msg;
            $("#hiddenpassbox").val(z);
            slicePassword();            
            $("#encryptedPassword").attr("type", "text");
            $("#encryptedPassword").select();
            document.execCommand("copy")
            $("#encryptedPassword").attr("type", "password");
            $("#hiddenpassbox").select();

            setTimeout(function () {
                emptyAllInput()
            }, 1000 * 60 * 10)
        } else {
        console.log(data.err.msg)
        }
    })
}
//keep
function slicePassword()
{
    
    if ($("#quantity").val() < 6 || $("#quantity").val() > 32)
    {
        $("#InvalidNoOfChar").show( function(){
            // setTimeout(function(){
            //      $("#InvalidNoOfChar").hide()
            // },5000 )
        })
        
    }
    else{
        $("#InvalidNoOfChar").hide()
        var z = $("#hiddenpassbox").val()
        $("#encryptedPassword").val(z.slice(0,$("#quantity").val()))
        $("#ContentCopy").show();
        $("#encryptedPassword").css("padding-right", "90px");
    }
}
//fixed
function UpdateKeyword()
{    
    element = document.getElementById("lang")
    var lang = element.value;  
    var KEYWORD = language[lang].keyword;       
    var keySector = document.getElementById('keySector').children
    for (var i = 0; i < keySector.length; i++)
    {
        var Z = "<span langkey=\"keyword\">" + KEYWORD + "</span> &#35;" + (i+1) + ":";
        keySector[i].children[1].innerHTML = Z;
    }
}
//keep
function SubmitBlockName()
{
    var blockname = $("input[name='newBlockName']").val()
    var hint = []
    $("input[name='hint']").each(function() {
        hint.push($(this).val())
    })
    
    $.post('blockchain', {
        blockname: blockname,
        hint: hint
    }, function (data, status) {

        if(data.OK) {
            $("#modal").show()
            $("#waiting").hide("fast", function (){
                $("#AddNewlogInfo").slideDown( function(){
                    setTimeout(function() {
                        $("#AddNewlogInfo").hide("fast");
                        $("#waiting").show("fast");
                        $("#modal").hide( function(){
                            BackToHome();
                        })                        
                    }, 5000);
                })
            })
        } else {
            var err = data.err.msg
              $("#submit-newblock-warning").text(err)
              $("#submit-newblock-warning").show(
                  setTimeout(function() {
                    $("#submit-newblock-warning").hide()
                  }, 10000))            
            console.log(err)
    }
       // $("#modal").hide()
    })  

}
//fix
function CopyKeyDown()
{
    $("#ContentCopy").css("color", "red");
    $("#encryptedPassword").attr("type", "text");
    $("#encryptedPassword").select();
    document.execCommand("copy")
    $("#encryptedPassword").attr("type", "password");
    $("#hiddenpassbox").select();
}
//fix
function CopyKeyUp()
{
    $("#ContentCopy").css("color", "white");
    // $("#ContentCopy").hide();
    $("#encryptedPassword").css("padding-right", "50px");
}


//keep
$(document).click(function(event) { 
    if(!$(event.target).closest('#BlockFilter').length) {
        if($(event.target).attr("id") === "ShowFilterBtn"){
            $('#BlockFilter').show();
        }
        else{
            if($('#BlockFilter').is(":visible")) {
                $('#BlockFilter').hide();
            }
        }
    }        
})
//keep
function SelectLanguage()
{
    element = document.getElementById("lang")
    var lang = element.value;
    mainHTML.setAttribute("lang", lang)    
    var LangHash = language[lang];
    for (var key in LangHash)
    {
        if (key.indexOf("val-") === 0)
        {
            $("[langkey='" + key+ "']").val( LangHash[key]);
        }
        else if(key.indexOf("holder-") === 0)
        {
            $("[langkey='" + key+ "']").attr("placeholder",LangHash[key]);
        }  
        else if(key.indexOf("img-") === 0)
        {
            $("[langkey='" + key+ "']").attr("src",LangHash[key]);
        }   
        else if(key.indexOf("html-") === 0)
        {
           
            $("[langkey='" + key+ "']").html(LangHash[key]);
        }          
        else{
            $("[langkey='" + key+ "']").text( LangHash[key]);
        }
    }    
}
//add
function KeywordKeyup(event)
{
    var x = event.which || event.keyCode;
    if (x === 13){
        generatePassword();
    }
}

function Popup(element)
{
    
    var social = $(element).attr("social");
    $("#" + social).show("fast");
     $(element).css("color", "#D1EF30");
    if(social == null) return;
    if (social.indexOf("facebook") >= 0)
    {
        $(element).css("color", "#3B5998");
    }
    else if (social.indexOf("twiter") >= 0)
    {
        $(element).css("color", "#55ACEE");
    }
    else if (social.indexOf("google") >= 0)
    {
        $(element).css("color", "#DD4B39");
    }
}
function Popdown(element)
{
    $(element).animate({top:"0"}, "fast")
    var social = $(element).attr("social");
    $("#" + social).hide("fast");
     $(element).css("color", "#FFFFFF");
}

function SimpleTour()
{
    
     //$("#BlockName").animate({backgroundColor:"#FF0000"}, 500)    
    $("#BlockNameGuide").show()
    BlinkingBlock();
    
}
var BlinkingBlock = function()
{ 
    
    setTimeout(function() {
        $("#BlockName").css("background-color", "#A00000")
        setTimeout(function() {
            $("#BlockName").css("background-color", "#000000")
            if ($("#BlockName").val().length > 0){
                $("#BlockNameGuide").hide();
                $("#KeyWordGuide").show();
                BlinkingKeyWord();
                
            }
            else{
                BlinkingBlock()
            }
        }, 500);
    }, 500);
}
var BlinkingKeyWord = function()
{ 
    setTimeout(function() {
        $("input[name='keyword']").css("background-color", "#00A000")
        setTimeout(function() {
            $("input[name='keyword']").css("background-color", "transparent")
            if ($("input[name='keyword']").val().length > 0){  
                
                $("input[name='keyword']").css("background-color", "transparent")  
                $("#KeyWordGuide").hide();   
                $("#GenBtnGuide").show();
                BlinkingGenButton();
            }
            else{                
                BlinkingKeyWord()
            }
        }, 500);
    }, 500);
}
var BlinkingGenButton = function()
{
    setTimeout(function() {
        $("div[langkey='GenPassword']").css("background-color", "#0000A0")
        setTimeout(function() {
            $("div[langkey='GenPassword']").css("background-color","transparent")
            if ($("#encryptedPassword").val().length > 0){
                $("div[langkey='GenPassword']").css("background-color", "transparent");         
                $("#GenBtnGuide").hide(); 
                $("#CopyBtnGuide").show();      
                BlinkingCopyButton(0)
            }
            else{
                BlinkingGenButton()
            }
        }, 500);
    }, 500);
}

function BlinkingCopyButton ( iteraction)
{
    
    setTimeout(function() {
        $("#ContentCopy").css("background-color", "#FFFFFF")
        setTimeout(function() {
            $("#ContentCopy").css("background-color", "transparent")
            if (iteraction > 5){
                
                $("#ContentCopy").css("background-color", "transparent");                   
                $(".popuptext").show()
                $(".bottompopuptext").show()
                return 1;
            }
            else{
                console.log(iteraction)
                BlinkingCopyButton(++iteraction)
            }
        }, 500);
    }, 500);
}

$(window).scroll(function(){
    if($(window).scrollTop() > 0)
    {
        $("#menu").slideDown(300);
        if (window.innerWidth < 640)
        {
            $("#menu-right").css("background-color", "black")
           
        }
        else
        {
            $("#menu-right").css("background-color", "transparent")
           
        }
    }
    else
    {
         $("#menu").slideUp(300);
    }
} )

// $(document).swiperight(function(){
//     alert("You swiped right!");
// }); 
document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        
var yDown = null;                                                        

function handleTouchStart(evt) {                                         
    xDown = evt.touches[0].clientX;                                      
    yDown = evt.touches[0].clientY;                                      
};                                                

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) && window.innerWidth < 640 ) {/*most significant*/
        if ( xDiff > 0 ) {
           $("#menu-right").css("display", "none") 
           $("#menu-right").css("background", "transparent")
        } else {
            $("#menu-right").css("display", "inline")
            // $("#menu-right").css("left", "-50px")
            $("#menu-right").css("background", "black")
            $("#menu-right").css("opacity", "0.8")
            $("#menu-right").animate("{left:'50px'}", "300")
        }                       
    }                                                                  
   
    /* reset values */
    xDown = null;
    yDown = null;                                             
};

