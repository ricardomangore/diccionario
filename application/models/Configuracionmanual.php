<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Configuracionmanual extends CI_Model{
	
	
	public function getCnfManualByFingers($fingers){
		$this->db->select('*');
		$this->db->from('cnf_manual');
		$this->db->where('dedos',$fingers);
		$query = $this->db->get();
		return $query->result_array();
	}
	
	
	
}
