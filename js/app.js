function fn() {
  document.getElementById('preloader') &&
    setTimeout(() => {
      (document.getElementById('preloader').style.visibility = 'hidden'),
        (document.getElementById('preloader').style.opacity = '0');
    }, 350),
    activateMenu();
}
function toggleMenu() {
  document.getElementById('isToggle').classList.toggle('open');
  var e = document.getElementById('navigation');
  'block' === e.style.display
    ? (e.style.display = 'none')
    : (e.style.display = 'block');
}
function getClosest(e, t) {
  for (
    Element.prototype.matches ||
    (Element.prototype.matches =
      Element.prototype.matchesSelector ||
      Element.prototype.mozMatchesSelector ||
      Element.prototype.msMatchesSelector ||
      Element.prototype.oMatchesSelector ||
      Element.prototype.webkitMatchesSelector ||
      function (e) {
        for (
          var t = (this.document || this.ownerDocument).querySelectorAll(e),
            n = t.length;
          --n >= 0 && t.item(n) !== this;

        );
        return n > -1;
      });
    e && e !== document;
    e = e.parentNode
  )
    if (e.matches(t)) return e;
  return null;
}
function activateMenu() {
  var e = document.getElementsByClassName('sub-menu-item');
  if (e) {
    for (var t = null, n = 0; n < e.length; n++)
      e[n].href === window.location.href && (t = e[n]);
    if (t) {
      t.classList.add('active');
      var o,
        a = getClosest(t, 'li');
      if (
        (a && a.classList.add('active'),
        (o = getClosest(a, '.child-menu-item')) && o.classList.add('active'),
        (o = getClosest(o || a, '.parent-menu-item')))
      ) {
        o.classList.add('active');
        var l = o.querySelector('.menu-item');
        l && l.classList.add('active'),
          (r = getClosest(o, '.parent-parent-menu-item')) &&
            r.classList.add('active');
      } else {
        var r;
        (r = getClosest(t, '.parent-parent-menu-item')) &&
          r.classList.add('active');
      }
    }
  }
}
if (
  (window.addEventListener('load', fn, !1),
  document.getElementById('navigation'))
)
  for (
    var elements = document
        .getElementById('navigation')
        .getElementsByTagName('a'),
      i = 0,
      len = elements.length;
    i < len;
    i++
  )
    elements[i].onclick = function (e) {
      'javascript:void(0)' === e.target.getAttribute('href') &&
        e.target.nextElementSibling.nextElementSibling.classList.toggle('open');
    };
function windowScroll() {
  const e = document.getElementById('topnav');
  null != e &&
    (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50
      ? e.classList.add('nav-sticky')
      : e.classList.remove('nav-sticky'));
}
function scrollFunction() {
  var e = document.getElementById('back-to-top');
  null != e &&
    (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500
      ? (e.classList.add('block'), e.classList.remove('hidden'))
      : (e.classList.add('hidden'), e.classList.remove('block')));
}
function topFunction() {
  (document.body.scrollTop = 0), (document.documentElement.scrollTop = 0);
}
window.addEventListener('scroll', (e) => {
  e.preventDefault(), windowScroll();
}),
  (window.onscroll = function () {
    scrollFunction();
  }),
  (function () {
    var e = location.pathname.substring(location.pathname.lastIndexOf('/') + 1);
    if ('' !== e)
      for (
        var t = document.querySelectorAll('.sidebar-nav a'),
          n = 0,
          o = t.length;
        n < o;
        n++
      )
        -1 !== t[n].getAttribute('href').indexOf(e) &&
          (t[n].parentElement.className += ' active');
  })(),
  feather.replace();
try {
  var spy = new Gumshoe('#navmenu-nav a');
} catch (e) {}
try {
  new WOW().init();
} catch (e) {}
try {
  function validateForm() {
    var e = document.forms.myForm.name.value,
      t = document.forms.myForm.email.value,
      n = document.forms.myForm.subject.value,
      o = document.forms.myForm.comments.value;
    if (
      ((document.getElementById('error-msg').style.opacity = 0),
      (document.getElementById('error-msg').innerHTML = ''),
      '' == e || null == e)
    )
      return (
        (document.getElementById('error-msg').innerHTML =
          "<div class='alert alert-warning error_message'>*Please enter a Name*</div>"),
        fadeIn(),
        !1
      );
    if ('' == t || null == t)
      return (
        (document.getElementById('error-msg').innerHTML =
          "<div class='alert alert-warning error_message'>*Please enter a Email*</div>"),
        fadeIn(),
        !1
      );
    if ('' == n || null == n)
      return (
        (document.getElementById('error-msg').innerHTML =
          "<div class='alert alert-warning error_message'>*Please enter a Subject*</div>"),
        fadeIn(),
        !1
      );
    if ('' == o || null == o)
      return (
        (document.getElementById('error-msg').innerHTML =
          "<div class='alert alert-warning error_message'>*Please enter a Comments*</div>"),
        fadeIn(),
        !1
      );
    var a = new XMLHttpRequest();
    return (
      (a.onreadystatechange = function () {
        4 == this.readyState &&
          200 == this.status &&
          ((document.getElementById('simple-msg').innerHTML =
            this.responseText),
          (document.forms.myForm.name.value = ''),
          (document.forms.myForm.email.value = ''),
          (document.forms.myForm.subject.value = ''),
          (document.forms.myForm.comments.value = ''));
      }),
      a.open('POST', 'php/contact.php', !0),
      a.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'),
      a.send('name=' + e + '&email=' + t + '&subject=' + n + '&comments=' + o),
      !1
    );
  }
  function fadeIn() {
    var e = document.getElementById('error-msg'),
      t = 0,
      n = setInterval(function () {
        t < 1 ? ((t += 0.5), (e.style.opacity = t)) : clearInterval(n);
      }, 200);
  }
} catch (e) {}
try {
  function changeTheme(e) {
    e.preventDefault();
    const t = document.getElementsByTagName('html')[0];
    t.className.includes('dark')
      ? (t.className = 'light')
      : (t.className = 'dark');
  }
  document.getElementById('theme-mode')?.addEventListener('click', changeTheme);
  document.getElementById('chk').addEventListener('change', changeTheme);
} catch (e) {}
try {
  const e = document.getElementsByTagName('html')[0];
  function changeLayout(t) {
    t.preventDefault();
    'LTR' === document.getElementById('switchRtl').innerText
      ? (e.dir = 'ltr')
      : (e.dir = 'rtl');
  }
  document.getElementById('switchRtl')?.addEventListener('click', changeLayout);
} catch (e) {}
