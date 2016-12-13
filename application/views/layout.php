<!DOCTYPE html>
<html>
	<head>
		<title><?php if(isset($tittle)) echo $tittle; ?></title>
		<?php if(isset($styles)) echo $styles; ?>
		<?php if(isset($scripts)) echo $scripts; ?>
	</head>
	<body>
		<?php if(isset($navbar)) echo $navbar; ?>
		<?php if(isset($content)) echo $content; ?>
		<?php if(isset($footer)) echo $footer; ?>
	</body>
</html>