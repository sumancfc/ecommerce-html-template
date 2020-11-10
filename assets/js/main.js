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
})(jQuery);
