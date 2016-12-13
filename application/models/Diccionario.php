<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Diccionario extends CI_Model{
	
	
	public function getPalabras( $idcnfm, $idpofc){
		$this->db->select('video.idvideo, nombre as video, palabra.idpalabra,palabra.palabra');
		$this->db->from('video');
		$this->db->join('segna','video.idvideo=segna.idvideo','INNER');
		$this->db->join('diccionario','segna.idsegna=diccionario.idsegna','INNER');
		$this->db->join('palabra','palabra.idpalabra=diccionario.idpalabra','INNER');
		$this->db->where('segna.idcnf_manual',$idcnfm);
		$this->db->where('segna.idpofc',$idpofc);
		$query = $this->db->get();
		return $query->result_array();
	}
	
	
	
}