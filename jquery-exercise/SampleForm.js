
/*que tiene un método para manejar cada campo de la forma dada.*/
var SampleForm = function(){



	this.hobbies = {
		'hobby1': 'ski',
		'hobby2': 'run',
		'hobby3': 'eat',
		'hobby4': 'sleep',
		'hobby5': 'read',
		'hobby6': 'code'


	};
};


	SampleForm.prototype.SetName = function(value){
		var name = $('[name="fullname"][data-parsley-id="4"]');
		name.val(value);
	};
	SampleForm.prototype.SetEmail = function(value)
	{
		var email = $('[name="email"]');
		email.val(value);
	}
	SampleForm.prototype.SelectGender = function(value)
	{
		var gender = $('[name="gender"][value="F"]').click();
	}
	SampleForm.prototype.SelectHobbie = function(hobbie)
	{

		$('[name="hobbies[]"][id="' + this.hobbies[hobbie] + '"]').click();
		$('[name="hobbies[]"][id="' + this.hobbies[hobbie] + '" ]').click();

	}








/*
// myForm = new SampleForm();
// myForm.setHobbies('Skiing', 'Running')


// myForm.setName($('[name="fullname"]').val("Rebeca Vargas"))

// myForm.setEmail($('[name="email"]').val("rebecavg@gmail.com"))

// myForm.selectGender($('[name="gender"][value="F"]').click())

// myForm.selecthobby1($('[name="hobbies[]"][id="hobby1"]').click())
// myForm.selecthobby2($('[name="hobbies[]"][id="hobby2"]').click())


*/
