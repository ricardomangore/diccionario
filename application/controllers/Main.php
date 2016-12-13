<?php
defined('BASEPATH') or exit ('No direct script access allowed');

class Main extends MY_Controller{
	
	function index(){
				
		$dic_js = JS_PATH . '/diccionario.js';
		$data_styles['styles'] = array(BOOTSTRAP_CSS);
		$data_scripts['scripts'] = array(JQUERY,BOOTSTRAP_JS,$dic_js);
		$data['tittle'] = TITTLE;
		$data['content'] = $this->load->view('sign_finder',NULL,TRUE);
		$data['scripts'] = $this->load->view('scripts',$data_scripts,TRUE);
		$data['styles'] = $this->load->view('styles',$data_styles,TRUE);
		$this->load->view('layout',$data);
	}
}
