let indicatorList = document.getElementsByClassName("carousel-indicators-li");

$(document).ready(function () {
    // NAVBAR click
    for (let item of indicatorList) {
        item.addEventListener("click", () => {
            for (let itemAdd of indicatorList) {
                itemAdd.classList.remove("active")
            }

            item.classList.add("active")
        })
    }

    $(".indicator_title").click(function () {
        $(".carousel-indicators-xs ol").slideToggle();
        $(".indicator_title i").toggleClass("transform-rotate")
    })


    $(".carousel-indicators-xs ol li").click(function () {
        $(".indicator_title span").html($(this).html());
        $(".carousel-indicators-xs ol").slideUp();
    });

    let count = 0

    $(".carousel-control-prev").click(function () {
        $(".carousel-indicators-li").removeClass("active")
        if (count == 0) {
            count = 4
        }
        else {
            count -= 1
        }

        $(".carousel-indicators-li").each(function (index) {
            if (index == count) {
                $(this).addClass("active");
                $(".indicator_title span").html($(this).html())
            }
        })
    })

    $(".carousel-control-next").click(function () {
        $(".carousel-indicators-li").removeClass("active")
        if (count == 4) {
            count = 0
        }
        else {
            count += 1
        }

        $(".carousel-indicators-li").each(function (index) {
            if (index == count) {
                $(this).addClass("active");
                $(".indicator_title span").html($(this).html())
            }
        })
    })


    $("#vehicle_list").mCustomScrollbar({
        theme: 'dark'
    })

    // VEHICLE click scroll
    function move(value) {
        $("#vehicle_list").mCustomScrollbar("scrollTo", value, {
            scrollEasing: 'easeOut',
        })
    }

    $(".vehicle_nav ul li a").click(function () {
        move($(this).attr("href"))
        $(".vehicle_nav ul li a").removeClass("active")
        $(this).addClass("active")
    })

    // anchor highlight when scroll

    $("#vehicle_list .row").on("wheel", vehicleScroll)

    function vehicleScroll() {
        $("#vehicle_list .row .target").each(function () {

            if (($("#vehicle_list .row").offset().top - 173) * -1 >= $(this).position().top - 4500) {

                let id = $(this).attr("id");
                $(".vehicle_nav ul li a").removeClass("active");
                $(".vehicle_nav ul li a[href='#" + id + "']").addClass("active");
            }
        })

    }

    let currentClickId = "";

    $("#header .dropdown").click(function () {
        if (currentClickId === "") {
            $(this).addClass("active");
            currentClickId = $(this).attr("id");

        } else {
            if ($(this).attr("id") === currentClickId) {
                currentClickId = "";
                $(this).removeClass("active");

            } else {
                $("#header .navbar a").removeClass('active')
                currentClickId = $(this).attr("id");
                $(this).addClass("active");
            }
        }

        if ($(this).attr("id") === "vehicle") {
            $("#vehicles").toggleClass("hide-vehicle");
        } else {
            $("#vehicles").addClass("hide-vehicle")

        }
        if ($(this).attr("id") === "shopping") {
            $("#shopping-dropdown").toggleClass("hide-shopping");
        } else {
            $("#shopping-dropdown").addClass("hide-shopping")

        }
    })

    $("#vehicle_close").click(function () {
        $("#vehicles").toggleClass("hide-vehicle");
        $("#header .navbar a").removeClass('active')
    })

})

