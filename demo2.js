
   var success = document.getElementById("success")
   var worning = document.getElementById("worning")
   var error = document.getElementById("error")
   var info = document.getElementById("info")
   success.addEventListener("click",function(){
      toastr.success('Have fun storming the castle!', 'Miracle Max Says')
   })
   worning.addEventListener("click",function(){
      toastr.warning('My name is Inigo Montoya. You killed my father, prepare to die!')
   })
   error.addEventListener("click",function(){
    toastr.error('I do not think that word means what you think it means.', 'Inconceivable!')
   })
   info.addEventListener("click",function(){
    toastr.info('Are you the 6 fingered man?')
   })