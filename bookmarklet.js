(function() {
    document.querySelectorAll(".bug-tag").forEach(function(t) {
        t.style.opacity = [ 1, 0 ][t.style.opacity.length ? t.style.opacity : 1];
    });
})();
