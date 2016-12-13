<?php foreach($scripts as $script): ?>
	<?php if(isset($script)): ?>
		<script type="text/javascript" src="<?php echo $script; ?>"></script>
	<?php endif ?>
<?php endforeach ?>