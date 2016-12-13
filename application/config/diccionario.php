<?php 
 defined('BASEPATH') or exit ('No direct script access allowed');


 $config['diccionario_version'] = '1.0.0';


 //Definición de constantes

 $CI = & get_instance();

 $CI->load->helper('url');

 

 //PATHS y URL's
 define('BASE_URL', base_url());
 define('BOOTSTRAP_CSS', BASE_URL . 'assets/bootstrap/css/bootstrap.min.css');
 define('BOOTSTRAP_JS', BASE_URL . 'assets/bootstrap/js/bootstrap.min.js');
 define('JQUERY', BASE_URL . 'assets/js/jquery.js');
 define('CANVAS', BASE_URL . 'assets/js/canvas.js');
 define('JS_PATH', BASE_URL . 'assets/js');
 define('CSS_PATH', BASE_URL . 'assets/css');
 define('IMAGES', BASE_URL . 'assets/images');
 //Constantes del sistema
 define('TITTLE', 'Diccionario LSM');
 
 
 