var conceptList = ["gists", "types", "operators", "iteration", "problem solving"];

var joinList = function (list)  {
  var newString = conceptList.join(", ")
  return newString;
}
 // a custom function written by you (you must define it too!)

var concepts = joinList(conceptList);

console.log("Today I learned about " + concepts + ".");