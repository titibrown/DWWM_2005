<?php 
class A   {}

$a = 1;
$b = 2;
$c = new A();

goto aaa;

function doubler($value)
{
    $value *= 2;
}

$c = null;

doubler($a);

doubler($b);

echo $a;
echo "\n";
echo $b;



$toto = [1, 2, 3];

foreach($toto as $value) 
{ 
    echo $value;
}