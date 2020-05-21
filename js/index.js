let tmp = Number(main.innerHTML);

function onTop() {
  tmp += 1;
  main.innerHTML = tmp;
}

function onDown() {
  tmp -= 1;
  if (tmp <= 0) {
    tmp = 0;
    main.innerHTML = tmp;
  } else {
    main.innerHTML = tmp;
  }
}
