<?php
/* Smarty version 3.1.31, created on 2018-05-29 18:38:42
  from "C:\server\data\htdocs\Aftograf\aftograf\manager\templates\default\element\tv\renders\input\email.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.31',
  'unifunc' => 'content_5b0d9e323333d4_54156490',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '8c0e6a4c7588bad96f5491bc6840f00d9f7a8ad3' => 
    array (
      0 => 'C:\\server\\data\\htdocs\\Aftograf\\aftograf\\manager\\templates\\default\\element\\tv\\renders\\input\\email.tpl',
      1 => 1524072850,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5b0d9e323333d4_54156490 (Smarty_Internal_Template $_smarty_tpl) {
?>
<input id="tv<?php echo $_smarty_tpl->tpl_vars['tv']->value->id;?>
" name="tv<?php echo $_smarty_tpl->tpl_vars['tv']->value->id;?>
"
	type="text" class="textfield"
	value="<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['tv']->value->get('value'), ENT_QUOTES, 'UTF-8', true);?>
"
	<?php echo $_smarty_tpl->tpl_vars['style']->value;?>

	tvtype="<?php echo $_smarty_tpl->tpl_vars['tv']->value->type;?>
"
/>

<?php echo '<script'; ?>
 type="text/javascript">
// <![CDATA[

Ext.onReady(function() {
    var fld = MODx.load({
    
        xtype: 'textfield'
        ,applyTo: 'tv<?php echo $_smarty_tpl->tpl_vars['tv']->value->id;?>
'
        ,width: 400
        ,vtype: 'email'
        ,enableKeyEvents: true
        ,msgTarget: 'under'
        ,allowBlank: <?php if ($_smarty_tpl->tpl_vars['params']->value['allowBlank'] == 1 || $_smarty_tpl->tpl_vars['params']->value['allowBlank'] == 'true') {?>true<?php } else { ?>false<?php }?>
        <?php if ($_smarty_tpl->tpl_vars['params']->value['maxLength'] != '' && $_smarty_tpl->tpl_vars['params']->value['maxLength'] > 0) {
if ($_smarty_tpl->tpl_vars['params']->value['minLength'] != '' && $_smarty_tpl->tpl_vars['params']->value['minLength'] >= 0 && $_smarty_tpl->tpl_vars['params']->value['maxLength'] > $_smarty_tpl->tpl_vars['params']->value['minLength']) {?>,maxLength: <?php echo sprintf("%d",$_smarty_tpl->tpl_vars['params']->value['maxLength']);
}?> <?php }?> 
        <?php if ($_smarty_tpl->tpl_vars['params']->value['minLength'] != '' && $_smarty_tpl->tpl_vars['params']->value['minLength'] >= 0) {?>,minLength: <?php echo sprintf("%d",$_smarty_tpl->tpl_vars['params']->value['minLength']);
}?> 
    
        ,listeners: { 'keydown': { fn:MODx.fireResourceFormChange, scope:this}}
    });
    MODx.makeDroppable(fld);
    Ext.getCmp('modx-panel-resource').getForm().add(fld);
});

// ]]>
<?php echo '</script'; ?>
>
<?php }
}
