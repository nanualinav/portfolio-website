var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

function MenuCtrl($) {
    var self = this;

    self.items = $('#menu li');
    self.ACTIVE_CLASS = 'is-active';

    self.items.click(function(event) {
        event.preventDefault();
        self.items
            .removeClass(self.ACTIVE_CLASS)
            .filter($(this))
            .addClass(self.ACTIVE_CLASS);
    });

    self.items.filter('.is-default').click();
    ('.nav-item a').addClass("active");
}

jQuery(document).ready(MenuCtrl);