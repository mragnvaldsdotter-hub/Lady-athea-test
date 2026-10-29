(function () {
  if ('scrollRestoration' in history) { history.scrollRestoration = 'manual'; }
  if (!window.location.hash) { window.scrollTo(0, 0); }
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('open')) {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });
  }

  var form = document.getElementById('enquiry');
  if (!form) return;
  var params = new URLSearchParams(window.location.search);
  var preset = params.get('leg');
  if (preset) { var sel = form.elements['leg']; if (sel) sel.value = preset; }

  function show(id, bad, field) {
    var err = document.getElementById(id);
    if (err) err.hidden = !bad;
    if (field) field.setAttribute('aria-invalid', bad ? 'true' : 'false');
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var f = form.elements;
    var okName = f['name'].value.trim().length > 0;
    var okEmail = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(f['email'].value.trim());
    var okLeg = f['leg'].value !== '';
    var okConsent = f['consent'].checked;
    show('name-err', !okName, f['name']);
    show('email-err', !okEmail, f['email']);
    show('leg-err', !okLeg, f['leg']);
    show('consent-err', !okConsent, f['consent']);
    if (!(okName && okEmail && okLeg && okConsent)) {
      var first = form.querySelector('[aria-invalid="true"]');
      if (first) first.focus();
      return;
    }
    var host = window.location.hostname;
    if (host === 'sail-athena-the-arc.com' || host === 'www.sail-athena-the-arc.com' || /\.netlify\.app$/.test(host)) {
      HTMLFormElement.prototype.submit.call(form);
      return;
    }
    var legText = f['leg'].options[f['leg'].selectedIndex].text;
    var lines = [
      'Hello Alf,', '',
      'I would like to send a booking request.', '',
      'Name: ' + f['name'].value.trim(),
      'Email: ' + f['email'].value.trim(),
      'Leg: ' + legText,
      'Full leg or part of it: ' + (f['dates'].value.trim() || '-'),
      'Number of people: ' + f['people'].value,
      '', 'My sailing experience:', f['exp'].value.trim() || '-',
      '', 'Questions or wishes:', f['msg'].value.trim() || '-'
    ];
    var subject = 'Booking request: ' + legText;
    var res = document.getElementById('form-result');
    if (res) { res.hidden = false; }
    window.location.href = 'mailto:alf.grell@me.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(lines.join('\n'));
  });
})();