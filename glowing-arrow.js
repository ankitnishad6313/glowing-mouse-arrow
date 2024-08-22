(function ($) {
        $.fn.glowingArrow = function () {
          const element = $(this);

          $(document).on("mousemove", function (e) {
            let x = e.pageX;
            let y = e.pageY;
            element.offset({
              left: x - element.width() / 2,
              top: y - element.height() / 2,
            });
          });

          element.css({
            width: "15px",
            height: "15px",
            borderRadius: "50%",
            backgroundColor: "#fff",
            position: "absolute",
            pointerEvents: "none",
            animation: "glowing 1s ease-in-out infinite alternate",
          });
        };
      })(jQuery);
