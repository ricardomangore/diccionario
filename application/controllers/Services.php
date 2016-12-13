<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Services extends  MY_Controller{

	public function getCnfmanual($fingers){
		$this->load->model('Configuracionmanual');
		$result = $this->Configuracionmanual->getCnfManualByFingers($fingers);
		echo json_encode($result);
	}
	
	public function getPofcByIdCnfm( $id ){
		$this->load->model('Pofc');
		$result = $this->Pofc->getPofcByIdCnfm( $id );
		echo json_encode($result);
	}
	
	public function getPalabras( $idcnfm, $idpofc){
		$this->load->model('Diccionario');
		$result = $this->Diccionario->getPalabras( $idcnfm, $idpofc );
		echo json_encode($result);
	}
	
}