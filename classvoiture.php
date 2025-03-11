<?php
class voiture{
    //propriété
    //lorsque propriété protected seulement une methode de la class peut la modifier
    protected $prix;
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
//pour propriété il nous faut un set et un get
    public function setPrix($value){
        if (is_numeric($value)&&($value>0)){
            $this->prix=$value;
        }
    }

    public function getPrix(){
        return $this->prix;
    }
}
 
