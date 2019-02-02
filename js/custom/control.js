//Modal Detail Initializations
var laundrywash = [
    {
        tag: 'Overview',
        details: 'Laundry Wash is a website template that I made purely with custom made 2D vector logos, icons and images using Adobe Illustrator. The template is static, modern and stylish. It has a clean and functional design suited for small laundry businesses.'
    },
    {
        tag: 'Pricing',
        details: 'This section is the pricing section, this is where customers purchase laundry promos and see a more detailed pricing of clothes,garments,etc. They are presented a complete list of laundry services per item.'
    },
    {
        tag: 'Gallery',
        details: 'This section displays pictures of the business. The purpose of this is to display what the laundry business is like as well as its products that are used to promote and attract potential customers.  '
    },
    {
        tag: 'Contact',
        details: 'This section has the usual information like the email, location, contact number and other relevant information. Either customers or visitors can send a message to contact the management directly.'
    }
];
var sweetsunny = [
    {
        tag: 'Overview',
        details: 'Sweet Sunny is a website I made for my friend that is starting a leche flan business. This is to promote their business and products to potential customers. This website is static and has a fancy, stylish design that is suited for a sweets selling business.'
    },
    {
        tag: 'Products',
        details: 'This section displays the new products of the business to attract new customers. They can see more by clicking view all and be directed to a new page that displays a complete list of products. '
    },
    {
        tag: 'Contact',
        details: 'This section has the usual information like the business email, location, contact number and other relevant information. Either customers or visitors can send a message to contact the management directly.'
    },
];
var genesis = [
    {
        tag: 'Overview',
        details: 'GENESIS: 2D Evolution Game is my thesis project when I was in 4th year college. This intends to increase the knowledge of players by means of a game. The players are able to familiarize themselves with the evolution of human based on the book of Richard Dawkins Ancestors Tale.',
    },
    {
        tag: 'In Game',
        details: "This is what the game looks like. I've made all the visual assets using Adobe Illustrator to attain a 2D vibe that is soothing to the eyes especially for young players.",
    },
    {
        tag: 'Levels',
        details: "The game has six levels in which the player must try his/her best in surviving. If the player fails to complete a level, he/she can retry until the level is completed. The character then evolves into a new and stronger organism that has a greater chance of survival on the next level.",
    },
    {
        tag: 'Story',
        details: "The game comes with a story. Everytime the player starts a level, a slideshow of images and texts are displayed and the player must read them before entering the game. This way the game becomes educational and the players are having fun while learning.",
    },
    {
        tag: 'Objectives',
        details: "In each level the player is given objectives to complete. If the player completes the objectives within the time limit, he/she can proceed to the next level. ",
    },
    {
        tag: "Evolutions",
        details: "Here is a visual representation of all the evolutions in the game. The player can only evolve if he/she finished the level.",
    },
];
var dms = [
    {
        tag: "Overview",
        details: "Document Management System is an offline system that manages all the letters outgoing and ingoing the Office. The system helps track records while it is still under assessment. Searching letters is also made faster because we have implemented a search function that searches for the keyword immediately in the database.",
    },
    {
        tag: "Director Account",
        details: "The director account is the end point of all letter requests coming from the office sections. Thus, he/she can also track all the letters undergoing process. The director can also manage the employees and assign them in a designated sections.",
    },
    {
        tag: "Records Account",
        details: "The records account is where all the letter requests are assessed first before it reaches the director. He/she can also track all the letters undergoing process. ",
    },
    {
        tag: "Section Account",
        details: "This account is assigned to every section in the office. They can receive letter requests and can also create letters and send to other sections or offices.",
    },
];
var humbleshop = [
    {
        tag: "Overview",
        details: "Humble Shop is a project I made when I was studying object-oriented programming of PHP and was the first ecommerce website I made. It has similar functions to ecommerce websites like lazada that has a cart, check-out, order history and membership functions. ",
    },
    {
        tag: "Cart",
        details: "The Cart is where the customer can view all the items he/she added to the cart list. The customer can see the total amount of all the items in the cart and edit or delete an item in the list.",
    },
    {
        tag: "Checkout",
        details: "This is the transactions page. This is where the customer chooses a payment method to pay for all the items in the cart. The customer can choose to pay via cash on delivery or Paypal. ",
    },
    {
        tag: "Orders",
        details: "This is where the customer can see all of his/her orders and  check the time and date of its arrival. ",
    },
];
var tribute = [
    {
        tag: "Overview",
        details: "This is a tribute page I made for the Fifteen Martyrs of Bicol. This project is from Free Code Camp and is hosted in Codepen. I decided not to use any CSS framework, but instead I used a javascript library called fancybox. ",
    },
    {
        tag: "Content",
        details: "This project contains details of the Fifteen Martyrs of Bicol and their legacy as well as a gallery of their faces on the monument in Naga City",
    },
];
(function ($) {
    "use strict"; // Start of use strict
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 56)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });
})(jQuery); // End of use strict
// Add scrollspy to <body>
$('body').scrollspy({
    target: "nav",
    offset: 57
});
//WoW Js for Animate CSS
new WOW().init();
//Smooth Scrolling
$('.slide-in').click(function (e) {
    e.preventDefault();
});
$('.slide-in').on('click', function () {
    $('.fade-in').toggleClass('show');
});
//Show Preloader while loading
$(window).on('load', function () {
    $(".preloader").css("top", "100%");
    $("#home-bg h1:nth-of-type(1)").addClass("bounceInDown");
    $("#home-bg h1:nth-of-type(2)").addClass("fadeInDown");
    $("body").removeClass("loading");
});
//Start off Document Ready
$(document).ready(function () {
    var scroll_start = 0;
    var scroll_height = $("#home").height() - $("nav").outerHeight();
    //Navbar Actions
    $(document).scroll(function () {
        scroll_start = $(this).scrollTop();
        if (scroll_start > scroll_height) {
            $("#home nav").css({ "top": "0", "background": "white", "box-shadow": "0 1px 8px 3px rgba(0, 0, 0, 0.2)", "position": "fixed" });
            $(".nav-link").addClass("link-anim");
        }
        else {
            $("#home nav").css({ "top": "0", "background": "transparent", "box-shadow": "none", "position": "absolute" });
            $(".nav-link").removeClass("link-anim");
        }
    });
    $("body").addClass("loading");
    //Carousel Controls
    $(".carousel-control-prev").click(function () {
        findActive(-1);
    })
    $(".carousel-control-next").click(function () {
        findActive(1);
    })
    $('#portfolioModal').on('hidden.bs.modal', function (e) {
        $(".carousel-indicators li").removeClass("active");
        $(".carousel-indicators li:eq(0)").addClass("active");
    })
    // Start Modal content processing
    $(".btn-modal").click(function () {
        $("#portfolioModal").modal();
        $(".carousel").css("display", "none");
        var visitbtn = $(".visit-btn");
        visitbtn.show();
        var index = $(this).closest(".portfolio-card").index() + 1;
        var count = $(".carousel:nth-child(" + (index + 1) + ") .carousel-item").length;
        $(".carousel").eq(index - 1).css("display", "block");
        $("#temp").val(index);
        $("#temp1").val(count);
        switch (index) {
            case 1:
                visitbtn.attr("href", "https://redenoriola.github.io/laundryawesome/");
                break;
            case 2:
                visitbtn.attr("href", "https://redenoriola.github.io/sweetsunny/");
                break;
            case 3:
                visitbtn.hide();
                break;
            case 4:
                visitbtn.hide();
                break;
            case 5:
                visitbtn.hide();
                break;
            case 6:
                visitbtn.attr("href", "https://codepen.io/redenoriola/full/pGJKKx");
                break;
        }
        findActive(0);
    });
    // CONTACT FORM
    $('#contact-form').submit(function (e) {
        e.preventDefault();
        $.ajax({
            method: 'POST',
            url: 'https://formspree.io/unblock/reden.oriola@gmail.com',
            data: $('#contact-form').serialize(),
            datatype: 'json',
            success: function () {
                $('#success').css({ "display": "block", "height": "auto" });
                $('#contact-form').find("input[type=text], input[type=email], textarea").val("");
            }
        });
    });
    $("#close-success-alert").click(function (e) {
        $('#success').css({ "display": "none", "height": "0" });
    });
});
//Finding active image in modal
function findActive(x) {
    var active_id, index, max;
    index = $("#temp").val();
    max = $("#temp1").val();
    if (x == 0) {
        active_id = 0;
    }
    else {
        $(".carousel:nth-of-type(" + index + ") .carousel-item").each(function () {
            if ($(this).hasClass('active')) {
                var temp = 1 * x;
                active_id = $(this).index() + temp;
                if (temp == -1 && active_id == -1) {
                    active_id = max - 1;
                }
                else if (temp == 1 && active_id == max) {
                    active_id = 0;
                }
            }
        });
    }
    //Display Modal details
    switch (index) {
        case "1":
            $(".modal-details .project-title").html("Laundry Wash");
            $(".modal-details .project-tag").html(laundrywash[active_id].tag);
            $(".modal-details .project-details").html(laundrywash[active_id].details);
            break;
        case "2":
            $(".modal-details .project-title").html("Sweet Sunny");
            $(".modal-details .project-tag").html(sweetsunny[active_id].tag);
            $(".modal-details .project-details").html(sweetsunny[active_id].details);
            break;
        case "3":
            $(".modal-details .project-title").html("Genesis: 2D Evolution Game");
            $(".modal-details .project-tag").html(genesis[active_id].tag);
            $(".modal-details .project-details").html(genesis[active_id].details);
            break;
        case "4":
            $(".modal-details .project-title").html("Document Management System");
            $(".modal-details .project-tag").html(dms[active_id].tag);
            $(".modal-details .project-details").html(dms[active_id].details);
            break;
        case "5":
            $(".modal-details .project-title").html("Humble Shop");
            $(".modal-details .project-tag").html(humbleshop[active_id].tag);
            $(".modal-details .project-details").html(humbleshop[active_id].details);
            break;
        case "6":
            $(".modal-details .project-title").html("Fifteen Martyrs of Bicol Tribute Page");
            $(".modal-details .project-tag").html(tribute[active_id].tag);
            $(".modal-details .project-details").html(tribute[active_id].details);
            break;
    }
}
//Jquery Easing
(function (factory) { if (typeof define === "function" && define.amd) { define(["jquery"], function ($) { return factory($) }) } else if (typeof module === "object" && typeof module.exports === "object") { exports = factory(require("jquery")) } else { factory(jQuery) } })(function ($) { $.easing.jswing = $.easing.swing; var pow = Math.pow, sqrt = Math.sqrt, sin = Math.sin, cos = Math.cos, PI = Math.PI, c1 = 1.70158, c2 = c1 * 1.525, c3 = c1 + 1, c4 = 2 * PI / 3, c5 = 2 * PI / 4.5; function bounceOut(x) { var n1 = 7.5625, d1 = 2.75; if (x < 1 / d1) { return n1 * x * x } else if (x < 2 / d1) { return n1 * (x -= 1.5 / d1) * x + .75 } else if (x < 2.5 / d1) { return n1 * (x -= 2.25 / d1) * x + .9375 } else { return n1 * (x -= 2.625 / d1) * x + .984375 } } $.extend($.easing, { def: "easeOutQuad", swing: function (x) { return $.easing[$.easing.def](x) }, easeInQuad: function (x) { return x * x }, easeOutQuad: function (x) { return 1 - (1 - x) * (1 - x) }, easeInOutQuad: function (x) { return x < .5 ? 2 * x * x : 1 - pow(-2 * x + 2, 2) / 2 }, easeInCubic: function (x) { return x * x * x }, easeOutCubic: function (x) { return 1 - pow(1 - x, 3) }, easeInOutCubic: function (x) { return x < .5 ? 4 * x * x * x : 1 - pow(-2 * x + 2, 3) / 2 }, easeInQuart: function (x) { return x * x * x * x }, easeOutQuart: function (x) { return 1 - pow(1 - x, 4) }, easeInOutQuart: function (x) { return x < .5 ? 8 * x * x * x * x : 1 - pow(-2 * x + 2, 4) / 2 }, easeInQuint: function (x) { return x * x * x * x * x }, easeOutQuint: function (x) { return 1 - pow(1 - x, 5) }, easeInOutQuint: function (x) { return x < .5 ? 16 * x * x * x * x * x : 1 - pow(-2 * x + 2, 5) / 2 }, easeInSine: function (x) { return 1 - cos(x * PI / 2) }, easeOutSine: function (x) { return sin(x * PI / 2) }, easeInOutSine: function (x) { return -(cos(PI * x) - 1) / 2 }, easeInExpo: function (x) { return x === 0 ? 0 : pow(2, 10 * x - 10) }, easeOutExpo: function (x) { return x === 1 ? 1 : 1 - pow(2, -10 * x) }, easeInOutExpo: function (x) { return x === 0 ? 0 : x === 1 ? 1 : x < .5 ? pow(2, 20 * x - 10) / 2 : (2 - pow(2, -20 * x + 10)) / 2 }, easeInCirc: function (x) { return 1 - sqrt(1 - pow(x, 2)) }, easeOutCirc: function (x) { return sqrt(1 - pow(x - 1, 2)) }, easeInOutCirc: function (x) { return x < .5 ? (1 - sqrt(1 - pow(2 * x, 2))) / 2 : (sqrt(1 - pow(-2 * x + 2, 2)) + 1) / 2 }, easeInElastic: function (x) { return x === 0 ? 0 : x === 1 ? 1 : -pow(2, 10 * x - 10) * sin((x * 10 - 10.75) * c4) }, easeOutElastic: function (x) { return x === 0 ? 0 : x === 1 ? 1 : pow(2, -10 * x) * sin((x * 10 - .75) * c4) + 1 }, easeInOutElastic: function (x) { return x === 0 ? 0 : x === 1 ? 1 : x < .5 ? -(pow(2, 20 * x - 10) * sin((20 * x - 11.125) * c5)) / 2 : pow(2, -20 * x + 10) * sin((20 * x - 11.125) * c5) / 2 + 1 }, easeInBack: function (x) { return c3 * x * x * x - c1 * x * x }, easeOutBack: function (x) { return 1 + c3 * pow(x - 1, 3) + c1 * pow(x - 1, 2) }, easeInOutBack: function (x) { return x < .5 ? pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2) / 2 : (pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2 }, easeInBounce: function (x) { return 1 - bounceOut(1 - x) }, easeOutBounce: bounceOut, easeInOutBounce: function (x) { return x < .5 ? (1 - bounceOut(1 - 2 * x)) / 2 : (1 + bounceOut(2 * x - 1)) / 2 } }) });
