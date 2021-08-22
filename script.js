function calctextwidth(text) {
        var textwidth = 0 ;
        var textwidthelt = document.createElement("div");
        textwidthelt.className = 'calctextwidth';
        textwidthelt.innerHTML = text ;
        document.body.appendChild(textwidthelt);
        textwidth = textwidthelt.offsetWidth ;
        textwidthelt.remove();
  console.log(textwidth)
  return textwidth ;
}

function fakemail() {
  var fakemailchars = "0123456789abcdefghijklmnopqrstuvwxyz";
            var fakemailname = "";
            for (var i = 0; i < 16; i++) {
                var fakemailrandomNumber = Math.floor(Math.random() * fakemailchars.length);
                fakemailname += fakemailchars.substring(fakemailrandomNumber, fakemailrandomNumber + 1);
            }
  
  var fakemailchars2 = "abcdefghijklmnopqrstuvwxyz";
            var fakemaildomain = "";
            for (var i = 0; i < 5; i++) {
                var fakemailrandomNumber2 = Math.floor(Math.random() * fakemailchars2.length);
                fakemaildomain += fakemailchars2.substring(fakemailrandomNumber2, fakemailrandomNumber2 + 1);
            }
  var fakemailchars3 = ['com','net','org','fr','mx','co','info','uk','in','io','me','app','ca','online','co','nz','biz','dev','site','tech','pro','club','cc','live','global','space','xyz','design','one','bio','cloud','mobi','pw'] ;
  var fakemaildomain2 = fakemailchars3[Math.floor(Math.random() * fakemailchars3.length)]
  return fakemailname + '@' + fakemaildomain + '.' + fakemaildomain2;
}
function newfakemail() {
  var fakemail_a = fakemail()
  document.querySelector('#fakemail').value = fakemail_a ;
  document.querySelector('#fakemail').setAttribute('style','--text-length:' + calctextwidth(fakemail_a));
}
function copyfakemail() {
    var copyText = document.querySelector('#fakemail');
        copyText.select();
        document.execCommand("Copy");
}
document.querySelector('#newfakemail').addEventListener('click',newfakemail);
document.querySelector('#copyfakemail').addEventListener('click',copyfakemail);

newfakemail()