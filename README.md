# TW1S7
  
Program składa się z dwóch równań parametrycznych, których punkty łączone są linią.  
Równania mają postać:
```JavaScript
let x1=sin(t*9/7)+cos(t*20/9)/10
let y1=cos(t/2)

let x2=-cos(t/7*5)
let y2=sin(t)/2+cos(t*36/7)/10
```
Są skomponowane tak, aby tworzyły jak najbardziej polirytmiczny schemat, czyli żeby  
osiągnąć jak najmniejszą powtarzalność.  
Kolory określane sa za pomocą szumu Perlina:
```JavaScript
noise(t/10)
```
