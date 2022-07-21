const tricks = document.querySelectorAll('.tricks');
for (const trick of tricks) {
  trick.addEventListener('click', function() {
        tricks[0].href = "assets/py/trick_1.rar";
        tricks[0].download = "trick_1.rar";
        tricks[1].href = "assets/py/trick_2.rar";
        tricks[1].download = "trick_2.rar";
        tricks[2].href = "assets/py/trick_3.rar";
        tricks[2].download = "trick_3.rar";
        tricks[3].href = "assets/py/trick_4.rar";
        tricks[3].download = "trick_4.rar";
        tricks[4].href = "assets/py/trick_5.rar";
        tricks[4].download = "trick_5.rar";
        tricks[5].href = "assets/py/trick_6.rar";
        tricks[5].download = "trick_6.rar";
        tricks[6].href = "assets/py/trick_7.rar";
        tricks[6].download = "trick_7.rar";
        tricks[7].href = "assets/py/trick_8.rar";
        tricks[7].download = "trick_8.rar";
        tricks[8].href = "assets/py/trick_9.rar";
        tricks[8].download = "trick_9.rar";
    });
}