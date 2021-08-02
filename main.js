console.log('Hello World!');


document.getElementById('convert').addEventListener('click',() => {
  
  
  var uFrom = document.getElementById('UNIT-from');
  var uTo = document.getElementById('UNIT-to');
  var input = document.getElementById('Input-from').value;
  var result = document.getElementById('result');
  
  
  /*FOR KILOMETER*/
  if(uFrom.value == "Kilometer" && uTo.value == "Meter"){
    result.innerHTML = input*1000 + 'm';
  }else if(uFrom.value == "Kilometer" && uTo.value == "Centimeter"){
    result.innerHTML = input*100000 + 'cm';
  }else if(uFrom.value == "Kilometer" && uTo.value == "Yard"){
    result.innerHTML = input*1093.61 + 'yard';
  }else if(uFrom.value == "Kilometer" && uTo.value == "Foot"){
    result.innerHTML = input*3280.84 + 'foot';
  }else if(uFrom.value == "Kilometer" && uTo.value == "Inches"){
    result.innerHTML = input*39370.1 + 'inch';
  }
  
  
  /*For meter*/
  if(uFrom.value == "Meter" && uTo.value == "Kilometer"){
    result.innerHTML = input/1000 + 'km';
  }else if(uFrom.value == "Meter" && uTo.value == "Yard"){
    result.innerHTML = input*1.09361 + 'yard';
  }else if(uFrom.value == "Meter" && uTo.value == "Foot"){
    result.innerHTML = input*3.28084 + 'foot';
  }else if(uFrom.value == "Meter" && uTo.value == "Inches"){
    result.innerHTML = input*39.3701 + 'inch';
  }
  
  /*For yard*/
  if(uFrom.value == "Yard" && uTo.value == "Kilometer"){
    result.innerHTML = input*0.0009144 + 'km';
  }else if(uFrom.value == "Yard" && uTo.value == "Meter"){
    result.innerHTML = input*0.9144 + 'm';
  }else if(uFrom.value == "Yard" && uTo.value == "Foot"){
    result.innerHTML = input*3 + 'foot';
  }else if(uFrom.value == "Yard" && uTo.value == "Inches"){
    result.innerHTML = input*36 + 'inch';
  }
  
  
  /*For foot*/
  if (uFrom.value == "Foot" && uTo.value == "Kilometer") {
    result.innerHTML = input * 0.0003048 + 'km';
  } else if (uFrom.value == "Foot" && uTo.value == "Meter") {
    result.innerHTML = input * 0.3048 + 'm';
  } else if (uFrom.value == "Foot" && uTo.value == "Yard") {
    result.innerHTML = input * 0.333333 + 'yard';
  } else if (uFrom.value == "Foot" && uTo.value == "Inches") {
    result.innerHTML = input * 12 + 'inch';
  }
  
  
    /*For inches*/
  if (uFrom.value == "Inches" && uTo.value == "Kilometer") {
    result.innerHTML = input * 2.54e-5 + 'km';
  } else if (uFrom.value == "Inches" && uTo.value == "Meter") {
    result.innerHTML = input * 0.0254 + 'm';
  } else if (uFrom.value == "Inches" && uTo.value == "Yard") {
    result.innerHTML = input * 0.0277778 + 'yard';
  } else if (uFrom.value == "Inches" && uTo.value == "Foot") {
    result.innerHTML = input * 0.0833333 + 'foot';
  }
  
  
});