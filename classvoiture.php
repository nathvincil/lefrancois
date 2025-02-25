<?php
class voiture{
    public $prix;
    public $nbCylindre;
    public $marque;
    public function affiche(){
 
        echo"\n je suisn une" .$this->marque. "de :".$this->nbCylindre."Cylindre et coute".$this->prix. "\n";
    }
 public function __construct(){
    $this->prix=10000;
    $this->nbCylindre=4;
    $this->marque= "bmw";
}
}
 
