<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class MY_controller extends CI_Controller{
	
	
	function __construct(){
		parent::__construct();
		$this->load->config('diccionario');
		$this->load->database();
		$this->load->helper(array(
			'url'
		));
	}
	
	
}
