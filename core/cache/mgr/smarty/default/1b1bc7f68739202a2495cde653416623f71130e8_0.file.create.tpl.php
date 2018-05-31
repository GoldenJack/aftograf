<?php
/* Smarty version 3.1.31, created on 2018-05-29 18:45:10
  from "C:\server\data\htdocs\Aftograf\aftograf\manager\templates\default\resource\staticresource\create.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.31',
  'unifunc' => 'content_5b0d9fb62fd0d1_24460446',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '1b1bc7f68739202a2495cde653416623f71130e8' => 
    array (
      0 => 'C:\\server\\data\\htdocs\\Aftograf\\aftograf\\manager\\templates\\default\\resource\\staticresource\\create.tpl',
      1 => 1524072850,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5b0d9fb62fd0d1_24460446 (Smarty_Internal_Template $_smarty_tpl) {
?>
<div id="modx-panel-static-div"></div>
<div id="modx-resource-tvs-div" class="modx-resource-tab x-form-label-left x-panel"><?php echo (($tmp = @$_smarty_tpl->tpl_vars['tvOutput']->value)===null||$tmp==='' ? '' : $tmp);?>
</div>

<?php echo $_smarty_tpl->tpl_vars['onDocFormPrerender']->value;?>

<?php if ($_smarty_tpl->tpl_vars['resource']->value->richtext && $_smarty_tpl->tpl_vars['_config']->value['use_editor']) {?>
    <?php echo $_smarty_tpl->tpl_vars['onRichTextEditorInit']->value;?>

<?php }
}
}
