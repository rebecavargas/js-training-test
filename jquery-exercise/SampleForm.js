
/*que tiene un método para manejar cada campo de la forma dada.*/

var SampleForm = function(){
	
}

myForm = new SampleForm();
myForm.setHobbies('Skiing', 'Running')


myForm.setName($('[name="fullname"]').val("Rebeca Vargas"))

myForm.setEmail($('[name="email"]').val("rebecavg@gmail.com"))

myForm.selectGender($('[name="gender"][value="F"]').click())

myForm.selecthobby1($('[name="hobbies[]"][id="hobby1"]').click())
myForm.selecthobby2($('[name="hobbies[]"][id="hobby2"]').click())
