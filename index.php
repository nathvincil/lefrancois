<?php
require_once "classvoiture.php"; //comme un include
/*
echo "HEllo world\n";

$toto= 4;

echo $toto . "\n";

echo $titi . "\n";

echo "\n toto=".$toto." et titi=".$titi."\n";
*/

$unBolide = new voiture();
//$unBolide-> prix= "allo"; //non fonctionnel parce que protected
$unBolide-> setPrix("allo");
$unBolide-> setPrix(5000);

$unBolide->affiche();

//echo $unBolide->prix; //non fonctionnel parce que protected
echo $unBolide->getPrix();