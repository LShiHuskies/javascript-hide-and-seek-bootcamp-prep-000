//
// function getFirstSelector(selector) {
//   return document.querySelector(selector);
// }
//
// function nestedTarget(){
//   return document.getElementById("nested").querySelector(".target");
// }
// function deepestChild() {
//   var lis = document.getElementById("grand-node").querySelectorAll("div");
//   var test;
//   for (let i = 0; i < lis.length-1; i++) {
//     test = lis[i].querySelector("div");
//   }
//   return test;
// }
// function increaseRankBy(n) {
//   var list = document.getElementById("app").querySelectorAll("ul.ranked-list li");
//   for (let i = 0; i < list.length; i++) {
//     list[i].innerHTML = parseInt(list[i].innerHTML)+n;
//   }
// }

function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('.target');
}

function deepestChild() {
  var lis = document.getElementById('grand-node').querySelectorAll('div')
  var test;
  for (let i = 0; i < lis.length; i++) {
    test = lis[i];
  }
  // return document.querySelector('#grand-node div div div div').innerHTML

  return test;
}


function increaseRankBy(n) {
  var rankedLists = document.querySelectorAll('.ranked-list li')

  for (let i = 0; i < rankedLists.length; i++) {
    rankedLists[i].innerHTML = parseInt(rankedLists[i].innerHTML) + n;
  }

  // for (let i = 0; i < firstList.children; i++) {
  //   firstList.children[i].innerHTML = parseInt(firstList.children[i].innerHTML) + n;
  //
  // }
  //
  //
  // for (let b = 0; b < secondList.children; b++) {
  //     secondList.children[b].innerHTML = parseInt(secondList.children[b].innerHTML) + n;
  // }



}
