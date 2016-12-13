<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Pofc extends CI_Model{
	
	public function getAll(){
		$this->db->select('*');
		$this->db->from('pofc');
		$query = $this->db->get();
		return $query->result_array();
	}
	
	public function getPofcByIdCnfm( $idCnfm ){
		$this->db->select("DISTINCT(pofc.region),pofc.idpofc,pofc.coor_x,pofc.coor_y");
		$this->db->from("segna");
		$this->db->join("cnf_manual","cnf_manual.idcnf_manual=segna.idcnf_manual","INNER");
		$this->db->join("pofc","segna.idpofc=pofc.idpofc","INNER");
		$this->db->where("cnf_manual.idcnf_manual", $idCnfm);
		$query = $this->db->get();
		return $query->result_array();
	}
	
	/*public function getPofcByIdCnfm( $idCnfm ){
		$this->db->select('*');
		$this->db->from('segna');
		$this->db->join('pofc','segna.idpofc=pofc.idpofc','LEFT');
		$this->db->where('segna.idcnf_manual', $idCnfm);
		$query = $this->db->get();
		return $query->result_array();
	}*/
	
}
