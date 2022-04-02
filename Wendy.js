//1. Show the current date information when a user visits your website.

alert(Date())


// 2. Create an image, when the mouse moves over the image, the image changes.

function a(){
	document.getElementById('a').src='https://www.clipartkey.com/mpngs/m/40-409190_effect-letters-alphabet-gold-letter-a-in-gold.png'
}

//3. Create a paragraph, when it's clicked, change the content.

function b(){
	var html = document.getElementById('b');
	html.innerHTML = 'helloooooooooooo';
}

//4. Press any key on the web page to see an alert box.

//solution 1
function c(){
	alert('hello')
}

//solution 2

function qs(){
	alert('hi')
}

/*5. Create a function to make three changes at the same time to the paragraph:       
        A. add a background color    
		B. change the font family to "Arial".  
		C. make the text in the center of the screen.*/

function d(){
	var css = document.getElementById('d').style;
	css.backgroundColor = 'yellow';
	css.fontFamily = 'Arial';
	css.textAlign = 'center';
}

//6. Create a function to show the conversion result from 20 degrees Fahrenheit to Celsius using a <h1>.

function sss(f){
	return (f - 32) * 5/9;	
}
function e(){
	var select = document.getElementById('e');
	select.innerHTML = sss(20);
}


//7. Create a function to simulate the calculator, which takes two input and output the sum result (+) on the webpage.

function f(){
	var fe = parseFloat(prompt('Number 1: '));
	var ef = parseFloat(prompt('Number 2: '));
	document.getElementById('f').innerHTML = fe + ef;
}

//8.Create a function that takes 2 inputs (First Name & Last Name), output "Nice to meet you First Name Last Name".

function g(){
	var ll = prompt('First Name: ');
	var mm = prompt('Last Name: ');
	document.getElementById('g').innerHTML = 'Nice to meet you ' + ll + mm;
}



