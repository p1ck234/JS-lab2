function hello()
{
	alert("Добро пожаловать!")
}
function shutwindow()
{
	if(confirm("Вы действительно хотите покинуть страницу?"))
	{
		window.close();
	}
}
function korni()
{
 var a=document.getElementById('a').value;/*объявление и инициализация переменной*/
 var b=document.sqr.b.value;
 var c=document.getElementsByName('c')[0].value;
 var d=Math.pow(b,2)-4*a*c; /*дискрименант*/
 x1=(-b-Math.sqrt(d))/(2*a); x2=(-b+Math.sqrt(d))/(2*a);
 if (d<0) 
 {
	 alert("Корней нет")/*Результат выводится через диалоговое окно*/
 }
 else if (d==0) 
 {
	 alert("X="+x1)
 }
 else 
 {
	 alert("x1="+x1+ " "+"x2="+x2);
 }
}
  // переменная, в которой хранится выбранное математическое действие
  var op; 

  // функция расчёта
  function func() {
  	// переменная для результата
    var result;
    // получаем первое и второе число
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    // смотрим, что было в переменной с действием, и действуем исходя из этого
    switch (op) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
    }
    document.getElementById("result").innerHTML = result;
  }
