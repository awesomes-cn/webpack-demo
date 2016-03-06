/*module.exports = function(){
  console.log("I am a module");
}*/

define(function(){
  return {
    add: function(){
      console.log("add success")
    },
    remove: function(){
      console.log("remove success")
    }
  }
})