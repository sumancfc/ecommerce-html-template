(function ($) {
  "use strict";

  // Sticky Menu
  var header = $(".header__nav-sticky");
  var win = $(window);
  win.on("scroll", function () {
    var scroll = win.scrollTop();
    if (scroll < 200) {
      header.removeClass("stick");
    } else {
      header.addClass("stick");
    }
  });

  // Mobile off canvas
  function headermobileAside() {
    var navbarTrigger = $(".mobile__side-menu"),
      endTrigger = $(".mobile__side-close"),
      container = $(".off__canvas-mobile-active"),
      wrapper = $(".page__wrapper");

    wrapper.prepend('<div class="body__overlay"></div>');

    navbarTrigger.on("click", function (e) {
      e.preventDefault();
      container.addClass("inside");
      wrapper.addClass("overlay__active");
    });

    endTrigger.on("click", function () {
      container.removeClass("inside");
      wrapper.removeClass("overlay__active");
    });

    $(".body__overlay").on("click", function () {
      container.removeClass("inside");
      wrapper.removeClass("overlay__active");
    });
  }
  headermobileAside();

  //Mobile menu
  var $offCanvasNav = $(".mobile__menu-items , .sidebar-menu"),
    $offCanvasNavSubMenu = $offCanvasNav.find(".dropdown");

  //Add Toggle Button With Off Canvas Sub Menu
  $offCanvasNavSubMenu
    .parent()
    .prepend('<span class="menu-expand"><i></i></span>');

  //Close Off Canvas Sub Menu
  $offCanvasNavSubMenu.slideUp();

  //Category Sub Menu Toggle
  $offCanvasNav.on("click", "li a, li .menu-expand", function (e) {
    var $this = $(this);
    if (
      $this
        .parent()
        .attr("class")
        .match(/\b(mobile__menu-item|has-children|has-sub-menu)\b/) &&
      ($this.attr("href") === "#" || $this.hasClass("menu-expand"))
    ) {
      e.preventDefault();
      if ($this.siblings("ul:visible").length) {
        $this.parent("li").removeClass("active");
        $this.siblings("ul").slideUp();
      } else {
        $this.parent("li").addClass("active");
        $this
          .closest("li")
          .siblings("li")
          .removeClass("active")
          .find("li")
          .removeClass("active");
        $this.closest("li").siblings("li").find("ul:visible").slideUp();
        $this.siblings("ul").slideDown();
      }
    }
  });

  // Language currency active
  $(".mobile__language-active").on("click", function (e) {
    e.preventDefault();
    $(".language__dropdown-active").slideToggle(900);
  });
  $(".mobile__currency-active").on("click", function (e) {
    e.preventDefault();
    $(".currency__dropdown-active").slideToggle(900);
  });
  $(".mobile__account-active").on("click", function (e) {
    e.preventDefault();
    $(".account__dropdown-active").slideToggle(900);
  });

  // Search active
  function sidebarSearch() {
    var searchTrigger = $("button.search-active"),
      endTriggersearch = $("button.search-close"),
      container = $(".main-search-active");
    searchTrigger.on("click", function () {
      container.addClass("inside");
    });
    endTriggersearch.on("click", function () {
      container.removeClass("inside");
    });
  }
  sidebarSearch();

  //Header cart
  if ($(".header__cart").length) {
    var $body = $("body"),
      $cartWrap = $(".header__cart"),
      $cartContent = $cartWrap.find(".shopping__cart-content");
    $cartWrap.on("click", ".header__cart-active", function (e) {
      e.preventDefault();
      var $this = $(this);
      if (!$this.parent().hasClass("show")) {
        $this
          .siblings(".shopping__cart-content")
          .addClass("show")
          .parent()
          .addClass("show");
      } else {
        $this
          .siblings(".shopping__cart-content")
          .removeClass("show")
          .parent()
          .removeClass("show");
      }
    });
    // Close When Click Close Button
    $cartWrap.on("click", ".shopping__cart-close", function (e) {
      e.preventDefault();
      var $this = $(this);
      $this
        .closest(".header__cart")
        .removeClass("show")
        .find(".shopping__cart-content")
        .removeClass("show");
    });
    // Close When Click Outside
    $body.on("click", function (e) {
      var $target = e.target;
      if (
        !$($target).is(".header__cart") &&
        !$($target).parents().is(".header__cart") &&
        $cartWrap.hasClass("show")
      ) {
        $cartWrap.removeClass("show");
        $cartContent.removeClass("show");
      }
    });
  }

  // Top header
  if ($(".header__top-right").length) {
    var $body2 = $("body"),
      $elizaDropdown2 = $(".header__top-right"),
      $elizaDropdownMenu2 = $elizaDropdown2.find(".setting-content");
    $elizaDropdown2.on("click", ".setting-active", function (e) {
      e.preventDefault();
      var $this = $(this);
      if (!$this.parent().hasClass("show")) {
        $this
          .siblings(".setting-content")
          .addClass("show")
          .slideDown()
          .parent()
          .addClass("show");
      } else {
        $this
          .siblings(".setting-content")
          .removeClass("show")
          .slideUp()
          .parent()
          .removeClass("show");
      }
    });
    /*Close When Click Outside*/
    $body2.on("click", function (e) {
      var $target = e.target;
      if (
        !$($target).is(".header__top-right") &&
        !$($target).parents().is(".header__top-right") &&
        $elizaDropdown2.hasClass("show")
      ) {
        $elizaDropdown2.removeClass("show");
        $elizaDropdownMenu2.removeClass("show").slideUp();
      }
    });
  }

  // Cart search
  $(".currency__dropdown-active").on("click", function (e) {
    e.preventDefault();
    $(this).parent().find(".currency__dropdown").slideToggle("medium");
  });

  // Category menu toggle
  $(".header__menu-category-show").on("click", function (e) {
    e.preventDefault();
    $(".nav__category-hide").slideToggle(900);
  });

  //Sidemenu Dropdown
  function sidemenuDropdown() {
    var $this = $(".mobile-nav__category-menu");
    $this.find("nav .mobile__category-dd").find("ul").slideUp();
    $this
      .find("nav li.mobile__category-dd > a, nav li.category__sub-dd > a")
      .on("click", function (e) {
        e.preventDefault();
        $(this).next().slideToggle();
      });
  }
  sidemenuDropdown();

  // Slider active
  $(".slider__area-active").owlCarousel({
    loop: true,
    nav: true,
    autoplay: false,
    autoplayTimeout: 5000,
    navText: [
      '<i class="la la-angle-up"></i>',
      '<i class="la la-angle-down"></i>',
    ],
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    dotsData: true,
    item: 1,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  // Product slider active
  $(".product__slider").owlCarousel({
    loop: true,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    item: 4,
    margin: 30,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  });

  // Modal view slider
  $(".quickview__slide").owlCarousel({
    loop: true,
    navText: [
      "<i class='la la-angle-left'></i>",
      "<i class='la la-angle-right'></i>",
    ],
    margin: 15,
    smartSpeed: 1000,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 3,
        autoplay: true,
        smartSpeed: 300,
      },
      576: {
        items: 3,
      },
      768: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  });

  $(".quickview__slide a").on("click", function () {
    $(".quickview__slide a").removeClass("active");
  });

  // Cart + -
  var CartPlusMinus = $(".cart__plus-minus");
  CartPlusMinus.prepend('<div class="dec qtybutton">-</div>');
  CartPlusMinus.append('<div class="inc qtybutton">+</div>');
  $(".qtybutton").on("click", function () {
    var $button = $(this);
    var oldValue = $button.parent().find("input").val();
    if ($button.text() === "+") {
      var newVal = parseFloat(oldValue) + 1;
    } else {
      // Don't allow decrementing below zero
      if (oldValue > 0) {
        var newVal = parseFloat(oldValue) - 1;
      } else {
        newVal = 1;
      }
    }
    $button.parent().find("input").val(newVal);
  });

  //Price range
  var sliderrange = $("#slider__range");
  var amountprice = $("#amount");
  $(function () {
    sliderrange.slider({
      range: true,
      min: 0,
      max: 1200,
      values: [0, 800],
      slide: function (event, ui) {
        amountprice.val("$" + ui.values[0] + " - $" + ui.values[1]);
      },
    });
    amountprice.val(
      "$" +
        sliderrange.slider("values", 0) +
        " - $" +
        sliderrange.slider("values", 1)
    );
  });

  //checkout toggle
  $(".customer__checkout").on("click", function (e) {
    e.preventDefault();
    $(".checkout__login-info").slideToggle(900);
  });

  $(".coupon__click").on("click", function (e) {
    e.preventDefault();
    $(".coupon__area").slideToggle(1000);
  });

  $(".checkout__toggle-1").on("click", function () {
    $(".toggle__open").slideToggle(1000);
  });

  $(".checkout__toggle").on("click", function () {
    $(".open__toggle").slideToggle(1000);
  });

  var checked = $(".payment__single input:checked");
  if (checked) {
    $(checked).siblings(".payment__box").slideDown(900);
  }
  $(".payment__single input").on("change", function () {
    $(".payment__box").slideUp(900);
    $(this).siblings(".payment__box").slideToggle(900);
  });
})(jQuery);
