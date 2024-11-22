var typed = new Typed(".role", {
    strings:["Technical Architect..!", "Team Lead..!", "Pega LSA..!", "Project Manager..!", "Fullstack Developer..!"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

var typed = new Typed("#about .loading", {
    strings:["Under Development . . ."],
    typeSpeed:100,
    backSpeed:100,
    backDelay:2000,
    loop:true
});

if(undefined == sessionStorage.backgroundColor){
    setColorIntoSession();
}else{
    setColorFromSession();
}

function setColorIntoSession(){
    const rootStyles = getComputedStyle(document.documentElement);
    sessionStorage.backgroundColor = rootStyles.getPropertyValue('--background').trim();
    sessionStorage.secondaryColor = rootStyles.getPropertyValue('--secondary-color').trim();
    sessionStorage.fontColor = rootStyles.getPropertyValue('--font-color').trim();
}

function setColorFromSession(){
    if(undefined != sessionStorage.backgroundColor && undefined != sessionStorage.secondaryColor && undefined != sessionStorage.fontColor){
        document.documentElement.style.setProperty('--background', sessionStorage.backgroundColor);
        document.documentElement.style.setProperty('--secondary-color',sessionStorage.secondaryColor);
        document.documentElement.style.setProperty('--font-color', sessionStorage.fontColor);
    }
}

$(".color-picker-icon").click(function(){
    setColorIntoSession();
    $("#background-color").val(sessionStorage.backgroundColor);
    $("#secondary-color").val(sessionStorage.secondaryColor);
    $("#font-color").val(sessionStorage.fontColor);
    $(".mask").show();
});

$(".submit-color-change").click(function(){
    document.documentElement.style.setProperty('--background', $("#background-color").val());
    document.documentElement.style.setProperty('--secondary-color',$("#secondary-color").val());
    document.documentElement.style.setProperty('--font-color', $("#font-color").val());
    $(".mask").hide();
    setColorIntoSession();
});

$('.mask').click(function() {
    $(".mask").hide();
});
$('.mask .color-picker').click(function(event) {
    event.stopPropagation();
});

$('.navbar a').click(function(){
    var name = $(this).text();
    $("section").addClass('hidden');
    $("#"+$(this).attr("section")).removeClass('hidden');
})

